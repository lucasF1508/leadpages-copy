/**
 * Normaliza una URL eliminando trailing slashes, excepto para la raíz "/"
 * 
 * @param url - La URL a normalizar (puede ser una ruta relativa o absoluta)
 * @returns La URL normalizada sin trailing slash (excepto "/")
 * 
 * @example
 * normalizeUrl('/blog/post/') // '/blog/post'
 * normalizeUrl('/blog/post') // '/blog/post'
 * normalizeUrl('/') // '/'
 * normalizeUrl('https://example.com/page/') // 'https://example.com/page'
 * normalizeUrl('http://www.leadpages.com/blog') // '/blog' (enlace interno convertido a relativo)
 */
export function normalizeUrl(url: null | string | undefined): string {
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

    // Si es una URL con protocolo (http/https), verificar si es interna o externa
    if (/^(https?:)?\/\//.test(url)) {
        try {
            const urlObj = new URL(url.startsWith('//') ? `https:${url}` : url)
            const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://www.leadpages.com'
            const siteUrlObj = new URL(siteUrl)
            
            // Si es un enlace interno (mismo dominio), convertir a ruta relativa
            if (urlObj.origin === siteUrlObj.origin) {
                const pathname = urlObj.pathname
                const normalizedPathname = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
                return normalizedPathname
            }
            
            // Si es externa, normalizar pero forzar https://
            const pathname = urlObj.pathname
            const normalizedPathname = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
            return `https://${urlObj.host}${normalizedPathname}${urlObj.search}${urlObj.hash}`
        } catch {
            // Si falla el parsing, intentar extraer la ruta si parece ser interna
            const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://www.leadpages.com'
            if (url.includes(siteUrl.replace(/^https?:\/\//, ''))) {
                // Intentar extraer la ruta después del dominio
                const match = url.match(/https?:\/\/[^\/]+(\/.*)/)
                if (match && match[1]) {
                    const path = match[1]
                    return path === '/' ? '/' : path.replace(/\/+$/, '')
                }
            }
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
