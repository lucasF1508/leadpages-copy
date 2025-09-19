import experiments from '@public/indices/experiments'
import incrementalPaths from '@public/indices/incrementalPaths'
import { NextResponse } from 'next/server'

const findExperimentForControl = (pathname, _experiments) =>
  _experiments.find((e) => e.control === pathname)

const findExperimentForVariant = (pathname, _experiments) =>
  _experiments.find((e) => e.variants.some((v) => v.path === pathname))
const getSelectedVariantPath = (choice, variants) => {
  let cumulativeWeight = 0

  for (const [index, variant] of variants.entries()) {
    cumulativeWeight += variant.weight
    if (choice < cumulativeWeight) return { index, path: variant.path }
  }
  return { index: 'basePath' }
}

const getVariant = (url, request) => {
  if (!experiments) return null

  const _experiments = experiments.reduce((acc, experiment) => {
    if (experiment.control !== '/home') return [...acc, experiment]
    const _experiment = {
      ...experiment,
      control: '/',
    }
    return [...acc, _experiment]
  }, [])

  const experimentForControl = findExperimentForControl(
    url.pathname,
    _experiments
  )
  const experimentForVariant =
    !experimentForControl &&
    findExperimentForVariant(url.pathname, _experiments)

  if (experimentForVariant) return { redirect: experimentForVariant.control }
  if (!experimentForControl) return null

  const cookies = {}
  request.cookies.forEach((cookie) => {
    const [key, value] = cookie.split('=')
    if (key === '__lpst') cookies[key] = value.replace('; Path', '')
  })

  const lpstCookie =
    cookies.__lpst && JSON.parse(decodeURIComponent(cookies.__lpst))

  if (lpstCookie) {
    const exp = lpstCookie[experimentForControl.control]
    const _exp = exp?.split('::')[0]
    const _expName = exp?.split('::')[2]

    if (_exp !== undefined && _expName === experimentForControl.name) {
      if (_exp === 'basePath') return { rewrite: experimentForControl.control }
      const variant = experimentForControl.variants[_exp]
      if (variant) return { rewrite: variant.path }
    }
  }

  const {
    index: selectedIndex,
    path: selectedVariantPath = experimentForControl.control,
  } = getSelectedVariantPath(Math.random(), experimentForControl.variants)

  const newCookieData = {
    ...lpstCookie,
    [experimentForControl.control]: `${selectedIndex}::${selectedVariantPath}::${experimentForControl.name}`,
  }

  return {
    cookie: JSON.stringify(newCookieData),
    rewrite: selectedVariantPath,
  }
}
const patterns = incrementalPaths
  ?.filter(
    (url) =>
      !url.startsWith('/lead-generation-guide') &&
      !url.startsWith('/comparisons')
  )
  ?.map((pathname) => new URLPattern({ pathname }))

export async function middleware(request) {
  const response = NextResponse.next()
  const url = request.nextUrl.clone()

  if (request.cookies.get('__next_preview_data')) {
    if (url.pathname !== '/home' && url.pathname.includes('/home-')) {
      const path = url.pathname
      url.pathname = `/home${path}`
      return NextResponse.rewrite(url)
    }

    return response
  }

  // Enable caching for 31 days
  response.headers.set('Cache-Control', 'public, s-maxage=2678400')

  if (!incrementalPaths || !incrementalPaths.length) return response

  const match = patterns.find((p) => p.test(url))

  if (match) {
    url.pathname = `/_legacy${url.pathname}`
    return NextResponse.rewrite(url)
  }

  const splitTest = getVariant(url, request)

  if (splitTest) {
    if (splitTest.redirect) {
      url.pathname = splitTest.redirect
      return NextResponse.redirect(url)
    }

    url.pathname = splitTest.rewrite
    if (url.pathname.includes('/home-')) {
      const path = url.pathname
      url.pathname = `/home${path}`
    }

    const _response = NextResponse.rewrite(url)

    if (splitTest.cookie) _response.cookies.set('__lpst', splitTest.cookie)
    return _response
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon).*)', '/'],
}
