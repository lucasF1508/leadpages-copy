import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { styled } from '@design'

const { HCAPTCHA_SITEKEY } = process.env

const $FormReCaptcha = styled('div')

const FormReCaptcha = (props) => {
  if (!HCAPTCHA_SITEKEY) return null
  const recaptchaRef = useRef()
  const HCaptcha = dynamic(() => import('@hcaptcha/react-hcaptcha'))

  return (
    <$FormReCaptcha {...props}>
      <HCaptcha ref={recaptchaRef} sitekey={HCAPTCHA_SITEKEY} />
    </$FormReCaptcha>
  )
}

export default FormReCaptcha
