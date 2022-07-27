import React from 'react'
import dynamic from 'next/dynamic'
import globalStyles from '@design/globalStyles'
import useGoogleTagManager from '@hooks/useGoogleTagManager'
import useFocusOutlineOnTab from '@hooks/useFocusOutlineOnTab'
import useSanityPreview from '@hooks/useSanityPreview'
import useResizeEnd from '@hooks/useResizeEnd'
import Header from '@components/Header'
import { MarketingThemeProvider } from '@lp/ui'
import GlobalStyles from '@legacy/components/GlobalStyles'

const LayoutContainer = dynamic(() => import('@components/LayoutContainer'))
const SEO = dynamic(() => import('@components/SEO'))
const Footer = dynamic(() => import('@components/Footer'))
const ModalParent = dynamic(() =>
  import('@components/Modal').then((mod) => mod.ModalParent)
)

const LazyMotion = dynamic(() =>
  import('framer-motion').then((mod) => mod.LazyMotion)
)

const loadFeatures = () =>
  import('@lib/utils/features').then((res) => res.default)

export const AppContext = React.createContext()

export default function App({
  Component: Main,
  pageProps: {
    data: { data = [{}], query, navigation, siteMeta, ...meta } = {},
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
        <SEO seo={pageData?.seo} siteMeta={siteMeta} />
        <LazyMotion features={loadFeatures} strict>
          {/* {navigation && <Header navigation={navigation} />} */}
          <Header />
          <LayoutContainer>
            <Main {...pageData} {...meta} />
          </LayoutContainer>
          {navigation && <Footer navigation={navigation} />}
          <ModalParent />
        </LazyMotion>
      </MarketingThemeProvider>
    </AppContext.Provider>
  )
}
