const path = require('path')
const { getQuery } = require('query/builder')
const { globalQueries } = require('query/getters')

module.exports = [
  {
    path: path.join('../../apps/story/data', 'mock-data.json'),
    query: getQuery({
      schemaType: 'mockData',
      slice: 0,
      // Add global queries to mockdata
      projections: Object.keys(globalQueries).reduce(
        (obj, key) => ({
          [key]: globalQueries[key][0],
          ...obj,
        }),
        {}
      ),
    }),
  },
]
