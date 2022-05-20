import sharedPalette from '../shared/palette';
import {
  legacyColors,
  coolGreyscaleColors,
  coolGreyscaleTransparentColors,
  whiteTransparentColors,
} from '../colors';

export default {
  ...sharedPalette,
  action: {
    active: whiteTransparentColors[8],
    hover: whiteTransparentColors[4],
    hoverOpacity: 0.04,
    selected: whiteTransparentColors[8],
    selectedOpacity: 0.08,
    disabled: whiteTransparentColors[30],
    disabledBackground: whiteTransparentColors[10],
    disabledOpacity: 0.3,
    focus: whiteTransparentColors[10],
    focusOpacity: 0.1,
    activatedOpacity: 0.1,
  },
  primary: {
    light: legacyColors.blueLight,
    main: legacyColors.blue,
    dark: legacyColors.blueDark,
    contrastText: sharedPalette.primary.contrastText,
  },
  secondary: {
    light: legacyColors.greyLighter,
    main: legacyColors.greyLight,
    dark: legacyColors.grey,
    contrastText: legacyColors.greyDarker,
  },
  text: {
    primary: legacyColors.greyDarker,
    secondary: legacyColors.grey,
  },
  danger: {
    main: legacyColors.red,
    light: legacyColors.redLight,
    contrastText: sharedPalette.primary.contrastText,
  },
  grey: {
    ...coolGreyscaleColors,
  },
  greyTransparent: {
    ...coolGreyscaleTransparentColors,
  },
  divider: whiteTransparentColors[18], // Equates to rgba(177,186,204,0.25)
};
