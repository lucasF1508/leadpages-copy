import React from 'react'
import Script from 'next/script'

const LeadboxesPopUp = ({ id, delay, dontShowFor, views }) => (
  <Script
    id={id}
    src="https://embed.lpcontent.net/leadboxes/current/embed.js"
    async
    defer
    onReady={() =>
      LPLeadboxes.addDelayedLeadbox(id, {
        delay: `${delay}s`,
        views,
        dontShowFor: `${dontShowFor}d`,
        domain: 'lps.lpages.co',
      })
    }
  />
)

export default LeadboxesPopUp
