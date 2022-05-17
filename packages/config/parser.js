const { image } = require('../query/dist/parser/primitives')

module.exports = {
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
        form: {
          '...': true,
        },
      },
    },
  },
}
