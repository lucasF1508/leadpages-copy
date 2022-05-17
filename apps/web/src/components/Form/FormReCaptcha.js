import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { styled } from '@design'

const { RECAPTCHA_SITE_KEY } = process.env

const $FormReCaptcha = styled('div', {
  d: 'none',
})

const FormReCaptcha = (props) => {
  if (!RECAPTCHA_SITE_KEY) return null
  const recaptchaRef = useRef()
  const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'))

  return (
    <$FormReCaptcha {...props}>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={RECAPTCHA_SITE_KEY}
      />
    </$FormReCaptcha>
  )
}

export default FormReCaptcha
