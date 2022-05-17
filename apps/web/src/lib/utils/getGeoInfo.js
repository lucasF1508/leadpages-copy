const getGeoInfo = async () => {
  const response = await fetch('https://ipapi.co/json/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })

  if (response && response.ok) {
    return response.json()
  }

  return false
}

export default getGeoInfo
