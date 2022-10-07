import { FLOWS } from '@lp/lib-upgrade-modal'
import {
  getUrlParam,
  getJSONKey,
  setJSONKey,
  getExpiredAndInvalidate,
  makeExpiryDate,
} from './common'

const COUPON_ENDPOINT = `${process.env.LEADPAGES_API_HOST}/coupons`

// Util functions for fetching and validating coupons

export const COUPON_KEY = 'coupon'
export const COUPON_INVALID_MESSAGE = 'That coupon is not valid.'
export const COUPON_INVALID_DETAIL = 'Start a free 14-day trial instead!'

async function fetchCoupon(couponCode, flow) {
  const response = await fetch(`${COUPON_ENDPOINT}/${couponCode}?flow=${flow}`)
  if (response.status !== 200) {
    return null
  }
  const couponResponse = await response.json()
  return couponResponse
}

export function getLocalCoupon() {
  return getJSONKey(COUPON_KEY)
}

export function checkCouponExpired(coupon) {
  // If we've just fetched a coupon via url param, browser expiration should always be in the future
  return getExpiredAndInvalidate(
    COUPON_KEY,
    coupon?.browserExpiration,
    coupon?.redeemBy
  )
}

function couponAttempted(coupon) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'couponAttempted',
    couponData: coupon,
  })
}

export async function setLocalCoupon(flow) {
  const couponParam = getUrlParam(COUPON_KEY)
  if (couponParam) {
    const coupon = await fetchCoupon(couponParam, flow)
    if (coupon && coupon.code) {
      coupon.canRedeemCoupon = !!coupon
      coupon.couponUrl = coupon.canRedeemCoupon ? `?coupon=${coupon.code}` : ''
      coupon.browserExpiration = makeExpiryDate(6)
      setJSONKey(COUPON_KEY, coupon)
      couponAttempted(coupon)
      return coupon
    }
    // Mark invalid attempt and return invalid coupon
    const invalidCoupon = { id: couponParam, canRedeemCoupon: false }
    // Remove any previous coupon offer
    if (typeof window !== 'undefined') {
      localStorage.removeItem(COUPON_KEY)
    }

    couponAttempted(invalidCoupon)
    // return error message;
    return {
      error: {
        message: COUPON_INVALID_MESSAGE,
        detail: flow !== FLOWS.REACTIVATION ? COUPON_INVALID_DETAIL : '',
      },
    }
  }
  return null
}
