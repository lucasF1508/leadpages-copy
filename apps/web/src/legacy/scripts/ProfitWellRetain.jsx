/* eslint-disable react/no-danger */
import React from 'react'

const ProfitWellRetain = () => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `dataLayer.push({ 'event': 'start_pw' });`,
      }}
    ></script>
  </>
)

export default ProfitWellRetain
