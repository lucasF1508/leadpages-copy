import callApi from './callApi'

const token = process.env.SANITY_STUDIO_VIMEO_TOKEN

export const API = {
  videos: {
    get: ({ per_page } = {}) =>
      callApi({ token, endpoint: `me/videos?per_page=${per_page || 25}` }),
    query: (query) => callApi({ token, endpoint: `me/videos?query=${query}` }),
  },
}
