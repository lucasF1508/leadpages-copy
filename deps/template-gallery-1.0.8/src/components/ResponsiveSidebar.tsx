import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Drawer, AppBar, Grid, Typography, Button, Slide } from '@material-ui/core';
import clsx from 'clsx';

import { TaxonSection, TemplateKind } from '../types/mandrel';

import { isScrollbarVisible, getBrowserScrollbarWidth } from '../lib/scroll-helpers';
import { TemplateActionCreators, TemplateState } from '../hooks/useTemplateState';
import FilterSidebar from './FilterSidebar';
import SidebarToggle from './SidebarToggle';

const sidebarWidth = 312;
const sidebarWidthDesktop = 250;
const zIndex = 1600;
const appBarHeight = 56;
const SCROLLBAR_WIDTH = getBrowserScrollbarWidth();
const duration = 350;

const excludedSections = [TaxonSection['Page Types'], TaxonSection.Collections];

type UseStylesProps = {
  drawerPosition: string;
  hasScrollbar: boolean;
  open: boolean;
};

const useStyles = makeStyles(
  ({ breakpoints, palette, transitions, spacing }) => ({
    header: ({ drawerPosition }: UseStylesProps) => ({
      backgroundColor: palette.primary.contrastText,
      boxShadow: 'none',
      color: palette.grey[100],
      borderBottom: '1px solid #D6DCE8',
      width: '100%',
      zIndex,
      [breakpoints.up(480)]: {
        width: sidebarWidth,
      },
      [breakpoints.up(1025)]: {
        display: 'none',
      },
      ...(drawerPosition === 'left' ? { left: 0 } : { right: 0 }),
    }),
    headerInner: {
      height: `${appBarHeight - 1}px`,
      paddingLeft: spacing(4),
      paddingRight: spacing(1.5),
    },
    headerTitle: {
      fontWeight: 'bold',
    },
    divider: {
      borderBottom: '1px solid #D6DCE8',
      margin: '12px 20px',
    },
    drawer: () => ({
      width: 0,
      flexShrink: 0,
    }),
    drawerPaper: ({ hasScrollbar }: UseStylesProps) => ({
      paddingRight: hasScrollbar ? -1 * SCROLLBAR_WIDTH : 0,
      width: '100%',
      top: `${appBarHeight}px`,
      [breakpoints.up(480)]: {
        width: sidebarWidth,
      },
      zIndex,
    }),
    drawerDesktop: ({ open, hasScrollbar }: UseStylesProps) => ({
      position: 'sticky',
      marginRight: 16,
      width: sidebarWidthDesktop,
      flexShrink: 0,
      transition: transitions.create('opacity', {
        easing: transitions.easing.easeOut,
        duration,
      }),
      opacity: open ? 1 : 0,
      paddingRight: hasScrollbar ? -1 * SCROLLBAR_WIDTH : 0,
    }),
    drawerPaperDesktop: {
      position: 'initial',
      width: sidebarWidthDesktop,
      backgroundColor: 'inherit',
      borderRight: 'none',
      overflow: 'hidden',
      '&:hover': {
        overflowY: 'auto',
      },
    },
    paperAnchorRight: {
      border: 'none',
    },
    list: ({ hasScrollbar }: UseStylesProps) => ({
      paddingTop: spacing(1.5),
      paddingRight: !hasScrollbar ? `${SCROLLBAR_WIDTH}px` : 0,
      [breakpoints.up(1025)]: {
        paddingTop: 0,
      },
    }),
  }),
  { classNamePrefix: 'ResponsiveSidebar' },
);

interface ResponsiveSidebarProps {
  state: TemplateState;
  actions: TemplateActionCreators;
  kind: TemplateKind;
  drawerPaperRef: React.MutableRefObject<HTMLDivElement>;
  sidebarButtonRef?: React.MutableRefObject<HTMLButtonElement | null>;
  drawerClass?: string;
  drawerPaperClass?: string;
  sidebarButtonClass?: string;
}

const ResponsiveSidebar: React.FC<ResponsiveSidebarProps> = ({
  state,
  actions,
  kind,
  drawerClass,
  drawerPaperClass,
  drawerPaperRef,
  sidebarButtonRef,
  sidebarButtonClass,
}) => {
  // Check window.innerWidth over useMediaQuery here so that we have the result on the first render, before the hook has fired
  // Resize handlers below ensure that this check is run often enough
  const above1024Breakpoint = window.innerWidth > 1024;

  const drawerPosition = above1024Breakpoint ? 'left' : 'right';
  const [hasScrollbar, setHasScrollbar] = useState(false);
  const [listItemWidth, setListItemWidth] = useState(0);
  const classes = useStyles({ hasScrollbar, open: state.ui.sidebarOpen, drawerPosition });
  const frame = useRef(0);
  const prevScrollHeight = useRef(0);

  useEffect(() => {
    // Using a percentage based width for list items in the sidebar is inadequate because it causes a flickering
    // as we adjust the right padding of the parent to accomodate a scrollbar. Use a defined width for middle and lg breakpoints, and otherwise
    // rely on the window innerWidth adjusting for margins.
    const handleResize = () => {
      setHasScrollbar(isScrollbarVisible(drawerPaperRef.current));
      if (window.innerWidth < 480) {
        setListItemWidth(window.innerWidth - 40);
      } else if (window.innerWidth < 1025) {
        setListItemWidth(272);
      } else {
        setListItemWidth(215);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [drawerPaperRef]);

  const handleScrollHeightChange = () => {
    const currentScrollHeight = drawerPaperRef.current.scrollHeight;

    if (currentScrollHeight !== prevScrollHeight.current) {
      setHasScrollbar(isScrollbarVisible(drawerPaperRef.current));
      prevScrollHeight.current = currentScrollHeight;
    }

    frame.current = requestAnimationFrame(handleScrollHeightChange);
  };

  const onSectionTransitionStart = () => {
    cancelAnimationFrame(frame.current);
    // eslint-disable-next-line no-param-reassign
    frame.current = requestAnimationFrame(handleScrollHeightChange);
  };

  const onSectionTransitionEnd = () => {
    cancelAnimationFrame(frame.current);
  };

  useEffect(() => {
    if (state.ui.sidebarOpen && !above1024Breakpoint) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [state.ui.sidebarOpen, above1024Breakpoint]);

  // Copy of logic used for determining whether or not to show drawer transition.
  // We use this state is order to skip the appear transition during the
  // initial mount of the fixed header component.
  const slideMounted = useRef(false);
  useEffect(() => {
    slideMounted.current = true;
  }, []);

  return (
    <>
      {above1024Breakpoint && !state.ui.sidebarOpen && (
        <SidebarToggle
          isOpen={false}
          onToggleSidebar={actions.onToggleSidebar}
          buttonRef={sidebarButtonRef}
          buttonClassName={sidebarButtonClass}
        />
      )}
      <Slide
        in={state.ui.sidebarOpen}
        direction={drawerPosition === 'left' ? 'right' : 'left'}
        timeout={duration}
        appear={slideMounted.current}
      >
        <AppBar position="fixed" className={classes.header}>
          <div style={{ paddingRight: `${SCROLLBAR_WIDTH}px` }}>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              className={classes.headerInner}
            >
              <Typography className={classes.headerTitle}>Filters</Typography>
              <Button size="small" onClick={actions.onToggleSidebar}>
                Done
              </Button>
            </Grid>
          </div>
        </AppBar>
      </Slide>
      <Drawer
        className={clsx(above1024Breakpoint ? classes.drawerDesktop : classes.drawer, drawerClass)}
        classes={{
          paper: clsx(
            above1024Breakpoint ? classes.drawerPaperDesktop : classes.drawerPaper,
            drawerPaperClass,
          ),
          paperAnchorDockedRight: classes.paperAnchorRight,
        }}
        variant="persistent"
        anchor={drawerPosition}
        transitionDuration={duration}
        open={state.ui.sidebarOpen}
        PaperProps={{ ref: drawerPaperRef }}
      >
        {above1024Breakpoint && state.ui.sidebarOpen && (
          <SidebarToggle onToggleSidebar={actions.onToggleSidebar} isOpen />
        )}
        <FilterSidebar
          taxons={state.taxons}
          currentFilters={state.filters}
          onUpdateCategory={(option) => actions.onUpdateCategory(option)}
          onUpdateTag={(option) => actions.onUpdateTag(option)}
          onSortSelect={(option) => actions.onUpdateOrderBy(option)}
          onClearFilter={actions.onClearFilters}
          excludedSections={kind === TemplateKind.Site ? excludedSections : undefined}
          selectedTaxon={state.ui.selectedTaxon}
          onSectionTransitionStart={onSectionTransitionStart}
          onSectionTransitionEnd={onSectionTransitionEnd}
          listClass={classes.list}
          listItemWidth={listItemWidth}
          expandedSection={
            kind === TemplateKind.Site ? TaxonSection.Industries : TaxonSection['Page Types']
          }
        />
      </Drawer>
      <style type="text/css">
        {`
          .no-scroll {
            overflow: hidden;
          }
    `}
      </style>
    </>
  );
};

export default ResponsiveSidebar;
