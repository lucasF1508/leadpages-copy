import type { FreeTrialKeyType} from '@/lib/utils/getFreeTrialCheckoutUrl';
import { kebabCase } from 'lodash'
import { submitToHubSpot } from '@/lib/forms/hubspotHelpers'
import {getFreeTrialCheckoutUrl} from '@/lib/utils/getFreeTrialCheckoutUrl'

interface FormData {
  [key: string]: any;
  email?: string;
}

interface PlanRedirectParams {
  formData: FormData;
  type: FreeTrialKeyType;
}

const planRedirect = async ({ formData, type }: PlanRedirectParams): Promise<{ error: string } | boolean> => {

  // Temp auto submission to hubspot, remove once the endpoint has been fixed.
  if (formData?.email) {
    await submitToHubSpot({
      page_name: document.title,
      page_url: window.location.href,
      ...formData,
    })
  }

  const defaultUrl = getFreeTrialCheckoutUrl(type)
  window.location.href = `${defaultUrl}?emailsubmission=${kebabCase(type)}`

  return true
  // When the new pricing urls were set up, they did not account POST request providing the users email.
  // This is a hotfix to redirect the user in the flow until the endpoint accepts the emails on submission.

  // if (!formData.email || formData.email === '') {
  //   const defaultUrl = getFreeTrialCheckoutUrl(type)
  //   window.location.href = `${defaultUrl}?emailsubmission=${kebabCase(type)}`
  //   return true
  // }

  // try {
  //   const requestOptions: RequestInit = {
  //     body: JSON.stringify({ ...formData, type }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'POST',
  //     redirect: 'follow',
  //   }


  //   const data = await fetch('/api/fetch-trial-url', requestOptions).then(
  //     (_data) => _data.json()
  //   )

  //   const url = data && data['order-url']

  //   const isSubmitted = await submitToHubSpot({
  //     page_name: document.title,
  //     page_url: window.location.href,
  //     ...formData,
  //   })

  //   if (url && isSubmitted?.ok) {
  //     window.location.href = url.concat(`&emailsubmission=${kebabCase(type)}`)
  //     return true
  //   }
  // } catch (e) {
  //   // eslint-disable-next-line no-console
  //   console.error('Failed :: Error:', e.message)
  //   return {
  //     error: `Something went wrong with your submission, please reach out to our support team.`,
  //   }
  // }

  // return false
}

export default planRedirect
