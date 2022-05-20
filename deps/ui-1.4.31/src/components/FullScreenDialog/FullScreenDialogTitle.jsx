import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(
  theme => ({
    root: {
      padding: theme.spacing(2, 3, 0),
      margin: '0 auto',
      maxWidth: 1280,
      width: '100%',
    },
    subheadContainer: {
      color: theme.palette.greyTransparent[70],
      marginTop: -theme.spacing(1),
    },
    subheader: {
      marginTop: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
  }),
  { classNamePrefix: 'FullScreenDialogTitle' },
);

const FullScreenDialogTitle = ({
  children,
  className,
  classesProp,
  headline,
  subheadline,
  justify,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      {headline && (
        <Typography className={classes.headline} variant="h1">
          {headline}
        </Typography>
      )}
      <Grid
        container
        alignItems="center"
        justify={justify}
        className={clsx(classes.subheadContainer, classesProp?.subheadContainer)}
      >
        {subheadline && (
          <Typography
            className={clsx(classes.subheader, classesProp?.subheader)}
            variant="subtitle1"
          >
            {subheadline}
          </Typography>
        )}
        {children}
      </Grid>
    </div>
  );
};

FullScreenDialogTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  classes: PropTypes.shape({
    header: PropTypes.string,
    subheadContainer: PropTypes.string,
    subheader: PropTypes.string,
  }),
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  justify: PropTypes.string,
};

FullScreenDialogTitle.defaultProps = {
  children: null,
  className: null,
  classes: null,
  headline: null,
  subheadline: null,
  justify: "space-between",
};

export default FullScreenDialogTitle;
