const submitToHubSpot = async (formData) => {
  const response = await fetch('/api/send-hubspot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (!response.ok) {
    const { error } = await response.json()
    console.error(error.message)
    throw new Error('Failed to submit form. Please contact support.')
  }

  return response
}

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
      pageUri: window.location.href,
      pageName: document.title,
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
