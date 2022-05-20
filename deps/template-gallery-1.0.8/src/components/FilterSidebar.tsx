import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, List, ListItem, Link } from '@material-ui/core';

import Collapse from '@material-ui/core/Collapse';
import { SortFields, TaxonCollection, TaxonSection, Taxon, SortBy } from '../types/mandrel';
import { Tracker } from '../types/tracker';
import { GroupedTaxons, UiFilterTypes } from '../hooks/useTemplateState';
import FilterSectionList from './FilterSectionList';

const standardTaxonSections = [
  {
    label: 'Collections',
    kind: TaxonSection.Collections,
    collection: TaxonCollection.categories,
    taxons: [],
  },
  {
    label: 'Page Type',
    kind: TaxonSection['Page Types'],
    collection: TaxonCollection.categories,
    taxons: [],
  },
  {
    label: 'Industry',
    kind: TaxonSection.Industries,
    collection: TaxonCollection.categories,
    taxons: [],
  },
  {
    label: 'Style',
    kind: TaxonSection.Style,
    collection: TaxonCollection.tags,
    taxons: [],
  },
  {
    label: 'Color',
    kind: TaxonSection.Color,
    collection: TaxonCollection.tags,
    taxons: [],
  },
];

const promotionTaxonSections = [
  {
    label: 'Promotion',
    kind: TaxonSection.Promotion,
    collection: TaxonCollection.categories,
    taxons: [],
  },
];

const colorOrder = Object.freeze([
  'purple',
  'blue',
  'blue-green',
  'green',
  'yellow',
  'orange',
  'red',
  'gray',
  'pink',
  'black',
  'white',
]);

function sortLabelAlphabetically(a: Taxon, b: Taxon): number {
  const labelA = a.label.toUpperCase();
  const labelB = b.label.toUpperCase();
  if (labelA < labelB) return -1;
  if (labelA > labelB) return 1;
  return 0;
}

function sortTaxonColors(a: Taxon, b: Taxon) {
  const indexA = colorOrder.indexOf(a.value);
  const indexB = colorOrder.indexOf(b.value);
  if (indexA > indexB) return 1;
  return indexB > indexA ? -1 : 0;
}

function sortSectionTaxons(section: TaxonSection, taxons: Taxon[]): Taxon[] {
  if (section === TaxonSection.Color) {
    return taxons.sort(sortTaxonColors);
  }

  return taxons.sort(sortLabelAlphabetically);
}

function createGroupedTaxons(
  taxons: Taxon[],
  sectionsToCreate: GroupedTaxons[],
  excludedSections?: TaxonSection[],
): GroupedTaxons[] {
  const groupedTaxons: Record<string, Taxon[]> = {};

  // Filter out any excluded sections
  const sections =
    excludedSections && excludedSections.length >= 1
      ? sectionsToCreate.filter((section) => !excludedSections.includes(section.kind))
      : sectionsToCreate;
  sections.forEach((sectionInfo) => {
    if (sectionInfo?.kind) groupedTaxons[sectionInfo?.kind] = [];
  });

  if (taxons && taxons.length >= 1) {
    taxons.forEach((taxon) => {
      const taxonType = taxon.section;
      if (groupedTaxons[taxonType]) {
        groupedTaxons[taxonType].push(taxon);
      }
    });
  }
  return sections.map(({ label, kind, collection }: GroupedTaxons) => {
    return {
      label,
      kind,
      collection,
      taxons: sortSectionTaxons(kind, groupedTaxons[kind]),
    };
  });
}

const listItemPadding = 12;
const listItemMarginLeft = 20;

const useStyles = makeStyles(
  (theme) => ({
    root: {
      fontFamily: theme.typography.fontFamily,
    },
    listItem: ({ listItemWidth }: { listItemWidth: number }) => ({
      flexWrap: 'wrap',
      minHeight: '40px',
      margin: `0 0 0 ${listItemMarginLeft}px`,
      maxWidth: listItemWidth,
      cursor: 'pointer',
      color: theme.palette.grey[100],
      display: 'flex',
      alignItems: 'center',
      fontSize: 14,
      fontWeight: theme.typography.fontWeightRegular,
      padding: `8px ${listItemPadding}px`,
      lineHeight: '20px',
      textDecoration: 'none',
      borderRadius: theme.shape.borderRadius,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest,
      }),
      '&:hover': {
        backgroundColor: 'rgba(15, 12, 9, 0.04)',
        outline: 0,
        transition: theme.transitions.create('background-color', {
          duration: 20,
        }),
      },
      '&:active': {
        backgroundColor: 'rgba(15, 12, 9, 0.08)',
        color: theme.palette.grey[100],
      },
      '&.Mui-selected': {
        fontWeight: theme.typography.fontWeightBold,
        backgroundColor: 'inherit',
        '&:before': {
          position: 'absolute',
          left: `-${listItemMarginLeft}px`,
          top: 8,
          content: '""',
          width: 3,
          height: 24,
          backgroundColor: theme.palette.primary.main,
        },
      },
      '&.Mui-disabled': {
        opacity: 1,
        pointerEvents: 'none',
      },
    }),
    listItemSectionTitle: {
      display: 'flex',
      justifyContent: 'space-between',
      '&.no-dropdown:hover': {
        cursor: 'auto',
        backgroundColor: 'inherit',
        transition: 'none',
      },
    },
    listItemSectionCaption: {
      fontWeight: 600,
      fontSize: 13,
    },
    expandIcon: {
      fontSize: 23,
      marginRight: -5,
      color: 'rgba(9,12,18,0.5)',
    },
    divider: ({ listItemWidth }: { listItemWidth: number }) => ({
      borderBottom: '1px solid #D6DCE8',
      margin: `${listItemPadding}px ${listItemPadding}px ${listItemPadding}px ${
        listItemPadding + listItemMarginLeft
      }px`,
      maxWidth: listItemWidth - 24,
    }),
    clearButton: {
      padding: '4px 8px',
      lineHeight: '15px',
    },
    clearExpanderWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    activeTaxonLabel: {
      fontWeight: 400,
      width: '100%',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      color: (theme.palette as any).greyTransparent[70],
      marginTop: 4,
    },
  }),
  { classNamePrefix: 'FilterSidebar' },
);

export type FilterSidebarProps = {
  taxons: Taxon[];
  currentFilters: UiFilterTypes;
  onUpdateCategory: (value: Taxon) => void;
  onUpdateTag: (value: Taxon) => void;
  onSortSelect: (value: SortBy) => void;
  onClearFilter: () => void;
  legacyPageRoute?: string;
  onSectionTransitionStart?: () => void;
  onSectionTransitionEnd?: () => void;
  orderByList?: SortBy[];
  excludedSections?: TaxonSection[];
  tracker?: Tracker;
  expandedSection?: TaxonSection | 'none';
  selectedTaxon?: Taxon | null;
  listClass?: string;
  listItemWidth?: number;
};

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  taxons,
  currentFilters,
  onUpdateCategory,
  onUpdateTag,
  onSortSelect,
  onClearFilter,
  legacyPageRoute,
  onSectionTransitionStart,
  onSectionTransitionEnd,
  orderByList,
  excludedSections,
  tracker,
  expandedSection,
  selectedTaxon,
  listClass,
  listItemWidth,
}) => {
  const classes = useStyles({ listItemWidth: listItemWidth as number });
  const [activeFilterSection, setActiveFilterSection] = useState(expandedSection);
  const [showCollapsedLabel, setShowCollapsedLabel] = useState(true);

  useEffect(() => {
    if (legacyPageRoute && tracker?.watchLegacyLink) {
      tracker.watchLegacyLink('#view-legacy-templates');
    }
  }, [tracker, legacyPageRoute]);

  const timeoutRef = useRef<number>();
  // Do not show taxon label as the collapse transitions from open to closed
  const hideLabelForTransition = () => {
    setShowCollapsedLabel(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setShowCollapsedLabel(true);
    }, 100);
  };

  const handleDropdown = (selectedSection: TaxonSection | string, label: string) => {
    if (activeFilterSection === selectedSection) {
      if (selectedSection === selectedTaxon?.section) {
        hideLabelForTransition();
      }
      setActiveFilterSection('none');
    } else {
      setActiveFilterSection(selectedSection as TaxonSection);
      if (tracker?.onOpenFilters) {
        tracker.onOpenFilters({ kind: label });
      }
    }
  };

  return (
    <div className={classes.root}>
      <List className={listClass} disablePadding>
        <ListItem className={clsx(classes.listItem, classes.listItemSectionTitle, 'no-dropdown')}>
          <Typography className={classes.listItemSectionCaption} variant="caption" component="span">
            Sort By
          </Typography>
        </ListItem>
        <FilterSectionList
          taxons={orderByList as SortBy[]}
          currentValue={currentFilters.order_by}
          onSelect={onSortSelect}
          isOpen
          listItemClass={classes.listItem}
        />

        <div className={classes.divider} />

        {createGroupedTaxons(taxons, standardTaxonSections, excludedSections).map(
          ({ label, kind, collection, taxons }) => (
            <div key={kind}>
              <ListItem
                className={clsx(classes.listItem, classes.listItemSectionTitle)}
                onClick={() => handleDropdown(kind, label)}
              >
                <Typography
                  className={classes.listItemSectionCaption}
                  variant="caption"
                  component="span"
                >
                  {label}
                </Typography>
                <div className={classes.clearExpanderWrapper}>
                  {selectedTaxon?.section === kind && (
                    <Button
                      variant="text"
                      onClick={(e) => {
                        onClearFilter();
                        // Prevent dropdown toggle
                        e.stopPropagation();
                      }}
                      className={classes.clearButton}
                    >
                      Clear
                    </Button>
                  )}
                  {activeFilterSection === kind ? (
                    <ExpandLess role="button" className={classes.expandIcon} />
                  ) : (
                    <ExpandMore role="button" className={classes.expandIcon} />
                  )}
                </div>
                {showCollapsedLabel &&
                  activeFilterSection !== kind &&
                  selectedTaxon?.section === kind && (
                    <Typography
                      className={classes.activeTaxonLabel}
                      variant="caption"
                      component="span"
                    >
                      {selectedTaxon.label}
                    </Typography>
                  )}
              </ListItem>
              <FilterSectionList
                taxons={taxons}
                currentValue={
                  collection === TaxonCollection.categories
                    ? currentFilters.categories
                    : currentFilters.tags
                }
                onSelect={
                  collection === TaxonCollection.categories ? onUpdateCategory : onUpdateTag
                }
                isOpen={activeFilterSection === kind}
                listItemClass={classes.listItem}
                section={kind}
                onTransitionStart={onSectionTransitionStart}
                onTransitionEnd={onSectionTransitionEnd}
              />
              <div className={classes.divider} />
            </div>
          ),
        )}
        {createGroupedTaxons(taxons, promotionTaxonSections, excludedSections).map(
          ({ kind, collection, taxons }) => (
            <div key={kind}>
              <Collapse
                in={taxons.length !== 0}
                timeout={200}
                onEntering={onSectionTransitionStart}
                onExiting={onSectionTransitionStart}
                onEntered={onSectionTransitionEnd}
                onExited={onSectionTransitionEnd}
              >
                <FilterSectionList
                  taxons={taxons}
                  currentValue={
                    collection === TaxonCollection.categories
                      ? currentFilters.categories
                      : currentFilters.tags
                  }
                  onSelect={
                    collection === TaxonCollection.categories ? onUpdateCategory : onUpdateTag
                  }
                  isOpen
                  listItemClass={classes.listItem}
                  section={kind}
                  onTransitionStart={onSectionTransitionStart}
                  onTransitionEnd={onSectionTransitionEnd}
                />
                <div className={classes.divider} />
              </Collapse>
            </div>
          ),
        )}
        {legacyPageRoute && (
          <>
            <ListItem selected disabled className={classes.listItem}>
              Drag & Drop
            </ListItem>
            <Link id="view-legacy-templates" href={legacyPageRoute} underline="none">
              <ListItem className={classes.listItem}>Legacy</ListItem>
            </Link>
          </>
        )}
      </List>
    </div>
  );
};

FilterSidebar.defaultProps = {
  orderByList: [
    { value: SortFields.New, label: 'Newest' },
    { value: SortFields.Conversion, label: 'Highest Converting' },
    { value: SortFields.Popular, label: 'Most Popular' },
  ],
  expandedSection: 'none',
  listItemWidth: 215,
} as Partial<FilterSidebarProps>;

export default FilterSidebar;
