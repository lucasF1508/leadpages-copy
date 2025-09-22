'use client'

import type { FreeTrialKeyType } from '@/lib/utils/getFreeTrialCheckoutUrl'
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

      await planRedirect({ formData: { ...formData, trial_type: plan }, type: plan })
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
