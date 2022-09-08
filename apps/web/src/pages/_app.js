import React from 'react'
import dynamic from 'next/dynamic'
import globalStyles from '@design/globalStyles'
import useGoogleTagManager from '@hooks/useGoogleTagManager'
import useFocusOutlineOnTab from '@hooks/useFocusOutlineOnTab'
import useSanityPreview from '@hooks/useSanityPreview'
import useResizeEnd from '@hooks/useResizeEnd'
import Header from '@components/Header'
import { MarketingThemeProvider } from '@lp/ui'

// Legacy
import GlobalStyles from '@legacy/components/GlobalStyles'
import ToastManager from '@legacy/components/toasts/ToastManager'
import Promotions from '@legacy/components/promotions/Promotions'

const LayoutContainer = dynamic(() => import('@components/LayoutContainer'))
const SEO = dynamic(() => import('@components/SEO'))
const Footer = dynamic(() => import('@components/Footer'))
const ModalParent = dynamic(() =>
  import('@components/Modal').then((mod) => mod.ModalParent)
)

export const AppContext = React.createContext()

export default function App({
  Component: Main,
  pageProps: {
    data: {
      data = [{}],
      query,
      navigation,
      siteMeta,
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
    slug,
    preview,
  } = {},
}) {
  globalStyles()
  useGoogleTagManager()
  useResizeEnd()
  useFocusOutlineOnTab()

  const [pageData] = useSanityPreview({
    query,
    data,
    preview,
    slug,
  })

  return (
    <AppContext.Provider value={siteMeta}>
      <MarketingThemeProvider>
        <GlobalStyles />
        <ToastManager />
        <Promotions onPromotionsLoaded={onPromotionsLoaded} />
        <SEO seo={pageData?.seo} siteMeta={siteMeta} />
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
        {/* {navigation && <Footer navigation={navigation} />} */}
        <Footer slimFooter={slimFooter} isPreviewPage={isPreviewPage} />
        <ModalParent />
      </MarketingThemeProvider>
    </AppContext.Provider>
  )
}
