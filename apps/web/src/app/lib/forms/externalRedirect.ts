import { submitToHubSpot } from '@/lib/forms/hubspotHelpers'

export interface ExternalRedirectProps {
  formData: {
    email?: string
  }
  hubspotFormIds?: {
    formId?: string
    portalId?: string
  }
  url: string
}

const externalRedirect = async ({ formData, hubspotFormIds, url }: ExternalRedirectProps) => {
  if (!formData.email || formData.email === '') {
    return { error: 'Please enter your email address' }
  }

  const {
    formId = process.env.HUBSPOT_DEFAULT_FORM_ID,
    portalId = process.env.HUBSPOT_DEFAULT_PORTAL_ID,
  } = hubspotFormIds ?? {}

  try {
    await submitToHubSpot({
      formId,
      page_name: document.title,
      page_url: window.location.href,
      portalId,
      ...formData,
    })
  } catch (e) {
    return { error: e.message }
  }

  window.location.href = url
  return true
}

export default externalRedirect
