import React, { useState } from 'react'
import globalStyles from '@design/globalStyles'
import Promotions from '@legacy/components/promotions/Promotions'
// Legacy
import ToastManager from '@legacy/components/toasts/ToastManager'
import { LazyMotion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { RedbrickStructuredDataScript } from '@/components/TrackingScripts'
import useFacebookPixel from '@hooks/useFacebookPixel'
import useFocusOutlineOnTab from '@hooks/useFocusOutlineOnTab'
import useGTag from '@hooks/useGTag'
import useGoogleTagManager from '@hooks/useGoogleTagManager'
import useResizeEnd from '@hooks/useResizeEnd'
import Embed from '@components/Embed'
import FullStory from '@components/FullStory'
import Leadboxes from '@components/Leadboxes'
import SchemaMarkup from '@components/SchemaMarkup'
import SpeedInsights from '@components/SpeedInsights'

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
    onPromotionsLoaded,
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
        <SpeedInsights />
        <ToastManager />
        <Promotions
          alertBarData={alertBarData}
          onPromotionsLoaded={onPromotionsLoaded}
        />
        <Leadboxes data={leadboxData} />
        {hideBar && (
          <style type="text/css">{`.lp-bar__iframe-wrapper,.lp-bar__pusher{display:none;}`}</style>
        )}
        <FullStory />
        <SEO isVariant={isVariant} seo={seo} siteMeta={siteMeta} />
        <LazyMotion features={loadFeatures} strict>
          <Nav
            darkHero={darkHero}
            isPricingMenu={isPricingMenu}
            isStartPageHeader={isStartPageHeader}
            navigation={navigation}
            simplifiedHeader={simplifiedHeader}
          />
          <LayoutContainer>
            <Main
              {...pageData}
              {...meta}
              err={err}
              footer={footer}
              seo={seo}
              slimFooter={slimFooter}
            />
          </LayoutContainer>
          <Footer data={footer} slimFooter={slimFooter} />
          <ModalParent />
        </LazyMotion>
      </MarketingThemeProvider>
      <RedbrickStructuredDataScript />
      <SchemaMarkup
        _type={pageData._type}
        pageData={pageData}
        structuredData={[
          ...(siteMeta?.company?.structuredData || []),
          ...(pageData?.structuredData || []),
        ]}
      />
      {htmlFooter && <Embed code={htmlFooter} />}
      {preview && (
        <PreviewBadge
          initialData={data}
          preview={preview}
          queries={queries}
          setGlobalData={setGlobalData}
          setPreviewData={setPreviewData}
        />
      )}
    </AppContext.Provider>
  )
}
