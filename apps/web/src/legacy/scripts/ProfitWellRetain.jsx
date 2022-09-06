/* eslint-disable react/no-danger */
import React from 'react'
import Script from 'next/script'

const ProfitWellRetain = () => (
  <Script
    id="profit-well-retain"
    dangerouslySetInnerHTML={{
      __html: `dataLayer.push({ 'event': 'start_pw' });`,
    }}
  />
)

export default ProfitWellRetain
