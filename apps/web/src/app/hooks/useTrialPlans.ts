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
          // Debug logging (in development, preview, and test - but not production)
          if (typeof window !== 'undefined') {
            const hostname = window.location.hostname;
            const isDevelopment = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('localhost:');
            const isPreview = hostname.includes('vercel.app') || hostname.includes('.vercel.app');
            const isTest = hostname.includes('leadpagestest.com');
            
            if (isDevelopment || isPreview || isTest) {
              console.log('[useTrialPlans] Successfully fetched trial plans:', {
                itemCount: result.items?.length || 0,
                currencies: result.items?.map(item => item.currency) || [],
              });
            }
          }
          setData(result)
        } else {
          if (typeof window !== 'undefined') {
            const hostname = window.location.hostname;
            const isDevelopment = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('localhost:');
            const isPreview = hostname.includes('vercel.app') || hostname.includes('.vercel.app');
            const isTest = hostname.includes('leadpagestest.com');
            
            if (isDevelopment || isPreview || isTest) {
              console.warn('[useTrialPlans] fetchTrialPlans returned null - will use CMS fallback');
            }
          }
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
