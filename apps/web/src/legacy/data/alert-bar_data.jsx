// ALERT BAR DATA
/* when read, alert bars are rendered in order of specificity  */
/* i.e. lower index takes precedence over higher index */

// eslint-disable-next-line import/prefer-default-export
export const alertBarData = [
  {
    name: 'Alert bar product page',
    data: {
      src: 'https://static.leadpages.com/leadbars/current/embed.js',
      id: 'BdpWkphuCXVs8t2vbrYeLj',
      domain: 'lps.leadpages.net',
    },
    placementRegex: 'product/alert-bars',
  },
  {
    name: 'Landing page template gallery',
    data: {
      src: 'https://embed.lpcontent.net/leadbars/current/embed.js',
      id: 'Pp42Z5mhbYq6MXMpeJ3sce',
      domain: 'lps.lpages.co',
    },
    placementRegex: 'templates',
  },
  {
    name: 'Silo pages',
    data: {
      src: 'https://static.leadpages.com/leadbars/current/embed.js',
      id: '2Rmmmc8LVAYsUVdHBkRAgS',
      domain: 'lps.lpages.co',
    },
    placementRegex: 'landing-pages-guide/|lead-generation-guide/|conversion-optimization-guide/',
  },
  // {
  //   name: 'Global',
  //   data: {
  //     src: '',
  //     id: '',
  //     domain: '',
  //   },
  //   placementRegex: '.*',
  // },
];
