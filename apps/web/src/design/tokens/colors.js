import {
  pink,
  purple,
  purpleA,
  mauve,
  gray,
  blue,
  red,
  green,
  yellow,
  blackA,
  whiteA,
} from '@radix-ui/colors'

// From U.S to Canadian :wink:
const grey = Object.keys(gray)
  .map((key) => ({
    [key.replace('a', 'e')]: gray[key],
  }))
  .reduce((obj, field) => ({ ...obj, ...field }), {})

export const colors = {
  ...grey,
  ...blue,
  ...yellow,
  ...red,
  ...green,
  ...mauve,
  ...pink,
  ...purple,
  ...blackA,
  ...whiteA,
  white: '#ffffff',
  black: '#000000',
  brand: '$purple10',
  primary: '$purple10',
  secondary: '$pink10',
  buttonText: '$white',
  buttonBackground: '$brand',
  text: '$purple12',
  textAlt: '$mauve10',
  background: '$mauve1',
  backgroundAlt: '$blackA1',
  backgroundContrast: '$mauve3',
  border: '$purple10',
  link: '$primary',
  hover: '$purple8',
  focus: '$hover',
  active: '$hover',
  formFocus: '$brand',
  navText: '$text',
  navBackground: '$white',
  footerBackground: '$grey5',
  footerText: '$white',
  success: '$green5',
  error: '$red10',
  disabled: '$mauve8',
  warning: '$yellow4',
  overlay: '$blackA3',
  overlayA: '$whiteA3',
  progressBackground: '$blackA9',
  gradientBrand: 'linear-gradient(12deg, $colors$primary, $colors$secondary)',
  gradientBackgroundOpacity:
    'linear-gradient(to right, $colors$background, transparent)',
}

export default colors
