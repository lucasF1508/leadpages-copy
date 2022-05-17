module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL || 'https://gearboxbuilt.com',
  generateRobotsTxt: true,
  exclude: ['/studio', '/studio/*', '/story', 'story/*'],
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
    ],
  },
}
