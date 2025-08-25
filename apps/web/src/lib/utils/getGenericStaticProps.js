import { getGroupedPlanData, getPlanData } from '@utils/plans'
import { shapeData } from '@utils/shapeData'
import { query, runQueries } from '@lib/queries'
import pageQuery from '@lib/queries/components'

export async function getGenericStaticProps(path, preview = false) {
  const { data, queries, global } = await runQueries(
    query(
      `*[path == $path] | order(_updatedAt desc) [0] {
        ...,
        ${pageQuery}
      }`,
      {
        params: { path },
        preview,
      }
    )
  )

  const [pageData] = (data?.length && data) || []
  const { components } = pageData || {}

  const hasPricing = components?.some(({ _type }) => _type === 'pricing')
  let planData = null

  if (hasPricing) {
    const rawPlanData = await getPlanData()
    planData = getGroupedPlanData(rawPlanData)
  }

  return {
    props: {
      data: shapeData(data),
      queries,
      global,
      preview,
      planData,
    },
  }
}