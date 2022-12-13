import { NextResponse } from 'next/server'
import incrementalPaths from '@public/indices/incrementalPaths'

const patterns = incrementalPaths?.map(
  (pathname) => new URLPattern({ pathname })
)

export async function middleware(request) {
  const response = NextResponse.next()

  if (!incrementalPaths.length) return response

  if (!request.cookies.get('__next_preview_data')) {
    const url = request.nextUrl
    const pattern = patterns.find((p) => p.test(url))
    url.pathname = !pattern ? url.pathname : `/_legacy${url.pathname}`
    return NextResponse.rewrite(url)
  }

  return response
}

export const config = {
  matcher: '/((?!api|_next/static|favicon).*)',
}
