const { image, link } = require('../query/dist/parser/primitives')

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
  },
  blockContent: {
    types: (types) =>
      types.filter(({ name }) => !['pageAnchor', 'table'].includes(name)),
  },
  reference: {
    conditions: {
      _type: {
        cta: {
          title: true,
          overline: true,
          content: true,
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
      },
    },
  },
}
