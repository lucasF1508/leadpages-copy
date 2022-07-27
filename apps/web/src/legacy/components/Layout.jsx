import React from 'react'
import PropTypes from 'prop-types'
// import { StaticQuery, graphql } from 'gatsby';
import { MarketingThemeProvider } from '@lp/ui'
import GlobalStyles from './GlobalStyles'
// import Promotions from './promotions/Promotions'
import ToastManager from './toasts/ToastManager'

const Layout = ({ children, hideBar, slimFooter, onPromotionsLoaded }) => (
  <MarketingThemeProvider>
    <GlobalStyles />
    <ToastManager />
    {/* <Promotions onPromotionsLoaded={onPromotionsLoaded} /> */}
    {hideBar && (
      <style type="text/css">{`.lp-bar__iframe-wrapper,.lp-bar__pusher{display:none;}`}</style>
    )}
    {children}
  </MarketingThemeProvider>
)

Layout.defaultProps = {
  hideBar: false,
  hideSignUpFreeButton: false,
  isPricingMenu: false,
  isStartPageHeader: false,
  noLogin: false,
  slimFooter: false,
  scrollTarget: '',
  underlaidMenu: false,
  headerBkgColor: null,
  onPromotionsLoaded: () => {},
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideBar: PropTypes.bool,
  hideSignUpFreeButton: PropTypes.bool,
  isPricingMenu: PropTypes.bool,
  isStartPageHeader: PropTypes.bool,
  noLogin: PropTypes.bool,
  slimFooter: PropTypes.bool,
  scrollTarget: PropTypes.string,
  underlaidMenu: PropTypes.bool,
  headerBkgColor: PropTypes.string,
  onPromotionsLoaded: PropTypes.func,
}

export default Layout
