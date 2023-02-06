const getClient = require('client')

const client = getClient()
const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://www.leadpages.com'

// Blog paths
const blogPaths = async () => {
  const blogPosts = await client.fetch(
    `*[_type == 'post' && redirectToLegacy == true]`
  )

  return blogPosts.map(({ publishedDate, path }) => ({
    loc: path,
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(publishedDate).toISOString(),
  }))
}

const additionalPaths = [
  // ...blogPaths()
]

module.exports = {
  siteUrl,
  changefreq: 'yearly',
  generateRobotsTxt: true,
  exclude: [
    '/studio',
    '/studio/*',
    '/story',
    'story/*',
    '/_legacy',
    '/_legacy/*',
    '/blog/search',
    '/redirectHandler',
    '/contact/submission',
    '/templates/preview',
    '/website-templates/preview',
  ],
  // additionalPaths,
  robotsTxtOptions: {
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
        disallow: '/blog/search',
      },
    ],
  },
}
