export const link = {
  d: 'inline-flex',
  ff: 'row nowrap',
  jc: 'center',
  ai: 'center',
  gap: '$1',
  transition: '$link',

  variants: {
    linkStyle: {
      button: {
        h: '$space$5',
        minWidth: '$space$17',
        px: '$4',
        br: '$button',
        bc: '$primary',
        c: '$white',
        border: '$thickButton',
        type: 'button',
        fontWeight: 500,

        '&:hover': {
          bc: '$hover',
          borderColor: '$hover',
          c: '$hoverColor',
        },

        '&:active': {
          bc: '$active',
          borderColor: '$active',
          c: '$hoverColor',
        },

        '&[disabled]': {
          bc: '$disabled',

          '&:hover, :active': {
            bc: '$disabled',
          },
        },
      },
      buttonInverse: {
        h: '$space$5',
        minWidth: '$space$17',
        px: '$4',
        br: '$button',
        bc: '$white',
        c: '$primary',
        border: '$thickButtonInverse',
        type: 'button',
        fontWeight: 500,

        '&:hover': {
          bc: '$hoverInverse',
          borderColor: 'transparent',
        },

        '&:active': {
          bc: '$activeInverse',
          borderColor: '$activeInverse',
        },

        '&[disabled]': {
          bc: '$disabled',

          '&:hover, :active': {
            bc: '$disabled',
          },
        },
      },
      ghost: {
        h: '$space$5',
        minWidth: '$space$17',
        px: '$4',
        br: '$button',
        c: '$link',
        bc: 'transparent',
        border: '$thickGhost',
        type: 'button',
        fontWeight: 500,

        '&:hover': {
          bc: '$hover',
          borderColor: '$hover',
          c: '$hoverColorGhost',
        },

        '&:active': {
          bc: '$active',
          borderColor: '$active',
          c: '$hoverColorGhost',
        },

        '&[disabled]': {
          c: '$disabled',
          borderColor: '$disabled',
        },
      },
      text: {
        d: 'inline-flex',
        px: 0,
        minWidth: 'unset',
        c: '$link',

        '&:hover': {
          c: '$hover',
        },

        '&:active': {
          c: '$active',
        },

        '&[disabled]': {
          c: '$disabled',
        },
      },
    },
  },
}
