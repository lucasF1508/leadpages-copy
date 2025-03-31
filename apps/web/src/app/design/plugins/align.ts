import plugin from 'tailwindcss/plugin'

export const align = plugin(({ addUtilities }) => {
  addUtilities({
    '.align-center': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '.align-left': {
      marginLeft: '0',
      marginRight: 'auto',
    },
    '.align-right': {
      marginLeft: 'auto',
      marginRight: '0',
    },
  })
})
