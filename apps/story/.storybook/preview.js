import React from 'react'
import { useGlobals } from '@storybook/client-api'
import globalStyles from '@design/globalStyles'
import * as NextImage from 'next/image'
import PreviewNextRouter from './PreviewNextRouter'
import { AppContext } from '@app'
import { siteMeta } from '@data'

const NextImageDefault = NextImage.default
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <NextImageDefault {...props} unoptimized />,
})

export const decorators = [
  (Story) => {
    const [{ locale }] = useGlobals()
    globalStyles()
    return (
      <div style={{ width: '100%' }}>
        <PreviewNextRouter locale={locale}>
          <AppContext.Provider value={siteMeta}>
            <Story />
          </AppContext.Provider>
        </PreviewNextRouter>
      </div>
    )
  },
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'canvas',
  layout: 'fullscreen',
}
