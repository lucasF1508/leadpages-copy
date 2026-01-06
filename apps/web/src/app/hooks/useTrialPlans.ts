'use client'

import { useEffect, useState } from 'react'
import { fetchTrialPlans, type TrialPlansResponse } from '@/lib/utils/fetchTrialPlans'

interface UseTrialPlansResult {
  data: TrialPlansResponse | null
  loading: boolean
  error: Error | null
}

/**
 * Hook to fetch trial plans from the API.
 * Handles loading and error states.
 * 
 * Note: Must be used client-side for geolocation to work correctly.
 */
export function useTrialPlans(): UseTrialPlansResult {
  const [data, setData] = useState<TrialPlansResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let mounted = true

    async function loadPlans() {
      try {
        setLoading(true)
        setError(null)
        
        const result = await fetchTrialPlans()
        
        if (!mounted) {
          return
        }
        
        if (result) {
          setData(result)
        } else {
          setError(new Error('Failed to fetch trial plans'))
        }
      } catch (err) {
        if (!mounted) return
        console.error('[useTrialPlans] Exception caught:', err);
        setError(err instanceof Error ? err : new Error('Unknown error'))
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    loadPlans()

    return () => {
      mounted = false
    }
  }, [])

  return { data, loading, error }
}
