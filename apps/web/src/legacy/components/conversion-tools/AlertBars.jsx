import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { alertBarData } from '@legacy/data/alert-bar_data'

const AlertBars = () => {
  /* note: any page can disable alert bars by passing the prop `hideBar`
  /* to the Layout.jsx component, which will override this component */

  const [alertBarProps, setAlertBarProps] = useState(null)
  const router = useRouter()

  const currentPath = router?.asPath

  const checkForAlertBar = () => {
    const matchingAlertBar = alertBarData.find((bar) =>
      new RegExp(bar?.placementRegex, 'i').test(currentPath)
    )
    return matchingAlertBar || undefined
  }

  useEffect(() => {
    const alertBarToDisplay = checkForAlertBar()
    setAlertBarProps(alertBarToDisplay?.data)
  }, [router?.asPath])

  return (
    <>
      {alertBarProps && (
        <Script
          src={alertBarProps.src}
          data-bar={alertBarProps.id}
          data-bar-domain={alertBarProps.domain}
        />
      )}
    </>
  )
}

export default AlertBars
