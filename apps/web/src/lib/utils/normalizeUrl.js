/**
 * Normaliza una URL eliminando trailing slashes, excepto para la raíz "/"
 * 
 * @param {string|undefined|null} url - La URL a normalizar (puede ser una ruta relativa o absoluta)
 * @returns {string} La URL normalizada sin trailing slash (excepto "/")
 * 
 * @example
 * normalizeUrl('/blog/post/') // '/blog/post'
 * normalizeUrl('/blog/post') // '/blog/post'
 * normalizeUrl('/') // '/'
 * normalizeUrl('https://example.com/page/') // 'https://example.com/page'
 */
function normalizeUrl(url) {
  if (!url || typeof url !== 'string') {
    return ''
  }

  // No normalizar rutas de Sanity Studio, API routes, preview routes, o rutas internas de Next.js
  if (
    url.startsWith('/studio') ||
    url.startsWith('/api/') ||
    url.startsWith('/preview') ||
    url.startsWith('/_next/') ||
    url.startsWith('/_webpack/')
  ) {
    return url
  }

  // Si es una URL externa (http/https), normalizar el pathname
  if (/^(https?:)?\/\//.test(url)) {
    try {
      const urlObj = new URL(url.startsWith('//') ? `https:${url}` : url)
      const pathname = urlObj.pathname
      const normalizedPathname = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
      return `${urlObj.origin}${normalizedPathname}${urlObj.search}${urlObj.hash}`
    } catch (e) {
      // Si falla el parsing, simplemente eliminamos trailing slash
      return url.replace(/\/+$/, '')
    }
  }

  // Para URLs internas (rutas relativas)
  // Si es solo "/", lo mantenemos
  if (url === '/') {
    return '/'
  }

  // Eliminamos trailing slashes
  return url.replace(/\/+$/, '')
}

module.exports = { normalizeUrl }
