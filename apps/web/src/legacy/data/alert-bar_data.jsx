// ALERT BAR DATA
/* when read, alert bars are rendered in order of specificity  */
/* i.e. lower index takes precedence over higher index */

const commonData = {
  src: 'https://embed.lpcontent.net/leadbars/current/embed.js',
  domain: 'lps.lpages.co',
}

// eslint-disable-next-line import/prefer-default-export
export const alertBarData = [
  {
    name: 'Alert bar product page',
    data: {
      id: 'BdpWkphuCXVs8t2vbrYeLj',
      ...commonData,
    },
    placementRegex: 'product/alert-bars',
  },
  {
    name: 'Landing page template gallery',
    data: {
      id: 'Pp42Z5mhbYq6MXMpeJ3sce',
      ...commonData,
    },
    placementRegex: 'templates',
  },
  {
    name: 'Silo pages',
    data: {
      id: '2Rmmmc8LVAYsUVdHBkRAgS',
      ...commonData,
    },
    placementRegex:
      'landing-pages-guide|lead-generation-guide|conversion-optimization-guide',
  },
  // {
  //   name: 'Global',
  //   data: {
  //     id: 'z2u6wwsu4rgksHVNeCDiaH',
  //     ...commonData,
  //   },
  //   placementRegex: '.*',
  // },
]
