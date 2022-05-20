import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(
  ({ typography }) => ({
    label: {
      ...typography.label,
    },
  }),
  { classNamePrefix: 'InputLabelWithCount' },
);

export default function InputLabelWithCount({ label, value }) {
  const classes = useStyles();
  return (
    <Grid container justify="space-between" alignItems="baseline">
      <Grid item className={classes.label}>
        {label}
      </Grid>
      <Grid item component={Typography} variant="caption" color="inherit">
        {value?.length > 0 && `${value.length} characters`}
      </Grid>
    </Grid>
  );
}

InputLabelWithCount.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.string,
};

InputLabelWithCount.defaultProps = {
  value: '',
};
