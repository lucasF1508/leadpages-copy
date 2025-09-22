// @/lib/utils/getFreeTrialCheckoutUrl.ts
export type FreeTrialKeyType = 'proAnnual'|'proMonthly'|'standardAnnual'|'standardMonthly'

const planKeyToPlanId = {
  proAnnual: 'jh4rs6oedh14',
  proMonthly: 'rv7qq6f68t14',
  standardAnnual: 'lamghdv4qr14',
  standardMonthly: 'fvnp9stiiu14',
} as const

const TRIAL_ID_14D = 'd3yy2ARDnfEVTPU7'
const ORDER_BASE = 'https://my.leadpages.com/order-leadpages'

function withParams(baseUrl: string, params?: Record<string,string|undefined>) {
  const u = new URL(baseUrl)
  Object.entries(params ?? {}).forEach(([k,v]) => { if (v) u.searchParams.set(k,v) })
  return u.toString()
}

export function getFreeTrialCheckoutUrl(
  planKey: FreeTrialKeyType,
  _isFormSignup = false,
  extraParams?: Record<string,string|undefined>
) {
  const planId = planKeyToPlanId[planKey]
  if (!planId) return ''
  const base = [ORDER_BASE, planId, 't', TRIAL_ID_14D].join('/') + '/'
  return withParams(base, extraParams)
}

export async function getOrderUrlForEmail(
  planKey: FreeTrialKeyType,
  email: string,
  extraParams?: Record<string,string|undefined>
) {
  const base = getFreeTrialCheckoutUrl(planKey, false, extraParams)
  if (!base) throw new Error('URL base inválida')
  const url = new URL(base)
  if (!url.searchParams.has('request')) url.searchParams.set('request','new-signup')

  const res = await fetch(url.toString(), {
    body: JSON.stringify({ email }),
    headers: {'Content-Type':'application/json'},
    method: 'POST',
  })
  const text = await res.text()
  if (!res.ok) throw new Error(`tokenizer ${res.status}: ${text}`)

  const data = JSON.parse(text) as { 'order-url': string }
  if (!data?.['order-url']) throw new Error('Respuesta sin order-url')
  return data['order-url']
}
