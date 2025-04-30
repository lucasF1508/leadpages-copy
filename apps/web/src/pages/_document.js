import React from 'react'
import { getCssText } from '@design/stitches.config'
import ProfitWellRetain from '@legacy/scripts/ProfitWellRetain'
import { ServerStyleSheets } from '@material-ui/core/styles'  
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import RedbrickStructuredDataScript from '@/components/TrackingScripts/RedbrickStructuredDataScript'

const { FB_PIXEL_ID } = process.env

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collect(<App {...props} />),
      })

    const initialProps = await NextDocument.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {FB_PIXEL_ID && (
            <noscript>
              <img
                height="1"
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                style={{ display: 'none' }}
                width="1"
              />
            </noscript>
          )}
          <style
            dangerouslySetInnerHTML={{ __html: getCssText() }}
            id="stitches"
          />
          <link
            href="https://static.leadpages.com"
            rel="dns-prefetch preconnect"
          />
          <script>window.dataLayer = window.dataLayer || []</script>
          <ProfitWellRetain />
          <RedbrickStructuredDataScript />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
