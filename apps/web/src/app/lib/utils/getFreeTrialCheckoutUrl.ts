export type FreeTrialKeyType =
  | 'proAnnual'
  | 'proMonthly'
  | 'standardAnnual'
  | 'standardMonthly'

export const freeTrialEndpoints = {
  proAnnual: 'PRO-TR-A-14D',
  proMonthly: 'PRO-TR-M-14D',
  standardAnnual: 'STD-TR-A-14D',
  standardMonthly: 'STD-TR-M-14D',
}

export const getFreeTrialCheckoutUrl = (
  planKey: FreeTrialKeyType,
  isFormSignup = false
) => {
  const baseUrl = isFormSignup
    ? 'https://my.leadpages.com/api/v1/signup'
    : 'https://my.leadpages.com/signup'

  const endpoint = freeTrialEndpoints[planKey]

  return [baseUrl, endpoint].join('/')
}
