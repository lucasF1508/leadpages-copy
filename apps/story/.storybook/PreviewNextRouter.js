import React from 'react'
import { action } from '@storybook/addon-actions'
import { RouterContext } from 'next/dist/shared/lib/router-context'

const router = {
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/',
  push(...args) {
    action('nextRouter.push')(...args)
    return Promise.resolve(true)
  },
  replace(...args) {
    action('nextRouter.replace')(...args)
    return Promise.resolve(true)
  },
  reload(...args) {
    action('nextRouter.reload')(...args)
  },
  back(...args) {
    action('nextRouter.back')(...args)
  },
  prefetch() {
    return Promise.resolve()
  },
  beforePopState(...args) {
    action('nextRouter.beforePopState')(...args)
  },
  events: {
    on(...args) {
      action('nextRouter.events.on')(...args)
    },
    off(...args) {
      action('nextRouter.events.off')(...args)
    },
    emit(...args) {
      action('nextRouter.events.emit')(...args)
    },
  },
  isFallback: false,
}

export const PreviewNextRouter = ({ locale, children }) => {
  return (
    <RouterContext.Provider
      value={{
        ...router,
        locale,
      }}
    >
      {children}
    </RouterContext.Provider>
  )
}

export default PreviewNextRouter
