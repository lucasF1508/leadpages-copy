import sharedPalette from '../shared/palette';
import { warmGreyscaleColors, warmGreyscaleTransparentColors } from '../colors';

export default {
  ...sharedPalette,
  action: {
    active: warmGreyscaleTransparentColors[8],
    hover: warmGreyscaleTransparentColors[4],
    hoverOpacity: 0.04,
    selected: warmGreyscaleTransparentColors[8],
    selectedOpacity: 0.08,
    disabled: warmGreyscaleTransparentColors[30],
    disabledBackground: warmGreyscaleTransparentColors[10],
    disabledOpacity: 0.3,
    focus: warmGreyscaleTransparentColors[10],
    focusOpacity: 0.1,
    activatedOpacity: 0.1,
  },
  divider: warmGreyscaleTransparentColors[10],
  secondary: {
    main: warmGreyscaleColors[4],
    light: warmGreyscaleColors[4],
    dark: warmGreyscaleColors[10],
    contrastText: warmGreyscaleColors[70],
  },
  text: {
    primary: warmGreyscaleColors[100],
    secondary: warmGreyscaleTransparentColors[60],
    disabled: warmGreyscaleTransparentColors[30],
    hint: warmGreyscaleTransparentColors[30],
  },
  grey: {
    ...warmGreyscaleColors,
  },
  greyTransparent: {
    ...warmGreyscaleTransparentColors,
  },
};
