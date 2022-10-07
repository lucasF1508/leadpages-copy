/* eslint-disable react/no-danger */
import React from 'react'
import Script from 'next/script'

const GoogleOptimizeAntiFlicker = () => (
  <>
    <style>{`.async-hide { opacity: 0 !important}`}</style>
    <Script
      id="google-optimize-anti-flicker"
      dangerouslySetInnerHTML={{
        __html: `(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;})(window,document.documentElement,'async-hide','dataLayer',4000,{'OPT-55BZQG4':true});`,
      }}
    />
  </>
)

export default GoogleOptimizeAntiFlicker
