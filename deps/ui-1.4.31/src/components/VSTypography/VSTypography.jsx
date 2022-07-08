import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ typography }) => {
    return {
      h1: (typography.valueSerif && typography.valueSerif.h1) || typography.h1,
      h2: (typography.valueSerif && typography.valueSerif.h2) || typography.h2,
      h3: (typography.valueSerif && typography.valueSerif.h3) || typography.h3,
      h4: (typography.valueSerif && typography.valueSerif.h4) || typography.h4,
      h5: (typography.valueSerif && typography.valueSerif.h5) || typography.h5,
    };
  },
  { classNamePrefix: 'VSTypography' },
);

const VSTypography = props => {
  const classes = useStyles();

  return <Typography classes={classes} {...props} />;
};

export default VSTypography;
