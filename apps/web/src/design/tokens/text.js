export const textDefaultTokens = {
  [`
    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6
  `]: {
    mt: '$3',
    mb: '$3',
    c: '$text',

    '&:first-child': {
      mt: 0,
    },
  },
  [`
    & ul,
    & ol
  `]: {
    mt: '$3',
    ml: 0,
  },
  '& li': {
    position: 'relative',
    pl: '$3',
    mt: '1.25rem',
    lh: 1.5,
    listStyle: 'none',

    '&:first-child': {
      mt: 0,
    },
  },
  '& ul li::before': {
    position: 'absolute',
    top: '0.75em',
    left: '0.25rem',
    fontSize: 'inherit',
    content: '',
    d: 'block',
    w: '0.25rem',
    h: '0.25rem',
    mt: '-0.125rem',
    br: '$round',
    bc: '$brand',
  },
  '& ol': {
    'counter-reset': 'list',
    '& > li::before': {
      position: 'absolute',
      top: 0,
      left: 0,
      lh: '$m',
      c: '$brand',
      content: "counter(list, lower-roman) '. '",
      fontWeight: '$bold',
      counterIncrement: 'list',
    },
  },
  [`
  address,
  p,
  blockquote,
  pre,
  dl,
`]: {
    mb: '$3',
    '&:last-child': {
      mb: 0,
    },
  },
  // '& a': {
  //   c: '$brand',

  //   '&[href^="tel"]': {
  //     c: '$text',
  //   },
  // },
}

export const textPostTokens = {
  [`
    & h2,
    & h3,
    & h4,
    & h5,
    & h6
  `]: {
    mt: '$7',
    mb: '$4',
    c: '$text',

    '&:first-child': {
      mt: 0,
    },
  },
  [`& h2`]: { type: 'h4' },
  [`& h3`]: { type: 'h5' },
  [`& h4`]: { type: 'h6' },
  [`& h5`]: { type: 'button' },
  [`& h6`]: { type: 'buttonSm' },
  [`
    & ul,
    & ol
  `]: {
    my: '$4',
    ml: '$3',
    c: '$textAlt',
  },
  '& li': {
    position: 'relative',
    pl: '$2',
    mt: '1.25rem',
    lh: 1.5,
    listStyle: 'none',

    a: {
      d: 'inline',
      bb: '1px solid $colors$primary',

      '&:hover': {
        bb: '2px solid $colors$primary',
        c: '$primary',
      },
    },

    '& strong': {
      fontWeight: 500,
    },

    '&:first-child': {
      mt: 0,
    },
  },
  '& ul li::before': {
    position: 'absolute',
    top: '0.75em',
    left: '0.25rem',
    fontSize: 'inherit',
    content: '',
    d: 'block',
    w: '0.25rem',
    h: '0.25rem',
    mt: '-0.125rem',
    br: '$round',
    bc: '$brand',
  },
  '& ol': {
    'counter-reset': 'list',
    '& > li::before': {
      position: 'absolute',
      top: 0,
      left: 0,
      lh: '$m',
      c: '$brand',
      content: "counter(list, lower-roman) '. '",
      fontWeight: '$bold',
      counterIncrement: 'list',
    },
  },
  [`
  address,
  p,
  blockquote,
  pre,
  dl,
  `]: {
    mb: '$3',
    '&:last-child': {
      mb: 0,
    },
  },
  '& p a, & blockquote a': {
    lineHeight: 1,
    borderBottom: '1px solid $colors$primary',
    d: 'inline',

    '&:hover': {
      borderBottom: '2px solid $colors$primary',
    },
  },
  [`button > a`]: {
    border: 0,
    '&:hover': { border: 'red' },
  },
  [`blockquote`]: {
    mx: '$2_5',
    mt: '$5',
    mb: '$4',
    borderLeft: '3px solid $colors$primary',
    pl: '$4',
    fontStyle: 'italic',
    c: '$textAlt',
  },
}

export default textDefaultTokens
