import React from 'react'
import Script from 'next/script'

const LB_GetInspiredWithLandingPageExamples = () => (
  <>
    <Script src="//static.leadpages.com/leadboxes/current/embed.js" />
    <Script id="add-delayed-leadbox">{`window.addEventListener('LPLeadboxesReady',function(){LPLeadboxes.addDelayedLeadbox('RsmtKyVagfD4H7Af4ua7NQ', { delay: '45s', views: 0, dontShowFor: '0d', domain: 'lps.lpages.co' }); });`}</Script>
  </>
)

export default LB_GetInspiredWithLandingPageExamples
