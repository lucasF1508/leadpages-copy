export const link = {
  d: 'inline-flex',
  ff: 'row nowrap',
  jc: 'center',
  ai: 'center',
  gap: '$2',
  type: 'button',
  transition: '$link',

  variants: {
    linkStyle: {
      button: {
        h: '$space$6',
        minWidth: '11rem',
        px: '$4',
        br: '$button',
        bc: '$primary',
        c: '$white',

        '&:hover': {
          bc: '$hover',
        },

        '&:active': {
          bc: '$active',
        },

        '&[disabled]': {
          bc: '$disabled',

          '&:hover, :active': {
            bc: '$disabled',
          },
        },
      },
      buttonGhost: {
        h: '$space$6',
        minWidth: '11rem',
        px: '$4',
        br: '$button',
        c: '$link',
        bc: 'transparent',
        border: '$base',

        '&:hover': {
          c: '$hover',
          borderColor: '$hover',
        },

        '&:active': {
          c: '$active',
          borderColor: '$active',
        },

        '&[disabled]': {
          c: '$disabled',
          borderColor: '$disabled',
        },
      },
      text: {
        d: 'flex',
        gap: '$2',
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
