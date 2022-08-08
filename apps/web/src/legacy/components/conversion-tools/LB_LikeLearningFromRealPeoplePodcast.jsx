import React from 'react'
import Script from 'next/script'

const LB_LikeLearningFromRealPeoplePodcast = () => (
  <>
    <Script
      src="//static.leadpages.com/leadboxes/current/embed.js"
      strategy="afterInteractive"
    />
    <Script
      id="LPLeadbox"
      startegy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `window.addEventListener('LPLeadboxesReady',function(){LPLeadboxes.addDelayedLeadbox('jnmnYq2ya2xgCgeHaYfuWW', { delay: '20s', views: 0, dontShowFor: '30d', domain: 'lps.lpages.co' }); });`,
      }}
    />
  </>
)

export default LB_LikeLearningFromRealPeoplePodcast
