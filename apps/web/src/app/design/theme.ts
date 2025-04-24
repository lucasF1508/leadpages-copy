import type { ThemeConfig } from 'tailwindcss-themer/lib/utils/optionsUtils'
import {
  blur,
  borderRadius,
  box,
  boxShadow,
  colors,
  duration,
  easing,
  gradient,
  gradientLight,
  keyframes,
  magicNumbers,
  screens,
  spacing,
  themeLight,
  type,
  width,
  zIndex,
} from './tokens'

export const themes: ThemeConfig[] = [
  {
    extend: {
      backgroundImage: {
        ...gradient, 
        ...gradientLight
      },
      colors
    },
    name: 'theme-dark',
  },
  {
    extend: {
      backgroundImage: gradient,
      colors: themeLight,
    },
    name: 'theme-light',
  },
]

const theme = {
  blur,
  box,
  colors,
  'magic-numbers': magicNumbers,
  screens,
  spacing,
  ...type,
  extend: {
    borderRadius,
    boxShadow,
    keyframes,
    maxWidth: width,
    transitionDuration: duration,
    transitionTimingFunction: easing,
    width,
    zIndex,
  },
}

export default theme
