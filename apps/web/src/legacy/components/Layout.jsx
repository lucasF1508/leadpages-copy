import React from 'react'
import PropTypes from 'prop-types'
import { MarketingThemeProvider } from '@lp/ui'
import Promotions from './promotions/Promotions'

const Layout = ({ children, hideBar }) => (
  <MarketingThemeProvider>
    {hideBar && (
      <style type="text/css">{`.lp-bar__iframe-wrapper,.lp-bar__pusher{display:none;}`}</style>
    )}
    {children}
  </MarketingThemeProvider>
)

Layout.defaultProps = {
  hideBar: false,
}

Layout.propTypes = {
  hideBar: PropTypes.bool,
}

export default Layout
