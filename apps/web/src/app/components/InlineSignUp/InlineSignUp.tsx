'use client'

import type { FreeTrialKeyType } from '@/lib/utils/getFreeTrialCheckoutUrl'
import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import LinkIcon from '@/components/Link/LinkIcon'
import Loader from '@/components/Loader'
import useForm, { FormProvider } from '@/hooks/useForm'
import externalRedirect from '@/lib/forms/externalRedirect'
import planRedirect from '@/lib/forms/planRedirect'
import { getFreeTrialCheckoutUrl, getOrderUrlForEmail } from '@/lib/utils/getFreeTrialCheckoutUrl'

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

const HS_PORTAL_ID = '21794907'
const HS_FORM_ID = 'b9cf01c6-afce-4838-a074-d7bf202da044'
const HS_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL_ID}/${HS_FORM_ID}`

function getHubspotUtk(): string | undefined {
  try {
    return document.cookie.split('; ').find((c) => c.startsWith('hubspotutk='))?.split('=')[1]
  } catch {
    return undefined
  }
}

function buildHsPayload(email: string) {
  const hutk = getHubspotUtk()
  return JSON.stringify({
    context: {
      hutk,
      pageName: typeof document !== 'undefined' ? document.title : '',
      pageUri: typeof window !== 'undefined' ? window.location.href : '',
    },
    fields: [{ name: 'email', value: email }],
  })
}

function submitHubSpotEmail(email: string) {
  if (!email || !HS_PORTAL_ID || !HS_FORM_ID) return
  const payload = buildHsPayload(email)
  try {
    if ('sendBeacon' in navigator) {
      const blob = new Blob([payload], { type: 'application/json' })
      const ok = navigator.sendBeacon(HS_ENDPOINT, blob)
      if (ok) return
    }
  } catch {}
  try {
    const controller = new AbortController()
    const t = setTimeout(() => controller.abort(), 1500)
    fetch(HS_ENDPOINT, {
      body: payload,
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      method: 'POST',
      signal: controller.signal,
    }).finally(() => clearTimeout(t))
  } catch {}
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

      if (email) submitHubSpotEmail(email)

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
