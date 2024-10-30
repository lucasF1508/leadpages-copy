import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import Backdrop from '@material-ui/core/Backdrop'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Slide from '@material-ui/core/Slide'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import { VSTypography } from '@lp/ui'
import debounce from 'lodash/debounce'
import {
  useInfiniteScrollRef,
  Gallery,
  SearchAndResults,
  TemplateThumbnail,
  NoResults,
  ResponsiveSidebar,
  useTemplateState,
} from '@lp/template-gallery'

import {
  baseFilters,
  templatesBaseUrl,
  TemplateState,
  TemplateActions,
  TemplateKind,
} from '@legacy/constants/templates'

import tracker from '@legacy/components/templates/tracker'
import { useNavStore } from '@components/Nav/NavStore'

const stickyHeaderZIndex = 1501
const sidebarWidth = 250

const galleryPadding = 24
const sidebarPaddingTop = 28
const sidebarFixedTopResponsive = 56
const sidebarAbsoluteTop = 0
const sidebarFixedTopDesktop = 60

const useStyles = makeStyles(
  ({ breakpoints, spacing, transitions, palette }) => ({
    appBar: {
      zIndex: stickyHeaderZIndex,
      boxShadow: 'none',
    },
    toolbar: {
      minHeight: 'unset !important',
    },
    tabContainer: {
      minHeight: `${sidebarFixedTopDesktop}px`,
    },
    tabLink: {
      textAlign: 'center',
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: '1.75rem',
      color: palette.text.primary,
      opacity: 0.35,
      cursor: 'pointer',
      textDecoration: 'none',
      paddingBottom: '0.5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      marginTop: 'auto',
      marginLeft: '0.5rem',
      marginRight: '0.5rem',
      borderBottom: '3px solid #fff',
      '&:hover': {
        opacity: 1,
      },
      '&.active-template': {
        opacity: 1,
        color: palette.primary.main,
        borderBottom: `3px solid ${palette.primary.main}`,
      },
    },
    searchBox: {
      [breakpoints.up(1025)]: {
        marginBottom: spacing(3),
      },

      '& input.MuiFilledInput-inputMarginDense': {
        paddingTop: '8px !important',
        paddingBottom: '8px !important',
      },

      '& .search-and-results .MuiButton-root > .MuiButton-label > .MuiTypography-root':
        {
          color: '#fff',
        },
    },
    noResultSubtitle: {
      marginTop: spacing(1),
      marginBottom: spacing(4.5),
      color: palette.secondary.contrastText,
    },
    sidebarToggleOpen: {
      top: '32px',
    },
    sidebarToggleClosed: {
      visibility: 'hidden',
    },
    drawerClass: {
      [breakpoints.up(1025)]: {
        marginTop: galleryPadding * -1,
        marginLeft: galleryPadding * -1,
        top: sidebarFixedTopDesktop,
      },
    },
    drawerPaperClass: {
      [breakpoints.up(1025)]: {
        paddingTop: sidebarPaddingTop,
      },
    },
    sidebarButtonClass: {
      top: `${sidebarFixedTopDesktop + galleryPadding}px`,
      marginLeft: '-8px',
    },
    galleryRoot: {
      padding: galleryPadding,
      backgroundColor: 'rgb(247, 247, 247)',
      position: 'relative',
      minHeight: '100vh',
    },
    gallery: {
      flexGrow: 1,
      transition: transitions.create('margin', {
        easing: 'cubic-bezier(0.4, 0, 0.2, .5)',
        duration: 350,
      }),
      [breakpoints.up(1025)]: {
        marginLeft: -sidebarWidth + 50,
      },
      willChange: 'transform',
    },
    galleryShift: {
      transition: transitions.create('margin', {
        easing: 'cubic-bezier(0, 0, 0.2, 1)',
        duration: 350,
      }),
      marginLeft: 0,
    },
    backdrop: {
      zIndex: stickyHeaderZIndex + 1, // Need the overlay to cover any sticky elements
      color: palette.grey[100],
      opacity: '20%',
    },
    scrollButton: {
      width: 56,
      height: 56,
      boxShadow: '0 10px 20px -5px rgba(0,0,0,0.32)',
      position: 'fixed',
      bottom: '16px',
      right: '8px',
      backgroundColor: palette.primary.contrastText,
      opacity: 0,
      transition: transitions.create('opacity', {
        easing: transitions.easing.easeOut,
        duration: 350,
      }),

      '&:hover': {
        backgroundColor: 'white',
      },
    },
  }),
  { classNamePrefix: 'TemplateGallery' }
)

const isAbove1024Breakpoint = () => {
  try {
    return window.innerWidth > 1024
  } catch {
    return true
  }
}

const getQueryStringFromPath = (url) => url.split('?').slice(1).join('')

export const getCategoryFromPath = (currentPath) => {
  const queryStringFromPath = getQueryStringFromPath(currentPath)
  const category = currentPath?.split('category/')[1]?.split('?')[0]

  const queryString = [
    category && `categories=${category}`,
    queryStringFromPath,
  ]
    .filter(Boolean)
    .join('&')

  return queryString
}

const Templates = ({
  kind,
  onPreviewTemplate,
  isPreviewing,
  setCurrentURL,
  setPreviousURL,
}) => {
  const router = useRouter()
  const currentPath = router.asPath
  const queryString = useRef(getCategoryFromPath(currentPath))
  const firstLoad = useRef(true)
  const setHideNav = useNavStore((state) => state.setHideNav)

  const onUpdateQueryString = (urlParams) => {
    if (firstLoad.current && urlParams === 'order_by=-release_date') {
      return
    }

    firstLoad.current = false

    setPreviousURL(window.location.pathname)
    const basePath = window.location.pathname.split('/category/')[0]
    const params = new URLSearchParams(urlParams)

    const category = params.get('categories')
    params.delete('categories')

    const path = [
      basePath,
      category && `/category/${category}`,
      '?',
      params.toString(),
    ]
      .filter(Boolean)
      .join('')

    window.history.pushState({ ...window.history.state, as: path }, '', path)
    setCurrentURL(path)
  }

  const [state, actions] = useTemplateState({
    kind,
    baseUrl: templatesBaseUrl,
    baseFilters,
    hideSidebar: false,
    tracker,
    onUpdateQueryString,
    queryString: queryString.current,
  })

  const augmentedActions = {
    ...actions,
    onUpdateCategory: (input) => {
      actions.onUpdateCategory(input)
    },
    onUpdateSearchInput: (input) => {
      actions.onUpdateSearchInput(input)
    },
    onUpdateTag: (input) => {
      actions.onUpdateTag(input)
    },
    onUpdateOrderBy: (input) => {
      actions.onUpdateOrderBy(input)
    },
  }

  const above1024Breakpoint = isAbove1024Breakpoint()
  const containerRef = useRef()
  const drawerPaperRef = useRef()
  const sidebarButtonRef = useRef()

  const showAppBarRef = useRef(false)
  const [showAppBar, setShowAppBar] = useState(false)

  const showScrollTopRef = useRef(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  const isInitialPreview = currentPath.includes('preview')

  const classes = useStyles({ sidebarOpen: state.ui.sidebarOpen })

  const getGalleryTop = () =>
    (containerRef.current?.getBoundingClientRect()?.top || 0) -
    sidebarPaddingTop -
    galleryPadding

  const setPositionResponsive = () => {
    if (showAppBarRef.current) {
      setShowAppBar(false)
      setHideNav(false)
      showAppBarRef.current = false
    }

    const shouldShowScrollTop = getGalleryTop() < 0
    if (showScrollTopRef.current !== shouldShowScrollTop) {
      setShowScrollToTop(shouldShowScrollTop)
      showScrollTopRef.current = shouldShowScrollTop
    }

    drawerPaperRef.current.style.position = 'fixed'
    drawerPaperRef.current.style.top = `${sidebarFixedTopResponsive}px`
    drawerPaperRef.current.style.height = `calc(100vh - ${sidebarFixedTopResponsive}px)`
    drawerPaperRef.current.style.maxHeight = 'unset'
    if (sidebarButtonRef.current) {
      sidebarButtonRef.current.style.visibility = 'hidden'
    }
  }

  const setPositionDesktop = (rect) => {
    const shouldShowAppBar = rect.top <= sidebarFixedTopDesktop

    if (showAppBarRef.current !== shouldShowAppBar) {
      setShowAppBar(shouldShowAppBar)
      setHideNav(shouldShowAppBar)
      showAppBarRef.current = shouldShowAppBar
    }

    if (showScrollTopRef.current) {
      setShowScrollToTop(false)
      showScrollTopRef.current = false
    }

    // If the fixed header is visible, the sidebar menu becomes independently scrollable
    if (shouldShowAppBar) {
      const bottom =
        rect.bottom + window.pageYOffset - sidebarPaddingTop - galleryPadding
      const pageBottom = window.innerHeight + window.pageYOffset

      let offsetTop = sidebarFixedTopDesktop
      const diff = pageBottom - bottom
      // When the sticky sidebar reaches the end of the viewport, the sticky behavior stops.
      // We need to adjust the inner content accordingly, so that it remains fixed below the app bar
      if (diff > 0) {
        offsetTop += diff
        drawerPaperRef.current.style.top = `${sidebarAbsoluteTop}px`
        drawerPaperRef.current.style.height = `calc(100vh - ${
          offsetTop - sidebarPaddingTop
        }px)`
        drawerPaperRef.current.style.position = 'absolute'
        // Do not show the menu when it would be less than 300px tall
        const shouldHide = window.innerHeight - offsetTop < 300
        drawerPaperRef.current.style.visibility = shouldHide
          ? 'hidden'
          : 'visible'
        if (sidebarButtonRef.current) {
          sidebarButtonRef.current.style.visibility = shouldHide
            ? 'hidden'
            : 'visible'
        }
      } else {
        drawerPaperRef.current.style.top = `${sidebarFixedTopDesktop}px`
        drawerPaperRef.current.style.visibility = 'visible'
        drawerPaperRef.current.style.position = 'initial'
        if (sidebarButtonRef.current) {
          sidebarButtonRef.current.style.visibility = 'visible'
        }
        drawerPaperRef.current.style.height = `calc(100vh - ${
          offsetTop + sidebarPaddingTop
        }px)`
      }
    } else {
      drawerPaperRef.current.style.top = `${sidebarFixedTopDesktop}px`
      drawerPaperRef.current.style.height = '100%'
      drawerPaperRef.current.style.maxHeight = 'unset'
      drawerPaperRef.current.style.position = 'initial'
    }
  }

  // Do not allow sidebar checks to fire when the preview is overlaid
  // On popstate, the browser emits some scolling events that can interfere
  // with the visual state.
  const enableSidebarListeners = useRef(true)
  const handlePreview = (t) => {
    enableSidebarListeners.current = false
    onPreviewTemplate(t, document.documentElement.scrollTop)
  }

  const setSidebarPosition = () => {
    window.requestAnimationFrame(() => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect || !drawerPaperRef.current || !enableSidebarListeners.current) {
        return
      }

      if (window.innerWidth > 1024) {
        setPositionDesktop(rect)
      } else {
        // At 1024 and below, fixed menu overlays all other content
        setPositionResponsive(rect)
      }
    })
  }

  useEffect(() => {
    if (!isPreviewing) {
      enableSidebarListeners.current = true
    } else {
      setSidebarPosition()
    }
  }, [isPreviewing])

  useEffect(() => {
    const debouncedSetSidebarPosition = debounce(setSidebarPosition, 100)
    const doScroll = (e) => {
      if (e.target === document) {
        setSidebarPosition()
      }
    }

    const debouncedDoScroll = debounce(doScroll, 10)
    window.addEventListener('scroll', debouncedDoScroll, true)
    window.addEventListener('resize', debouncedSetSidebarPosition, true)

    return () => {
      window.removeEventListener('scroll', debouncedDoScroll, true)
      window.removeEventListener('resize', debouncedSetSidebarPosition, true)
    }
  }, [])

  useLayoutEffect(() => {
    setSidebarPosition()
  }, [state.templates, state.ui.sidebarOpen])

  useEffect(() => {
    if (!state.ui.hasLoaded) {
      augmentedActions.init()
    }
  }, [state.ui.hasLoaded, augmentedActions])

  useEffect(() => {
    if (isInitialPreview) {
      const path =
        kind === TemplateKind.LandingPage ? '/templates' : '/website-templates'
      setCurrentURL(path)
    }
  }, [isInitialPreview])

  const hasCheckedRef = useRef(false)
  useEffect(() => {
    if (!hasCheckedRef.current) {
      if (window.innerWidth <= 1024 && state.ui.sidebarOpen) {
        augmentedActions.onToggleSidebar()

        // Responsive sidebar is closed by default
        // Allow a moment for state to propagate prior to mounting it
        setTimeout(() => {
          hasCheckedRef.current = true
        }, 100)
      } else {
        hasCheckedRef.current = true
      }
    }
  }, [augmentedActions, state.ui.sidebarOpen])

  // Needs a gigantic scroll threshold to ensure sidebar does not become overlayed onto footer
  const infiniteRef = useInfiniteScrollRef(state, augmentedActions, 4000)

  // eslint-disable-next-line no-param-reassign
  state.getScrollTopRef.current = () =>
    (containerRef.current?.getBoundingClientRect()?.top || 0) -
    sidebarPaddingTop -
    galleryPadding

  const onScrollToTop = () => {
    const top = state.getScrollTopRef.current() + window.pageYOffset
    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }

  const activeWebsiteLink = currentPath.includes('/website-templates')
    ? ' active-template'
    : ''
  const activeLandingPageLink = currentPath.includes('/templates')
    ? ' active-template'
    : ''

  return (
    <div ref={containerRef}>
      <Backdrop
        className={classes.backdrop}
        open={state.ui.sidebarOpen && !above1024Breakpoint}
      />
      <Slide appear={hasCheckedRef.current} direction="down" in={showAppBar}>
        <AppBar color="inherit" classes={{ root: classes.appBar }}>
          <Toolbar classes={{ root: classes.toolbar }}>
            <Grid
              className={classes.tabContainer}
              container
              justifyContent="center"
            >
              <Link href="/templates">
                <a className={`${classes.tabLink}${activeLandingPageLink}`}>
                  Landing Pages
                </a>
              </Link>
              <Link href="/website-templates">
                <a className={`${classes.tabLink}${activeWebsiteLink}`}>
                  Websites
                </a>
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>
      </Slide>

      <Box className={classes.galleryRoot}>
        <IconButton
          style={{
            opacity: showScrollToTop ? 1 : 0,
            zIndex: showScrollToTop ? 1201 : -1,
          }}
          className={classes.scrollButton}
          onClick={onScrollToTop}
        >
          <ArrowUpward />
        </IconButton>
        <Grid container wrap="nowrap">
          <Grid item>
            {(above1024Breakpoint || hasCheckedRef.current) && (
              <ResponsiveSidebar
                state={state}
                actions={augmentedActions}
                kind={kind}
                drawerPaperRef={drawerPaperRef}
                sidebarButtonRef={sidebarButtonRef}
                drawerClass={classes.drawerClass}
                drawerPaperClass={classes.drawerPaperClass}
                sidebarButtonClass={classes.sidebarButtonClass}
              />
            )}
          </Grid>
          <Grid
            item
            className={clsx(classes.gallery, {
              [classes.galleryShift]: state.ui.sidebarOpen,
            })}
          >
            <Box position="relative">
              <Box
                className={classes.searchBox}
                width="100%"
                minHeight="36px"
                display="flex"
              >
                <SearchAndResults
                  inputRef={state.searchInputRef}
                  onChange={augmentedActions.onUpdateSearchInput}
                  numTemplates={state.templates.length}
                  onClearFilters={augmentedActions.onClearFilters}
                  onClearInput={augmentedActions.onClearSearchInput}
                  filter={state.ui.selectedTaxon?.label}
                  disableSearch={!state.ui.hasLoaded}
                  onToggleSidebar={augmentedActions.onToggleSidebar}
                  className="search-and-results"
                />
              </Box>
              <Gallery infiniteRef={infiniteRef}>
                {state.ui.hasLoaded && state.templates.length < 1 && (
                  <NoResults clearSearch={augmentedActions.onResetSearch}>
                    <VSTypography variant="h3" component="h2">
                      No results
                    </VSTypography>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      className={classes.noResultSubtitle}
                    >
                      Try adjusting your search and filters to find what you’re
                      looking for.
                    </Typography>
                  </NoResults>
                )}
                {state.templates.map((template) => (
                  <TemplateThumbnail
                    key={template.ui.guid}
                    template={template}
                    onPreviewTemplate={handlePreview}
                    previewButtonText="View"
                  />
                ))}
              </Gallery>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

Templates.propTypes = {
  actions: TemplateActions.isRequired,
  state: TemplateState.isRequired,
  kind: PropTypes.oneOf([TemplateKind.LandingPage, TemplateKind.Site])
    .isRequired,
  onPreviewTemplate: PropTypes.func.isRequired,
  isPreviewing: PropTypes.bool.isRequired,
  setCurrentURL: PropTypes.func.isRequired,
  setPreviousURL: PropTypes.func.isRequired,
}

export default Templates
