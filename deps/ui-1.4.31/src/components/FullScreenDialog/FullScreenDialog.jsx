import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import { primaryColors } from '../../themes/colors';

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: primaryColors.greyLight,
    },
  }),
  { classNamePrefix: 'FullScreenDialog' },
);

const FullScreenDialog = ({ isOpen, children, ...other }) => {
  const classes = useStyles();

  return (
    <Dialog PaperProps={{ className: classes.root }} fullScreen open={isOpen} {...other}>
      <Grid container justify="space-between">
        {children}
      </Grid>
    </Dialog>
  );
};

FullScreenDialog.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  isOpen: PropTypes.bool.isRequired,
};

FullScreenDialog.defaultProps = {
  children: null,
};

export default FullScreenDialog;
