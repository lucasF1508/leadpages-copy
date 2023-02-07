const path = require('path')
const findUp = require('find-up')
const adminRedirects = require('redirects')
const { filterRoutesFromSanity } = require('directoryToRoutes')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
require('dotenv').config({
  path: findUp.sync([`.env.${process.env.NODE_ENV}`, '.env.local', '.env']),
})
const { init: buildJSON } = require('indices/buildJSON')
const { withSentryConfig } = require('@sentry/nextjs')

const legacyRedirects = require('./public/indices/legacyRedirects.json')

const {
  SANITY_STUDIO_API_PROJECT_ID,
  SANITY_STUDIO_API_DATASET,
  SANITY_STUDIO_API_VERSION,
  SANITY_STUDIO_PREVIEW_SECRET,
  SANITY_STUDIO_APP_TOKEN,
  NEXT_PUBLIC_URL,
  VERCEL_ENV,
  SENDGRID_API_KEY,
  SENDGRID_TEMPLATE_ID,
  SENDGRID_URL,
  SENDGRID_VERIFIED_SENDER,
  RECAPTCHA_SITE_KEY,
  MC_API_KEY,
  MC_AUDIENCE_ID,
  MC_SERVER_PREFIX,
  HCAPTCHA_SITEKEY,
  STARGATE_API_HOST,
  LEADPAGES_API_HOST,
  LEADPAGES_TRIAL_HOST,
  LEADPAGES_REACTIVATION_HOST,
  LEADPAGES_BLOG_PROXY_HOST,
  LEADPAGES_BLOG_PROXY_PATH,
  GTM_CONTAINER_ID,
  GTAG_TRACKING_ID,
  FB_PIXEL_ID,
  SENTRY_DSN,
} = process.env

const moduleExports = withBundleAnalyzer({
  env: {
    SANITY_STUDIO_API_PROJECT_ID,
    SANITY_STUDIO_API_DATASET,
    SANITY_STUDIO_API_VERSION,
    SANITY_STUDIO_PREVIEW_SECRET,
    SANITY_STUDIO_APP_TOKEN,
    NEXT_PUBLIC_URL,
    SENDGRID_API_KEY,
    SENDGRID_TEMPLATE_ID,
    SENDGRID_URL,
    SENDGRID_VERIFIED_SENDER,
    MC_API_KEY,
    MC_AUDIENCE_ID,
    MC_SERVER_PREFIX,
    RECAPTCHA_SITE_KEY,
    VERCEL_ENV,
    HCAPTCHA_SITEKEY,
    STARGATE_API_HOST,
    LEADPAGES_API_HOST,
    LEADPAGES_TRIAL_HOST,
    LEADPAGES_REACTIVATION_HOST,
    GTM_CONTAINER_ID,
    GTAG_TRACKING_ID,
    FB_PIXEL_ID,
    SENTRY_DSN,
  },
  reactStrictMode: false,
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },
  images: {
    domains: ['cdn.sanity.io', 'assets.vercel.com'],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1600, 1920, 2048, 3840],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  redirects: async () => {
    const redirects = await adminRedirects({
      projectId: SANITY_STUDIO_API_PROJECT_ID,
      dataset: SANITY_STUDIO_API_DATASET,
    })

    return [
      {
        source: '/story',
        destination: '/story/index.html',
        permanent: true,
      },
      {
        source: '/podcast',
        destination: 'https://lp.leadpages.com/podcast/',
        permanent: true,
      },
      {
        source: '/affiliates',
        destination: 'https://lp.leadpages.com/affiliates/',
        permanent: true,
      },
      {
        source: '/why-leadpages',
        destination: 'https://lp.leadpages.com/why-leadpages/',
        permanent: true,
      },
      {
        source: '/free-trial',
        destination: 'https://lp.leadpages.com/free-trial/',
        permanent: true,
      },
      {
        source: '/webinars',
        destination: 'https://lp.leadpages.com/webinars/',
        permanent: true,
      },
      {
        source: '/demo',
        destination: 'https://lp.leadpages.com/demo/',
        permanent: true,
      },
      {
        source: '/webinars/:slug',
        destination: 'https://lp.leadpages.com/:slug',
        permanent: true,
      },
      ...legacyRedirects
        .filter(({ source }) => source !== 'home')
        .map(({ source, destination }) => ({
          source: `/${source}`,
          destination,
          permanent: true,
        })),
      ...redirects,
    ]
  },
  rewrites: async () => {
    const fallbackProxy = `${LEADPAGES_BLOG_PROXY_HOST}${LEADPAGES_BLOG_PROXY_PATH}`
    const incrementalPaths = await filterRoutesFromSanity({
      directory: './src/pages/_legacy',
      projectId: SANITY_STUDIO_API_PROJECT_ID,
      dataset: SANITY_STUDIO_API_DATASET,
    })

    if (incrementalPaths.length) {
      const builtPaths = await buildJSON({
        files: [
          {
            path: path.join('./public/indices/incrementalPaths.json'),
            data: incrementalPaths,
          },
        ],
      })

      if (builtPaths.every(({ status }) => status === 'fulfilled')) {
        console.log(
          `Built index of ${incrementalPaths.length} incremental paths.`
        )
      }
    }

    return {
      beforeFiles: [
        {
          source: '/blog',
          destination: `${fallbackProxy}/`,
        },
        {
          source: '/blog/',
          destination: `${fallbackProxy}/`,
        },
      ],
      afterFiles: [
        {
          source: '/studio/:path*',
          destination:
            process.env.NODE_ENV === 'development'
              ? 'http://localhost:3333/studio/:path*'
              : '/studio/index.html',
        },
        {
          source: '/home',
          destination: '/',
        },
      ],
      // fallback: [
      //   {
      //     source: '/:path*',
      //     destination: `/redirectHandler`,
      //   },
      // ],
      fallback: [
        {
          source: '/blog/:path*',
          destination: `${fallbackProxy}/:path*`,
        },
        {
          source: '/blog/:path*/',
          destination: `${fallbackProxy}/:path*/`,
        },
      ],
    }
  },
  headers: async () => [
    {
      source: '/blog',
      headers: [
        {
          key: 'X-Forwarded-Host',
          value: 'leadpages-rack-pinion.vercel.app',
        },
      ],
    },
    {
      source: '/blog/:path*',
      headers: [
        {
          key: 'X-Forwarded-Host',
          value: 'leadpages-rack-pinion.vercel.app',
        },
      ],
    },
  ],
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    scrollRestoration: true,
  },
  sentry: {
    hideSourceMaps: true,
  },
})

module.exports = withSentryConfig(moduleExports, {})
