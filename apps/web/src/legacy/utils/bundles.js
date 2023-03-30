import {
  getUrlParam,
  getExpiredAndInvalidate,
  getJSONKey,
  setJSONKey,
  makeExpiryDate,
} from './common'

const BUNDLE_ENDPOINT = `${process.env.STARGATE_API_HOST}/account/v1/bundles`
const JSON_REQUEST = { headers: { 'Content-Type': 'application/json' } }

// Util functions for fetching, validating, and storing bundles in local storage

export const BUNDLE_KEY = 'bundle'
export const OFFER_EXPIRED_MESSAGE = 'Sorry, that special offer has expired.'
export const OFFER_INVALID_MESSAGE = 'Sorry, that special offer is not valid.'

async function fetchBundle(bundleId, flow) {
  const { FLOWS } = await import('@lp/lib-upgrade-modal')
  let response

  try {
    response = await fetch(`${BUNDLE_ENDPOINT}/${bundleId}`, JSON_REQUEST)
  } catch (e) {
    return { error: { message: OFFER_INVALID_MESSAGE } }
  }

  if (response.status !== 200) {
    return { error: { message: OFFER_INVALID_MESSAGE } }
  }

  const bundleResponse = await response.json()
  if (
    (flow === FLOWS.SIGNUP && !bundleResponse.details?.enabledForTrial) ||
    (flow === FLOWS.REACTIVATION &&
      !bundleResponse.details?.enabledForReactivation)
  ) {
    return { error: { message: OFFER_INVALID_MESSAGE } }
  }

  return bundleResponse
}

export function getLocalBundle() {
  return getJSONKey(BUNDLE_KEY)
}

export function checkBundleExpired(bundle) {
  // If we've just fetched a bundle via url param, browser expiration should always be in the future
  return getExpiredAndInvalidate(
    BUNDLE_KEY,
    bundle?.browserExpiration,
    bundle?.expirationDate
  )
}

export async function setLocalBundle(flow) {
  const bundleParamId = getUrlParam(BUNDLE_KEY)

  if (bundleParamId) {
    const bundle = await fetchBundle(bundleParamId, flow)
    if (bundle?.enabled) {
      if (bundle.details?.infoSheet?.enabled) {
        bundle.details.infoSheet.defaultOpen = true
      }
      bundle.browserExpiration = makeExpiryDate(6)
      setJSONKey(BUNDLE_KEY, bundle)
      return bundle
    }

    // Remove bundle from local storage, and display a toast, if it is not enabled.
    if (typeof window !== 'undefined' && bundle && !bundle.enabled) {
      localStorage.removeItem(BUNDLE_KEY)
      return bundle.error
        ? bundle
        : { error: { message: OFFER_EXPIRED_MESSAGE } }
    }
  }

  return null
}
