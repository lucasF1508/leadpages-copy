import { submitToHubSpot } from '@lib/forms/hubspotHelpers'

const externalRedirect = async ({ formData, url, ...hubspotFormIds }) => {
  if (!formData.email || formData.email === '') {
    return { error: 'Please enter your email address' }
  }

  const {
    portalId = process.env.HUBSPOT_DEFAULT_PORTAL_ID,
    formId = process.env.HUBSPOT_DEFAULT_FORM_ID,
  } = hubspotFormIds

  try {
    await submitToHubSpot({
      page_url: window.location.href,
      page_name: document.title,
      portalId,
      formId,
      ...formData,
    })
  } catch (e) {
    return { error: e.message }
  }

  window.location.href = url
  return true
}

export default externalRedirect
