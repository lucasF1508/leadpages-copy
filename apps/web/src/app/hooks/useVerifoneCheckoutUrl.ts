'use client'

import { useEffect, useState } from 'react'
import type { BillingCycle, PlanLevel } from '@/lib/utils/getVerifoneCheckoutUrl'
import { getVerifoneCheckoutUrl } from '@/lib/utils/getVerifoneCheckoutUrl'

interface UseVerifoneCheckoutUrlOptions {
  level?: PlanLevel
  billingCycle?: BillingCycle
  defaultLevel?: PlanLevel
  defaultBillingCycle?: BillingCycle
  enabled?: boolean
}

/**
 * React hook to get Verifone checkout URL for a specific plan.
 * Returns the URL and loading state.
 */
export function useVerifoneCheckoutUrl(
  options: UseVerifoneCheckoutUrlOptions = {}
) {
  const { enabled = true, ...urlOptions } = options
  const [url, setUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!enabled) {
      setLoading(false)
      return
    }

    let cancelled = false

    async function fetchUrl() {
      setLoading(true)
      try {
        const checkoutUrl = await getVerifoneCheckoutUrl(urlOptions)
        if (!cancelled) {
          setUrl(checkoutUrl)
        }
      } catch (error) {
        console.error('[useVerifoneCheckoutUrl] Error:', error)
        if (!cancelled) {
          setUrl(null)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchUrl()

    return () => {
      cancelled = true
    }
  }, [enabled, urlOptions.level, urlOptions.billingCycle, urlOptions.defaultLevel, urlOptions.defaultBillingCycle])

  return { url, loading }
}

