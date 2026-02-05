/**
 * Central util for tracking params (XID, affiliate, etc.) that must persist
 * across the session. Merges current URL params with those stored in __lptp
 * cookie (URL takes precedence).
 *
 * Reference: any param coming from the URL must persist across the page so
 * attribution is not lost when navigating or going to "pick plan" / trial.
 */

const COOKIE_NAME = '__lptp'
const COOKIE_MAX_AGE_DAYS = 30

/**
 * Reads the persisted params object from the __lptp cookie.
 */
function getTrackingParamsFromCookie(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  try {
    const match = document.cookie.match(
      new RegExp('(?:^|; )' + COOKIE_NAME.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=([^;]*)')
    )
    const raw = match?.[1] != null ? decodeURIComponent(match[1]) : null
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null) return {}
    const result: Record<string, string> = {}
    for (const [k, v] of Object.entries(parsed)) {
      if (typeof k === 'string' && typeof v === 'string') result[k] = v
    }
    return result
  } catch {
    return {}
  }
}

/**
 * Returns the tracking params to use in links and forms:
 * current URL + cookie params (URL wins when the same key exists).
 * Always use this instead of window.location.search so XID/affiliate
 * are not lost when navigating or returning without the affiliate link.
 */
export function getPersistedTrackingParams(): URLSearchParams {
  const params = new URLSearchParams()

  // 1) Cookie params first (persisted base)
  const fromCookie = getTrackingParamsFromCookie()
  Object.entries(fromCookie).forEach(([key, value]) => {
    if (value != null && value !== '') params.set(key, value)
  })

  // 2) URL params next (override for same key)
  if (typeof window !== 'undefined' && window.location?.search) {
    const fromUrl = new URLSearchParams(window.location.search)
    fromUrl.forEach((value, key) => {
      params.set(key, value)
    })
  }

  return params
}

/**
 * Converts persisted params to an object for APIs (e.g. extraParams in fetch-trial-url).
 */
export function getPersistedTrackingParamsAsObject(): Record<string, string> {
  const p = getPersistedTrackingParams()
  const obj: Record<string, string> = {}
  p.forEach((value, key) => {
    obj[key] = value
  })
  return obj
}

/**
 * Appends persisted params to a URL (baseUrl may be relative or absolute).
 * Does not override params already present on the URL.
 */
export function appendPersistedTrackingParams(baseUrl: string): string {
  const params = getPersistedTrackingParams()
  if (params.toString() === '') return baseUrl
  try {
    const isAbsolute = /^https?:\/\//.test(baseUrl)
    const u = isAbsolute
      ? new URL(baseUrl)
      : new URL(baseUrl, typeof window !== 'undefined' ? window.location.origin : 'https://www.leadpages.com')
    params.forEach((value, key) => {
      if (!u.searchParams.has(key)) u.searchParams.set(key, value)
    })
    return u.toString()
  } catch {
    const separator = baseUrl.includes('?') ? '&' : '?'
    return `${baseUrl}${separator}${params.toString()}`
  }
}

export { COOKIE_NAME as TRACKING_PARAMS_COOKIE_NAME, COOKIE_MAX_AGE_DAYS }
