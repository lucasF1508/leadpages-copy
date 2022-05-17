import axios from 'axios'

export const callApi = ({ token, endpoint, data, method = 'GET' }) => {
  const apiBase = 'https://api.vimeo.com'

  let headers = {
    Authorization: `Bearer ${token}`,
  }

  if (data) {
    headers = {
      ...headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }

  return axios.get(`${apiBase}/${endpoint}`, { headers })
}

export default callApi
