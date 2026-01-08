const sanityClient = require('@sanity/client')

if (!process.env.SANITY_STUDIO_API_PROJECT_ID) {
  const findUp = require('find-up')

  require('dotenv').config({
    path: findUp.sync([`.env.${process.env.NODE_ENV}`, '.env.local', '.env']),
  })
}

const sanityConfig = {
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
  dataset: process.env.SANITY_STUDIO_API_DATASET_LEGACY,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  token: process.env.SANITY_STUDIO_APP_TOKEN,
}

module.exports = ({ config, preview = false } = {}) => {
  // Allow config to override useCdn, otherwise use default (CDN in production unless preview)
  const useCdn = config?.useCdn !== undefined 
    ? config.useCdn 
    : (process.env.NODE_ENV === 'production' && !preview)
  
  const client = sanityClient({
    ...sanityConfig,
    ...config,
    token: preview ? sanityConfig.token : undefined,
    useCdn,
  })

  return client
}
