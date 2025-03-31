import flattenTokens from '../utils/flattenTokens'
import { magicNumbers } from './magicNumbers'
import { columns } from './width'

const values: Record<number, string> = {}
const increment = 8

for (let index = 1; index < 21; index++) {
  if (index < 8) {
    values[index / 2] = `${(increment * (index / 2)) / 16}rem`
  }
  values[index] = `${(increment * index) / 16}rem`
}

export const spacing = {
  ...columns,
  0: '0px',
  px: '1px',
  ...values,
  ...flattenTokens(magicNumbers),

  // From Design file
  xxs: '0.125rem', // 2px
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '0.75rem', // 12px
  lg: '1rem', // 16px
  xl: '1.5rem', // 24px
  '2xl': '2rem', // 32px
  '3xl': '2.5rem', // 40px
  '4xl': '3rem', // 48px
  '5xl': '3.5rem', // 56px
  '6xl': '4rem', // 64px
  '7xl': '5rem', // 80px
  '8xl': '5.5rem', // 88px
}
