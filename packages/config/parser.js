const { image, link } = require('../query/dist/parser/primitives')
const { fieldsToGroq } = require('../query/dist/parser/utils')

module.exports = {
  custom: {
    backgroundImage: (name) => ({
      [name]: {
        '...': true,
        asset: '->',
      },
    }),
    media: (name) => ({
      [name]: {
        '...': true,
        lottie: {
          '...': true,
          asset: '->',
        },
        image,
        video: {
          '...': true,
          fallbackImage: image,
        },
      },
    }),
  },
  components: {
    types: (types) =>
      types.filter(
        ({ name }) =>
          !['heading', 'spacer', 'pageAnchor', 'tableBlock'].includes(name)
      ),
    conditions: {
      _type: {
        customerRotator: {
          '...': true,
          customers: `select(
            selection == 'all' => *[_type == 'customer'] | order(orderRank) {
              path,
              title,
              excerpt {
                ...,
                image {
                  ...,
                  asset->
                }
              }
            },
            selection == 'category' => *[_type == 'customer' && ^.category._ref in category[]._ref] | order(orderRank) {
              path,
              title,
              excerpt {
                ...,
                image {
                  ...,
                  asset->
                }
              }
            },
            customers[]->{
              path,
              title,
              excerpt {
                ...,
                image {
                  ...,
                  asset->
                }
              }
            },
          )`,
        },
        cardsComparison: {
          '...': true,
          comparisons: `select(
            selection == 'all' => *[_type == 'comparison'] | order(orderRank) {
              ...,
              excerpt {
                ...,
                compareLogo {
                  ...,
                  asset->
                }
              }
            },
          comparisons[]->{
             ...,
              excerpt {
                ...,
                compareLogo {
                  ...,
                  asset->
                }
              }
            },
          )`,
        },
        listingBlock: {
          '...': true,
          link,
          featuredListingLink: link,
          listings: `select(
            postType == 'custom' => customListings[] {
              ...,
               link {
                  ${fieldsToGroq([link])}
                },
                image {
                ...,
                asset->
              }
            },
            selection == 'all' => *[_type == 'post'] | order(orderRank) {
              ...,
            'categoryTitle': primaryCategory->title,
                image {
                ...,
                asset->
              }
            },
            selection == 'category' => *[_type == 'post' && references(^.category._ref)] | order(orderRank) {
              ...,
            'categoryTitle': primaryCategory->title,
               image {
                ...,
                asset->
              }
            },
          listings[]->{
             ...,
             'categoryTitle': primaryCategory->title,
             image {
                ...,
                asset->
              }

            },
          )`,
        },
        faqs: {
          '...': true,
          faqs: `select(
            selection == 'all' => *[_type == 'faq'] | order(orderRank),
            selection == 'category' => *[_type == 'faq' && ^.category._ref in category[]._ref] | order(orderRank),
            faqs[]->,
          )`,
        },
      },
    },
  },
  blockContent: {
    types: (types) =>
      types.filter(({ name }) => !['pageAnchor', 'table'].includes(name)),
    conditions: {
      _type: {
        media: {
          '...': true,
          image,
        },
      },
    },
  },
  reference: {
    conditions: {
      _type: {
        cta: {
          title: true,
          overline: true,
          content: true,
          bgColor: true,
          'links[]': link,
        },
        post: {
          categoryTitle: 'category->title',
          publishedDate: true,
          image,
          heading: 'title',
          content: 'excerpt',
          isExternal: true,
          articleUrl: true,
          target: true,
          label: true,
        },
        navigation: {
          '...': true,
          'menu[]': { link },
        },
        form: {
          '...': true,
        },
        testimonial: {
          '...': true,
          logo: image,
          image,
          link,
        },
        team: {
          title: true,
          jobTitle: true,
          image,
        },
        categoryIntegrationStatus: {
          '...': true,
        },
      },
    },
  },
}
