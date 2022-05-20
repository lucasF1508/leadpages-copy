export default theme => {
  const { typography } = theme;
  const { fontWeightBold, fontWeightMedium, fontWeightRegular, pxToRem } = typography;

  const valueSerif = ['Value Serif', 'Georgia', 'serif'].join(',');
  const spaceMono = ['Space Mono', 'monospace'].join(',');

  return {
    fontFamily: [
      'Apercu Pro',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: pxToRem(30),
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(46),
    },
    h2: {
      fontSize: pxToRem(26),
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(40),
    },
    h3: {
      fontSize: pxToRem(22),
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(36),
    },
    h4: {
      fontSize: pxToRem(18),
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(30),
    },
    h5: {
      fontSize: pxToRem(16),
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(24),
    },
    h6: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(20),
    },
    subtitle1: {
      fontSize: pxToRem(22),
      lineHeight: pxToRem(36),
      fontWeight: fontWeightRegular,
    },
    subtitle2: {
      fontSize: pxToRem(18),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(30),
    },
    body1: {
      fontSize: pxToRem(16),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(24),
    },
    body2: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(20),
    },
    button: {
      fontSize: pxToRem(16),
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(24),
      textTransform: 'none',
    },
    label: {
      fontSize: pxToRem(16),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(24),
    },
    caption: {
      fontSize: pxToRem(12),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(18),
    },
    overline: {
      fontFamily: spaceMono,
      fontSize: pxToRem(12),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(18),
      letterSpacing: pxToRem(2),
    },
    overline2: {
      fontSize: pxToRem(12),
      fontWeight: fontWeightMedium,
      letterSpacing: pxToRem(2),
      lineHeight: pxToRem(18),
    },

    // Value-Serif Defs
    // VSTypography component uses these
    valueSerif: {
      h1: {
        fontFamily: valueSerif,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(72),
        lineHeight: pxToRem(80),
        letterSpacing: pxToRem(-1),
      },
      h2: {
        fontFamily: valueSerif,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(56),
        lineHeight: pxToRem(60),
        letterSpacing: pxToRem(-0.75),
      },
      h3: {
        fontFamily: valueSerif,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(40),
        lineHeight: pxToRem(48),
        letterSpacing: pxToRem(-0.5),
      },
      h4: {
        fontFamily: valueSerif,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(30),
        lineHeight: pxToRem(36),
        letterSpacing: pxToRem(-0.1),
      },
      h5: {
        fontFamily: valueSerif,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(24),
        lineHeight: pxToRem(36),
        letterSpacing: pxToRem(-0.1),
      },
      // NOTE: H6 currently undefined
    },
  };
};
