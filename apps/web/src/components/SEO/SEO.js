import Head from 'next/head'
import Script from 'next/script'
import useSeo from '@hooks/useSeo'

const SEO = (props) => {
  const {
    GTM_CONTAINER_ID,
    GTAG_TRACKING_ID,
    FB_PIXEL_ID,
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
      {/* Google Tag Manager Init */}
      {GTM_CONTAINER_ID && (
        <Script
          id="GTM"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_CONTAINER_ID}');
          `,
          }}
        />
      )}
      {/* gtag Init */}
      {GTAG_TRACKING_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_TRACKING_ID}`}
          />
          <Script
            id="GTAG"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GTAG_TRACKING_ID}', { send_page_view: false });
            `,
            }}
          />
        </>
      )}
      {/* FB Pixel Init */}
      {FB_PIXEL_ID && (
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${FB_PIXEL_ID});
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
          <meta name="twitter:card" content="summary_large_image" />
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
          href="/favicon-32x32.png?v=f7c25fceb1ed99a78a0a05b977eb0fa1"
          type="image/png"
        />
        <meta name="theme-color" content="#603eff" />
        <link
          rel="apple-touch-icon"
          sizes="48x48"
          href="/favicon/icon-48x48.png?v=f7c25fceb1ed99a78a0a05b977eb0fa1"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/icon-72x72.png?v=f7c25fceb1ed99a78a0a05b977eb0fa1"
        />
        <link
          rel="apple-touch-icon"
          sizes="96x96"
          href="/favicon/icon-96x96.png?v=f7c25fceb1ed99a78a0a05b977eb0fa1"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/icon-144x144.png?v=f7c25fceb1ed99a78a0a05b977eb0fa1"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/favicon/icon-192x192.png?v=f7c25fceb1ed99a78a0a05b977eb0fa1"
        />
        <link
          rel="apple-touch-icon"
          sizes="256x256"
          href="/favicon/icon-256x256.png?v=f7c25fceb1ed99a78a0a05b977eb0fa1"
        />
        <link
          rel="apple-touch-icon"
          sizes="384x384"
          href="/favicon/icon-384x384.png?v=f7c25fceb1ed99a78a0a05b977eb0fa1"
        />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/favicon/icon-512x512.png?v=f7c25fceb1ed99a78a0a05b977eb0fa1"
        />
        <link rel="manifest" href="/favicon/manifest.webmanifest" />
      </Head>
    </>
  )
}

export default SEO
