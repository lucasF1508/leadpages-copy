const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://www.leadpages.com'

const fs = require('fs')

let experiments = []

if (fs.existsSync('./public/indices/experiments.json')) {
  // eslint-disable-next-line global-require
  experiments = require('./public/indices/experiments.json')
}

const variantPaths = experiments
  .map(({ variants }) => variants.map(({ path }) => path))
  .flat()

module.exports = {
  siteUrl,
  changefreq: 'yearly',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/studio',
    '/studio/*',
    '/story',
    'story/*',
    '/_legacy',
    '/_legacy/*',
    '/blog/search',
    '/contact/submission',
    '/templates/*',
    '/website-templates/*',
    '/home/*',
    '/home-*',
    '/blog/*',
    '/sitemap',
    '/sitemap/*',
    `/comparisons/*`,
    `/integrations/*`,
    `/customers/*`,
    `/conversion-optimization-guide/*`,
    `/landing-pages-guide/*`,
    `/lead-generation-guide/*`,
    `/use-cases/*`,
    ...variantPaths,
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap/blog/index.xml`,
      `${siteUrl}/sitemap/templates/index.xml`,
      `${siteUrl}/sitemap/comparisons.xml`,
      `${siteUrl}/sitemap/integrations.xml`,
      `${siteUrl}/sitemap/customers.xml`,
      `${siteUrl}/sitemap/pages.xml`,
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: '/studio',
      },
      {
        userAgent: '*',
        disallow: '/story',
      },
      {
        userAgent: '*',
        disallow: '/_legacy',
      },
      {
        userAgent: '*',
        allow: '/blog/search',
        disallow: '/blog/search?s=',
      },
    ],
  },
}
