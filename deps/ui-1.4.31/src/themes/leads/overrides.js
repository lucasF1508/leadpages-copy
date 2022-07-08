import { legacyColors, whiteTransparentColors } from '../colors';
import { hexToRgb } from '../../utils/color';
import { lighten } from '@material-ui/core/styles';

const checkboxAndRadioStyles = spacing => ({
  root: {
    margin: spacing(0, 0.5),
    padding: spacing(0, 1),
  },
  colorPrimary: {
    color: whiteTransparentColors[60],
    '&$disabled': {
      color: whiteTransparentColors[30],
    },
  },
});

const sharedButtonStyles = palette => ({
  '&:active': {
    backgroundColor: palette.primary.light,
    borderColor: palette.primary.light,
    color: whiteTransparentColors[100],
  },
  '&:hover': {
    backgroundColor: legacyColors.blueLightAccent,
    borderColor: legacyColors.blueLightAccent,
    color: whiteTransparentColors[100],
  },
});

export default ({ palette, shape, spacing, transitions, typography, shadows }) => ({
  MuiTooltip: {
    tooltip: {
      color: palette.text.primary,
      backgroundColor: palette.common.white,
      fontSize: typography.pxToRem(13),
      borderRadius: 3,
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0px 6px 0px, rgba(0, 0, 0, 0.25) 0px 8px 10px 0px',
      padding: '11px 20px',
    },
    arrow: {
      color: palette.common.white,
    },
  },
  MuiInputBase: {
    root: {
      minHeight: typography.pxToRem(36),
    },
  },
  MuiInputAdornment: {
    filled: {
      color: whiteTransparentColors[60],
      '&$positionStart, &$positionEnd': {
        color: whiteTransparentColors[60],
        '& button, & p': {
          color: whiteTransparentColors[60],
        },
      },
    },
  },
  MuiFilledInput: {
    root: {
      backgroundColor: whiteTransparentColors[18],
      border: '1px solid transparent',
      color: palette.common.white,

      '&$focused': {
        backgroundColor: `${whiteTransparentColors[18]}!important`,
        border: `1px solid ${palette.primary.light}`,
      },
      '&:hover:not($disabled)': {
        backgroundColor: whiteTransparentColors[25],
      },
      '&$disabled': {
        backgroundColor: whiteTransparentColors[18],
        color: whiteTransparentColors[30],
      },
      '&$error': {
        borderColor: palette.danger.main,
      },
    },
    colorSecondary: {
      backgroundColor: whiteTransparentColors[100],
      borderColor: palette.secondary.dark,
      color: palette.text.primary,
      '&$focused': {
        borderColor: palette.primary.main,
        backgroundColor: `${whiteTransparentColors[100]}!important`,
      },
      '&:hover:not(&$disabled)': {
        borderColor: palette.primary.main,
        backgroundColor: whiteTransparentColors[100],
      },
      '&$disabled': {
        color: palette.greyTransparent[40],
      },
      '& $input': {
        '&::placeholder, &::-webkit-input-placeholder': {
          color: legacyColors.greyDark,
        },
        '&$disabled': {
          '&::placeholder, &::-webkit-input-placeholder': {
            color: palette.greyTransparent[40],
          },
        },
      },
      '& + [class*="MuiFormHelperText-root"]': {
        color: legacyColors.greyDark,
      },
      '&$disabled + [class*="MuiFormHelperText-root"]': {
        color: palette.greyTransparent[40],
      },
    },
    input: {
      padding: '5px 12px',
      '&::placeholder, &::-webkit-input-placeholder': {
        color: whiteTransparentColors[60],
      },
      '&$disabled': {
        '&::placeholder, &::-webkit-input-placeholder': {
          color: whiteTransparentColors[30],
        },
      },
    },
    inputMultiline: {
      padding: '5px 12px',
    },
  },
  MuiFormControlLabel: {
    root: {
      marginBottom: spacing(2),
      '& [class*="Mui-checked"] + [class*="MuiFormControlLabel-label"]': {
        color: whiteTransparentColors[100],
      },
      '& [class*="Mui-checked"][class*="Mui-disabled"] + [class*="MuiFormControlLabel-label"]': {
        color: whiteTransparentColors[30],
      },
    },
    label: {
      fontSize: typography.pxToRem(15),
      lineHeight: typography.pxToRem(24),
      color: whiteTransparentColors[80],
      '&$disabled': {
        color: whiteTransparentColors[30],
      },
    },
  },
  MuiFormHelperText: {
    root: {
      color: whiteTransparentColors[60],
      '&$disabled': {
        color: whiteTransparentColors[30],
      },
      '&$error, &$focused$error': {
        color: palette.danger.main,
      },
    },
  },
  MuiFormLabel: {
    root: {
      color: whiteTransparentColors[80],
      '&$focused': {
        color: whiteTransparentColors[80],
      },
      '&$disabled': {
        color: whiteTransparentColors[30],
      },
      '&$error, &$focused$error': {
        color: palette.danger.main,
      },
    },
    colorSecondary: {
      color: palette.text.primary,
      '&$focused': {
        color: palette.text.primary,
      },
      '&$disabled': {
        color: palette.greyTransparent[40],
      },
    },
  },
  MuiButton: {
    containedPrimary: {
      ...sharedButtonStyles(palette),
      '&$disabled': {
        backgroundColor: palette.primary.main,
        color: whiteTransparentColors[100],
        opacity: 0.4,
      },
    },
    outlinedPrimary: {
      ...sharedButtonStyles(palette),
      '&$disabled': {
        borderColor: palette.primary.main,
        color: palette.primary.main,
        opacity: 0.6,
      },
    },
    textPrimary: {
      '&:active': {
        backgroundColor: whiteTransparentColors[18],
        color: `${palette.primary.light}!important`,
      },
      '&:hover': {
        backgroundColor: `${whiteTransparentColors[18]}!important`,
        color: `${legacyColors.blueLightAccent}!important`,
      },
      '&$disabled': {
        opacity: 0.6,
      },
    },
  },
  MuiIconButton: {
    root: {
      color: whiteTransparentColors[60],
      '&:hover, &:active': {
        backgroundColor: whiteTransparentColors[18],
      },
      '&$disabled': {
        color: whiteTransparentColors[30],
      },
    },
  },
  MuiListItem: {
    gutters: {
      paddingLeft: spacing(2), // Keeps lists in alignment with inputs.
      paddingRight: spacing(2), // Keeps lists in alignment with inputs.
    },
  },
  MuiCheckbox: {
    ...checkboxAndRadioStyles(spacing),
  },
  MuiRadio: {
    ...checkboxAndRadioStyles(spacing),
  },
  MuiSelect: {
    iconFilled: {
      color: palette.secondary.dark,
      '&$disabled': {
        color: whiteTransparentColors[30],
      },
    },
  },
  MuiListSubheader: {
    root: {
      color: palette.common.white,
    },
  },
  MuiTabs: {
    root: {
      backgroundColor: 'inherit',
      minHeight: 0,
    },
  },
  MuiTab: {
    root: {
      padding: 0,
      '&:not($fullWidth)': {
        '&:not(:first-child)': {
          marginLeft: spacing(1),
        },

        '&:not(:last-child)': {
          marginRight: spacing(1),
        },
      },
    },
    textColorPrimary: {
      color: legacyColors.greyDark,
      '&$selected': {
        color: palette.common.white,
      },
      '&:hover:not($selected), &:focus:not($selected), &:active:not($selected)': {
        backgroundColor: 'transparent',
        transition: 'none',
      },
    },
  },
  MuiMenu: {
    paper: {
      backgroundColor: legacyColors.blueGrey,
    },
  },
  MuiMenuItem: {
    root: {
      color: palette.common.white,
      paddingTop: 1,
      paddingBottom: 0,
      '&[class*=selected][class*=focusVisible]': {
        backgroundColor: whiteTransparentColors[8],
      },
    },
  },
  MuiPopover: {
    root: {
      zIndex: '2001 !important', // Equal to nestedZIndex.floatingWidgetOptions.select.value
    },
  },
  MuiAutocomplete: {
    popper: {
      backgroundColor: whiteTransparentColors[18],
      borderRadius: shape.borderRadius,
      marginTop: spacing(1),
    },
    paper: {
      backgroundColor: legacyColors.blueGrey,
      margin: 0,
    },
    option: {
      backgroundColor: 'transparent',
      color: palette.common.white,
      '&[aria-selected="true"]': {
        backgroundColor: whiteTransparentColors[8],
        '&[data-focus="true"]': {
          backgroundColor: whiteTransparentColors[8],
        },
      },
    },
    input: {
      '&:focus': {
        border: 'none',
      },
    },
    inputRoot: {
      '&$focused': {
        border: `1px solid ${palette.primary.light}`,
      },
      '&[class*="MuiFilledInput-root"]': {
        paddingTop: 0,
        paddingLeft: 0,
        '& $input': {
          padding: spacing(0, 2),
        },
      },
    },
    noOptions: {
      color: whiteTransparentColors[60],
    },
    clearIndicator: {
      color: 'currentColor',
    },
    popupIndicator: {
      color: palette.secondary.dark,
      padding: '2px 0',
      '&:hover, &:focus': {
        backgroundColor: 'transparent',
      },
    },
    listbox: {
      padding: `${spacing(1)}px 0`,
      '& > li:first-child > [class*="groupLabel"]': {
        paddingTop: spacing(1),
      },
    },
    groupLabel: {
      backgroundColor: 'transparent',
      borderBottom: `1px solid ${whiteTransparentColors[5]}`,
      color: whiteTransparentColors[80],
      fontSize: typography.pxToRem(10),
      fontWeight: typography.fontWeightBold,
      lineHeight: typography.pxToRem(16),
      marginBottom: spacing(1),
      paddingBottom: spacing(1),
      paddingTop: spacing(2),
    },
  },
  MuiToggleButtonGroup: {
    groupedHorizontal: {
      '&:not(:first-child)': {
        borderLeftColor: legacyColors.blueMediumDark,
      },
    },
  },
  MuiToggleButton: {
    root: {
      ...typography.button,
      backgroundColor: 'transparent',
      border: 'none',
      color: palette.secondary.dark,
      padding: spacing(1),
      marginRight: spacing(1),
      transition: transitions.create('background-color', {
        duration: transitions.duration.shortest,
      }),
      '&:last-of-type': {
        marginRight: 0,
      },
      '&:hover, &:focus': {
        backgroundColor: palette.action.hover,
      },
      '&$disabled': {
        color: palette.action.disabled,
      },
      '&$selected': {
        backgroundColor: whiteTransparentColors[18],
        color: palette.common.white,
        '&:focus': {
          backgroundColor: whiteTransparentColors[18],
        },
        '&:hover, &:hover:focus': {
          backgroundColor: whiteTransparentColors[25],
        },
      },
      '&[class*="MuiToggleButtonGroup-grouped"]': {
        border: `1px solid ${legacyColors.blueMediumDark}`,
        marginRight: 0,
        paddingLeft: 7,
        paddingRight: 7,
        '&[class*="selected"]': {
          borderBottom: `3px solid ${palette.primary.light}`,
          paddingTop: 7,
          paddingBottom: 5,
        },
      },
    },
    sizeLarge: {
      '&[class*="MuiToggleButtonGroup-grouped"]': {
        padding: '8px 16px',
      },
    },
  },
  MuiSlider: {
    root: {
      height: 4,
    },
    thumbColorPrimary: {
      color: palette.common.white,
      width: 16,
      height: 16,
      transform: 'translateY(calc(-50% + 2px)) translateX(-50%)',
      marginTop: 0,
      marginLeft: 0,
      boxShadow: 'none',

      '&:hover, &.Mui-focusVisible': {
        boxShadow: 'none !important',
      },
    },
    active: {
      boxShadow: 'none !important',
    },
    track: {
      color: palette.primary.light,
      height: 4,
      borderRadius: 6,
    },
    rail: {
      height: 4,
      borderRadius: 6,
      backgroundColor: whiteTransparentColors[60],
      opacity: 1,
    },
  },
  MuiSwitch: {
    switchBase: {
      '&$checked + $track': {
        opacity: 1,
      },
    },
    colorPrimary: {
      '&$disabled + $track': {
        backgroundColor: whiteTransparentColors[30],
        opacity: 1,
      },
      '&$checked:hover, &$checked.Mui-focusVisible': {
        backgroundColor: `${lighten(
          `rgba(${hexToRgb(legacyColors.blueLighter)}, 0.4))`,
          0.4,
        )} !important`,
      },
      '&$checked:active': {
        backgroundColor: palette.primary.main,
      },
    },
    thumb: {
      boxShadow: shadows[2],
      backgroundColor: palette.common.white,
      '$checked &': {
        backgroundColor: lighten(palette.primary.main, 0.75),
      },
      '$disabled &': {
        backgroundColor: lighten(legacyColors.blueGrey, 0.4),
      },
    },
    track: {
      backgroundColor: whiteTransparentColors[60],
      opacity: 1,
    },
  },
});
