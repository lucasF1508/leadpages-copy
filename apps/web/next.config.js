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

const {
  DEVELOPMENT_TRAIL_SIGNUP_ENDPOINT,
  FB_PIXEL_ID,
  GA4_TRACKING_ID,
  GTAG_TRACKING_ID,
  GTM_CONTAINER_ID,
  HCAPTCHA_SITEKEY,
  HUBSPOT_DEFAULT_FORM_ID,
  HUBSPOT_DEFAULT_PORTAL_ID,
  LEADPAGES_API_HOST,
  LEADPAGES_REACTIVATION_HOST,
  LEADPAGES_TRIAL_HOST,
  MC_API_KEY,
  MC_AUDIENCE_ID,
  MC_SERVER_PREFIX,
  NEXT_PUBLIC_URL,
  RECAPTCHA_SITE_KEY,
  SANITY_STUDIO_API_DATASET,
  SANITY_STUDIO_API_DATASET_LEGACY,
  SANITY_STUDIO_API_PROJECT_ID,
  SANITY_STUDIO_API_VERSION,
  SANITY_STUDIO_APP_TOKEN,
  SANITY_STUDIO_PREVIEW_SECRET,
  SANITY_STUDIO_VERCEL_DEPLOY_URL,
  SENDGRID_API_KEY,
  SENDGRID_TEMPLATE_ID,
  SENDGRID_URL,
  SENDGRID_VERIFIED_SENDER,
  STARGATE_API_HOST,
  STARGATE_API_TEMPLATES_URL,
  UA_TRACKING_ID,
  VERCEL_ENV,
} = process.env

module.exports = withBundleAnalyzer({
  env: {
    DEVELOPMENT_TRAIL_SIGNUP_ENDPOINT,
    FB_PIXEL_ID,
    GA4_TRACKING_ID,
    GTAG_TRACKING_ID,
    GTM_CONTAINER_ID,
    HCAPTCHA_SITEKEY,
    HUBSPOT_DEFAULT_FORM_ID,
    HUBSPOT_DEFAULT_PORTAL_ID,
    LEADPAGES_API_HOST,
    LEADPAGES_REACTIVATION_HOST,
    LEADPAGES_TRIAL_HOST,
    MC_API_KEY,
    MC_AUDIENCE_ID,
    MC_SERVER_PREFIX,
    NEXT_PUBLIC_URL,
    RECAPTCHA_SITE_KEY,
    SANITY_STUDIO_API_DATASET,
    SANITY_STUDIO_API_DATASET_LEGACY,
    SANITY_STUDIO_API_PROJECT_ID,
    SANITY_STUDIO_API_VERSION,
    SANITY_STUDIO_APP_TOKEN,
    SANITY_STUDIO_PREVIEW_SECRET,
    SANITY_STUDIO_VERCEL_DEPLOY_URL,
    SENDGRID_API_KEY,
    SENDGRID_TEMPLATE_ID,
    SENDGRID_URL,
    SENDGRID_VERIFIED_SENDER,
    STARGATE_API_HOST,
    STARGATE_API_TEMPLATES_URL,
    UA_TRACKING_ID,
    VERCEL_ENV,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    scrollRestoration: true,
  },
  images: {
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1600, 1920, 2048, 3840],
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
        protocol: 'https',
      },
      {
        hostname: 'assets.vercel.com',
        protocol: 'https',
      },
      {
        hostname: 'storage.googleapis.com',
        protocol: 'https',
      },
      {
        hostname: 'customer-4yowinxxlegi56v8.cloudflarestream.com',
        protocol: 'https',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  poweredByHeader: false,
  reactStrictMode: false,
  redirects: async () => {
    // TODO Added redirects to Middleware with Next.js like pate
    const redirects = await adminRedirects({
      dataset: SANITY_STUDIO_API_DATASET,
      projectId: SANITY_STUDIO_API_PROJECT_ID,
    })

    return redirects
  },
  rewrites: async () => {
    // Incremental path rewrites
    const incrementalPaths = await filterRoutesFromSanity({
      dataset: SANITY_STUDIO_API_DATASET_LEGACY,
      directory: './src/pages/_legacy',
      projectId: SANITY_STUDIO_API_PROJECT_ID,
    })

    const builtPaths = await buildJSON({
      files: [
        {
          data: incrementalPaths || [],
          path: path.join('./public/indices/incrementalPaths.json'),
        },
      ],
    })

    if (builtPaths?.every(({ status }) => status === 'fulfilled')) {
      console.log(
        `Built index of ${incrementalPaths?.length} incremental paths.`
      )
    }

    return {
      afterFiles: [
        {
          destination:
            process.env.NODE_ENV === 'development'
              ? 'http://localhost:3333/studio/:path*'
              : '/studio/index.html',
          source: '/studio/:path*',
        },
        {
          destination: '/',
          source: '/home',
        },
      ],
    }
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },
  // disables warnings about using the vertx module in @lp/template-gallery
  webpack: (config) => {
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      vertx: false,
    }
    return config
  },
})
