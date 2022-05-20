import { secondaryColors } from '../colors';

// Apercu Pro Baseline Fix
// Needed because web version of Apercu Font has a baseline that is slightly offset.
// https://stuffandnonsense.co.uk/blog/improve_your_web_typography_with_baseline_shift
const baselineShift = {
  position: 'relative',
  top: '0.09em',
};

const SMALL_BUTTON_VERTICAL_PADDING = 6;
const SMALL_BUTTON_HORIZONTAL_PADDING = 24;
const smallButtonStyles = typography => ({
  fontSize: typography.pxToRem(14),
  padding: `${SMALL_BUTTON_VERTICAL_PADDING}px ${SMALL_BUTTON_HORIZONTAL_PADDING}px`,
  borderRadius: 24,
});

const MEDIUM_BUTTON_VERTICAL_PADDING = 12;
const MEDIUM_BUTTON_HORIZONTAL_PADDING = 36;
const mediumButtonStyles = typography => ({
  padding: `${MEDIUM_BUTTON_VERTICAL_PADDING}px ${MEDIUM_BUTTON_HORIZONTAL_PADDING}px`,
  borderRadius: 24,
});

const LARGE_BUTTON_VERTICAL_PADDING = 16;
const LARGE_BUTTON_HORIZONTAL_PADDING = 36;
const largeButtonStyles = typography => ({
  fontSize: typography.pxToRem(18),
  padding: `${LARGE_BUTTON_VERTICAL_PADDING}px ${LARGE_BUTTON_HORIZONTAL_PADDING}px`,
  borderRadius: 28,
});

const OUTLINE_BUTTON_BORDER_WIDTH = 3;

export default ({ palette, typography }) => ({
  MuiButton: {
    root: {
      ...mediumButtonStyles(typography),
    },
    text: {
      ...mediumButtonStyles(typography),
    },
    outlinedPrimary: {
      padding: `
        ${MEDIUM_BUTTON_VERTICAL_PADDING - OUTLINE_BUTTON_BORDER_WIDTH}px
        ${MEDIUM_BUTTON_HORIZONTAL_PADDING - OUTLINE_BUTTON_BORDER_WIDTH}px
      `,
      border: `${OUTLINE_BUTTON_BORDER_WIDTH}px solid ${palette.primary.lightAlt}`,
      '&:hover, &$focusVisible': {
        backgroundColor: palette.primary.dark,
        border: `3px solid ${palette.primary.dark}`,
      },
      '&:hover $label, &$focusVisible $label': {
        color: palette.common.white,
      },
      '&:active': {
        backgroundColor: secondaryColors.navy,
        border: `${OUTLINE_BUTTON_BORDER_WIDTH}px solid ${secondaryColors.navy}`,
        color: palette.common.white,
      },
      '&$disabled': {
        border: `${OUTLINE_BUTTON_BORDER_WIDTH}px solid ${palette.primary.lightAlt}`,
        color: palette.primary.main,
      },
      '&$disabled $label': {
        opacity: 0.5,
      },
    },
    /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
    containedSizeSmall: {
      ...smallButtonStyles(typography),
    },
    textSizeSmall: {
      ...smallButtonStyles(typography),
    },
    /* Styles applied to the root element if `size="large"` and `variant="contained". */
    containedSizeLarge: {
      ...largeButtonStyles(typography),
    },
    textSizeLarge: {
      ...largeButtonStyles(typography),
    },
    /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
    outlinedSizeSmall: {
      ...smallButtonStyles(typography),
      padding: `
        ${SMALL_BUTTON_VERTICAL_PADDING - OUTLINE_BUTTON_BORDER_WIDTH}px
        ${SMALL_BUTTON_HORIZONTAL_PADDING - OUTLINE_BUTTON_BORDER_WIDTH}px
      `,
    },
    /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
    outlinedSizeLarge: {
      ...largeButtonStyles(typography),
      padding: `
      ${LARGE_BUTTON_VERTICAL_PADDING - OUTLINE_BUTTON_BORDER_WIDTH}px
      ${LARGE_BUTTON_HORIZONTAL_PADDING - OUTLINE_BUTTON_BORDER_WIDTH}px
    `,
    },
  },
  MuiFormLabel: {
    root: {
      ...baselineShift,
    },
  },
  MuiInputBase: {
    input: {
      ...baselineShift,
    },
  },
  MuiAlert: {
    message: {
      padding: '9px 0 6px',
    },
  },
  MuiChip: {
    root: {
      ...typography.overline,
    },
  },
});
