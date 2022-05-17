import React from 'react'
import { createPreviewSubscriptionHook } from 'next-sanity'

const usePreviewSubscription = createPreviewSubscriptionHook({
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
  token: process.env.SANITY_PREVIEW_API_TOKEN,
  useCdn: false,
})

export const useSanityPreview = ({
  data: initialData,
  slug,
  preview,
  query,
}) => {
  const { data: response, error } = usePreviewSubscription(query, {
    params: { slug },
    initialData,
    enabled: preview,
  })

  if (error) {
    console.error(error)
  }

  return Object.values(response)
}

export default useSanityPreview
