import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import camelCase from 'lodash/camelCase'
import { useForm as useReactHookForm, FormProvider } from 'react-hook-form'
import sendFormData from '@lib/forms/sendFormData'
import sendMailchimpData from '@lib/forms/sendMailchimpData'

const useForm = ({ form = {}, config = {} }) => {
  const { name, fields = [], notificationEmail } = form
  const [isLoading, setIsLoading] = useState(false)
  const [formHasSubmitted, setFormHasSubmitted] = useState(false)
  const [formError, setFormError] = useState(false)
  const methods = useReactHookForm({
    criteriaMode: 'all',
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: false,
    shouldUnregister: true,
    ...config,
  })
  const getFieldName = (label) => camelCase(label)
  const getInputType = (type) => type.split('.')[1]
  const getInput = (type) => {
    switch (type) {
      case 'radio':
        return dynamic(() => import('@components/Form/Inputs/InputRadio'))
      case 'checkbox':
        return dynamic(() => import('@components/Form/Inputs/InputCheckbox'))
      case 'select':
        return dynamic(() => import('@components/Form/Inputs/InputSelect'))
      case 'file':
        return dynamic(() => import('@components/Form/Inputs/InputFile'))
      default:
        return dynamic(() => import('@components/Form/Inputs/Input'))
    }
  }

  const parseChoices = (choices) =>
    choices.split(/\r?\n/).map((choice) => {
      const array = choice.split(' : ')
      return {
        label: array[0],
        value: array[1],
      }
    })
  const onSubmit = async (data, e) => {
    setFormError(false)
    setIsLoading(true)

    const { status, response, message } = await sendFormData({
      data,
      fields,
      title: name,
      sendTo: notificationEmail,
    })

    if (status === 'success') {
      console.log('Sending form was successful')
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

  const onNewsletterSubmit = async (data, e) => {
    setFormError(false)
    setIsLoading(true)

    const { status, response, message } = await sendMailchimpData({
      data,
    })

    if (status === 'subscribed') {
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

  const onError = (errors, e) => {
    console.error(
      'Form is invalid and failed to submit. The following fields are invalid:'
    )
    console.error(errors)
  }

  return {
    methods,
    parseChoices,
    isLoading,
    setIsLoading,
    formHasSubmitted,
    setFormHasSubmitted,
    formError,
    setFormError,
    getInput,
    getInputType,
    getFieldName,
    onError,
    onSubmit,
    onNewsletterSubmit,
  }
}

export default useForm
export { FormProvider }
