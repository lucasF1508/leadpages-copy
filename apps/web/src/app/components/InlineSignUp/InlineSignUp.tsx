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
import { getPersistedTrackingParamsAsObject } from '@/lib/utils/trackingParams'

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
    // Use persisted params (URL + cookie __lptp) so XID/affiliate survive navigation
    const extraParams = getPersistedTrackingParamsAsObject()

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
          'flex flex-row flex-wrap items-center justify-start gap-3 w-full md:flex-nowrap relative',
          className,
          classNames?.root
        )}
        onSubmit={handleSubmit(interceptSubmit)}
      >
        {/*
          Gradient + backdrop-blur en capa detrás recortada (overflow-hidden).
          Evita el “sliver” blanco de WebKit al mezclar blur + border-radius en el <input>.
        */}
        <div
          className={clsx(
            'group relative isolate min-w-0 flex-[1_1_auto] h-6 max-md:max-w-full md:max-w-[20rem] md:flex-none',
            'overflow-hidden rounded-[40px]'
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[40px] bg-gradient-input backdrop-blur-md opacity-15"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[40px] bg-light opacity-100"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-4 rounded-r-[40px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.18)_100%)] opacity-20 group-focus-within:opacity-60"
          />
          <input
            className={clsx(
              'relative z-[1] type-body-sm block h-full w-full min-w-0 appearance-none rounded-[40px] border-0 bg-transparent',
              'p-2.5 py-0 text-obsidian-900 placeholder:text-obsidian-900',
              'shadow-none outline-none ring-0',
              'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-button-surface-solid-ring'
            )}
            disabled={isLoading}
            placeholder={placeholder}
            type="email"
            {...register('email')}
          />
        </div>
        <button
          className="link-button-solid max-md:w-full shrink-0 !rounded-[40px]"
          disabled={isLoading}
          type="submit"
        >
          {label}
          {isLoading ? <Loader /> : <LinkIcon />}
        </button>
      </form>
    </FormProvider>
  )
}

export default InlineSignUp
