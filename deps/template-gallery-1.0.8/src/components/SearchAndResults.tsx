import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, IconButton, useMediaQuery, Theme } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import clsx from 'clsx';

import TemplateSearch from './TemplateSearch';

const useStyles = makeStyles(
  ({ breakpoints, spacing, palette }) => ({
    root: {
      flexDirection: 'column-reverse',
      [breakpoints.up(1025)]: {
        flexDirection: 'column',
      },
    },
    results: () => ({
      marginBottom: 24,
      marginTop: 0,

      [breakpoints.up(1025)]: {
        marginBottom: 0,
        marginTop: 0,
      },
    }),
    description: {
      marginRight: spacing(2),
    },
    button: {
      padding: 0,
      [breakpoints.up(768)]: {
        padding: `${spacing(1)}px ${spacing(2)}px`,
      },
    },
    filterButton: {
      position: 'absolute',
      right: 0,
      top: 0,
      color: 'white',
      backgroundColor: palette.primary.main,
      [breakpoints.down(480)]: {
        width: 48,
        height: 48,
      },
      [breakpoints.up(480)]: {
        maxWidth: 117,
      },
    },
    filterButtonText: {
      marginLeft: 7,
    },
  }),
  { classNamePrefix: 'SearchAndResults' },
);

export type SearchAndResultsProps = {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  onChange: () => void;
  onClearInput: () => void;
  onClearFilters: () => void;
  filter?: string;
  numTemplates: number;
  className?: string;
  disableSearch: boolean;
  onToggleSidebar?: () => void;
};

const SearchAndResults: React.FC<SearchAndResultsProps> = ({
  inputRef,
  onChange,
  onClearInput,
  onClearFilters,
  filter,
  numTemplates,
  className,
  disableSearch,
  onToggleSidebar,
}) => {
  const above1024Breakpoint = useMediaQuery((theme: Theme) => theme.breakpoints.up(1025));
  const at480Breakpoint = useMediaQuery((theme: Theme) => theme.breakpoints.up(480));
  const ButtonComponent: React.FC<{ className: string; onClick: () => void }> = at480Breakpoint
    ? Button
    : IconButton;
  const classes = useStyles();

  return (
    <Grid container className={clsx(classes.root, className && className)}>
      {filter && numTemplates > 0 && (
        <Grid container direction="column" justify="center" className={classes.results}>
          <Grid container alignItems="baseline">
            <>
              <Typography variant="body1" component="span" className={classes.description}>
                Showing <b>{filter}</b> templates
              </Typography>
              <Button variant="text" onClick={onClearFilters} className={classes.button}>
                Clear
              </Button>
            </>
          </Grid>
        </Grid>
      )}
      <TemplateSearch
        inputRef={inputRef}
        onChange={onChange}
        onClear={onClearInput}
        disabled={disableSearch}
      />
      {onToggleSidebar && !above1024Breakpoint && (
        <ButtonComponent
          aria-label="Filter"
          className={classes.filterButton}
          onClick={onToggleSidebar}
        >
          <FilterListIcon />
          {at480Breakpoint && (
            <Typography className={classes.filterButtonText} variant="body1">
              Filter
            </Typography>
          )}
        </ButtonComponent>
      )}
    </Grid>
  );
};

export default SearchAndResults;
