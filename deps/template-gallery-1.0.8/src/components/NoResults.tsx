import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(
  {
    root: {
      textAlign: 'center',
      marginTop: 94,
      marginBottom: 114,
      width: '100%',
    },
  },
  { classNamePrefix: 'NoResults' },
);

interface NoResultsProps {
  clearSearch: () => void;
}

const NoResults: React.FC<NoResultsProps> = ({ clearSearch, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
      <Button variant="outlined" component="button" onClick={clearSearch}>
        Clear Search & Filters
      </Button>
    </div>
  );
};

export default NoResults;
