'use client'

import { useMemo } from 'react'
import type { LinkType } from '@types'
import { useVerifoneCheckoutUrl } from './useVerifoneCheckoutUrl'
import {
  extractPlanFromUrl,
  shouldReplaceWithVerifone,
} from '@/lib/utils/getVerifoneCheckoutUrl'

/**
 * Hook to process links and replace Recurly/checkout URLs with Verifone URLs.
 * Returns processed links with Verifone checkout URLs where applicable.
 */
export function useProcessLinksWithVerifone(links?: LinkType[]): LinkType[] {
  // Find the first link that needs replacement to determine default plan
  const linkToReplace = useMemo(() => {
    if (!links?.length) return null
    return links.find((link) => {
      const url = (link as any).url || (link as any).href || (link as any).to || ''
      return shouldReplaceWithVerifone(url)
    })
  }, [links])

  // Extract plan info from the first link that needs replacement
  const planInfo = useMemo(() => {
    if (!linkToReplace) return null
    const url = (linkToReplace as any).url || (linkToReplace as any).href || (linkToReplace as any).to || ''
    return extractPlanFromUrl(url)
  }, [linkToReplace])

  // Get Verifone URL for the default plan
  const { url: verifoneUrl, loading } = useVerifoneCheckoutUrl({
    enabled: !!linkToReplace,
    level: planInfo?.level,
    billingCycle: planInfo?.billingCycle,
    defaultLevel: 'standard',
    defaultBillingCycle: 'month',
  })

  // Process links: replace Recurly/checkout URLs with Verifone URLs
  const processedLinks = useMemo(() => {
    if (!links?.length) return []
    if (loading || !verifoneUrl) return links // Return original if still loading or no Verifone URL

    return links.map((link) => {
      const url = (link as any).url || (link as any).href || (link as any).to || ''
      
      if (!shouldReplaceWithVerifone(url)) {
        return link
      }

      // Replace with Verifone URL
      return {
        ...link,
        url: verifoneUrl,
        href: verifoneUrl,
        to: verifoneUrl,
        condition: 'external' as const,
      }
    })
  }, [links, verifoneUrl, loading])

  return processedLinks
}

