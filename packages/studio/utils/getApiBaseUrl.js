const getApiBaseUrl = () => {
  const urlBase =
    window.location.origin === 'http://localhost:3333'
      ? 'http://localhost:3000'
      : window.location.origin

  return urlBase.includes('http') ? urlBase : `https://${urlBase}`
}

export default getApiBaseUrl
