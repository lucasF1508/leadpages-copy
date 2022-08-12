import { globalCss } from './stitches.config'
import { reset, rootBreakpoints } from './tokens'

const globalStyles = globalCss({
  ...reset,
  ...rootBreakpoints,
  html: {
    position: 'relative',
    d: 'flex',
    fd: 'column',
    minHeight: '100vh',
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    'font-variant-ligatures': 'no-common-ligatures',
    bc: '$white',
    fontSize: '16px',
    lh: 1.5,
    color: '$text',
    '*': {
      outlineColor: '$brand',
      outlineOffset: '$space$1',
    },
    'body:not(.focus-outline)': {
      '*': {
        outline: 'none',
      },
    },
    '@<xs': {
      fontSize: '14px',
    },
    // '@>xxl': {
    //   fontSize: '18px',
    // },
    // '@>xxxl': {
    //   fontSize: '20px',
    // },
  },
  body: {
    type: 'baseType',
  },
  [`
    main,
    article
  `]: {
    position: 'relative',
    z: '$content',
  },
  [`
    address,
    p,
    blockquote,
    pre,
    dl,
    ol,
    ul,
    hr,
    table,
    fieldset
  `]: {
    // '&:last-child': {
    //   mb: 0,
    // },
    '&::selection': {
      bc: '$grey2',
    },
  },
  [`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6
  `]: {
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
  },
  button: {
    c: 'inherit',
    p: 0,
    b: 0,
    bc: 'unset',
    cursor: 'pointer',
  },
  h1: {
    type: 'h1',
  },
  h2: {
    type: 'h2',
  },
  h3: {
    type: 'h3',
  },
  h4: {
    type: 'h4',
  },
  h5: {
    type: 'h5',
  },
  h6: {
    type: 'h6',
  },
  a: {
    position: 'relative',
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  },

  '&.lp-bar__iframe-wrapper': {
    zIndex: 150,
  },

  '@media (min-width: 768px)': {
    '&.lp-bar__iframe-wrapper': {
      position: 'relative',
    },

    '&.lp-bar__pusher': {
      height: 0,
    },
  },
})

export default globalStyles
