export default theme => {
  const { typography } = theme;
  const { fontWeightLight, fontWeightRegular, fontWeightBold, pxToRem } = typography;

  return {
    fontFamily: ['Akkurat'],
    letterSpacing: 0,
    h1: {
      fontSize: pxToRem(30),
      fontWeight: fontWeightLight,
      lineHeight: pxToRem(48),
    },
    h2: {
      fontSize: pxToRem(24),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(36),
    },
    h3: {
      fontSize: pxToRem(21),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(24),
    },
    h4: {
      fontSize: pxToRem(17),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(30),
    },
    h5: {
      fontSize: pxToRem(15),
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(24),
    },
    body1: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(19),
    },
    body2: {
      fontSize: pxToRem(13),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(18),
    },
    button: {
      fontSize: pxToRem(14),
      fontWeight: 600,
      letterSpacing: 1,
      lineHeight: pxToRem(19),
    },
    label: {
      fontSize: pxToRem(15),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(24),
    },
    caption: {
      fontSize: pxToRem(13),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(18),
    },
  };
};
