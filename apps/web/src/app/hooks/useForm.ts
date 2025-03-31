import type {
  FieldValues,
  // InputOption,
  UseFormProps,
  useFormContextProps,
} from '@types'
import type { FieldErrors, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import {
  useFormContext as _useFormContext,
  FormProvider,
  useController,
  useFormState,
  useForm as useReactHookForm,
} from 'react-hook-form'
import sendFormData from '@/lib/forms/sendFormData'
import sendMailchimpData from '@/lib/forms/sendMailchimpData'

export const useFormContext = () =>
  _useFormContext() as useFormContextProps

const useForm = ({ config = {}, form }: UseFormProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [formHasSubmitted, setFormHasSubmitted] = useState(false)
  const [formError, setFormError] = useState('')
  const methods = useReactHookForm({
    criteriaMode: 'all',
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: false,
    shouldUnregister: true,
    ...config,
  })

  // const parseChoices = (choices: string): InputOption[] =>
  //   choices.split(/\r?\n/).map((choice: string) => {
  //     const array = choice.split(' : ')
  //     return {
  //       label: array[0],
  //       value: array[1],
  //     }
  //   }) as InputOption[]

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setFormError('')
    setIsLoading(true)

    const { name, notificationEmail = 'web@gearboxbuilt.com' } = form
    const { message, response, status } = await sendFormData({
      data,
      sendTo: notificationEmail,
      title: name,
    })

    if (status === 'success') {
      // eslint-disable-next-line no-console
      setIsLoading(false)
      setFormHasSubmitted(true)
    } else if (status === 'error' || message) {
      setIsLoading(false)
      setFormError(
        `Sending form has failed, Error: ${response?.error || message}`
      )
      console.error('Sending form has failed', message)
      console.error('Response', response)
    }
  }

  const onNewsletterSubmit: SubmitHandler<FieldValues> = async (data) => {
    setFormError('')
    setIsLoading(true)

    const { message, response, status } = await sendMailchimpData({
      data,
    })

    if (status === 'subscribed') {
      // eslint-disable-next-line no-console
      console.log('Subscribed was successful')
      setFormHasSubmitted(true)
    } else if (status === 'error' || message) {
      setIsLoading(false)
      setFormError(
        `Sending form has failed, Error: ${response?.error || message}`
      )
      console.error('Sending form has failed', message)
      console.error('Response', response)
    }
  }

  const onError = (errors: FieldErrors) => {
    console.error(
      'Form is invalid and failed to submit. The following fields are invalid:'
    )
    console.error(errors)
  }

  return {
    FormProvider,
    formError,
    formHasSubmitted,
    isLoading,
    methods,
    onError,
    onNewsletterSubmit,
    onSubmit,
    // parseChoices,
    setFormError,
    setFormHasSubmitted,
    setIsLoading,
    ...form,
  }
}

export default useForm
export { FormProvider, useController, useFormState }
