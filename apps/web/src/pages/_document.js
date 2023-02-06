import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@design/stitches.config'
import { ServerStyleSheets } from '@material-ui/core/styles'
import ProfitWellRetain from '@legacy/scripts/ProfitWellRetain'

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
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
          )}
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link
            rel="dns-prefetch preconnect"
            href="https://static.leadpages.com"
          />
          <link
            href="https://static.leadpages.com/fonts/valueserif_typeset.css"
            rel="stylesheet"
          />
          <link
            href="https://static.leadpages.com/fonts/apercu_typeset.css"
            rel="stylesheet"
          />
          <link
            href="https://static.leadpages.com/fonts/spacemono_typeset.css"
            rel="stylesheet"
          />
          <script>window.dataLayer = window.dataLayer || []</script>
          <ProfitWellRetain />
          <script
            src="https://static.leadpages.com/leadboxes/current/embed.js"
            async
            // defer="defer"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
