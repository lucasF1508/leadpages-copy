import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Box, Grid, Typography, Backdrop, useMediaQuery, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { VSTypography } from '@lp/ui';
import useTemplateState from './hooks/useTemplateState';
import useInfiniteScrollRef from './hooks/useInfiniteScrollRef';
import Gallery from './components/Gallery';
import SearchAndResults from './components/SearchAndResults';
import TemplateThumbnail from './components/TemplateThumbnail';
import { FilterOperators, FilterProps, TemplateKind } from './types/mandrel';
import { UiTemplate } from './lib/template-ui-helpers';
import NoResults from './components/NoResults';
import ResponsiveSidebar from './components/ResponsiveSidebar';

const baseFilters = {
  [FilterProps.categories]: {
    operator: FilterOperators['!intersects'],
    value: 'incentive,blank,build-with-me',
  },
  [FilterProps.limit]: {
    operator: FilterOperators.empty,
    value: 24,
  },
};

const sidebarWidth = 250;
const duration = 350;

const useStyles = makeStyles(
  ({ breakpoints, spacing, transitions, palette, zIndex }) => ({
    searchBox: {
      [breakpoints.up(1025)]: {
        marginBottom: spacing(3),
      },
    },
    noResultSubtitle: {
      marginTop: spacing(1),
      marginBottom: spacing(4.5),
      color: palette.secondary.contrastText,
    },
    gallery: {
      flexGrow: 1,
      transition: transitions.create('margin', {
        easing: 'cubic-bezier(0.4, 0, 0.2, .5)',
        duration,
      }),
      [breakpoints.up(1025)]: {
        marginLeft: -sidebarWidth + 50,
      },
    },
    galleryShift: {
      transition: transitions.create('margin', {
        easing: 'cubic-bezier(0, 0, 0.2, 1)',
        duration,
      }),
      marginLeft: 0,
      paddingTop: 12,
    },
    sidebarToggleClosed: {
      visibility: 'hidden',
    },
    drawerClass: {
      [breakpoints.up(1025)]: {
        top: 12,
      },
    },
    drawerPaperClass: {
      [breakpoints.up(1025)]: {
        maxHeight: 'calc(100vh - 68px)', // Subtract the header space from the entire viewport
        marginLeft: -24,
      },
    },
    sidebarButtonClass: {
      top: 12,
      marginLeft: '-8px',
    },
    backdrop: {
      zIndex: zIndex.drawer - 1,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      color: (palette as any).greyTransparent[20],
    },
  }),
  { classNamePrefix: 'MarketingStory' },
);

type TemplateGalleryProps = {
  kind: TemplateKind;
  onPreviewTemplate: (template: UiTemplate) => void;
};

const TemplateGallery: React.FC<TemplateGalleryProps> = ({ kind, onPreviewTemplate }) => {
  const above1024Breakpoint = useMediaQuery((theme: Theme) => theme.breakpoints.up(1025));
  const baseUrl = process.env.STORYBOOK_MANDREL_BASE_URL;
  const galleryTopRef = useRef<HTMLDivElement>(null);
  const drawerPaperRef = useRef<HTMLDivElement>(null);
  const sidebarButtonRef = useRef<HTMLButtonElement>(null);

  const [state, actions] = useTemplateState({
    kind,
    baseUrl,
    baseFilters,
    hideSidebar: window.innerWidth <= 1024,
  });

  // Subtract -16 to account for padding
  state.getScrollTopRef.current = () => galleryTopRef.current?.getBoundingClientRect()?.top - 16;
  const { sidebarOpen } = state.ui;
  const classes = useStyles({ sidebarOpen });

  useEffect(() => {
    if (!state.ui.hasLoaded) {
      actions.init();
    }
  }, [state.ui.hasLoaded, actions]);

  const infiniteRef = useInfiniteScrollRef(state, actions);

  return (
    <Box padding="8px">
      <Box>
        <Typography variant="h1" align="center">
          Template Gallery
        </Typography>
      </Box>
      <Backdrop className={classes.backdrop} open={sidebarOpen && !above1024Breakpoint} />
      <Grid container wrap="nowrap">
        <Grid item>
          <ResponsiveSidebar
            state={state}
            actions={actions}
            kind={kind}
            drawerPaperRef={drawerPaperRef}
            sidebarButtonRef={sidebarButtonRef}
            drawerClass={classes.drawerClass}
            drawerPaperClass={classes.drawerPaperClass}
            sidebarButtonClass={classes.sidebarButtonClass}
          />
        </Grid>
        <Grid
          item
          className={clsx(classes.gallery, { [classes.galleryShift]: state.ui.sidebarOpen })}
          ref={galleryTopRef}
        >
          <Box position="relative">
            <Box className={classes.searchBox} width="100%" minHeight="36px" display="flex">
              <SearchAndResults
                inputRef={state.searchInputRef}
                onChange={actions.onUpdateSearchInput}
                numTemplates={state.templates.length}
                onClearFilters={actions.onClearFilters}
                onClearInput={actions.onClearSearchInput}
                filter={state.ui.selectedTaxon?.label}
                disableSearch={!state.ui.hasLoaded}
                onToggleSidebar={actions.onToggleSidebar}
              />
            </Box>
            <Gallery infiniteRef={infiniteRef}>
              {state.ui.hasLoaded && state.templates.length < 1 && (
                <NoResults clearSearch={actions.onResetSearch}>
                  <VSTypography variant="h3" component="h2">
                    No results
                  </VSTypography>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    className={classes.noResultSubtitle}
                  >
                    Try adjusting your search and filters to find what you’re looking for.
                  </Typography>
                </NoResults>
              )}
              {state.templates.map((template) => (
                <TemplateThumbnail
                  key={template.ui.guid}
                  template={template}
                  onPreviewTemplate={onPreviewTemplate}
                />
              ))}
            </Gallery>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default {
  title: 'Marketing',
};

const StoryTemplate = (args: TemplateGalleryProps) => (
  <TemplateGallery kind={args.kind} onPreviewTemplate={args.onPreviewTemplate} />
);

export const LandingPageGallery = StoryTemplate.bind({});
LandingPageGallery.storyName = 'Landing Pages';
LandingPageGallery.args = {
  kind: TemplateKind.Leadpage,
  onPreviewTemplate: () => {},
};

export const SiteGallery = StoryTemplate.bind({});
SiteGallery.args = {
  kind: TemplateKind.Site,
  onPreviewTemplate: () => {},
};
SiteGallery.storyName = 'Sites';
