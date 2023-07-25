import React, { useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import Link from '@components/Link'
import { styled } from '@design'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

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

const Banner = dynamic(() => import('@lp/ui').then((mod) => mod.Banner))
const BundleInfoSheet = dynamic(() =>
  import('@lp/ui').then((mod) => mod.BundleInfoSheet)
)

const FLOWS = {
  SIGNUP: 'signup',
  REACTIVATION: 'reactivation',
  UPGRADE: 'upgrade',
}

const PRICING_PATHS = ['/pricing', '/compare-plans']

const $Banner = styled(Banner, {
  z: 1,
  position: 'relative',

  '& p': {
    color: 'inherit',
  },
})

const Promotions = ({ onPromotionsLoaded = false, alertBarData }) => {
  const { setHasLoaded } = useContext(AppContext)

  const [showBundle, setShowBundle] = useState(false)
  const [showCoupon, setShowCoupon] = useState(false)
  const [purchaseFlow, setPurchaseFlow] = useState(false)
  const [bundle, setBundle] = useState()
  const [coupon, setCoupon] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const { asPath } = useRouter()
  const currentPath = asPath.replace(/\?.*$/, '')
  const onPricingPage = PRICING_PATHS.includes(currentPath)

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
  }, [bundle, coupon, asPath])

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
        <$Banner
          bannerText={coupon.bannerText}
          selector=".banner"
          CTA={
            !onPricingPage ? (
              <Link
                condition="internal"
                linkStyle="buttonBanner"
                url="/pricing"
              >
                Get This Deal
              </Link>
            ) : null
          }
        />
      )}
      {!(showCoupon || showBundle) && !isLoading && (
        <AlertBars alertBarData={alertBarData} />
      )}
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
