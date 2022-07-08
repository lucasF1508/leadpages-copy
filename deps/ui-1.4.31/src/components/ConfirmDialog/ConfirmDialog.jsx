import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import DialogTitleWithCloseButton from '../DialogTitleWithCloseButton';
import LoadingButton from '../LoadingButton';

const useStyles = makeStyles(
  ({ spacing }) => ({
    subtitle: {
      marginBottom: 20,
    },
    actions: {
      padding: '8px 24px 16px',
    },
  }),
  { classNamePrefix: 'ConfirmDialog' },
);

function getConfirmButtonText(confirmButtonText, type) {
  return confirmButtonText !== null ? confirmButtonText : type === 'alert' ? 'Ok' : 'Yes';
}

const ConfirmDialog = props => {
  const {
    type,
    className,
    children,
    open,
    titleText,
    TitleProps,
    subtitleText,
    SubtitleProps,
    descriptionText,
    DescriptionProps,
    confirmButtonText,
    ConfirmButtonProps,
    cancelButtonText,
    CancelButtonProps,
    onClose,
    onConfirm,
    ...other
  } = props;
  const classes = useStyles();

  return (
    <Dialog
      className={className}
      open={open}
      onClose={onClose}
      aria-labelledby="confirmation-dialog-title"
      aria-describedby="confirmation-dialog-description"
      {...other}
    >
      {titleText && (
        <DialogTitleWithCloseButton
          onClose={onClose}
          TitleProps={{ id: 'confirmation-dialog-title', ...TitleProps }}
        >
          {titleText}
        </DialogTitleWithCloseButton>
      )}
      <DialogContent id="confirmation-dialog-description">
        {!children && subtitleText && (
          <DialogContentText
            className={classes.subtitle}
            component="h3"
            variant="h5"
            {...SubtitleProps}
          >
            {subtitleText}
          </DialogContentText>
        )}
        {!children && descriptionText && (
          <DialogContentText {...DescriptionProps}>{descriptionText}</DialogContentText>
        )}
        {children}
      </DialogContent>
      <DialogActions className={classes.actions}>
        {type !== 'alert' && (
          <LoadingButton
            variant="text"
            onClick={onClose}
            data-qa-selector="confirmation-dialog-cancel-button"
            {...CancelButtonProps}
          >
            {cancelButtonText}
          </LoadingButton>
        )}
        <LoadingButton
          variant="contained"
          onClick={onConfirm}
          data-qa-selector="confirmation-dialog-confirm-button"
          autoFocus
          {...ConfirmButtonProps}
        >
          {getConfirmButtonText(confirmButtonText, type)}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

ConfirmDialog.propTypes = {
  type: PropTypes.oneOf(['confirm', 'alert']),
  className: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.bool,
  titleText: PropTypes.string,
  TitleProps: PropTypes.object,
  subtitleText: PropTypes.string,
  descriptionText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  DescriptionProps: PropTypes.object,
  confirmButtonText: PropTypes.string,
  ConfirmButtonProps: PropTypes.object,
  cancelButtonText: PropTypes.string,
  CancelButtonProps: PropTypes.object,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};

ConfirmDialog.defaultProps = {
  type: 'confirm',
  className: '',
  children: null,
  open: false,
  titleText: '',
  TitleProps: {},
  subtitleText: '',
  SubtitleProps: {},
  descriptionText: '',
  DescriptionProps: {},
  confirmButtonText: null,
  ConfirmButtonProps: {},
  cancelButtonText: 'No',
  CancelButtonProps: {},
  onClose: () => {},
  onConfirm: () => {},
};

export default ConfirmDialog;
