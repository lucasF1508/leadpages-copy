import type { FreeTrialKeyType } from '@/lib/utils/getFreeTrialCheckoutUrl'
import { kebabCase } from 'lodash'
import { submitToHubSpot } from '@/lib/forms/hubspotHelpers'
import { getFreeTrialCheckoutUrl } from '@/lib/utils/getFreeTrialCheckoutUrl'

interface FormData {
  [key: string]: any
  email?: string
}

interface PlanRedirectParams {
  formData: FormData
  type: FreeTrialKeyType
  extraParams?: Record<string, string>
}

const planRedirect = async ({
  formData,
  type,
  extraParams,
}: PlanRedirectParams): Promise<{ error: string } | boolean> => {
  if (!formData.email || formData.email === '') {
    const defaultUrl = getFreeTrialCheckoutUrl(type, false, extraParams)
    window.location.href = defaultUrl
    return true
  }

  try {
    const requestOptions: RequestInit = {
      body: JSON.stringify({ email: formData.email, type, extraParams }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      redirect: 'follow',
    }

    const { url } = await fetch('/api/fetch-trial-url', requestOptions).then(
      (_data) => _data.json()
    )

    const isSubmitted = await submitToHubSpot({
      page_name: document.title,
      page_url: window.location.href,
      ...formData,
    })

    if (url && isSubmitted?.ok) {
      window.location.href = url
      return true
    }
    return true
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[planRedirect] Error:', e.message)
    return {
      error: `Something went wrong with your submission, please reach out to our support team.`,
    }
  }
}

export default planRedirect
