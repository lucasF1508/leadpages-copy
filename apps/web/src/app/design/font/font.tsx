import type { CustomAppProps } from '@types'
import type { NextComponentType, NextPageContext } from 'next'
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const withFont =
  (Component: NextComponentType<NextPageContext, any, any>) =>
  (props: CustomAppProps) =>
    (
      <div className={`${inter.variable} font-sans`}>
        <Component {...props} />
      </div>
    )

export default withFont
