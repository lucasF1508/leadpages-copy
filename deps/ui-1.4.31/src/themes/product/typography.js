export default theme => {
  const { typography } = theme;
  const { fontWeightRegular, fontWeightBold, pxToRem } = typography;
  const fontWeightSemiBold = 600;

  return {
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    fontWeightSemiBold,
    h1: {
      fontSize: pxToRem(40),
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(56),
      letterSpacing: pxToRem(-0.7),
    },
    h2: {
      fontSize: pxToRem(32),
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(44),
      letterSpacing: pxToRem(-0.5),
    },
    h3: {
      fontSize: pxToRem(24),
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(32),
      letterSpacing: pxToRem(-0.3),
    },
    h4: {
      fontSize: pxToRem(18),
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(30),
      letterSpacing: pxToRem(-0.1),
    },
    h5: {
      fontSize: pxToRem(16),
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(24),
    },
    h6: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(24),
    },
    subtitle1: {
      fontSize: pxToRem(17),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(28),
    },
    subtitle2: {
      fontSize: pxToRem(15),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(24),
    },
    body1: {
      fontSize: pxToRem(15),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(24),
    },
    body2: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(24),
    },
    button: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightSemiBold,
      lineHeight: pxToRem(20),
      letterSpacing: pxToRem(1),
    },
    label: {
      fontSize: pxToRem(13),
      fontWeight: fontWeightSemiBold,
      lineHeight: pxToRem(20),
    },
    caption: {
      fontSize: pxToRem(13),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(20),
    },
    overline: {
      fontSize: pxToRem(12),
      fontWeight: fontWeightSemiBold,
      lineHeight: pxToRem(20),
      letterSpacing: pxToRem(1),
    },
  };
};
