import { NextResponse } from 'next/server'
import incrementalPaths from '@public/indices/incrementalPaths'

const patterns = incrementalPaths?.map(
  (pathname) => new URLPattern({ pathname })
)

export async function middleware(request) {
  const response = NextResponse.next()
  const url = request.nextUrl.clone()

  if (request.cookies.get('__next_preview_data')) {
    return response
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
