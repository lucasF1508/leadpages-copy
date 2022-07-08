import { secondaryColors } from '../colors';
import { hexToRgb } from '../../utils/color';

const inputPlaceholderStyles = ({ palette }) => ({
  opacity: 1,
  color: palette.greyTransparent[50],
  fontSize: 'inherit', // TODO: Remove this override for Lego.
});

const inputDisabledPlaceholderStyles = ({ palette }) => ({
  opacity: 1,
  color: palette.greyTransparent[30],
  fontSize: 'inherit', // TODO: Remove this override for Lego.
});

const checkboxAndRadioStyles = ({ palette }) => ({
  root: {
    margin: '2px 3px',
    padding: 6,
    color: palette.greyTransparent[50],
  },
  colorPrimary: {
    '&:hover': {
      backgroundColor: palette.greyTransparent[5],
    },
    '&:active': {
      backgroundColor: palette.action.active,
    },
    '&$checked': {
      '&:hover': {
        backgroundColor: palette.greyTransparent[5],
      },
      '&:active': {
        backgroundColor: palette.action.active,
      },
    },
    '&$disabled': {
      color: palette.greyTransparent[20],
    },
  },
});

export default theme => {
  const { breakpoints, palette, shadows, shape, spacing, typography, transitions } = theme;

  return {
    MuiLink: {
      root: {
        outline: 0,
        transition: transitions.create('color', {
          duration: transitions.duration.shortest,
        }),
        '&:hover, &:focus, &$focusVisible': {
          color: palette.primary.dark,
        },
        '&:active': {
          color: secondaryColors.navy,
        },
      },
      button: {
        '&:focus, &$focusVisible': {
          outline: 0,
        },
      },
      // TODO: Can remove once we get rid of LEGO.
      underlineAlways: {
        '&:hover, &:focus': {
          textDecoration: 'underline',
        },
      },
    },
    MuiButton: {
      root: {
        minWidth: null,
        transition: transitions.create(['background-color', 'border'], {
          duration: transitions.duration.shortest,
        }),
      },
      textPrimary: {
        '&:hover, &$focusVisible': {
          color: palette.primary.dark,
          backgroundColor: palette.greyTransparent[4],
        },
        '&$disabled $label': {
          color: palette.primary.light,
        },
        '&:active': {
          color: palette.primary.dark,
          backgroundColor: palette.greyTransparent[8],
        },
      },
      containedPrimary: {
        '&$focusVisible': {
          backgroundColor: palette.primary.dark,
        },
        '&:active': {
          backgroundColor: secondaryColors.navy,
        },
        '&$disabled': {
          backgroundColor: palette.primary.light,
        },
        '&$disabled $label': {
          color: palette.grey[0],
        },
      },
      outlined: {
        '& $label': {
          transition: transitions.create(['color'], {
            duration: transitions.duration.shortest,
          }),
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: '6px',
        color: palette.greyTransparent[60],
        // NOTE: $focusVisible was not working for this component.
        '&:hover, &.Mui-focusVisible': {
          backgroundColor: palette.greyTransparent[4],
        },
        '&:active': {
          backgroundColor: palette.greyTransparent[8],
        },
        '&$disabled': {
          color: palette.greyTransparent[30],
        },
      },
    },
    MuiFab: {
      primary: {
        '&$focusVisible': {
          backgroundColor: palette.primary.dark,
        },
        '&:active': {
          backgroundColor: secondaryColors.navy,
        },
        '&$disabled': {
          backgroundColor: palette.primary.light,
        },
        '&$disabled $label': {
          color: palette.grey[0],
        },
      },
      extended: {
        '& .MuiSvgIcon-root': {
          marginRight: spacing(1),
        },
      },
    },
    MuiFilledInput: {
      root: {
        borderRadius: shape.borderRadius,
        borderTopLeftRadius: null,
        borderTopRightRadius: null,
        overflow: 'hidden',
        backgroundColor: palette.greyTransparent[4],
        '&:hover:not($disabled), &$focused': {
          backgroundColor: palette.greyTransparent[8],
        },
        '&$disabled': {
          backgroundColor: palette.greyTransparent[4],
          color: palette.greyTransparent[30],
        },
      },
      input: {
        padding: '12px 16px',

        '&::-webkit-input-placeholder': {
          ...inputPlaceholderStyles(theme),
          lineHeight: 'normal',
        } /* Chrome/Opera/Safari/Edge */,
        '&::-moz-placeholder': inputPlaceholderStyles(theme), // Firefox 19+
        '&:-ms-input-placeholder': inputPlaceholderStyles(theme), // IE 10+

        '&$disabled::-webkit-input-placeholder': {
          ...inputDisabledPlaceholderStyles(theme),
          lineHeight: 'normal',
        } /* Chrome/Opera/Safari/Edge */,
        '&$disabled::-moz-placeholder': inputDisabledPlaceholderStyles(theme), // Firefox 19+
        '&$disabled:-ms-input-placeholder': inputDisabledPlaceholderStyles(theme), // IE 10+
      },
      inputMultiline: {
        padding: '12px 16px',

        '&::-webkit-input-placeholder': {
          lineHeight: 'inherit',
        } /* Chrome/Opera/Safari/Edge */,
        '&$disabled::-webkit-input-placeholder': {
          lineHeight: 'inherit',
        } /* Chrome/Opera/Safari/Edge */,
      },
      inputMarginDense: {
        paddingTop: 10,
        paddingLeft: 12,
        paddingBottom: 10,
        paddingRight: 12,
      },
      multiline: {
        padding: 0,
      },
      underline: {
        '&:before, &:hover:before': {
          borderBottom: `1px solid ${palette.greyTransparent[30]}`,
        },
        '&$disabled:before, &$disabled:hover:before': {
          borderBottom: 'none',
          borderBottomStyle: 'none',
          border: 'none',
        },
        '&$disabled:after': {
          border: 'none',
        },
      },
    },
    MuiFormControlLabel: {
      label: {
        color: palette.text.primary,
        '&$disabled': {
          color: palette.greyTransparent[30],
        },
      },
    },
    MuiFormLabel: {
      root: {
        ...typography.label,
        color: palette.text.primary,
        lineHeight: typography.pxToRem(24),
        marginBottom: 6,
        '&$focused': {
          color: palette.text.primary,
        },
        '&$disabled': {
          color: palette.greyTransparent[30],
        },
      },
    },
    MuiInputBase: {
      root: {
        fontSize: typography.pxToRem(15),
        minHeight: typography.pxToRem(48),
      },
      marginDense: {
        fontSize: typography.pxToRem(15),
        minHeight: typography.pxToRem(36),
      },
      input: {
        'label[data-shrink=false] + $formControl &': null,
        boxSizing: 'content-box !important', // HACK for Lego. It uses `input[type="text"]`, which is more specific.
        height: 24,
        lineHeight: typography.pxToRem(16),
      },
      inputMultiline: {
        lineHeight: typography.pxToRem(24),
      },
    },
    MuiInput: {
      formControl: {
        'label + &': { marginTop: null },
      },
    },
    MuiInputLabel: {
      root: {
        display: null,
        transformOrigin: null,
      },
      formControl: {
        top: null,
        left: null,
        position: null,
        transform: null,
      },
      filled: {
        zIndex: null,
        transform: null,
        pointerEvents: null,

        '&.MuiInputLabel-marginDense': {
          transform: 'unset',
        },
      },
      marginDense: {
        marginBottom: 4,
      },
    },
    MuiInputAdornment: {
      filled: {
        color: palette.greyTransparent[50],
        '&$positionStart:not($hiddenLabel)': {
          marginTop: null,
        },
        '&$positionStart p, &$positionEnd p, &$positionStart button, &$positionEnd button': {
          color: palette.greyTransparent[50],
        },
        '& .MuiCircularProgress-root': {
          width: '24px !important',
          height: '24px !important',
        },
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: typography.pxToRem(13),
        color: palette.grey[70],
        marginTop: 10,
        lineHeight: 1,
        '&$disabled': {
          color: palette.greyTransparent[30],
        },
      },
      contained: {
        marginLeft: null,
        marginRight: null,
      },
    },
    MuiCheckbox: {
      ...checkboxAndRadioStyles(theme),
    },
    MuiRadio: {
      ...checkboxAndRadioStyles(theme),
    },
    MuiBackdrop: {
      root: {
        backgroundColor: palette.greyTransparent[10],
      },
    },
    MuiDialog: {
      paper: {
        boxShadow: `0 10px 20px -5px ${palette.greyTransparent[50]}`,
      },
    },
    MuiDialogContentText: {
      root: {
        color: palette.greyTransparent[100],
      },
    },
    MuiTabs: {
      root: {
        color: palette.greyTransparent[100],
        backgroundColor: palette.common.white,
        minHeight: 56,
        position: 'relative',
      },
      indicator: {
        height: 3,
      },
      scroller: {
        zIndex: 1,
      },
      scrollButtons: {
        height: 56,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'inherit',
        display: 'none',
        zIndex: 2,
        // Undo above styles for right scroll button
        '& ~ $scrollButtons': {
          left: 'auto',
          right: 0,
        },
        // This attribute is added when the scroll button should be made visible
        '&[aria-disabled="false"]': {
          display: 'inline-flex',
        },
      },
    },
    MuiTab: {
      root: {
        minWidth: null,
        maxWidth: null,
        minHeight: 56,
        padding: '0 24px',
        transition: transitions.create(['background-color', 'color'], {
          duration: transitions.duration.shortest,
        }),
        [breakpoints.up('sm')]: null,
      },
      textColorPrimary: {
        color: palette.greyTransparent[50],
        '&:hover:not($selected), &:focus:not($selected)': {
          backgroundColor: palette.action.hover,
          transition: transitions.create(['background-color', 'color'], { duration: 20 }),
        },
        '&:active:not($selected)': {
          backgroundColor: palette.action.active,
        },
        '&$selected': {
          color: palette.greyTransparent[100],
          pointerEvents: 'none',
        },
      },
    },
    MuiTabScrollButton: {
      root: {
        opacity: null,
      },
    },
    MuiTypography: {
      // TODO: Remove these once we get rid of Lego
      colorInherit: {
        '&:visited': {
          color: 'inherit',
        },
      },
      colorPrimary: {
        '&:visited': {
          color: palette.primary.main,
        },
      },
      colorSecondary: {
        '&:visited': {
          color: palette.secondary.main,
        },
      },
      colorError: {
        '&:visited': {
          color: palette.error.main,
        },
      },
      colorTextPrimary: {
        '&:visited': {
          color: palette.text.primary,
        },
      },
      colorTextSecondary: {
        '&:visited': {
          color: palette.text.secondary,
        },
      },
    },
    MuiSnackbarContent: {
      root: {
        ...typography.body1,
      },
    },
    MuiCircularProgress: {
      colorSecondary: {
        color: palette.common.white,
      },
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: '#dfd8ff',
      },
    },
    MuiSelect: {
      select: {
        '&:focus': { backgroundColor: null },
      },
      selectMenu: {
        minHeight: null,
      },
      icon: {
        color: palette.greyTransparent[70],
        '$disabled &': {
          color: palette.greyTransparent[30],
        },
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: 40,
        lineHeight: typography.pxToRem(28),
        [breakpoints.up('sm')]: null,
        transition: transitions.create('background-color', {
          duration: transitions.duration.shortest,
        }),
        // NOTE: $focusVisible was not working for this component.
        '&:hover, &.Mui-focusVisible': {
          backgroundColor: palette.action.hover,
          outline: 0,
          transition: transitions.create('background-color', { duration: 20 }),
        },
        '&:active': {
          backgroundColor: palette.action.active,
        },
      },
    },
    MuiListSubheader: {
      root: {
        ...typography.overline,
        color: palette.greyTransparent[50],
        lineHeight: typography.pxToRem(28),
        paddingTop: 6,
        paddingBottom: 6,
      },
    },
    MuiListItemIcon: {
      root: {
        color: palette.greyTransparent[50],
        '.Mui-selected &': {
          color: palette.greyTransparent[70],
        },
        '.Mui-disabled &': {
          color: palette.greyTransparent[30],
        },
      },
    },
    MuiAlert: {
      // NOTE: The current designs for this component use legacy Leads colors.
      icon: {
        marginRight: spacing(1),
      },
      standardError: {
        backgroundColor: '#FBEAE5',
        color: palette.grey[100],
        '& $icon': {
          color: palette.grey[80],
        },
      },
      standardWarning: {
        backgroundColor: '#FCF1CD',
        color: palette.grey[100],
        '& $icon': {
          color: palette.grey[80],
        },
      },
      standardInfo: {
        backgroundColor: '#DEECFD',
        color: palette.grey[100],
        '& $icon': {
          color: palette.grey[80],
        },
      },
      standardSuccess: {
        backgroundColor: '#E0F5F5',
        color: palette.grey[100],
        '& $icon': {
          color: palette.grey[80],
        },
      },
      filledError: {
        backgroundColor: '#FBEAE5',
        color: '#330101',
        '& $icon': {
          color: '#BF0711',
        },
      },
      filledWarning: {
        backgroundColor: '#FCF1CD',
        color: '#573B00',
        '& $icon': {
          color: '#9C6F19',
        },
      },
      filledInfo: {
        backgroundColor: '#DEECFD',
        color: '#00044C',
        '& $icon': {
          color: '#00419F',
        },
      },
      filledSuccess: {
        backgroundColor: '#E0F5F5',
        color: '#003135',
        '& $icon': {
          color: '#00848E',
        },
      },
      message: {
        fontSize: typography.pxToRem(15),
        padding: '6px 0',
      },
    },
    MuiBreadcrumbs: {
      root: {
        ...typography.button,
      },
      li: {
        '&:before': {
          content: 'none', // TODO: Remove this override for Lego.
        },
        '& > span': {
          color: palette.greyTransparent[30],
          '&.selected': {
            color: palette.text.primary,
          },
        },
        '& a, & button': {
          color: 'inherit',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          lineHeight: 'inherit',
          letterSpacing: 'inherit',
          textTransform: 'inherit',
          textDecoration: 'none',
          '&:hover, &:focus': {
            transition: transitions.create('color', { duration: 20 }),
            color: palette.primary.main,
            outline: 0,
          },
          '&:active': {
            color: secondaryColors.navy,
          },
        },
        '& button': {
          verticalAlign: 'baseline',
        },
      },
      separator: {
        '&:before': {
          content: 'none', // TODO: Remove this override for Lego.
        },
        color: palette.greyTransparent[40],
        marginLeft: 14,
        marginRight: 14,
      },
    },
    MuiSwitch: {
      switchBase: {
        '&$disabled + $track': {
          opacity: 0.1,
        },
        '&$checked + $track': {
          opacity: 0.4,
        },
      },
      colorPrimary: {
        '&$disabled + $track': {
          backgroundColor: palette.grey[100],
        },
        '&$checked:hover, &$checked.Mui-focusVisible': {
          backgroundColor: `rgba(${hexToRgb(palette.primary.main)}, 0.1) !important`,
        },
        '&$checked:active': {
          backgroundColor: `rgba(${hexToRgb(palette.primary.main)}, 0.2) !important`,
        },
      },
      thumb: {
        boxShadow: shadows[2],
        backgroundColor: palette.common.white,
        '$checked &': {
          backgroundColor: palette.primary.main,
        },
        '$disabled &': {
          backgroundColor: palette.grey[30],
        },
      },
      track: {
        backgroundColor: palette.grey[100],
        opacity: 0.5,
      },
    },
    MuiChip: {
      root: {
        color: palette.common.white,
        backgroundColor: palette.greyTransparent[50],
        borderRadius: shape.borderRadius,
        height: 24,
        lineHeight: typography.pxToRem(24),
      },
      sizeSmall: {
        height: 19,
        lineHeight: typography.pxToRem(19),
        textTransform: 'none',
      },
      label: {
        paddingLeft: 10,
        paddingRight: 10,
      },
      labelSmall: {
        paddingLeft: 7,
        paddingRight: 7,
      },
      colorSecondary: {
        backgroundColor: palette.info.main,
        color: palette.text.primary,
      },
      deleteIcon: {
        width: 20,
        height: 20,
        marginRight: 3,
        color: palette.whiteTransparent[85],
        '&:hover': {
          color: palette.common.white,
        },
      },
      deleteIconSmall: {
        width: 15,
        height: 15,
      },
      deleteIconColorPrimary: {
        color: palette.whiteTransparent[85],
      },
      deleteIconColorSecondary: {
        color: palette.greyTransparent[70],
        '&:hover': {
          color: palette.text.primary,
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: `1px solid ${palette.grey[10]}`,
        paddingTop: 19,
        paddingLeft: spacing(3),
        paddingBottom: 19,
        paddingRight: spacing(3),
      },
      head: {
        ...typography.label,
        lineHeight: typography.pxToRem(21),
      },
      body: {
        lineHeight: typography.pxToRem(20),
      },
    },
    MuiTableRow: {
      hover: {
        '&[class*="Mui-selected"]': {
          backgroundColor: palette.action.selected,
          '&:hover': {
            backgroundColor: palette.action.selected,
          },
        },
      },
    },
    MuiTablePagination: {
      toolbar: {
        // Custom class override to adjust left alignment of pagination controls on dense tables.
        '.selectable-rows:not([class*="MuiTableCell-sizeSmall"]) &': {
          paddingLeft: 16,
        },
      },
      spacer: {
        // Custom class override to allow left alignment of pagination controls within a table footer.
        '.align-left &': {
          display: 'none',
        },
      },
      actions: {
        color: palette.greyTransparent[60],
      },
    },
    MuiPaper: {
      root: {
        // A hack to fix Safari box-shadow issues when Paper is the child of a Popper.
        // TODO: Can remove when this issue is fixed: https://github.com/mui-org/material-ui/issues/20593
        willChange: 'transform',
      },
    },
  };
};
