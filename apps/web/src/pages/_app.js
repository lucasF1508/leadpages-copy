import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import globalStyles from '@design/globalStyles'
import useGoogleTagManager from '@hooks/useGoogleTagManager'
import useFacebookPixel from '@hooks/useFacebookPixel'
import useFocusOutlineOnTab from '@hooks/useFocusOutlineOnTab'
import useResizeEnd from '@hooks/useResizeEnd'
import Embed from '@components/Embed'
import FullStory from '@components/FullStory'
import Leadboxes from '@components/Leadboxes'
import { LazyMotion } from 'framer-motion'

// Legacy
import ToastManager from '@legacy/components/toasts/ToastManager'
import Promotions from '@legacy/components/promotions/Promotions'
import useGTag from '@hooks/useGTag'

const PreviewBadge = dynamic(() => import('@hooks/usePreview'))
const LayoutContainer = dynamic(() => import('@components/LayoutContainer'))
const SEO = dynamic(() => import('@components/SEO'))
const Footer = dynamic(() => import('@components/Footer'))
const Nav = dynamic(() => import('@components/Nav'))
const ModalParent = dynamic(() =>
  import('@components/Modal').then((mod) => mod.ModalParent)
)
const MarketingThemeProvider = dynamic(() =>
  import('@lp/ui').then((mod) => mod.MarketingThemeProvider)
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
    err,
  } = {},
}) {
  globalStyles()
  useGoogleTagManager()
  useGTag()
  useFacebookPixel()
  useResizeEnd()
  useFocusOutlineOnTab()

  // Promotions loading
  const [hasLoaded, setHasLoaded] = useState()

  const [globalData, setGlobalData] = useState(global)
  const {
    footer,
    globalHeaderFooter = {},
    siteMeta,
    leadboxes,
    navigation,
  } = globalData || {}

  const [previewData, setPreviewData] = useState(data)
  const [
    {
      seo,
      htmlFooter: pageHtmlFooter,
      options: pageOptions,
      isVariant,
      ...pageData
    },
  ] = preview ? previewData : data

  const { leadboxData, alertBarData } = leadboxes || {}

  // HTML codes
  const { globalHtmlFooter } = globalHeaderFooter
  const htmlFooter = [globalHtmlFooter, pageHtmlFooter].join('')

  // Option
  const options = { ...legacyOptions, ...pageOptions }
  const {
    slimFooter,
    simplifiedHeader,
    isPreviewPage,
    onPromotionsLoaded,
    link,
    customCtaLink,
    isPricingMenu = false,
    isStartPageHeader = false,
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
        <Promotions
          onPromotionsLoaded={onPromotionsLoaded}
          alertBarData={alertBarData}
        />
        <Leadboxes data={leadboxData} />
        {hideBar && (
          <style type="text/css">{`.lp-bar__iframe-wrapper,.lp-bar__pusher{display:none;}`}</style>
        )}
        <FullStory />
        <SEO seo={seo} siteMeta={siteMeta} isVariant={isVariant} />
        <LazyMotion features={loadFeatures} strict>
          <Nav
            navigation={navigation}
            darkHero={darkHero}
            isPricingMenu={isPricingMenu}
            simplifiedHeader={simplifiedHeader}
            isStartPageHeader={isStartPageHeader}
          />
          <LayoutContainer>
            <Main
              {...pageData}
              {...meta}
              footer={footer}
              slimFooter={slimFooter}
              err={err}
              seo={seo}
            />
          </LayoutContainer>
          <Footer slimFooter={slimFooter} data={footer} />
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
          setGlobalData={setGlobalData}
        />
      )}
    </AppContext.Provider>
  )
}
