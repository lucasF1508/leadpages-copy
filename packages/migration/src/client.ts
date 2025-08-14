import {createClient} from '@sanity/client'
import { loadEnv } from './loadEnv'

loadEnv()

const config = {
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  token: process.env.STUDIO_APP_TOKEN_DANGEROUS,
  useCdn: false,
}

export const transferClients = {
  from: createClient({ 
    ...config,
    dataset: process.env.SANITY_STUDIO_API_DATASET_LEGACY,
  }),
  to: createClient({ 
    ...config,
    dataset: process.env.SANITY_STUDIO_API_DATASET,
  }),
}

export const client = createClient({
  ...config,
  dataset: process.env.SANITY_STUDIO_API_DATASET,
})