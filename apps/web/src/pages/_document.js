import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@design/stitches.config'
import { ServerStyleSheet } from 'styled-components'

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
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
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
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
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
