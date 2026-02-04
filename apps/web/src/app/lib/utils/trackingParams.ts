/**
 * Utilidad central para parámetros de tracking (XID, affiliate, etc.) que deben
 * persistir en toda la sesión. Combina params de la URL actual con los guardados
 * en cookie __lptp (la URL tiene prioridad).
 *
 * Referencia: cualquier param que llegue por URL debe persistir en toda la página
 * para no perder atribución al navegar o al ir a "elegir plan" / trial.
 */

const COOKIE_NAME = '__lptp'
const COOKIE_MAX_AGE_DAYS = 30

/**
 * Lee el objeto de params persistidos desde la cookie __lptp.
 * Solo funciona en cliente (usa document.cookie).
 */
function getTrackingParamsFromCookie(): Record<string, string> {
  if (typeof document === 'undefined') return {}
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
 * Devuelve los parámetros de tracking a usar en links y formularios:
 * URL actual + params de la cookie (la URL gana si existe la misma key).
 * Usar siempre esta función en lugar de solo window.location.search para que
 * XID/affiliate no se pierdan al navegar o al volver sin el link de afiliado.
 */
export function getPersistedTrackingParams(): URLSearchParams {
  const params = new URLSearchParams()

  // 1) Primero los de la cookie (base persistida)
  const fromCookie = getTrackingParamsFromCookie()
  Object.entries(fromCookie).forEach(([key, value]) => {
    if (value != null && value !== '') params.set(key, value)
  })

  // 2) Luego los de la URL (sobrescriben para mismo key)
  if (typeof window !== 'undefined' && window.location?.search) {
    const fromUrl = new URLSearchParams(window.location.search)
    fromUrl.forEach((value, key) => {
      params.set(key, value)
    })
  }

  return params
}

/**
 * Convierte los params persistidos a un objeto para APIs (ej. extraParams en fetch-trial-url).
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
 * Añade los params persistidos a una URL (baseUrl puede ser relativa o absoluta).
 * No sobrescribe params que ya tenga la URL.
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
