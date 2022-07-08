import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { secondaryColors } from '../../themes/colors';

const DARK_HOVER_STATE = color => ({
  '&:hover, &.Mui-focusVisible': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color,
  },
  '&:active': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color,
  },
});

function getIconBySeverity(severity) {
  switch (severity) {
    case 'error':
      return <ErrorOutlineIcon />;
    case 'success':
      return <CheckCircleOutlineIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'info':
      return <InfoIcon />;
    default:
      return null;
  }
}

const useStyles = makeStyles(
  theme => ({
    root: ({ severity }) => ({
      maxWidth: severity ? 392 : 336,
    }),
    content: ({ variant, hasIconCloseButton, severity, layout }) => ({
      backgroundColor: variant === 'light' ? theme.palette.common.white : theme.palette.grey[90],
      borderRadius: 2,
      color: variant === 'light' ? theme.palette.text.primary : 'rgba(255,255,255,0.9)',
      alignItems: hasIconCloseButton ? 'flex-start' : 'center',
      flexWrap: 'nowrap',
      padding: '6px 14px',
      ...((!severity || layout === 'message') && { paddingLeft: '16px' }),
    }),
    severityIcon: {
      marginRight: theme.spacing(1),
      color: theme.palette.greyTransparent[80],
      alignSelf: 'flex-start',
    },
    messageWrapper: {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 0,
    },
    message: {
      padding: '6px 0',
    },
    detail: {
      color: theme.palette.greyTransparent[70],
      '& a, & a:visited': {
        color: 'inherit',
      },
      '& a:hover, & a:focus': {
        outline: 0,
        color: theme.palette.primary.dark,
      },
      '& a:active': {
        color: secondaryColors.navy,
      },
    },
    button: ({ variant }) =>
      variant === 'dark' && {
        color: theme.palette.info.light,
        ...DARK_HOVER_STATE(theme.palette.info.light),
      },
  }),
  { classNamePrefix: 'Toast' },
);

const Toast = ({
  open,
  onClose,
  severity,
  message,
  detail,
  layout,
  className,
  textButtonClassName,
  iconButtonClassName,
  buttonLabel,
  hasIconCloseButton,
  variant,
  autoHideDuration,
  ...props
}) => {
  const classes = useStyles({ variant, hasIconCloseButton, severity, layout });

  return (
    <Snackbar
      className={clsx(classes.root, className)}
      autoHideDuration={autoHideDuration}
      open={open}
      onClose={onClose}
      {...props}
    >
      <SnackbarContent
        classes={{ root: classes.content, message: classes.message }}
        message={
          layout === 'alert' ? (
            <div className={classes.messageWrapper}>
              {severity && (
                <div className={classes.severityIcon}>{getIconBySeverity(severity)}</div>
              )}
              <div>
                <Typography variant="h6">{message}</Typography>
                {detail && (
                  <Typography
                    className={classes.detail}
                    component="p"
                    variant="caption"
                    dangerouslySetInnerHTML={{ __html: detail }}
                  />
                )}
              </div>
            </div>
          ) : (
            message
          )
        }
        action={
          <>
            {hasIconCloseButton ? (
              <IconButton
                className={clsx(classes.button, iconButtonClassName)}
                aria-label="close"
                onClick={onClose}
              >
                <CloseIcon />
              </IconButton>
            ) : (
              <Button
                className={clsx(classes.button, textButtonClassName)}
                variant="text"
                onClick={onClose}
              >
                {buttonLabel}
              </Button>
            )}
          </>
        }
      ></SnackbarContent>
    </Snackbar>
  );
};

Toast.propTypes = {
  autoHideDuration: PropTypes.number,
  buttonLabel: PropTypes.string,
  detail: PropTypes.string,
  hasIconCloseButton: PropTypes.bool,
  layout: PropTypes.oneOf(['message', 'alert']),
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  severity: PropTypes.oneOf(['error', 'info', 'success', 'warning', null]),
  className: PropTypes.string,
  iconButtonClassName: PropTypes.string,
  textButtonClassName: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'dark']),
};

Toast.defaultProps = {
  autoHideDuration: 6000,
  body: null,
  className: null,
  layout: 'message',
  severity: null,
  iconButtonClassName: null,
  textButtonClassName: null,
  hasIconCloseButton: false,
  buttonLabel: 'Close',
  variant: 'dark',
};

export default Toast;
