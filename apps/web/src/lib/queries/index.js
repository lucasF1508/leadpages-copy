import getPerPage from './getPerPage'
import getStaticPathsParams from './getStaticPathsParams'
import query from './query'
import runQuery from './runQuery'
import runQueries from './runQueries'
import runBlogQueries, { getPageType, getBlogQuery } from './blogQueries'
import { getGlobalQueries } from './globalQueries'

export {
  query,
  runQuery,
  runQueries,
  getPerPage,
  getStaticPathsParams,
  runBlogQueries,
  getPageType,
  getGlobalQueries,
  getBlogQuery,
}
