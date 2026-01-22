'use client'

import type { FreeTrialKeyType } from '@/lib/utils/getFreeTrialCheckoutUrl'
import type { BillingCycle, PlanLevel } from '@/lib/utils/getVerifoneCheckoutUrl'
import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import LinkIcon from '@/components/Link/LinkIcon'
import Loader from '@/components/Loader'
import useForm, { FormProvider } from '@/hooks/useForm'
import externalRedirect from '@/lib/forms/externalRedirect'
import { submitToHubSpot } from '@/lib/forms/hubspotHelpers'
import planRedirect from '@/lib/forms/planRedirect'
import {
  getFreeTrialCheckoutUrl,
  getOrderUrlForEmail,
} from '@/lib/utils/getFreeTrialCheckoutUrl'
import { getVerifoneCheckoutUrl } from '@/lib/utils/getVerifoneCheckoutUrl'

export interface InlineSignUpProps {
  className?: ClassValue
  classNames?: { root?: ClassValue }
  external?: { formId: string; portalId: string; url: string }
  hasIcon?: boolean
  label?: string
  placeholder?: string
  signUpType?: string
  type: FreeTrialKeyType
}

// Map FreeTrialKeyType to Verifone plan level and billing cycle
function mapPlanToVerifone(plan: FreeTrialKeyType): { level: PlanLevel; billingCycle: BillingCycle } {
  if (plan.includes('standard')) {
    return {
      level: 'standard',
      billingCycle: plan.includes('Annual') ? 'year' : 'month',
    }
  } else if (plan.includes('pro')) {
    return {
      level: 'pro',
      billingCycle: plan.includes('Annual') ? 'year' : 'month',
    }
  }
  // Default to standard monthly
  return { level: 'standard', billingCycle: 'month' }
}

const InlineSignUp = ({
  className,
  classNames,
  external,
  label,
  placeholder,
  signUpType,
  type: plan,
}: InlineSignUpProps) => {
  const { isLoading, methods, setIsLoading } = useForm({ form: { name: 'HeroSignUp' } })
  const { handleSubmit, register } = methods
  const isExternalRedirect = signUpType === 'external'

  const interceptSubmit = async (formData: any) => {
    setIsLoading(true)
    let redirected = false

    const email = String(formData?.email || '').trim()
    const extraParams = Object.fromEntries(
      new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')
    ) as Record<string, string>
    
    // DEBUG: Log para verificar que se capturan los parámetros de la URL (incluyendo XID u otros de afiliados)
    if (Object.keys(extraParams).length > 0) {
      console.log('[InlineSignUp] Parámetros capturados de la URL:', extraParams)
    }

    try {
      if (isExternalRedirect) {
        if (!external?.url) return
        await externalRedirect({ formData, ...external })
        return
      }

      if (email) {
        submitToHubSpot({
          email,
          page_name: typeof document !== 'undefined' ? document.title : '',
          page_url: typeof window !== 'undefined' ? window.location.href : '',
        }).catch(() => {})
      }

      // Try to get Verifone checkout URL first
      try {
        const { level, billingCycle } = mapPlanToVerifone(plan)
        const verifoneUrl = await getVerifoneCheckoutUrl({ level, billingCycle })
        
        if (verifoneUrl) {
          // Append extra params to Verifone URL
          const url = new URL(verifoneUrl)
          Object.entries(extraParams).forEach(([key, value]) => {
            if (value) url.searchParams.set(key, value)
          })
          window.location.href = url.toString()
          redirected = true
          return
        }
      } catch (error) {
        console.error('[InlineSignUp] Error getting Verifone URL, falling back to Recurly:', error)
      }

      // Fallback to Recurly if Verifone fails
      const isProd =
        process.env.NEXT_PUBLIC_ENV === 'production' || process.env.NODE_ENV === 'production'
      const shouldTokenize = !!email && isProd

      if (shouldTokenize) {
        try {
          const orderUrl = await getOrderUrlForEmail(plan, email, extraParams)
          window.location.href = orderUrl
          redirected = true
          return
        } catch {}
      }

      const href = getFreeTrialCheckoutUrl(plan, false, extraParams)
      if (href) {
        window.location.href = href
        redirected = true
        return
      }

      await planRedirect({ formData: { ...formData, trial_type: plan }, type: plan, extraParams })
    } finally {
      if (!redirected) setIsLoading(false)
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        className={clsx(
          'flex flex-row flex-wrap items-center justify-start md:gap-0 gap-[0.125rem] w-full md:flex-nowrap relative',
          className,
          classNames?.root
        )}
        onSubmit={handleSubmit(interceptSubmit)}
      >
        <input
          className={clsx(
            '[background-color:transparent] focus:bg-light bg-gradient-input backdrop-blur-md transition-all duration-200 ease-in-out md:w-full',
            '!ring-brand-lime flex-[1_1_auto] type-body-sm block h-6 rounded-md border-none p-2.5 py-0 text-obsidian-900 placeholder:text-dark max-md:flex-[1_1_auto]'
          )}
          disabled={isLoading}
          placeholder={placeholder}
          type="email"
          {...register('email')}
        />
        <button className="link-button-solid max-md:w-full" disabled={isLoading} type="submit">
          {label}
          {isLoading ? <Loader /> : <LinkIcon />}
        </button>
      </form>
    </FormProvider>
  )
}

export default InlineSignUp
