import Head from 'next/head'
import Script from 'next/script'
import useSeo from '@hooks/useSeo'

const SEO = (props) => {
  const {
    GOOGLE_TAG_TRACKING_ID,
    seoTitle,
    seoDescription,
    image,
    url,
    robots,
    locale,
    type,
    siteName,
    twitterUser,
  } = useSeo(props)

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {GOOGLE_TAG_TRACKING_ID && (
        <Script
          id="GTM"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GOOGLE_TAG_TRACKING_ID}');
          `,
          }}
        />
      )}
      <Head>
        {seoTitle && <title>{seoTitle}</title>}
        {seoDescription && <meta name="description" content={seoDescription} />}
        {robots && <meta name="robots" content={robots} />}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        {image?.url && <meta name="image" content={image?.url} />}
        {url && <link rel="canonical" href={url} />}
        {url && <meta property="og:url" content={url} />}
        {locale && <meta property="og:locale" content={locale} />}
        {type && <meta property="og:type" content={type} />}
        {seoTitle && <meta property="og:title" content={seoTitle} />}
        {seoDescription && (
          <meta property="og:description" content={seoDescription} />
        )}
        {siteName && <meta property="og:site_name" content={siteName} />}
        {image?.url && <meta property="og:image" content={image?.url} />}
        {image?.height && (
          <meta property="og:image:height" content={image?.height} />
        )}
        {image?.width && (
          <meta property="og:image:width" content={image?.width} />
        )}
        {seoDescription && (
          <meta name="twitter:card" content={seoDescription} />
        )}
        {twitterUser && (
          <meta name="twitter:creator" content={`@${twitterUser}`} />
        )}
        {twitterUser && (
          <meta name="twitter:site" content={`@${twitterUser}`} />
        )}
        {seoTitle && <meta name="twitter:seoTitle" content={seoTitle} />}
        {seoDescription && (
          <meta name="twitter:seoDescription" content={seoDescription} />
        )}
        {image?.url && <meta name="twitter:image" content={image.url} />}

        {/* Chrome bug doesn't use fall back: <link rel="icon" href="/favicon/favicon.ico" /> */}
        {/* // Use SVG for Favicon with dark mode media query */}
        <link
          rel="icon"
          href="/favicon/favicon.svg"
          sizes="any"
          type="image/svg+xml"
        />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/manifest.webmanifest" />
      </Head>
    </>
  )
}

export default SEO
