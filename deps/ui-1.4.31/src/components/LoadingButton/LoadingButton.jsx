import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';
import useSuccess from '../../hooks/useSuccess';

const useStyles = makeStyles(
  ({ palette, typography, spacing }) => ({
    root: ({ fullWidth }) => ({
      position: 'relative',
      // 'inline-block' ensures root is same width as child button, if parent container is wider.
      display: fullWidth ? 'block' : 'inline-block',
      width: fullWidth ? '100%' : 'auto',
    }),
    buttonLabelLoading: {
      color: 'transparent!important',
    },
    iconButton: ({ isLoading }) => ({
      '&[class*="disabled"]': {
        backgroundColor: isLoading ? palette.greyTransparent[5] : 'inherit',
      },
    }),
    progress: ({ isIcon }) => ({
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: isIcon ? -18 : -12,
      marginLeft: isIcon ? -18 : -12,
    }),
    successWrapper: {
      position: 'absolute',
      top: 0,
      height: '100%',
      ...typography.label,
    },
    successTextIcon: {
      marginLeft: -6,
      marginRight: 4,
    },
  }),
  { classNamePrefix: 'LoadingButton' },
);

const LoadingButton = props => {
  const {
    className,
    children,
    variant,
    isLoading,
    isSuccess,
    fullWidth,
    disabled,
    successCallback,
    successText,
    successTimeout,
    ...other
  } = props;
  const [showSuccess, setShowSuccess] = useSuccess(successCallback);
  const isIcon = variant === 'icon';
  const classes = useStyles({ variant, fullWidth, isIcon, isLoading, showSuccess });

  useEffect(() => {
    setShowSuccess(isSuccess);
  }, [isSuccess, setShowSuccess]);

  return (
    <div className={clsx(classes.root, className)}>
      {!isIcon && (
        <Button
          classes={{ label: isLoading || showSuccess ? classes.buttonLabelLoading : null }}
          variant={variant}
          disabled={disabled || isLoading || showSuccess}
          fullWidth={fullWidth}
          {...other}
        >
          {children}
        </Button>
      )}
      {isIcon && (
        <IconButton
          className={classes.iconButton}
          disabled={disabled || isLoading || showSuccess}
          data-qa-selector="loading-button-icon"
          {...other}
        >
          {showSuccess ? <CheckIcon color="primary" /> : children}
        </IconButton>
      )}
      {isLoading && (
        // NOTE: Aiming for 2px line thickness for loader at each size.
        // SVG icon for the circle loader is always 44 x 44 scaled down.
        // (44/36) * 2 = 2.4
        // (44/24) * 2 = 3.6
        <CircularProgress
          className={classes.progress}
          size={isIcon ? 36 : 24}
          thickness={isIcon ? 2.4 : 3.6}
        />
      )}
      {showSuccess && !isIcon && (
        <>
          {successText ? (
            <Grid container justify="center" alignItems="center" className={classes.successWrapper}>
              <CheckIcon
                color="primary"
                className={classes.successTextIcon}
                data-qa-selector="loading-button-success-icon"
              />
              {successText}
            </Grid>
          ) : (
            <CheckIcon color="primary" className={classes.progress} />
          )}
        </>
      )}
    </div>
  );
};

LoadingButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained', 'icon']),
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSuccess: PropTypes.bool,
  disabled: PropTypes.bool,
  successCallback: PropTypes.func,
  successText: PropTypes.string,
  successTimeout: PropTypes.number,
};

LoadingButton.defaultProps = {
  className: '',
  variant: 'contained',
  fullWidth: false,
  isLoading: false,
  disabled: false,
  successCallback: () => {},
  successText: null,
  successTimeout: 3000,
};

export default LoadingButton;
