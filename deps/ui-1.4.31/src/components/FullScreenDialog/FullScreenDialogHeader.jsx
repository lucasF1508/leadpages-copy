import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LeadpagesLogo from '../LeadpagesLogo';

const useStyles = makeStyles(
  theme => ({
    root: {
      padding: theme.spacing(3, 3, 0),
      margin: '0 auto',
      maxWidth: 1280,
      width: '100%',
    },
    logo: {
      paddingBottom: theme.spacing(1),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(3),
    },
    breadcrumbs: {
      marginBottom: 45,
      marginTop: 60,
      width: '100%',
    },
  }),
  { classNamePrefix: 'FullScreenDialogHeader' },
);

const FullScreenDialogHeader = ({ breadcrumbs, children, className, classesProp, onClose }) => {
  const classes = useStyles();

  return (
    <Grid container item xs={12} className={clsx(classes.root, className)} justify="space-between">
      <LeadpagesLogo className={clsx(classes.logo, classesProp?.logo)} />
      {children}
      <IconButton
        className={clsx(classes.closeButton, classesProp?.closeButton)}
        onClick={onClose}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      {breadcrumbs?.length > 0 && (
        <Breadcrumbs
          className={clsx(classes.breadcrumbs, classesProp?.breadcrumbs)}
          aria-label="breadcrumb"
        >
          {breadcrumbs.map(breadcrumb => breadcrumb)}
        </Breadcrumbs>
      )}
    </Grid>
  );
};

FullScreenDialogHeader.propTypes = {
  breadcrumbs: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  classes: PropTypes.shape({
    breadcrumbs: PropTypes.string,
    closeButton: PropTypes.string,
    logo: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

FullScreenDialogHeader.defaultProps = {
  breadcrumbs: null,
  children: null,
  className: null,
  classes: null,
};

export default FullScreenDialogHeader;
