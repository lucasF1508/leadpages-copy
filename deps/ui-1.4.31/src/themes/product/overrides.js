import { secondaryColors } from '../colors';

const MEDIUM_BUTTON_VERTICAL_PADDING = 8;
const MEDIUM_BUTTON_HORIZONTAL_PADDING = 16;
const mediumButtonStyles = () => ({
  padding: `${MEDIUM_BUTTON_VERTICAL_PADDING}px ${MEDIUM_BUTTON_HORIZONTAL_PADDING}px`,
});

const LARGE_BUTTON_VERTICAL_PADDING = 14;
const LARGE_BUTTON_HORIZONTAL_PADDING = 24;
const largeButtonStyles = typography => ({
  fontSize: typography.pxToRem(15),
  padding: `${LARGE_BUTTON_VERTICAL_PADDING}px ${LARGE_BUTTON_HORIZONTAL_PADDING}px`,
});

const OUTLINE_BUTTON_BORDER_WIDTH = 1;

export default ({ theme, variant }) => {
  const { palette, shadows, typography } = theme;

  return {
    MuiButton: {
      root: {
        ...mediumButtonStyles(),
      },
      text: {
        ...mediumButtonStyles(),
      },
      outlinedPrimary: {
        padding: `
          ${MEDIUM_BUTTON_VERTICAL_PADDING - OUTLINE_BUTTON_BORDER_WIDTH}px
          ${MEDIUM_BUTTON_HORIZONTAL_PADDING - OUTLINE_BUTTON_BORDER_WIDTH}px
        `,
        border: `${OUTLINE_BUTTON_BORDER_WIDTH}px solid ${palette.primary.main}`,
        '&:hover, &$focusVisible': {
          backgroundColor: palette.primary.dark,
          border: `1px solid ${palette.primary.dark}`,
        },
        '&:hover $label, &$focusVisible $label': {
          color: palette.common.white,
        },
        '&:active': {
          backgroundColor: secondaryColors.navy,
          border: `${OUTLINE_BUTTON_BORDER_WIDTH}px solid ${palette.primary.dark}`,
          color: palette.common.white,
        },
        '&$disabled': {
          border: `${OUTLINE_BUTTON_BORDER_WIDTH}px solid ${palette.primary.light}`,
          color: palette.primary.light,
        },
      },
      /* Styles applied to the root element if `size="large"` and `variant="contained". */
      containedSizeLarge: {
        ...largeButtonStyles(typography),
      },
      /* Styles applied to the root element if `size="large"` and `variant="text". */
      textSizeLarge: {
        ...largeButtonStyles(typography),
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
    MuiChip: {
      root: {
        fontSize: typography.pxToRem(14),
        fontWeight: 600,
      },
      sizeSmall: {
        fontSize: typography.pxToRem(13),
      },
    },
    ...(variant === 'dark' && {
      MuiTooltip: {
        tooltip: {
          backgroundColor: palette.common.white,
          color: palette.text.primary,
          boxShadow: shadows[1],
        },
      },
    }),
  };
};
