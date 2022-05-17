const { getQuery } = require('../query/dist/builder')

module.exports = {
  navigation: [
    getQuery({
      schemaType: 'navigation',
      filters: 'slug.current == "primary-navigation"',
      slice: 0,
    }),
  ],
  siteMeta: [
    getQuery({
      schemaType: 'seoSite',
      slice: 0,
      projections: {
        company: getQuery({
          schemaType: 'companyInfo',
          slice: 0,
          projections: {
            title: 'companyTitle',
            contactInfo: `[
                {
                  "_key": "email",
                  "link": {
                    "condition": 'external',
                    "url": "mailto:" + email,
                    "label": email,
                  }
                },
                {
                  "_key": "phone",
                  "link": {
                    "condition": 'external',
                    "url": "tel:" + phone,
                    "label": phone,
                  }
                }
              ]`,
          },
        }),
        legal: getQuery({
          schemaType: 'page',
          filters: `(slug.current == 'terms' || slug.current == 'privacy-policy')`,
          slice: 0,
          projections: {
            _key: '_id',
            condition: 'internal',
            url: `"/" + slug.current`,
            label: 'title',
          },
        }),
      },
    }),
  ],
}
