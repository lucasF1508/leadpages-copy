import React from 'react'
import Script from 'next/script'

const LB_DownloadUltimateWebsiteWorkbook = () => (
  <>
    <Script src="//static.leadpages.com/leadboxes/current/embed.js" />
    <Script id="exit-intent">{`window.addEventListener('LPLeadboxesReady',function(){LPLeadboxes.setExitIntent('xsYZAyvjTfTuHxGm76Kvvc',{dontShowFor:'2d',domain:'lps.lpages.co'});});`}</Script>
  </>
)

export default LB_DownloadUltimateWebsiteWorkbook
