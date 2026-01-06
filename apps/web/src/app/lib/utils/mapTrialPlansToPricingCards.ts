import type { Plan } from '@/components/PricingCards/PricingCards'
import type { TrialPlanItem } from './fetchTrialPlans'
import { formatCurrency } from './formatPrice'

/**
 * Maps trial plans from API response to the Plan format expected by PricingCards component.
 * Merges API pricing data with CMS plan structure (title, description, features, etc.)
 */
export function mapTrialPlansToPricingCards(
  trialPlans: TrialPlanItem[],
  cmsPlans: Plan[]
): Plan[] {
  // Create a map of CMS plans by level for quick lookup
  const cmsPlansByLevel = new Map<string, Plan>()
  
  cmsPlans.forEach((plan) => {
    // Try to match by title (Standard, Pro, Advanced)
    // Handle variations: "Custom" might be "Advanced" in some CMS setups
    const level = plan.title.toLowerCase()
    if (level.includes('standard')) {
      cmsPlansByLevel.set('standard', plan)
    } else if (level.includes('pro')) {
      cmsPlansByLevel.set('pro', plan)
    } else if (level.includes('advanced') || level.includes('custom')) {
      // Map both "advanced" and "custom" to "advanced" level
      cmsPlansByLevel.set('advanced', plan)
    }
  })

  // Group trial plans by level
  const plansByLevel = new Map<string, TrialPlanItem[]>()
  
  trialPlans.forEach((trialPlan) => {
    const level = trialPlan.level
    if (!plansByLevel.has(level)) {
      plansByLevel.set(level, [])
    }
    plansByLevel.get(level)!.push(trialPlan)
  })

  // Build the merged plans array
  const mergedPlans: Plan[] = []

  // Process each level (standard, pro, advanced)
  // Use Array.from to avoid downlevelIteration requirement
  const levels = Array.from(plansByLevel.keys())
  for (const level of levels) {
    const trialPlansForLevel = plansByLevel.get(level)!
    const cmsPlan = cmsPlansByLevel.get(level)
    
    if (!cmsPlan) {
      continue
    }

    // Build prices array from trial plans
    const prices = trialPlansForLevel.map((trialPlan) => {
      const period = trialPlan.billingCycle === 'month' ? 'monthly' : 'yearly'
      
      // Extract currency symbol from formatted currency
      // formatCurrency returns something like "$123.00" or "€123,00"
      const formatted = formatCurrency(trialPlan.currency, trialPlan.price)
      const symbol = formatted.match(/^[^\d.,\s]+/)?.[0] || '$'
      
      // Build checkout link - use checkout_url from API if available
      const links = trialPlan.checkout_url
        ? [
            {
              _type: 'link' as const,
              condition: 'external' as const,
              href: trialPlan.checkout_url,
              url: trialPlan.checkout_url,
            },
          ]
        : cmsPlan.prices.find((p) => p.period === period)?.links || []

      // Use annualSavings from API if available (more accurate than calculating)
      let compareAtString: string | undefined
      if (trialPlan.billingCycle === 'year' && trialPlan.annualSavings !== null && trialPlan.annualSavings > 0) {
        compareAtString = `Save ${formatCurrency(trialPlan.currency, trialPlan.annualSavings)}`
      }

      return {
        price: trialPlan.price,
        symbol,
        period,
        currency: trialPlan.currency,
        compareAtString,
        links,
      };
    })

    // Merge CMS plan data with API pricing data
    const mergedPlan = {
      ...cmsPlan,
      prices,
    };
    mergedPlans.push(mergedPlan);
  }

  return mergedPlans
}

