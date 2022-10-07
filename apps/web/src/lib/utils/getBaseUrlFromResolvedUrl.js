export const getBaseUrlFromResolvedUrl = ({
  resolvedUrl,
  paramKeys: paramKeysOrg = ['category', 'page', 'num'],
  params = {},
}) => {
  const paramKeys = Array.isArray(paramKeysOrg) ? paramKeysOrg : [paramKeysOrg]
  const paramsValues = params
    ? paramKeys
        .map((key) => params[key])
        .flat()
        .filter(Boolean)
    : []

  return resolvedUrl
    .split('?')[0]
    .split('/')
    .filter((path) => !/.*\[.*\].*/.test(path) && path)
    .filter((slug) => ![...paramKeys, ...paramsValues].includes(slug))
    .join('/')
}

export default getBaseUrlFromResolvedUrl
