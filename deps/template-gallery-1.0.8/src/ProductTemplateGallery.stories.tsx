import React, { useEffect, useRef } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useTemplateState from './hooks/useTemplateState';
import useInfiniteScrollRef from './hooks/useInfiniteScrollRef';
import Gallery from './components/Gallery';
import SearchAndResults from './components/SearchAndResults';
import TemplateThumbnail from './components/TemplateThumbnail';
import {
  FilterProps,
  SortFields,
  TaxonSection,
  TemplateKind,
  FilterOperators,
} from './types/mandrel';
import { UiTemplate } from './lib/template-ui-helpers';
import FilterSidebar from './components/FilterSidebar';
import NoResults from './components/NoResults';

const excludedSections = [TaxonSection['Page Types'], TaxonSection.Collections];

const baseFilters = {
  [FilterProps.categories]: {
    operator: FilterOperators['!contains'],
    value: 'incentive',
  },
  [FilterProps.order_by]: {
    operator: FilterOperators.empty,
    value: SortFields.Conversion,
  },
  [FilterProps.limit]: {
    operator: FilterOperators.empty,
    value: 24,
  },
};

const orderByList = [
  { value: SortFields.Conversion, label: 'Highest Converting' },
  { value: SortFields.Popular, label: 'Most Popular' },
  { value: SortFields.New, label: 'Newest' },
];

const sidebarWidth = 250;

const useStyles = makeStyles(
  ({ breakpoints, spacing }) => ({
    searchAndResults: {
      [breakpoints.up('md')]: {
        marginBottom: spacing(1.5),
        marginTop: spacing(1.5) * -1,
      },
    },
    noResultSubtitle: {
      marginTop: spacing(1),
      marginBottom: spacing(4.5),
    },
    gallery: {
      flexGrow: 1,
    },
    sidebarContainer: {
      width: sidebarWidth,
    },
    sidebar: {
      width: sidebarWidth,
      position: 'fixed',
      left: 0,
      overflowY: 'hidden',
      height: 'calc(100% - 32px)',
      '&:hover': {
        overflowY: 'auto',
      },
    },
  }),
  { classNamePrefix: 'ProductStory' },
);

type TemplateGalleryProps = {
  kind: TemplateKind;
  onPreviewTemplate: (template: UiTemplate) => void;
  onSelectTemplate: (template: UiTemplate) => void;
};

const TemplateGallery: React.FC<TemplateGalleryProps> = ({
  kind,
  onPreviewTemplate,
  onSelectTemplate,
}) => {
  const baseUrl = process.env.STORYBOOK_MANDREL_BASE_URL;
  const [state, actions] = useTemplateState({
    kind,
    baseUrl,
    baseFilters,
    authRequest: true,
  });
  const galleryTopRef = useRef<HTMLDivElement>(null);
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
    <Grid container wrap="nowrap">
      <Grid item>
        <div className={classes.sidebarContainer}>
          <div className={classes.sidebar}>
            <FilterSidebar
              taxons={state.taxons}
              currentFilters={state.filters}
              onUpdateCategory={(option) => actions.onUpdateCategory(option)}
              onUpdateTag={(option) => actions.onUpdateTag(option)}
              onSortSelect={(option) => actions.onUpdateOrderBy(option)}
              onClearFilter={actions.onClearFilters}
              legacyPageRoute="/#/template-legacy"
              orderByList={orderByList}
              excludedSections={kind === TemplateKind.Site ? excludedSections : undefined}
              selectedTaxon={state.ui.selectedTaxon}
            />
          </div>
        </div>
      </Grid>
      <Grid item className={classes.gallery} ref={galleryTopRef}>
        <Box position="relative">
          <Typography variant="h3" component="h1" style={{ marginBottom: '44px' }}>
            {kind === TemplateKind.Leadpage ? 'Landing Page' : 'Site'} Templates
          </Typography>
          <SearchAndResults
            inputRef={state.searchInputRef}
            onChange={actions.onUpdateSearchInput}
            numTemplates={state.templates.length}
            onClearFilters={actions.onClearFilters}
            onClearInput={actions.onClearSearchInput}
            filter={state.ui.selectedTaxon?.label}
            className={classes.searchAndResults}
            disableSearch={!state.ui.hasLoaded}
          />
          <Gallery infiniteRef={infiniteRef}>
            {state.templates.map((template) => (
              <TemplateThumbnail
                key={template.ui.guid}
                template={template}
                onPreviewTemplate={onPreviewTemplate}
                onSelectTemplate={onSelectTemplate}
              />
            ))}
            {state.ui.hasLoaded && state.templates.length < 1 && (
              <NoResults clearSearch={actions.onResetSearch}>
                <Typography variant="h1" component="h2">
                  No results
                </Typography>
                <Typography variant="subtitle1" component="p" className={classes.noResultSubtitle}>
                  Try adjusting your search and filters to find what you’re looking for.
                </Typography>
              </NoResults>
            )}
          </Gallery>
        </Box>
      </Grid>
    </Grid>
  );
};

export default {
  title: 'Product',
};

const StoryTemplate = (args: TemplateGalleryProps) => (
  <TemplateGallery
    kind={args.kind}
    onPreviewTemplate={args.onPreviewTemplate}
    onSelectTemplate={args.onSelectTemplate}
  />
);

export const LandingPageGallery = StoryTemplate.bind({});
LandingPageGallery.storyName = 'Landing Pages';
LandingPageGallery.args = {
  kind: TemplateKind.Leadpage,
  onPreviewTemplate: () => {},
  onSelectTemplate: () => {},
};

export const SiteGallery = StoryTemplate.bind({});
SiteGallery.args = {
  kind: TemplateKind.Site,
  onPreviewTemplate: () => {},
  onSelectTemplate: () => {},
};
SiteGallery.storyName = 'Sites';
