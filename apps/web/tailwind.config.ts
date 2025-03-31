import type { Config } from 'tailwindcss'
import aspectRatio from '@tailwindcss/aspect-ratio'
import containerQueries from '@tailwindcss/container-queries'
import forms from '@tailwindcss/forms'
import { withTV } from 'tailwind-variants/transformer'
import themer from 'tailwindcss-themer'
import { align, box, nthChild, type } from './src/app/design/plugins'
import theme, { themes } from './src/app/design/theme'

const [defaultTheme] = themes

export default withTV({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    themer({
      defaultTheme,
      themes,
    }),
    forms,
    aspectRatio,
    containerQueries,
    align,
    type,
    box,
    nthChild,
  ],
  theme,
}) satisfies Config
