const path = require('path')
const findUp = require('find-up')
const adminRedirects = require('redirects')
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
require('dotenv').config({
  path: findUp.sync([`.env.${process.env.NODE_ENV}`, '.env.local', '.env']),
})

const {
  SANITY_STUDIO_API_PROJECT_ID,
  SANITY_STUDIO_API_DATASET,
  SANITY_STUDIO_API_VERSION,
  SANITY_STUDIO_PREVIEW_SECRET,
  SANITY_PREVIEW_API_TOKEN,
  SANITY_BACKUP_API_TOKEN,
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
  LEADPAGES_API_HOST,
  STARGATE_API_HOST,
} = process.env

module.exports = withPlugins([[withBundleAnalyzer]], {
  compiler: {
    styledComponents: true,
  },
  env: {
    SANITY_STUDIO_API_PROJECT_ID,
    SANITY_STUDIO_API_DATASET,
    SANITY_STUDIO_API_VERSION,
    SANITY_STUDIO_PREVIEW_SECRET,
    SANITY_PREVIEW_API_TOKEN,
    SANITY_BACKUP_API_TOKEN,
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
    LEADPAGES_API_HOST,
    STARGATE_API_HOST,
  },
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },
  images: {
    domains: ['cdn.sanity.io', 'assets.vercel.com'],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1600, 1920, 2048, 3840],
  },
  ignoreDuringBuilds: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.net = false
      config.resolve.fallback.tls = false
    }

    return config
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
      ...redirects,
    ]
  },
  rewrites: async () => [
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
})
