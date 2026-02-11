// src/apps/web/app/layout.tsx
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { draftMode } from 'next/headers'
import Script from 'next/script'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { getNavigation } from '@/components/Header/getNavigation'
import { getWebsiteBanner } from '@/components/Header/getWebsiteBanner'
import { getFooter } from '@/components/Footer/getFooter'
import TrackingScripts, { RedbrickStructuredDataScript } from '@/components/TrackingScripts'
import buildSiteMetadata from '@/lib/utils/generateMetadata'
import './globals.css'
import PreviewPane from './components/PreviewPane'

const SITE_URL = process.env.NEXT_PUBLIC_URL || 'https://www.leadpages.com'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const uxumVF = localFont({
  display: 'swap',
  src: './design/font/UxumVF.woff2',
  variable: '--font-uxumvf',
})

const rocGrotesk = localFont({
  display: 'swap',
  src: [
    { path: './design/font/rocgrotesk-regular-webfont.woff2', style: 'normal', weight: '400' },
    { path: './design/font/rocgrotesk-medium-webfont.woff2', style: 'normal', weight: '500' },
  ],
  variable: '--font-roc-grotesk-variable',
})

export async function generateMetadata(): Promise<Metadata> {
  const meta = await buildSiteMetadata()
  return { ...meta, metadataBase: new URL(SITE_URL) }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled: isDraftMode } = await draftMode()
  const [navigation, websiteBanner, footerData] = await Promise.all([
    getNavigation(isDraftMode),
    getWebsiteBanner(isDraftMode),
    getFooter(isDraftMode),
  ])
  return (
    <html className="has-[.scroll-lock]:[overflow:hidden]" lang="en">
      <head>
        <Script
          id="dataLayer-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: 'window.dataLayer=window.dataLayer||[]' }}
        />
        <link href="https://static.leadpages.com" rel="dns-prefetch preconnect" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://static.hotjar.com" />
        <link rel="dns-prefetch" href="https://js.hs-scripts.com" />
        <meta content="11470417057f03716e17affcb71896ef" name="p:domain_verify" />
        <TrackingScripts />
        <Script
          dangerouslySetInnerHTML={{ __html: `dataLayer.push({ 'event': 'start_pw' });` }}
          id="profit-well-retain"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${inter.variable} ${uxumVF.variable} ${rocGrotesk.variable} theme-dark font-sans text-body`}>
        <RedbrickStructuredDataScript />
        <Header navigation={navigation} websiteBanner={websiteBanner} />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
        <Footer footerData={footerData} />
        {isDraftMode && <PreviewPane />}
      </body>
    </html>
  )
}
