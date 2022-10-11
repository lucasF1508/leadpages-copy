import React, { useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

import { BundleInfoSheet, Banner } from '@lp/ui'
import { FLOWS } from '@lp/lib-upgrade-modal'

// components
import { AppContext } from '@app'
import AlertBars from '../conversion-tools/AlertBars'
import { addToastMessage } from '../toasts/ToastManager'
// utils & data
import { setJSONKey } from '../../utils/common'
import {
  BUNDLE_KEY,
  checkBundleExpired,
  getLocalBundle,
  setLocalBundle,
} from '../../utils/bundles'
import {
  checkCouponExpired,
  getLocalCoupon,
  setLocalCoupon,
} from '../../utils/coupons'
import { getLocalPreviousPlan } from '../../utils/previous-plan'

const PRICING_PATHS = ['/pricing', '/compare-plans']

const Promotions = ({ onPromotionsLoaded = false }) => {
  const { setHasLoaded } = useContext(AppContext)

  const [showBundle, setShowBundle] = useState(false)
  const [showCoupon, setShowCoupon] = useState(false)
  const [purchaseFlow, setPurchaseFlow] = useState(false)
  const [bundle, setBundle] = useState()
  const [coupon, setCoupon] = useState()
  const [isLoading, setIsLoading] = useState(true)

  // Remove trailing slash from returned paths
  const currentPath =
    typeof window !== 'undefined'
      ? window.location.pathname.replace(/\/$/, '')
      : null
  const onPricingPage = PRICING_PATHS.indexOf(currentPath) !== -1

  useEffect(() => {
    async function promotionsInit() {
      const localPreviousPlan = getLocalPreviousPlan()
      const flow = localPreviousPlan ? FLOWS.REACTIVATION : FLOWS.SIGNUP

      const couponPromise = setLocalCoupon(flow)
      const bundlePromise = setLocalBundle(flow)

      const [couponResponse, bundleResponse] = await Promise.all([
        couponPromise,
        bundlePromise,
      ])
      if (couponResponse?.error || bundleResponse?.error) {
        // Display a single toast if both coupon and bundle response yield an error
        const message =
          couponResponse?.error && bundleResponse?.error
            ? 'That offer is no longer valid'
            : couponResponse?.error?.message || bundleResponse?.error?.message

        addToastMessage({
          severity: 'error',
          message,
          detail: couponResponse?.error?.detail,
        })
      }

      const localCoupon =
        couponResponse && !couponResponse.error
          ? couponResponse
          : getLocalCoupon()
      const localBundle = getLocalBundle()

      setPurchaseFlow(flow)
      setCoupon(!checkCouponExpired(localCoupon) ? localCoupon : null)
      setBundle(!checkBundleExpired(localBundle) ? localBundle : null)
      if (onPromotionsLoaded) onPromotionsLoaded()
      setHasLoaded(true)
      setIsLoading(false)
    }
    promotionsInit()
  }, [])

  useEffect(() => {
    // Display valid coupon banner message
    if (coupon) setShowCoupon(true)
    // Display bundle sheet on pricing pages or site-wide depending on the presence of a valid coupon
    if (bundle) {
      if (coupon?.canRedeemCoupon) setShowBundle(onPricingPage)
      else setShowBundle(true)
    }
  }, [bundle, coupon])

  const handleCollapseChange = (event, expanded) => {
    const {
      details: { infoSheet },
    } = bundle
    const { defaultOpen } = infoSheet
    if (!expanded && defaultOpen) {
      // Change defaultOpen after the first collapse of the bundle sheet
      setJSONKey(BUNDLE_KEY, {
        ...bundle,
        details: {
          ...bundle.details,
          infoSheet: {
            ...infoSheet,
            defaultOpen: false,
          },
        },
      })
    }
  }

  return (
    <>
      {showBundle && bundle.details?.infoSheet?.enabled && (
        <BundleInfoSheet
          backgroundColor={
            bundle.details.infoSheet.backgroundColor || undefined
          }
          textColor={bundle.details.infoSheet.textColor || undefined}
          title={bundle.details.infoSheet.callout}
          contentHeader={bundle.details.infoSheet.headline}
          contentBody={
            purchaseFlow === FLOWS.REACTIVATION
              ? bundle.details.infoSheet.reactivationDescription
              : bundle.details.infoSheet.trialDescription
          }
          linkLabel={bundle.details.infoSheet.linkLabel}
          linkURL={bundle.details.infoSheet.linkURL}
          imageSrc={bundle.details.infoSheet.image}
          position="left"
          isDefaultOpen={bundle.details.infoSheet.defaultOpen}
          onCollapseChange={handleCollapseChange}
        />
      )}
      {showCoupon && (
        <Banner
          bannerText={coupon.bannerText}
          selector=".banner"
          CTA={
            !onPricingPage ? (
              <Button style={{ color: '#4D32CC' }} href="/pricing">
                Get This Deal
              </Button>
            ) : null
          }
        />
      )}
      {!(showCoupon || showBundle) && !isLoading && <AlertBars />}
    </>
  )
}

Promotions.defaultProps = {
  onPromotionsLoaded: () => {},
}

Promotions.propTypes = {
  onPromotionsLoaded: PropTypes.func,
}

export default Promotions
