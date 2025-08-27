import plugin from 'tailwindcss/plugin'

export const align = plugin(({ addUtilities }) => {
  addUtilities({
    '.align-center': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '.align-end': {
      marginLeft: 'auto',
      marginRight: '0',
    },
    '.align-start': {
      marginLeft: '0',
      marginRight: 'auto',
    },
  })
})
