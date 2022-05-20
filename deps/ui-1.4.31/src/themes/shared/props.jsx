import React from 'react';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default {
  MuiAlert: {
    severity: 'error',
    iconMapping: {
      success: <CheckCircleOutlineIcon fontSize="inherit" />,
    },
  },
  MuiButtonBase: {
    disableRipple: true,
  },
  MuiButton: {
    variant: 'contained',
    color: 'primary',
    disableElevation: true,
  },
  MuiCheckbox: {
    color: 'primary',
  },
  MuiCircularProgress: {
    size: 44,
    thickness: 3,
  },
  MuiDialog: {
    PaperProps: {
      elevation: 0,
      square: true,
    },
  },
  MuiFab: {
    color: 'primary',
  },
  MuiFormControl: {
    variant: 'filled',
  },
  MuiInputLabel: {
    disableAnimation: true,
    shrink: false,
  },
  MuiLink: {
    underline: 'always',
  },
  MuiListSubheader: {
    disableSticky: true,
  },
  MuiMenu: {
    TransitionComponent: Fade,
  },
  MuiPopover: {
    elevation: 4,
  },
  MuiRadio: {
    color: 'primary',
  },
  MuiSelect: {
    variant: 'filled',
  },
  MuiSnackbar: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    TransitionComponent: Slide,
  },
  MuiSwitch: {
    color: 'primary',
  },
  MuiTabs: {
    textColor: 'primary',
    indicatorColor: 'primary',
  },
  MuiTextField: {
    variant: 'filled',
    color: 'primary',
    hiddenLabel: false,
  },
};
