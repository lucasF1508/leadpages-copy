import { legacyColors, primaryColors, whiteTransparentColors } from '../colors';

export default {
  primary: {
    main: primaryColors.indigo,
    light: primaryColors.indigoLight,
    lightAlt: primaryColors.indigoLightAlt,
    dark: primaryColors.indigoDark,
    contrastText: primaryColors.white,
  },
  legacy: {
    ...legacyColors,
  },
  info: {
    main: primaryColors.teal,
    light: primaryColors.tealLight,
    contrastText: primaryColors.white,
  },
  success: {
    main: primaryColors.forest,
    light: primaryColors.forestLight,
    contrastText: primaryColors.white,
  },
  warning: {
    main: primaryColors.terraCotta,
    light: primaryColors.terraCottaLight,
    contrastText: primaryColors.white,
  },
  danger: {
    main: primaryColors.orange,
    light: primaryColors.orangeLight,
    contrastText: primaryColors.white,
  },
  whiteTransparent: {
    ...whiteTransparentColors,
  },
};
