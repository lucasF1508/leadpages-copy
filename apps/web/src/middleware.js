import { NextResponse } from 'next/server'
import incrementalPaths from '@public/indices/incrementalPaths'

const proxyHost = process.env.LEADPAGES_BLOG_PROXY_HOST
const proxyPath = process.env.LEADPAGES_BLOG_PROXY_PATH
const proxyEnabled = process.env.LEADPAGES_BLOG_PROXY_ENABLE !== 'false'

const patterns = incrementalPaths?.map(
  (pathname) => new URLPattern({ pathname })
)

export async function middleware(request) {
  const response = NextResponse.next()
  const url = request.nextUrl.clone()

  if (request.cookies.get('__next_preview_data')) {
    return response
  }

  if (proxyEnabled && url.pathname.startsWith(proxyPath)) {
    if (
      url.pathname.includes('wp-content') ||
      url.pathname.includes('wp-includes')
    ) {
      return NextResponse.rewrite(new URL(url.pathname, proxyHost))
    }
    return NextResponse.rewrite(
      new URL(`${url.pathname}/${url.search}`, proxyHost)
    )
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
