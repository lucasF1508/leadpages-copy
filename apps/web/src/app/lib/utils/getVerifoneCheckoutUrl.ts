/**
 * Utility to get Verifone checkout URLs from the trial plans API.
 * This replaces old Recurly URLs with the new Verifone URLs.
 */

import type { TrialPlanItem } from './fetchTrialPlans'
import { fetchTrialPlans } from './fetchTrialPlans'

export type PlanLevel = 'standard' | 'pro' | 'advanced'
export type BillingCycle = 'month' | 'year'

interface GetCheckoutUrlOptions {
  level?: PlanLevel
  billingCycle?: BillingCycle
  defaultLevel?: PlanLevel
  defaultBillingCycle?: BillingCycle
}

let cachedPlans: TrialPlanItem[] | null = null
let cacheTimestamp: number = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

/**
 * Gets the checkout URL for a specific plan from Verifone.
 * Falls back to default plan if specific plan not found.
 */
export async function getVerifoneCheckoutUrl(
  options: GetCheckoutUrlOptions = {}
): Promise<string | null> {
  const {
    level = options.defaultLevel || 'standard',
    billingCycle = options.defaultBillingCycle || 'month',
  } = options

  // Check cache first
  const now = Date.now()
  if (cachedPlans && (now - cacheTimestamp) < CACHE_DURATION) {
    const plan = findPlan(cachedPlans, level, billingCycle)
    if (plan) return plan.checkout_url
    
    // Fallback to default if specific plan not found
    const defaultPlan = findPlan(cachedPlans, options.defaultLevel || 'standard', options.defaultBillingCycle || 'month')
    if (defaultPlan) return defaultPlan.checkout_url
  }

  // Fetch fresh data
  try {
    const response = await fetchTrialPlans()
    if (!response?.items?.length) {
      return null
    }

    cachedPlans = response.items
    cacheTimestamp = now

    const plan = findPlan(cachedPlans, level, billingCycle)
    if (plan) return plan.checkout_url
    
    // Fallback to default if specific plan not found
    const defaultPlan = findPlan(cachedPlans, options.defaultLevel || 'standard', options.defaultBillingCycle || 'month')
    if (defaultPlan) return defaultPlan.checkout_url

    return null
  } catch (error) {
    console.error('[getVerifoneCheckoutUrl] Error fetching plans:', error)
    return null
  }
}

/**
 * Helper to find a plan by level and billing cycle
 */
function findPlan(
  plans: TrialPlanItem[],
  level: PlanLevel,
  billingCycle: BillingCycle
): TrialPlanItem | undefined {
  return plans.find(
    (p) => p.level === level && p.billingCycle === billingCycle
  )
}

/**
 * Detects if a URL is a Recurly checkout URL that should be replaced
 */
export function isRecurlyUrl(url: string): boolean {
  if (!url) return false
  return (
    url.includes('my.leadpages.com/order-leadpages') ||
    url.includes('recurly') ||
    url.includes('/order-leadpages/')
  )
}

/**
 * Detects if a URL should be replaced with Verifone URL
 * (either Recurly URL or link to pricing page that should go directly to checkout)
 */
export function shouldReplaceWithVerifone(url: string): boolean {
  if (!url) return false
  return isRecurlyUrl(url) || url === '/pricing' || url.startsWith('/pricing?')
}

/**
 * Attempts to extract plan information from a Recurly URL
 */
export function extractPlanFromUrl(url: string): {
  level?: PlanLevel
  billingCycle?: BillingCycle
} | null {
  if (!isRecurlyUrl(url)) return null

  // Try to extract from URL path or query params
  // Recurly URLs typically have plan IDs in the path
  // This is a best-effort extraction
  const urlLower = url.toLowerCase()
  
  let level: PlanLevel | undefined
  let billingCycle: BillingCycle | undefined

  // Detect level
  if (urlLower.includes('standard') || urlLower.includes('fvnp9stiiu14') || urlLower.includes('lamghdv4qr14')) {
    level = 'standard'
  } else if (urlLower.includes('pro') || urlLower.includes('rv7qq6f68t14') || urlLower.includes('jh4rs6oedh14')) {
    level = 'pro'
  } else if (urlLower.includes('advanced') || urlLower.includes('custom')) {
    level = 'advanced'
  }

  // Detect billing cycle
  if (urlLower.includes('annual') || urlLower.includes('year')) {
    billingCycle = 'year'
  } else if (urlLower.includes('month')) {
    billingCycle = 'month'
  }

  return level || billingCycle ? { level, billingCycle } : null
}

