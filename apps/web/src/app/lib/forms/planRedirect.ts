import { kebabCase } from 'lodash'
import { submitToHubSpot } from '@/lib/forms/hubspotHelpers'
import { freeTrialEndpoints } from '@pages/api/fetch-trial-url'

export type FreeTrialKey = 'proAnnual' | 'proMonthly' | 'standardAnnual' | 'standardMonthly';

interface FormData {
  [key: string]: any;
  email?: string;
}

interface PlanRedirectParams {
  formData: FormData;
  type: FreeTrialKey;
}

const planRedirect = async ({ formData, type }: PlanRedirectParams): Promise<{ error: string } | boolean> => {
  if (!formData.email || formData.email === '') {
    const endpoint = freeTrialEndpoints[type]
    const defaultUrl = `https://my.leadpages.com/order-leadpages/${endpoint}/t/d3yy2ARDnfEVTPU7`
    window.location.href = `${defaultUrl}?emailsubmission=${kebabCase(type)}`
    return true
  }

  try {
    const requestOptions: RequestInit = {
      body: JSON.stringify({ ...formData, type }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      redirect: 'follow',
    }

    const data = await fetch('/api/fetch-trial-url', requestOptions).then(
      (_data) => _data.json()
    )

    const url = data && data['order-url']
    const isSubmitted = await submitToHubSpot({
      page_name: document.title,
      page_url: window.location.href,
      ...formData,
    })

    if (url && isSubmitted?.ok) {
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
