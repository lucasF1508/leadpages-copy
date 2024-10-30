const getApiBaseUrl = () => {
  const urlBase =
    window.location.origin === 'http://localhost:3333'
      ? 'http://localhost:3000'
      : window.location.origin
  const siteUrl = urlBase.includes('http') ? urlBase : `https://${urlBase}`
  const apiBase = `${siteUrl}`

  return apiBase
}

export default getApiBaseUrl
