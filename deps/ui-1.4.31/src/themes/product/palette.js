import sharedPalette from '../shared/palette';
import { primaryColors, coolGreyscaleColors, coolGreyscaleTransparentColors } from '../colors';

export default {
  ...sharedPalette,
  action: {
    active: coolGreyscaleTransparentColors[8],
    hover: coolGreyscaleTransparentColors[4],
    hoverOpacity: 0.04,
    selected: coolGreyscaleTransparentColors[8],
    selectedOpacity: 0.08,
    disabled: coolGreyscaleTransparentColors[30],
    disabledBackground: coolGreyscaleTransparentColors[10],
    disabledOpacity: 0.3,
    focus: coolGreyscaleTransparentColors[10],
    focusOpacity: 0.1,
    activatedOpacity: 0.1,
  },
  divider: coolGreyscaleTransparentColors[10],
  secondary: {
    main: coolGreyscaleColors[5],
    light: coolGreyscaleColors[5],
    dark: coolGreyscaleColors[10],
    contrastText: primaryColors.indigo,
  },
  text: {
    primary: coolGreyscaleColors[100],
    secondary: coolGreyscaleTransparentColors[60],
    disabled: coolGreyscaleTransparentColors[30],
    hint: coolGreyscaleTransparentColors[30],
  },
  grey: {
    ...coolGreyscaleColors,
  },
  greyTransparent: {
    ...coolGreyscaleTransparentColors,
  },
};
