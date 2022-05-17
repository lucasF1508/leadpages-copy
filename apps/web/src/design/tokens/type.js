const typeStyles = {
  '9xl': {
    lineHeight: 1,
    fontSize: '8rem',
  },
  '8xl': {
    lineHeight: 100 / 96,
    fontSize: '6rem',
  },
  '7xl': {
    lineHeight: 76 / 72,
    fontSize: '4.5rem',
  },
  '6xl': {
    lineHeight: 64 / 60,
    fontSize: '4rem',
  },
  '5xl': {
    lineHeight: 52 / 48,
    fontSize: '3rem',
  },
  '4xl': {
    lineHeight: 42 / 36,
    fontSize: '2.25rem',
  },
  '3xl': {
    lineHeight: 36 / 30,
    fontSize: '1.875rem',
  },
  '2xl': {
    lineHeight: 30 / 24,
    fontSize: '1.5rem',
  },
  xl: {
    lineHeight: 26 / 20,
    fontSize: '1.25rem',
  },
  lg: {
    lineHeight: 24 / 18,
    fontSize: '1.125rem',
  },
  base: {
    lineHeight: 20 / 16,
    fontSize: '1rem',
  },
  sm: {
    lineHeight: 18 / 14,
    fontSize: '0.875rem',
  },
  xs: {
    lineHeight: 15 / 12,
    fontSize: '0.75rem',
  },
}

export const type = {
  fonts: {
    inter: '"Inter", sans-serif',
    base: '$fonts$inter',
    heading: '$fonts$inter',
  },
  lineHeights: {
    s: 1,
    m: 1.5,
    l: 1.75,
    xl: 2,
    xxl: 3,
  },
  fontWeights: {
    ultraThin: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 700,
    black: 900,
  },
  letterSpacings: {
    s: '0.07em',
    m: '0.1em',
    l: '0.15em',
    xl: '0.2em',
  },
  fontSizes: {
    ...typeStyles,
    baseType: {
      ...typeStyles.base,
      '@>s': typeStyles.lg,
    },
    baseTypeAlt: {
      ...typeStyles.sm,
      '@>s': typeStyles.base,
    },
    subHeading: {
      ...typeStyles.lg,
      '@>s': typeStyles.xl,
      '@>l': typeStyles['2xl'],
    },
    subHeadingAlt: {
      ...typeStyles.base,
      '@>s': typeStyles.lg,
    },
    h1: {
      ...typeStyles['5xl'],
      '@>s': typeStyles['6xl'],
      '@>l': typeStyles['7xl'],
    },
    h2: {
      ...typeStyles['4xl'],
      '@>s': typeStyles['5xl'],
      '@>l': typeStyles['6xl'],
    },
    h3: {
      ...typeStyles['3xl'],
      '@>s': typeStyles['4xl'],
      '@>l': typeStyles['5xl'],
    },
    h4: {
      ...typeStyles['2xl'],
      '@>s': typeStyles['3xl'],
      '@>l': typeStyles['4xl'],
    },
    h5: {
      ...typeStyles.xl,
      '@>s': typeStyles['2xl'],
      '@>l': typeStyles['3xl'],
    },
    h6: {
      ...typeStyles.lg,
      '@>s': typeStyles.xl,
      '@>l': typeStyles['2xl'],
    },
    button: typeStyles.base,
    input: {
      fontSize: '1rem',
      '@>s': typeStyles.sm,
    },
    overline: {
      ...typeStyles.xs,
    },
  },
  fontStyles: {
    baseType: {
      fontFamily: '$base',
      fontWeight: '$normal',
    },
    baseTypeAlt: {
      fontFamily: '$base',
      fontWeight: '$normal',
    },
    subHeading: {
      fontFamily: '$base',
      fontWeight: '$normal',
    },
    subHeadingAlt: {
      fontFamily: '$base',
      fontWeight: '$bold',
    },
    h1: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h2: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h3: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h4: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h5: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h6: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    button: {
      fontWeight: '$semiBold',
      fontFamily: '$base',
    },
    caption: {
      fontWeight: '$normal',
      fontFamily: '$base',
    },
    input: {
      fontWeight: '$normal',
      fontFamily: '$base',
    },
    overline: {
      fontWeight: '$normal',
      fontFamily: '$base',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
  },
}

export default type
