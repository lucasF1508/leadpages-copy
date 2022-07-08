export const primaryColors = {
  indigo: '#603eff',
  indigoLight: '#bfb5ff',
  indigoLightAlt: '#d1c6f9',
  indigoDark: '#4D32CC',
  teal: '#43e0f0',
  tealLight: '#8fefef',
  orange: '#f65b1c',
  orangeLight: '#ff7d5a',
  forest: '#4d7523',
  forestLight: '#759b4e',
  terraCotta: '#e28f44',
  terraCottaLight: '#dfae78',
  greyLight: '#f8fbfc',
  white: '#ffffff',
};

// Secondary colors should always be used to support the primary palette.
export const secondaryColors = {
  tan: '#f4e3cc',
  tanLight: '#fef9f1',
  brown: '#6b4e2f',
  brownLight: '#b27e52',
  pink: '#ffdcee',
  pinkLight: '#fcedf5',
  navy: '#0b236d',
};

// Legacy colors
// Full copy of @lp/leads/Color with a few additions
export const legacyColors = {
  blueDarkerAccent: '#202365',
  blueDarker: '#00044c',
  blueDark: '#00419f',
  blue: '#0069ff',
  blueLightAccent: '#237DFF',
  blueLight: '#4692ff',
  blueLighter: '#deecfd',
  blueGrey: '#2c316b',
  blueMediumDark: '#474C80',

  greenDarker: '#003135',
  greenDark: '#00848e',
  green: '#47c1bf',
  greenLight: '#b7ecec',
  greenLighter: '#e0f5f5',

  redDarker: '#330101',
  redDark: '#bf0711',
  red: '#ed6347',
  redLight: '#feaf9a',
  redLighter: '#fbeae5',
  redAccent: '#FF0000',

  yellowDarker: '#573b00',
  yellowDark: '#9c6f19',
  yellow: '#eec200',
  yellowLight: '#ffea8a',
  yellowLighter: '#fcf1cd',

  purpleDarker: '#24235b',
  purpleDark: '#43418c',
  purple: '#5e5cc4',
  purpleLight: '#a09ee8',
  purpleLighter: '#dad9ff',

  greyDarker: '#4c515d',
  greyDark: '#797f89',
  grey: '#b1bacc',
  greyLight: '#e4e7ed',
  greyLighter: '#f2f4f7',
};

export const whiteRGB = '255, 255, 255';
export const whiteTransparentColors = {
  100: `rgba(${whiteRGB}, 1)`,
  90: `rgba(${whiteRGB}, 0.9)`,
  85: `rgba(${whiteRGB}, 0.85)`,
  80: `rgba(${whiteRGB}, 0.8)`,
  70: `rgba(${whiteRGB}, 0.7)`,
  60: `rgba(${whiteRGB}, 0.6)`,
  50: `rgba(${whiteRGB}, 0.5)`,
  40: `rgba(${whiteRGB}, 0.4)`,
  30: `rgba(${whiteRGB}, 0.3)`,
  25: `rgba(${whiteRGB}, 0.25)`,
  20: `rgba(${whiteRGB}, 0.2)`,
  18: `rgba(${whiteRGB}, 0.18)`,
  10: `rgba(${whiteRGB}, 0.1)`,
  8: `rgba(${whiteRGB}, 0.08)`,
  5: `rgba(${whiteRGB}, 0.05)`,
  4: `rgba(${whiteRGB}, 0.04)`,
  0: `rgba(${whiteRGB}, 0)`,
};

// Warm Greyscale palette is for the Marketing theme.
// Should be used for text, device borders, shape graphics, and backgrounds.
export const warmGreyscaleColors = {
  100: '#0f0c09', // for display headlines and subheads.
  70: '#575452', // for paragraphs or body copy, and device or screen outlines.
  50: '#878584', // for inactive tabs
  25: '#c3c2c1', // for disabled links & shape graphics.
  10: '#e7e6e6', // for shape graphics.
  4: '#f7f7f7', // for section backgrounds.
  0: '#ffffff',
};

export const warmGreyscaleRGB = '15, 12, 9';
export const warmGreyscaleTransparentColors = {
  100: `rgba(${warmGreyscaleRGB}, 1)`,
  90: `rgba(${warmGreyscaleRGB}, 0.9)`,
  80: `rgba(${warmGreyscaleRGB}, 0.8)`,
  70: `rgba(${warmGreyscaleRGB}, 0.7)`,
  60: `rgba(${warmGreyscaleRGB}, 0.6)`,
  50: `rgba(${warmGreyscaleRGB}, 0.5)`,
  40: `rgba(${warmGreyscaleRGB}, 0.4)`,
  30: `rgba(${warmGreyscaleRGB}, 0.3)`,
  20: `rgba(${warmGreyscaleRGB}, 0.2)`,
  14: `rgba(${warmGreyscaleRGB}, 0.14)`,
  10: `rgba(${warmGreyscaleRGB}, 0.1)`,
  8: `rgba(${warmGreyscaleRGB}, 0.08)`,
  5: `rgba(${warmGreyscaleRGB}, 0.05)`,
  4: `rgba(${warmGreyscaleRGB}, 0.04)`,
  0: `rgba(${warmGreyscaleRGB}, 0)`,
};

// Cool Greyscale palette is for the Product theme.
// Should be used for text, device borders, shape graphics, and backgrounds.
export const coolGreyscaleColors = {
  100: '#090c12',
  90: '#212429',
  80: '#3a3d41',
  70: '#525459',
  60: '#6b6d71',
  50: '#848588',
  40: '#9d9ea0',
  30: '#b5b6b7',
  20: '#cecfd0',
  10: '#e6e7e7',
  5: '#f3f3f3',
  0: '#ffffff',
};

export const coolGreyscaleRGB = '9, 12, 18';
export const coolGreyscaleTransparentColors = {
  100: `rgba(${coolGreyscaleRGB}, 1)`,
  90: `rgba(${coolGreyscaleRGB}, 0.9)`,
  80: `rgba(${coolGreyscaleRGB}, 0.8)`,
  70: `rgba(${coolGreyscaleRGB}, 0.7)`,
  60: `rgba(${coolGreyscaleRGB}, 0.6)`,
  50: `rgba(${coolGreyscaleRGB}, 0.5)`,
  40: `rgba(${coolGreyscaleRGB}, 0.4)`,
  30: `rgba(${coolGreyscaleRGB}, 0.3)`,
  20: `rgba(${coolGreyscaleRGB}, 0.2)`,
  10: `rgba(${coolGreyscaleRGB}, 0.1)`,
  8: `rgba(${coolGreyscaleRGB}, 0.08)`,
  5: `rgba(${coolGreyscaleRGB}, 0.05)`,
  4: `rgba(${coolGreyscaleRGB}, 0.04)`,
  0: `rgba(${coolGreyscaleRGB}, 0)`,
};
