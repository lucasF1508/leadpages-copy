export type FreeTrialKeyType =
  | 'proAnnual'
  | 'proMonthly'
  | 'standardAnnual'
  | 'standardMonthly'

  const planKeyToPlanId: Record<FreeTrialKeyType, string> = {
    standardMonthly: 'fvnp9stiiu14',
    proMonthly: 'rv7qq6f68t14',
    standardAnnual: 'lamghdv4qr14',
    proAnnual: 'jh4rs6oedh14',
  }

const TRIAL_ID_14D = 'd3yy2ARDnfEVTPU7'

export const getFreeTrialCheckoutUrl = (
  planKey: FreeTrialKeyType,
  isFormSignup = false
) => {
  const planId = planKeyToPlanId[planKey]

  if (!planId) {
    console.warn('[getFreeTrialCheckoutUrl] Missing mapping for planKey:', planKey)
    return ''
  }

  // NOTE: previously, depending on isFormSignup 
  // baseUrl was either "https://my.leadpages.com/api/v1/signup"
  // or "https://my.leadpages.com/signup"
  const baseUrl = 'https://my.leadpages.com/order-leadpages'

return [baseUrl, planId, 't', TRIAL_ID_14D].join('/')
}
