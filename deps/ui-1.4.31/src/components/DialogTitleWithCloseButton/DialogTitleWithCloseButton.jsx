import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(
  ({ spacing }) => ({
    closeButton: {
      position: 'absolute',
      top: 14,
      right: 14,
    },
  }),
  { classNamePrefix: 'DialogTitleWithCloseButton' },
);

const DialogTitleWithCloseButton = props => {
  const { className, children, TitleProps, CloseButtonProps, onClose, ...other } = props;
  const classes = useStyles();

  return (
    <DialogTitle className={className} disableTypography {...other}>
      <Typography component="h2" variant="h4" {...TitleProps}>
        {children}
      </Typography>
      <IconButton
        className={classes.closeButton}
        onClick={onClose}
        aria-label="close"
        {...CloseButtonProps}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
};

DialogTitleWithCloseButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  TitleProps: PropTypes.object,
  CloseButtonProps: PropTypes.object,
  onClose: PropTypes.func,
};

DialogTitleWithCloseButton.defaultProps = {
  className: '',
  children: null,
  TitleProps: {},
  CloseButtonProps: {},
  onClose: () => {},
};

export default DialogTitleWithCloseButton;
