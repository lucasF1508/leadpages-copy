import React, { useMemo, memo } from 'react'
import useForm, { FormProvider } from '@hooks/useForm'
import { styled } from '@design'
import { FormFooter, FormConfirmation } from '../Form'

const $Form = styled('form', {
  d: 'grid',
  gtc: 'repeat(2, 1fr)',
  grg: '$3',
  gcg: '$6',
})

const Form = ({ form = {}, children, ...props }) => {
  const { fields, confirmation, submitText } = {
    name: 'Form',
    notificationEmail: 'web@gearboxbuilt.com',
    confirmation: 'Thank you! Your message has been sent.',
    submitText: 'Submit',
    fields: [],
    ...form,
  }
  const {
    getInput,
    getInputType,
    getFieldName,
    onError,
    onSubmit,
    formHasSubmitted,
    methods,
    ...providerValues
  } = useForm({
    form: {
      notificationEmail: 'web@gearboxbuilt.com',
      confirmation,
      ...form,
    },
  })
  const { handleSubmit } = methods

  const Inputs = useMemo(
    () =>
      fields.map(({ _type, _key, label, type: inputType, ...inputProps }) => {
        const type = inputType || getInputType(_type)
        const Input = getInput(type)

        return (
          <Input
            key={_key || label}
            name={getFieldName(label)}
            type={type}
            label={label}
            placeholder={label}
            {...inputProps}
          />
        )
      }),
    []
  )

  if (formHasSubmitted) {
    return <FormConfirmation content={confirmation} />
  }

  return (
    <FormProvider
      formHasSubmitted={formHasSubmitted}
      {...methods}
      {...providerValues}
    >
      <$Form onSubmit={handleSubmit(onSubmit, onError)} {...props}>
        {children || Inputs}
        <FormFooter submitText={submitText} />
      </$Form>
    </FormProvider>
  )
}

export default memo(Form)
