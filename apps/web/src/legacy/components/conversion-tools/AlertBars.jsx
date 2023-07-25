import React from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'

const AlertBars = ({ alertBarData }) => {
  const { asPath } = useRouter()
  const alertBars =
    alertBarData?.reduce((acc, curr) => {
      const { placementRegex } = curr
      const isMatch = new RegExp(placementRegex, 'i').test(asPath)
      return isMatch ? [...acc, curr] : acc
    }, []) || []

  const { id } = alertBars[0] || {}

  return id ? (
    <Script
      src="https://embed.lpcontent.net/leadbars/current/embed.js"
      data-bar={id}
      data-bar-domain="lps.lpages.co"
      strategy="lazyOnload"
    />
  ) : (
    <></>
  )
}

export default AlertBars
