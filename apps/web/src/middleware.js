// apps/web/src/middleware.js
import experiments from '@public/indices/experiments'
import incrementalPaths from '@public/indices/incrementalPaths'
import { NextResponse } from 'next/server'

// ⚠️ auto-generated during build from apps/web/gone.json
import goneList from './gone.generated'

// ---------- utils ----------
const norm = (p) => (p || '/').replace(/\/$/, '').toLowerCase()
const GONE = new Set((goneList || []).map(norm))

// Serve a 410 Gone page (React route or static HTML)
async function respond410(request) {
  const fetchHtml = async (relative) => {
    const u = new URL(relative, request.url)
    const res = await fetch(u.toString())
    if (!res.ok) throw new Error(`GET ${relative} ${res.status}`)
    return res.text()
  }

  // 1) Try dynamic /410 route
  try {
    const html = await fetchHtml('/410')
    const gone = new NextResponse(html, {
      headers: { 'content-type': 'text/html; charset=utf-8' },
      status: 410,
    })
    gone.headers.set('Cache-Control', 'public, s-maxage=3600')
    gone.headers.set('X-Robots-Tag', 'noindex')
    gone.headers.set('x-from-middleware', '410-page')
    return gone
  } catch {}

  // 2) Fallback to static /410.html (public/)
  try {
    const html = await fetchHtml('/410.html')
    const gone = new NextResponse(html, {
      headers: { 'content-type': 'text/html; charset=utf-8' },
      status: 410,
    })
    gone.headers.set('Cache-Control', 'public, s-maxage=3600')
    gone.headers.set('X-Robots-Tag', 'noindex')
    gone.headers.set('x-from-middleware', '410-html')
    return gone
  } catch {}

  // 3) Minimal plain-text fallback
  return new NextResponse('Gone', {
    headers: {
      'cache-control': 'no-store',
      'x-from-middleware': '410-fallback',
    },
    status: 410,
  })
}

// ---------- A/B test helpers ----------
const findExperimentForControl = (pathname, exps) =>
  exps?.find((e) => e.control === pathname)

const findExperimentForVariant = (pathname, exps) =>
  exps?.find((e) => e.variants?.some((v) => v.path === pathname))

const getSelectedVariantPath = (choice, variants = []) => {
  let cumulativeWeight = 0
  for (const [index, variant] of variants.entries()) {
    cumulativeWeight += variant.weight
    if (choice < cumulativeWeight) return { index, path: variant.path }
  }
  return { index: 'basePath' }
}

const getVariant = (url, request) => {
  if (!experiments) return null

  // Normalize experiment for /home → "/"
  const _experiments = experiments.map((e) =>
    e.control === '/home' ? { ...e, control: '/' } : e
  )

  const expCtrl = findExperimentForControl(url.pathname, _experiments)
  const expVar =
    !expCtrl && findExperimentForVariant(url.pathname, _experiments)

  // Direct hit to variant → redirect to control
  if (expVar) return { redirect: expVar.control }
  if (!expCtrl) return null

  // Honor previous assignment (__lpst cookie)
  let lpstCookie
  try {
    const raw =
      request.cookies?.get?.('__lpst')?.value ??
      request.cookies?.get?.('__lpst') ??
      null
    if (raw) lpstCookie = JSON.parse(decodeURIComponent(raw))
  } catch {}

  if (lpstCookie) {
    const exp = lpstCookie[expCtrl.control]
    const idx = exp?.split('::')[0]
    const expName = exp?.split('::')[2]
    if (idx !== undefined && expName === expCtrl.name) {
      if (idx === 'basePath') return { rewrite: expCtrl.control }
      const variant = expCtrl.variants[idx]
      if (variant) return { rewrite: variant.path }
    }
  }

  // New assignment (weighted)
  const { index: selectedIndex, path: selectedPath = expCtrl.control } =
    getSelectedVariantPath(Math.random(), expCtrl.variants)

  const newCookieData = {
    ...lpstCookie,
    [expCtrl.control]: `${selectedIndex}::${selectedPath}::${expCtrl.name}`,
  }

  return {
    cookie: JSON.stringify(newCookieData),
    rewrite: selectedPath,
  }
}

// ---------- legacy rewrite patterns ----------
const patterns =
  incrementalPaths
    ?.filter(
      (url) =>
        !url.startsWith('/lead-generation-guide') &&
        !url.startsWith('/comparisons') &&
        !url.startsWith('/marketing-resources') &&
        !url.startsWith('/faq') &&
        !url.startsWith('/press') &&
        !url.startsWith('/product/feature-index') &&
        !url.startsWith('/brand') &&
        !url.startsWith('/blog')
    )
    ?.map((pathname) => new URLPattern({ pathname })) ?? []

export async function middleware(request) {
  const url = new URL(request.url)
  const path = norm(url.pathname)

  // Avoid recursion when requesting /410 or /410.html
  if (path === '/410' || path === '/410.html') return NextResponse.next()

  // 🔴 410 check (from generated list)
  if (GONE.has(path)) return respond410(request)

  // Preview mode: special handling for /home
  if (request.cookies?.get?.('__next_preview_data')) {
    if (url.pathname !== '/home' && url.pathname.includes('/home-')) {
      url.pathname = `/home${url.pathname}`
      return NextResponse.rewrite(url)
    }
    return NextResponse.next()
  }

  // If URL has no params but __lptp cookie exists, redirect to same path with params
  // (so the address bar is repopulated without client scripts)
  const TRACKING_COOKIE = '__lptp'
  if (!url.search || url.search === '?') {
    try {
      const raw = request.cookies?.get?.(TRACKING_COOKIE)?.value ?? null
      if (raw) {
        const lptp = JSON.parse(decodeURIComponent(raw))
        if (typeof lptp === 'object' && lptp !== null) {
          const q = Object.keys(lptp)
            .filter((k) => k && lptp[k] != null && lptp[k] !== '')
            .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(lptp[k]))
            .join('&')
          if (q) {
            const redirectUrl = new URL(request.url)
            redirectUrl.search = q
            return NextResponse.redirect(redirectUrl)
          }
        }
      }
    } catch {}
  }

  // Helper: set tracking cookies (__lptp + ps_xid) on ANY response we return.
  // When we return rewrite/redirect we were not setting cookies — so they were lost.
  const TRACKING_MAX_AGE = 30 * 24 * 60 * 60 // 30 days
  const setTrackingCookies = (res) => {
    let lptp = {}
    try {
      const raw = request.cookies?.get?.(TRACKING_COOKIE)?.value ?? null
      if (raw) lptp = JSON.parse(decodeURIComponent(raw))
    } catch {}
    if (typeof lptp !== 'object' || lptp === null) lptp = {}
    url.searchParams.forEach((value, key) => {
      if (key && value != null && value !== '') lptp[key] = value
    })
    const lptpStr = JSON.stringify(lptp)
    if (lptpStr.length > 1 && lptpStr.length < 3500) {
      const opts = {
        maxAge: TRACKING_MAX_AGE,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      }
      const hostname = url.hostname || ''
      if (hostname.endsWith('leadpages.com')) opts.domain = '.leadpages.com'
      res.cookies.set(TRACKING_COOKIE, encodeURIComponent(lptpStr), opts)
    }
    const xidValue =
      url.searchParams.get('XID') ||
      url.searchParams.get('xid') ||
      url.searchParams.get('ps_xid') ||
      lptp.XID ||
      lptp.xid ||
      lptp.ps_xid
    if (xidValue) {
      const opts = {
        maxAge: TRACKING_MAX_AGE,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      }
      const hostname = url.hostname || ''
      if (hostname.endsWith('leadpages.com')) opts.domain = '.leadpages.com'
      res.cookies.set('ps_xid', xidValue, opts)
    }
  }

  // Default cache (≈ 31 days)
  const response = NextResponse.next()
  response.headers.set('Cache-Control', 'public, s-maxage=2678400')
  response.headers.set('x-gone-count', String(GONE.size))
  setTrackingCookies(response)

  if (!incrementalPaths?.length) return response

  // Legacy rewrites — set tracking cookies on the response we actually return
  const match = patterns.find((p) => p.test(url))
  if (match) {
    url.pathname = `/_legacy${url.pathname}`
    const rewritten = NextResponse.rewrite(url)
    setTrackingCookies(rewritten)
    return rewritten
  }

  // A/B testing — set tracking cookies on redirect/rewrite we return
  const splitTest = getVariant(url, request)
  if (splitTest) {
    if (splitTest.redirect) {
      url.pathname = splitTest.redirect
      const redirect = NextResponse.redirect(url)
      redirect.headers.set('x-from-middleware', 'ab-redirect')
      setTrackingCookies(redirect)
      return redirect
    }
    url.pathname = splitTest.rewrite
    if (url.pathname.includes('/home-')) url.pathname = `/home${url.pathname}`
    const rewritten = NextResponse.rewrite(url)
    if (splitTest.cookie) rewritten.cookies.set('__lpst', splitTest.cookie)
    rewritten.headers.set('x-from-middleware', 'ab-rewrite')
    setTrackingCookies(rewritten)
    return rewritten
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon).*)', '/'],
}
