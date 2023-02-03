import { createTheme } from './stitches.config'

export * from './stitches.config'

export const darkTheme = createTheme('dark', {
  colors: {
    text: '#ffffff',
    textAlt: '#ffffff',
    gray10: '$whiteA12',
    primary: '#ffffff',
    link: '#ffffff',
    white: '$purple',
    hover: '$text',
    hoverColor: '$darkBlue',
  },
  borders: {
    thickButton: '$borderWidths$thick solid $colors$primary',
    thickGhost: '$borderWidths$thick solid $colors$text',
  },
})
