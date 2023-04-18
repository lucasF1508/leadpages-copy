import { NextResponse } from 'next/server'
import incrementalPaths from '@public/indices/incrementalPaths'

// Redirects
import blogRedirects from '@public/indices/legacyBlogRedirects.json'
import legacyRedirects from '@public/indices/legacyRedirects.json'

const redirects = { ...legacyRedirects, ...blogRedirects }

const patterns = incrementalPaths?.map(
  (pathname) => new URLPattern({ pathname })
)

export async function middleware(request) {
  const response = NextResponse.next()
  const url = request.nextUrl.clone()
  const path = url.pathname.substring(1)

  if (request.cookies.get('__next_preview_data')) {
    return response
  }

  if (Object.keys(redirects).includes(path)) {
    const rule = redirects[path]
    return NextResponse.redirect(new URL(rule?.destination || rule, url))
  }

  if (!incrementalPaths.length) return response

  const match = patterns.find((p) => p.test(url))

  if (match) {
    url.pathname = `/_legacy${url.pathname}`
    return NextResponse.rewrite(url)
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon).*)'],
}
