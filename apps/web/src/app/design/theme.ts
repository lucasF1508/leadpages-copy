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
      colors,
    },
    name: 'theme-dark',
  },
  {
    extend: {
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
    backgroundImage: gradient,
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
