import type { TrialPlanItem } from './fetchTrialPlans'
import { formatCurrency } from './formatPrice'
import { PriceType } from '@/components/Price'
import { LinkType } from '@/types'

export interface ComparePlansColumn {
  title: string
  _key: string
  links?: LinkType[]
  prices?: PriceType[]
}

/**
 * Maps trial plans from API response to the columns format expected by ComparePlans component.
 * Creates one column per plan level (Standard, Pro, Advanced) with prices for monthly and yearly periods.
 * 
 * @param trialPlans - Array of trial plans from the API
 * @param cmsColumns - Array of columns from Sanity CMS (for titles and structure)
 * @returns Array of columns with merged API pricing data
 */
export function mapTrialPlansToComparePlansColumns(
  trialPlans: TrialPlanItem[],
  cmsColumns: ComparePlansColumn[]
): ComparePlansColumn[] {
  // Create a map of CMS columns by title for quick lookup
  const cmsColumnsByTitle = new Map<string, ComparePlansColumn>()
  
  cmsColumns.forEach((column) => {
    // Normalize title for matching (case-insensitive, handle variations)
    const normalizedTitle = column.title.toLowerCase().trim()
    if (normalizedTitle.includes('standard')) {
      cmsColumnsByTitle.set('standard', column)
    } else if (normalizedTitle.includes('pro')) {
      cmsColumnsByTitle.set('pro', column)
    } else if (normalizedTitle.includes('advanced')) {
      // Only map "advanced" to "advanced" level, NOT "custom"
      cmsColumnsByTitle.set('advanced', column)
    }
    // Note: "custom" is intentionally NOT mapped, so it will be preserved as-is from CMS
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

  // Build the merged columns array
  const mergedColumns: ComparePlansColumn[] = []

  // Process each level (standard, pro, advanced)
  const levels = Array.from(plansByLevel.keys())
  for (const level of levels) {
    const trialPlansForLevel = plansByLevel.get(level)!
    const cmsColumn = cmsColumnsByTitle.get(level)
    
    if (!cmsColumn) {
      // If no CMS column found for this level, skip it
      continue
    }

    // Find monthly and yearly plans for this level
    const monthlyPlan = trialPlansForLevel.find(p => p.billingCycle === 'month')
    const yearlyPlan = trialPlansForLevel.find(p => p.billingCycle === 'year')
    
    // Calculate savings percentage if both plans exist
    let savingsPercentage: number | null = null
    if (monthlyPlan && yearlyPlan) {
      const monthlyPrice = monthlyPlan.price
      const yearlyTotalPrice = yearlyPlan.monthlyCost * 12 // yearly monthlyCost is already monthly equivalent
      if (monthlyPrice > 0 && yearlyTotalPrice > 0) {
        savingsPercentage = Math.round(((monthlyPrice * 12 - yearlyTotalPrice) / (monthlyPrice * 12)) * 100)
      }
    }

    // Build prices array from trial plans
    const prices: PriceType[] = trialPlansForLevel.map((trialPlan) => {
      const period = trialPlan.billingCycle === 'month' ? 'monthly' : 'yearly'
      
      // For yearly plans, use monthlyCost (monthly equivalent) since Price component shows "/month"
      // For monthly plans, use price (which is already the monthly price)
      const displayPrice = trialPlan.billingCycle === 'year' 
        ? trialPlan.monthlyCost 
        : trialPlan.price
      
      // Extract currency symbol from formatted currency
      // formatCurrency returns something like "$123.00" or "€123,00"
      const formatted = formatCurrency(trialPlan.currency, displayPrice)
      const symbol = formatted.match(/^[^\d.,\s]+/)?.[0] || '$'
      
      // Preserve links from CMS (don't use checkout_url from API)
      const links: LinkType[] | undefined = cmsColumn.prices?.find((p) => p.period === period)?.links

      // Build compareAtString with percentage for yearly plans
      let compareAtString: string | undefined
      if (trialPlan.billingCycle === 'year' && savingsPercentage !== null && savingsPercentage > 0) {
        compareAtString = `(save ${savingsPercentage}%)`
      } else if (trialPlan.billingCycle === 'year' && trialPlan.annualSavings !== null && trialPlan.annualSavings > 0) {
        // Fallback to dollar amount if percentage calculation failed
        compareAtString = `Save ${formatCurrency(trialPlan.currency, trialPlan.annualSavings)}/year`
      }

      return {
        price: displayPrice,
        symbol,
        period,
        currency: trialPlan.currency,
        compareAtString,
        links,
        override: false,
      }
    })

    // Merge CMS column data with API pricing data
    const mergedColumn: ComparePlansColumn = {
      ...cmsColumn,
      prices,
    }
    mergedColumns.push(mergedColumn)
  }

  // If we have CMS columns that weren't matched (e.g., "Custom" or other plans),
  // add them as-is to preserve them
  cmsColumns.forEach((cmsColumn) => {
    const normalizedTitle = cmsColumn.title.toLowerCase().trim()
    const isMatched = 
      normalizedTitle.includes('standard') ||
      normalizedTitle.includes('pro') ||
      normalizedTitle.includes('advanced')
    // Note: "custom" is intentionally NOT in isMatched, so it will always be preserved
    
    if (!isMatched || !mergedColumns.find(col => col._key === cmsColumn._key)) {
      // Column wasn't matched or already added, add it as-is
      if (!mergedColumns.find(col => col._key === cmsColumn._key)) {
        mergedColumns.push(cmsColumn)
      }
    }
  })

  return mergedColumns
}
