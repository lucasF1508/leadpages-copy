import globalQueries from 'config/globalQueries'
import runQuery from './runQuery'

export const formatGlobalQueries = (responses) => {
  const globalData = {}

  Object.keys(globalQueries).forEach((key, index) => {
    globalData[key] = responses[index]
  })

  return globalData
}

export const getGlobalQueries = async (
  preview = false,
  returnPromise = false
) => {
  const globalPromises = Object.values(globalQueries).map(
    ([globalQuery, globalParam = {}]) =>
      runQuery(globalQuery, globalParam, preview)
  )

  if (returnPromise) {
    return globalPromises
  }

  const globalResponse = await Promise.all(globalPromises)

  return formatGlobalQueries(globalResponse)
}

export default getGlobalQueries

export { globalQueries }
