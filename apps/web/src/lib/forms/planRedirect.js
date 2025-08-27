import kebabCase from 'lodash/kebabCase'
import { getFreeTrialCheckoutUrl } from '@/lib/utils/getFreeTrialCheckoutUrl'
import { submitToHubSpot } from '@lib/forms/hubspotHelpers'

const planRedirect = async ({ type, formData }) => {
  if (!formData.email || formData.email === '') {
    const defaultUrl = getFreeTrialCheckoutUrl(type)
    window.location.href = defaultUrl
    return true
  }

  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: formData.email, type }),
      redirect: 'follow',
    }

    const data = await fetch('/api/fetch-trial-url', requestOptions).then(
      (_data) => _data.json()
    )

    const url = data && data['order-url']
    const isSubmitted = await submitToHubSpot({
      page_url: window.location.href,
      page_name: document.title,
      ...formData,
    })

    if (url && isSubmitted) {
      window.location.href = url.concat(`&emailsubmission=${kebabCase(type)}`)
      return true
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Failed :: Error:', e.message)
    return {
      error: `Something went wrong with your submission, please reach out to our support team.`,
    }
  }

  return false
}

export default planRedirect
