import globalQueries from 'config/globalQueries'
import runQuery from './runQuery'

export const getGlobalQueries = async (preview = false) => {
  const globalPromises = Object.values(globalQueries).map(
    ([globalQuery, globalParam = {}]) =>
      runQuery(globalQuery, globalParam, preview)
  )

  const globalResponse = await Promise.all(globalPromises)
  const globalData = {}

  Object.keys(globalQueries).forEach((key, index) => {
    globalData[key] = globalResponse[index]
  })

  return globalData
}

export default getGlobalQueries

export { globalQueries }
