import { NextResponse } from 'next/server'
import incrementalPaths from '@public/indices/incrementalPaths'

const proxyHost = process.env.LEADPAGES_BLOG_PROXY_HOST
const proxyPath = process.env.LEADPAGES_BLOG_PROXY_PATH

const patterns = incrementalPaths?.map(
  (pathname) => new URLPattern({ pathname })
)

export async function middleware(request) {
  const response = NextResponse.next()
  const url = request.nextUrl.clone()

  if (url.pathname.startsWith(proxyPath)) {
    return NextResponse.rewrite(new URL(`${url.pathname}/`, proxyHost))
  }

  if (!incrementalPaths.length) return response

  if (!request.cookies.get('__next_preview_data')) {
    const pattern = patterns.find((p) => p.test(url))
    url.pathname = !pattern ? url.pathname : `/_legacy${url.pathname}`
    return NextResponse.rewrite(url)
  }

  return response
}

export const config = {
  matcher: '/((?!api|_next/static|favicon).*)',
}
