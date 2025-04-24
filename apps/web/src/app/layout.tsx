import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { draftMode } from 'next/headers'
import Script from 'next/script'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TrackingScripts, { RedbrickStructuredDataScript } from '@/components/TrackingScripts'
import generateMetadata from '@/lib/utils/generateMetadata'
import './globals.css'
import PreviewPane from './components/PreviewPane'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const uxumVF = localFont({
  display: 'swap',
  src: './design/font/UxumVF.woff2',
  variable: '--font-uxumvf',
})

export { generateMetadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='has-[.scroll-lock]:[overflow:hidden]' lang="en">
      <head>
        <script>window.dataLayer = window.dataLayer || []</script>
        <link
          href="https://static.leadpages.com"
          rel="dns-prefetch preconnect"
        />
        <link href="https://use.typekit.net/yhf6rvc.css" rel="stylesheet" />
        <meta
          content="11470417057f03716e17affcb71896ef"
          name="p:domain_verify"
        />
        <TrackingScripts />
        <RedbrickStructuredDataScript />
        <Script
          dangerouslySetInnerHTML={{
            __html: `dataLayer.push({ 'event': 'start_pw' });`,
          }}
          id='#profit-well-retain'
        />
      </head>
      <body
        className={`${inter.variable} ${uxumVF.variable} theme-dark font-sans [--font-roc-grotesk-variable:'roc-grotesk-variable',sans-serif] text-body`}
      >
        {/* @ts-expect-error Server Component https://github.com/vercel/next.js/issues/42292 */}
        <Header />
        <main>{children}</main>
        {/* @ts-expect-error Server Component https://github.com/vercel/next.js/issues/42292 */}
        <Footer />
        {draftMode().isEnabled && (
          <PreviewPane />
        )}
      </body>
    </html>
  )
}
