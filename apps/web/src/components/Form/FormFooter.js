import React from 'react'
import { styled } from '@design'
import { useFormContext, useFormState } from 'react-hook-form'
import Loader from '@components/Loader'
import { FormHCaptcha, FormSubmitButton } from '../Form'
import { InputErrors } from './Inputs'

const $FormFooter = styled('div', {
  gc: '1 / -1',
  d: 'flex',
  ff: 'row wrap',
  jc: 'flex-start',
  ai: 'center',
})

export default function FormFooter({ submitText = 'Submit', ...props }) {
  const { control, isLoading, formError } = useFormContext()
  const { errors } = useFormState({ control })
  return (
    <>
      <FormHCaptcha />
      <$FormFooter {...props}>
        <FormSubmitButton isLoading={isLoading} label={submitText} />
        {isLoading && <Loader />}
        {(formError || Object.values(errors || {}).length > 0) && (
          <InputErrors
            message={
              formError ||
              'Validation Error: Please check the above fields for any errors'
            }
            type="form"
          />
        )}
      </$FormFooter>
    </>
  )
}
