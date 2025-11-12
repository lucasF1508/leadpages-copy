import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const GTM_CONTAINER_ID = process.env.GTM_CONTAINER_ID
const FB_PIXEL_ID = process.env.FB_PIXEL_ID
const NEXT_PUBLIC_HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID
const GA4_TRACKING_ID = process.env.GA4_TRACKING_ID
// HubSpot Portal ID - hardcoded para asegurar que siempre se cargue
const HUBSPOT_PORTAL_ID = '21794907'
 
const TrackingScripts = () => (
  <>        
    {GA4_TRACKING_ID && <GoogleAnalytics gaId={GA4_TRACKING_ID} />}
    {GTM_CONTAINER_ID && <GoogleTagManager gtmId={GTM_CONTAINER_ID} />}
    {NEXT_PUBLIC_HOTJAR_ID && (
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:${NEXT_PUBLIC_HOTJAR_ID},hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')
      `,
        }}
        id="hotjar"
        strategy="afterInteractive"
      />
    )}
    {FB_PIXEL_ID && (
      <Script
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
        id="fb-pixel"
      />
    )}
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
    <Script
      id="digitalscope"
      src="https://sdk.digitalscope.com/index.js?app=LEADPAGES"
      strategy="lazyOnload"
    />
    <Script
      id="LP-embed"
      src="https://static.leadpages.com/leadboxes/current/embed.js"
    />
    {HUBSPOT_PORTAL_ID && (
      <Script
        id="hs-script-loader"
        src={`https://js.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
        strategy="afterInteractive"
      />
    )}
  </>
)
 
export default TrackingScripts