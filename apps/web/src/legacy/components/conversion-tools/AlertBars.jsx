import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { alertBarData } from '../../data/alert-bar_data'

const AlertBars = () => {
  /* note: any page can disable alert bars by passing the prop `hideBar`
  /* to the Layout.jsx component, which will override this component */

  const [alertBarProps, setAlertBarProps] = useState(null)
  const currentPath = location?.pathname

  const checkForAlertBar = () => {
    const matchingAlertBar = alertBarData.find((bar) =>
      new RegExp(bar?.placementRegex, 'i').test(currentPath)
    )
    return matchingAlertBar || null
  }

  useEffect(() => {
    const alertBarToDisplay = checkForAlertBar()
    setAlertBarProps(alertBarToDisplay?.data)
  }, [currentPath])

  return (
    <>
      {alertBarProps && (
        <Head>
          <script
            src={alertBarProps.src}
            data-bar={alertBarProps.id}
            data-bar-domain={alertBarProps.domain}
            async
            defer
          />
        </Head>
      )}
    </>
  )
}

export default AlertBars
