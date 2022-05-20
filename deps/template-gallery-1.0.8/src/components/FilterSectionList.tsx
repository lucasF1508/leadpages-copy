import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chip from '@material-ui/core/Chip';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import GradeIcon from '@material-ui/icons/Grade';

import { TaxonSection, Taxon, SortBy } from '../types/mandrel';

const FEATURED_OPTION = 'holiday';

const taxonColorHexValue: Record<string, string> = Object.freeze({
  purple: '#3F2CC5',
  blue: '#1B5BF8',
  'blue-green': '#15A2B2',
  green: '#1CA671',
  yellow: '#FFC51A',
  orange: '#F67503',
  red: '#FE2910',
  pink: '#ffc0cb',
  black: '#000000',
  gray: '#7B7B7B',
  white: '#FFFFFF',
});

const useStyles = makeStyles(
  (theme) => ({
    collapseContainer: {
      width: '100%',
    },
    colorSwatch: {
      border: 'solid 1px rgba(0,0,0,0.1)',
      borderRadius: '50%',
      width: 18,
      height: 18,
      marginRight: 9,
    },
    nestedSectionList: {
      padding: 0,
    },
    featuredChip: {
      backgroundColor: theme.palette.success.light,
      marginLeft: theme.spacing(1),
    },
    chipIcon: {
      color: theme.palette.common.white,
      height: 10,
      width: 10,
    },
  }),
  { classNamePrefix: 'FilterItem' },
);

type FilterOptions = SortBy | Taxon;

export type FilterSectionListProps = {
  taxons: FilterOptions[];
  currentValue: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect(option: any): void;
  isOpen: boolean;
  listItemClass: string;
  section?: string;
  onTransitionStart?: () => void;
  onTransitionEnd?: () => void;
};

export const FilterSectionList: React.FC<FilterSectionListProps> = ({
  taxons,
  currentValue,
  onSelect,
  isOpen,
  listItemClass,
  section,
  onTransitionStart,
  onTransitionEnd,
}) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.nestedSectionList}>
      <Collapse
        in={isOpen}
        timeout={200}
        className={classes.collapseContainer}
        onEntering={onTransitionStart}
        onExiting={onTransitionStart}
        onEntered={onTransitionEnd}
        onExited={onTransitionEnd}
      >
        <List disablePadding>
          {taxons &&
            taxons.length >= 1 &&
            taxons.map((option: FilterOptions) => (
              <ListItem
                key={option.value}
                role="button"
                className={listItemClass}
                selected={option.value === currentValue}
                disabled={option.value === currentValue}
                onClick={() => {
                  onSelect(option);
                }}
              >
                {section && section === TaxonSection.Color && (
                  <span
                    className={classes.colorSwatch}
                    style={{ backgroundColor: taxonColorHexValue[option.value] }}
                  />
                )}
                {option.label}
                {option.value === FEATURED_OPTION && (
                  <Chip
                    size="small"
                    className={classes.featuredChip}
                    icon={<GradeIcon className={classes.chipIcon} />}
                    label="FEATURED"
                  />
                )}
              </ListItem>
            ))}
        </List>
      </Collapse>
    </ListItem>
  );
};

export default FilterSectionList;
