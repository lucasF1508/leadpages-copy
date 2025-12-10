import { normalizeUrl } from './normalizeUrl'

/**
 * Determina si una URL es un enlace interno
 * @param url - La URL a verificar (puede ser relativa o absoluta)
 * @returns true si es un enlace interno, false si es externo
 */
export const isInternalLink = (url: string): boolean => {
  if (!url || typeof url !== 'string') {
    return false
  }

  // Si es una ruta relativa que empieza con /, es interna
  if (/^\/(?!\/)/.test(url)) {
    return true
  }

  // Si tiene protocolo, verificar si es del mismo dominio
  if (/^(https?:)?\/\//.test(url)) {
    try {
      const urlObj = new URL(url.startsWith('//') ? `https:${url}` : url)
      const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://www.leadpages.com'
      const siteUrlObj = new URL(siteUrl)
      
      // Si es del mismo dominio, es interna
      return urlObj.origin === siteUrlObj.origin
    } catch (e) {
      // Si falla el parsing, verificar si contiene el dominio del sitio
      const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://www.leadpages.com'
      const siteDomain = siteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
      return url.includes(siteDomain)
    }
  }

  return false
}

export default isInternalLink
