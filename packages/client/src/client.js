const sanityClient = require('@sanity/client')

if (!process.env.SANITY_STUDIO_API_PROJECT_ID) {
  const findUp = require('find-up')

  require('dotenv').config({
    path: findUp.sync([`.env.${process.env.NODE_ENV}`, '.env.local', '.env']),
  })
}

const sanityConfig = {
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
  token: process.env.SANITY_PREVIEW_API_TOKEN,
}

module.exports = ({ config = sanityConfig, preview = false } = {}) => {
  const client = sanityClient({
    ...config,
    token: preview ? config.token : undefined,
    useCdn: process.env.NODE_ENV === 'production' && !preview,
  })

  return client
}
