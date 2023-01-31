import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import globalStyles from '@design/globalStyles'
import useGoogleTagManager from '@hooks/useGoogleTagManager'
import useFocusOutlineOnTab from '@hooks/useFocusOutlineOnTab'
import useResizeEnd from '@hooks/useResizeEnd'
import Header from '@components/Header'
import Embed from '@components/Embed'
import { MarketingThemeProvider } from '@lp/ui'
import { LazyMotion } from 'framer-motion'

// Legacy
import ToastManager from '@legacy/components/toasts/ToastManager'
import Promotions from '@legacy/components/promotions/Promotions'

const PreviewBadge = dynamic(() => import('@hooks/usePreview'))
const LayoutContainer = dynamic(() => import('@components/LayoutContainer'))
const SEO = dynamic(() => import('@components/SEO'))
const Footer = dynamic(() => import('@components/Footer'))
const ModalParent = dynamic(() =>
  import('@components/Modal').then((mod) => mod.ModalParent)
)

const loadFeatures = () =>
  import('@lib/utils/features').then((res) => res.default)

export const AppContext = React.createContext()

export default function App({
  Component: Main,
  pageProps: {
    data = [{}],
    queries,
    global = {},
    preview,
    options: legacyOptions = {},
    planData,
  } = {},
}) {
  globalStyles()
  useGoogleTagManager()
  useResizeEnd()
  useFocusOutlineOnTab()

  // Promotions loading
  const [hasLoaded, setHasLoaded] = useState()

  const { navigation, footer, siteMeta } = global || {}
  const [previewData, setPreviewData] = useState(data)
  const [{ seo, htmlFooter, options: pageOptions, ...pageData }] = preview
    ? previewData
    : data

  // Option
  const options = { ...legacyOptions, ...pageOptions }
  const {
    slimFooter,
    isPreviewPage,
    onPromotionsLoaded,
    isPricingMenu = false,
    underlaidMenu = false,
    isStartPageHeader = false,
    scrollTarget = '',
    noLogin = false,
    headerBkgColor = null,
    hideSignUpButton = false,
    hideBar = false,
    darkHero = false,
    ...meta
  } = options

  return (
    <AppContext.Provider
      value={{ ...siteMeta, hasLoaded, setHasLoaded, options, planData }}
    >
      <MarketingThemeProvider>
        <ToastManager />
        <Promotions onPromotionsLoaded={onPromotionsLoaded} />
        {hideBar && (
          <style type="text/css">{`.lp-bar__iframe-wrapper,.lp-bar__pusher{display:none;}`}</style>
        )}
        <SEO seo={seo} siteMeta={siteMeta} />
        <LazyMotion features={loadFeatures} strict>
          {/* {navigation && <Header navigation={navigation} />} */}
          <Header
            isPricingMenu={isPricingMenu}
            underlaidMenu={underlaidMenu}
            isStartPageHeader={isStartPageHeader}
            scrollTarget={scrollTarget}
            noLogin={noLogin}
            headerBkgColor={headerBkgColor}
            hideSignUpButton={hideSignUpButton}
            darkHero={darkHero}
          />
          <LayoutContainer>
            <Main {...pageData} {...meta} /* planData={planData} */ />
          </LayoutContainer>
          {/* {navigation && <Footer footer={footer} />} */}
          <Footer slimFooter={slimFooter} />
          <ModalParent />
        </LazyMotion>
      </MarketingThemeProvider>
      {htmlFooter && <Embed code={htmlFooter} />}
      {preview && (
        <PreviewBadge
          preview={preview}
          initialData={data}
          queries={queries}
          setPreviewData={setPreviewData}
        />
      )}
    </AppContext.Provider>
  )
}
