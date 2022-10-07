import React from 'react'

export default class SentryErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    Sentry.configureScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key])
      })
    })
    Sentry.captureException(error)
  }

  render() {
    return this.props.children
  }
}
