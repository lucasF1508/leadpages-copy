import { Input } from '@components/Form/Inputs'
import { keyframes, styled } from '@design'
import { FiChevronRight as InternalIcon } from '@react-icons/all-files/fi/FiChevronRight'
import useForm, { FormContext } from '@hooks/useForm'
import { freeTrialEndpoints } from '@pages/api/fetch-trial-url'
import Load from '@legacy/assets/images/global/submit_load_spinner.svg'
import { useEffect, useRef, useState } from 'react'
import { kebabCase } from 'lodash'
import SubmitLoadSpinner from '@legacy/assets/svgs/SubmitLoadSpinner'

const rotate = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

const $Form = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  position: 'relative',

  '@>l': {
    justifyContent: 'flex-start',
  },
})

const $FormInner = styled('form', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 'calc($cols3 + $space$4)',

  '@>m': {
    maxWidth: '$cols6',
  },

  '@>l': {
    width: '$cols4',
  },

  '&:has(.overflowing)': {
    '&::before': {
      background: 'linear-gradient(90deg, #4938C2 52.8%, transparent 71.47%)',
      borderLeft: '3px solid $colors$primary',
      borderTop: '3px solid $colors$primary',
      borderBottom: '3px solid $colors$primary',
      width: '42px',
      opacity: 1,
    },
  },

  '&::before': {
    content: '',
    position: 'absolute',
    borderTopLeftRadius: '$button',
    borderBottomLeftRadius: '$button',
    top: 0,
    left: 0,
    bottom: 0,
    opacity: 0,
    zIndex: 1,
    transition: 'opacity $base',
  },

  [`
    &:hover > button, 
    &:active > button,
    &:hover > input, 
    &:active > input
    `]: {
    borderLeftColor: '$hoverColorAlt',
    borderTopColor: '$hoverColorAlt',
    borderBottomColor: '$hoverColorAlt',
    borderRightColor: '$hoverColorAlt',
  },

  [`
    &:hover > button, 
    &:active > button
    `]: {
    backgroundColor: '$hoverColorAlt',
  },
})

const $Submit = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  type: 'base',
  padding: '$1_5 $2_5',
  backgroundColor: '$primary',
  color: '$white',
  borderTopRightRadius: '$button',
  borderBottomRightRadius: '$button',
  border: '3px solid $colors$primary',
  gap: '0.625rem',
  whiteSpace: 'nowrap',
  minWidth: '7.375rem',
  minHeight: '$space$2',
  boxSizing: 'content-box',

  '&:disabled': {
    pointerEvents: 'none',
  },
})

const $Load = styled(SubmitLoadSpinner, {
  position: 'absolute',
  transformOrigin: 'center',
  animation: `${rotate} 1s infinite`,
  stroke: '$white',
})

const SignUpWithEmailFieldLink = ({
  label,
  ref,
  dataGtm,
  ariaLabel,
  type,
  placeholder,
  hasIcon,
  ...props
}) => {
  const { methods, isLoading, setIsLoading, setFormError } = useForm({
    form: { name: 'HeroSignUp' },
  })
  const { handleSubmit, watch } = methods
  const inputRef = useRef(null)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const inputValue = watch('email')

  const checkOverflow = () => {
    const input = inputRef.current
    const span = document.createElement('span')
    const computedStyle = getComputedStyle(input)

    const addPixels = (value, add) => {
      const numericValue = parseInt(value, 10) + add
      return `${numericValue}px`
    }

    span.style.visibility = 'hidden'
    span.style.whiteSpace = 'pre'
    span.style.paddingLeft = addPixels(computedStyle.paddingLeft, 3)
    span.style.paddingRight = addPixels(computedStyle.paddingRight, 3)
    span.style.paddingTop = addPixels(computedStyle.paddingTop, 3)
    span.style.paddingBottom = addPixels(computedStyle.paddingBottom, 3)
    span.style.font = computedStyle.font
    document.body.appendChild(span)

    span.textContent = input.value

    const isTextOverflowing = span.offsetWidth > input.offsetWidth
    setIsOverflowing(isTextOverflowing)

    document.body.removeChild(span)
  }

  const onSubmit = async (formData) => {
    if (!formData.email || formData.email === '') {
      const endpoint = freeTrialEndpoints[type]
      window.location.href = `https://my.leadpages.com/order-leadpages/${endpoint}/t/d3yy2ARDnfEVTPU7?emailsubmission=${kebabCase(
        type
      )}`
    }

    try {
      setIsLoading(true)

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, type }),
        redirect: 'follow',
      }

      const data = await fetch('/api/fetch-trial-url', requestOptions).then(
        (_data) => _data.json()
      )

      const url = data && data['order-url']
      if (url)
        window.location.href = url.concat(`&emailsubmission=${kebabCase(type)}`)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      // eslint-disable-next-line no-console
      console.error('Failed :: Error:', e.message)
      setFormError(
        `Something went wrong with your submission, please reach out to our support team.`
      )
    }
  }

  useEffect(() => {
    checkOverflow()
  }, [inputValue, isOverflowing])

  return (
    <FormContext {...methods}>
      <$Form>
        <$FormInner
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className={'email-sign-up-input'}
        >
          <Input
            label="Email"
            name="email"
            placeholder={placeholder}
            type="email"
            component="emailSignUp"
            errorMessage="Please enter your email address"
            useValidation={false}
            ref={inputRef}
            className={isOverflowing ? 'overflowing' : ''}
          />
          <$Submit
            disabled={isLoading}
            type="submit"
            linkStyle="button"
            {...props}
          >
            {!isLoading ? (
              <>
                {label}
                {hasIcon && <InternalIcon />}
              </>
            ) : (
              <$Load src={Load.src} alt="loading spinner" />
            )}
          </$Submit>
        </$FormInner>
      </$Form>
    </FormContext>
  )
}

export default SignUpWithEmailFieldLink
