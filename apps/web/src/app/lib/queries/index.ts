import type { GetPerPageProps } from './getPerPage'
import type {
  GetStaticPathParamsProps,
} from './getStaticPathsParams';
import type { QueryParams } from './query'
import type { FormatQueriesProps, ResolveQueriesProps } from './runQueries'
import getPerPage from './getPerPage'
import getStaticPathsParams from './getStaticPathsParams'
import query from './query'
import runQueries from './runQueries'
import runQuery from './runQuery'

export { getPerPage, getStaticPathsParams, query, runQueries, runQuery }
export type {
  FormatQueriesProps,
  GetPerPageProps,
  GetStaticPathParamsProps,
  QueryParams,
  ResolveQueriesProps,
}
