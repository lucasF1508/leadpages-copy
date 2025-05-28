'use client'

import type { FreeTrialKey } from '@/lib/forms/planRedirect';
import type { ClassValue } from 'clsx';
import React from 'react'
import clsx from 'clsx'
import LinkIcon from '@/components/Link/LinkIcon'
import Loader from '@/components/Loader'
import useForm, { FormProvider } from '@/hooks/useForm'
import externalRedirect from '@/lib/forms/externalRedirect'
import planRedirect from '@/lib/forms/planRedirect'
 
export interface InlineSignUpProps {
  className?: ClassValue
  classNames?: {
    root?: ClassValue
  }
  external?: {
    formId: string
    portalId: string
    url: string
  }
  hasIcon?: boolean
  label?: string
  placeholder?: string
  signUpType?: string
  type: FreeTrialKey
}

const InlineSignUp = ({ className, classNames, external, label, placeholder, signUpType, type: plan}: InlineSignUpProps) => {
  const {
    formError, 
    isLoading, 
    methods, 
    setFormError, 
    setIsLoading
  } = useForm({
    form: {
      name: 'HeroSignUp',
    },
  })

  const { handleSubmit, register } = methods
  const isExternalRedirect = signUpType === 'external'

  const interceptSubmit = async (formData: any) => {
    setIsLoading(true)
    setFormError('')

    if (isExternalRedirect) {
      if (!external?.url) {
        setFormError('External redirect URL is missing')
        setIsLoading(false)
        return
      }

      const result = await externalRedirect({
        formData,
        ...external,
      })

      if (typeof result === 'object' && result.error) {
        setFormError(result.error)
      }
    } else {
      const result = await planRedirect({
        formData: { ...formData, trial_type: plan },
        type: plan,
      })

      if (typeof result === 'object' && result.error) {
        setFormError(result.error)
      }
    }

    setIsLoading(false)
  }

  return (
    <>
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
            className={
              clsx(
                '[background-color:transparent] focus:bg-light bg-gradient-input backdrop-blur-md transition-all duration-200 ease-in-out md:w-full',
                "!ring-brand-lime flex-[1_1_auto] type-body-sm block h-6 rounded-md border-none p-2.5 py-0 text-obsidian-900 placeholder:text-dark max-md:flex-[1_1_auto]")}
            disabled={isLoading}
            placeholder={placeholder}
            type="email"
            {...register('email')}
          />
          <button className="link-button-solid max-md:w-full" disabled={isLoading} type="submit">
            {label}
            {isLoading ? <Loader /> : <LinkIcon />}
          </button>
          {formError && <p className='text-xs text-error absolute -bottom-3 left-0 pt-1 max-w-full'>{formError}</p>}
        </form>
      </FormProvider>
    </>
  )
}
 
export default InlineSignUp