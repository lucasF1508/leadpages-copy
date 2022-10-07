import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import globalStyles from '@design/globalStyles'
import useGoogleTagManager from '@hooks/useGoogleTagManager'
import useFocusOutlineOnTab from '@hooks/useFocusOutlineOnTab'
import useResizeEnd from '@hooks/useResizeEnd'
import Header from '@components/Header'
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
    options: {
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
      ...meta
    } = {},
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
  const [{ seo, ...pageData }] = preview ? previewData : data

  return (
    <AppContext.Provider value={{ ...siteMeta, hasLoaded, setHasLoaded }}>
      <MarketingThemeProvider>
        <ToastManager />
        <Promotions onPromotionsLoaded={onPromotionsLoaded} />
        <SEO seo={pageData?.seo} siteMeta={siteMeta} />
        <LazyMotion features={loadFeatures} strict>
          {/* {navigation && <Header navigation={navigation} />} */}
          <Header
            isPreviewPage={isPreviewPage}
            isPricingMenu={isPricingMenu}
            underlaidMenu={underlaidMenu}
            isStartPageHeader={isStartPageHeader}
            scrollTarget={scrollTarget}
            noLogin={noLogin}
            headerBkgColor={headerBkgColor}
            hideSignUpButton={hideSignUpButton}
          />
          <LayoutContainer>
            <Main {...pageData} {...meta} />
          </LayoutContainer>
          {/* {navigation && <Footer footer={footer} />} */}
          <Footer slimFooter={slimFooter} isPreviewPage={isPreviewPage} />
          <ModalParent />
        </LazyMotion>
      </MarketingThemeProvider>
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
