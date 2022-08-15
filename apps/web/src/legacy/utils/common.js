export function getUrlParam(param) {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    return params.get(param)
  }
  return null
}

export function getJSONKey(storageKey) {
  if (typeof window !== 'undefined') {
    try {
      const value = JSON.parse(window.localStorage.getItem(storageKey))
      return value
    } catch {
      return null
    }
  }
  return null
}

export function setJSONKey(storageKey, value) {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(value))
    } catch {
      // swallow
    }
  }
}

export function getExpiredAndInvalidate(
  storageKey,
  browserExpirationDate,
  apiExpirationDate
) {
  let expired = false
  if (apiExpirationDate || browserExpirationDate) {
    // Parse UTC string
    const parsedApiExpiration =
      apiExpirationDate && Date.parse(apiExpirationDate)
    // Browser expiration will already be a Unix Epoch.
    const parsedBrowserExpiration =
      browserExpirationDate && browserExpirationDate

    const currentTime = new Date().getTime()

    const isApiDateExpired = parsedApiExpiration
      ? parsedApiExpiration < currentTime
      : false
    const isBrowserDateExpired = parsedBrowserExpiration
      ? parsedBrowserExpiration < currentTime
      : false

    expired = isApiDateExpired || isBrowserDateExpired

    // Remove from local storage if it has expired
    if (expired && typeof window !== 'undefined') {
      window.localStorage.removeItem(storageKey)
    }
  }
  return expired
}

export function makeExpiryDate(daysOffset) {
  const currentDate = new Date()
  return currentDate.setDate(currentDate.getDate() + daysOffset)
}

export function makeExpiryTime(msOffset) {
  const currentDate = new Date()
  return currentDate.setTime(currentDate.getTime() + msOffset)
}
