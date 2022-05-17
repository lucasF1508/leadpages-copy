import React from 'react'
import useForm, { FormProvider } from '@hooks/useForm'
import { FormFooter, FormConfirmation } from '@components/Form'
import Input from '@components/Form/Inputs'
import { styled } from '@design'

const $Newsletter = styled('form', {
  d: 'grid',
  gtc: 'repeat(2, 1fr)',
  grg: '$3',
  gcg: '$6',
})

const Newsletter = ({
  name = 'Newsletter',
  submitText = 'Subscribe',
  confirmation = 'Thank you for subscribing!',
}) => {
  const {
    methods,
    formHasSubmitted,
    parseChoices,
    onNewsletterSubmit,
    onError,
  } = useForm({
    name,
  })
  const { handleSubmit } = methods

  if (formHasSubmitted) {
    return <FormConfirmation content={confirmation} />
  }

  return (
    <FormProvider {...methods} parseChoices={parseChoices}>
      <$Newsletter onSubmit={handleSubmit(onNewsletterSubmit, onError)}>
        <Input
          name="firstName"
          label="First name"
          placeholder="First name"
          type="text"
        />
        <Input
          name="lastName"
          label="Last name"
          type="text"
          placeholder="Last name"
        />
        <Input
          name="email"
          label="Email"
          placeholder="Email"
          type="email"
          css={{
            gc: '1 / -1',
          }}
        />
        <FormFooter submitText={submitText} />
      </$Newsletter>
    </FormProvider>
  )
}

export default Newsletter
