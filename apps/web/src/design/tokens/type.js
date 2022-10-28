const typeSizes = {
  '9xl': {
    fontSize: '3.75rem', // 60px
  },
  '8xl': {
    fontSize: '3.5rem', // 56px
  },
  '7xl': {
    fontSize: '2.5rem', // 40px
  },
  '6xl': {
    fontSize: '2rem', // 32px
  },
  '5xl': {
    fontSize: '1.875rem', // 30px
  },
  '4xl': {
    fontSize: '1.75rem', // 28px
  },
  '3xl': {
    fontSize: '1.5rem', // 24px
  },
  '2xl': {
    fontSize: '1.375rem', // 22px
  },
  xl: {
    fontSize: '1.25rem', // 20px
  },
  lg: {
    fontSize: '1.125rem', // 18px
  },
  base: {
    fontSize: '1rem', // 16px
  },
  sm: {
    fontSize: '0.875rem', // 14px
  },
  xs: {
    fontSize: '0.75rem', // 12px
  },
}

export const type = {
  fonts: {
    valueSerif: '"Value Serif", serif',
    apercuPro: '"Apercu Pro", sans-serif',
    spaceMono: '"Space Mono", monospace',
    base: '$fonts$apercuPro',
    heading: '$fonts$valueSerif',
    overline: '$fonts$spaceMono',
  },
  lineHeights: {
    s: 1.07,
    m: 1.2,
    l: 1.5,
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
    ...typeSizes,
    baseType: {
      ...typeSizes.base,
      '@>s': typeSizes.lg,
    },
    baseTypeAlt: {
      ...typeSizes.base,
      '@>s': typeSizes.lg,
    },
    subHeading: {
      ...typeSizes.lg,
      '@>s': typeSizes.xl,
      '@>l': typeSizes['2xl'],
      lh: '$lineHeights$m',
    },
    subHeadingAlt: {
      ...typeSizes.base,
      '@>s': typeSizes.lg,
      lh: '$lineHeights$m',
    },
    h1: {
      ...typeSizes['4xl'],
      '@>s': typeSizes['7xl'],
      '@>m': typeSizes['8xl'],
      lh: '$lineHeights$m',
    },
    h2: {
      ...typeSizes['3xl'],
      '@>s': typeSizes['5xl'],
      '@>m': typeSizes['7xl'],
      lh: '$lineHeights$m',
    },
    h3: {
      ...typeSizes.xl,
      '@>s': typeSizes['4xl'],
      '@>m': typeSizes['5xl'],
      lh: '$lineHeights$m',
    },
    h4: {
      ...typeSizes['2xl'],
      '@>s': typeSizes['3xl'],
      '@>m': typeSizes['4xl'],
      lh: '$lineHeights$m',
    },
    h5: {
      ...typeSizes.xl,
      '@>s': typeSizes['2xl'],
      '@>m': typeSizes['3xl'],
      lh: '$lineHeights$m',
    },
    h6: {
      ...typeSizes.lg,
      '@>s': typeSizes.xl,
      '@>m': typeSizes['2xl'],
      lh: '$lineHeights$m',
    },
    button: typeSizes.base,
    buttonAlt: {
      ...typeSizes.base,
      '@>s': typeSizes.lg,
    },
    buttonSm: typeSizes.sm,
    input: {
      fontSize: '1rem',
      '@>s': typeSizes.sm,
    },
    overline: {
      ...typeSizes.xs,
    },
    headlineSupertitle: {
      ...typeSizes.xs,
    },
    cardHeading: {
      ...typeSizes.base,
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
      fontWeight: '$normal',
      fontFamily: '$base',
    },
    buttonSm: {
      fontWeight: '$medium',
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
      fontFamily: '$overline',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    headlineTitle: {
      fontFamily: '$heading',
      letterSpacing: '-0.03125rem',

      '@<headlineSection': {
        letterSpacing: 0,
      },

      variants: {
        noPadding: {
          true: { mb: 0 },
          false: { mb: '1.5rem' },
        },
      },
    },
    headlineSubtitle: {
      fontStyle: 'h3',
    },
    headlineSupertitle: {
      typeStyles: 'overline',
      c: '$gray10',
    },
    cardHeading: {
      fontWeight: '$medium',
      fontFamily: '$base',
    },
  },
}

export default type
