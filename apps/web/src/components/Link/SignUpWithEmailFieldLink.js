import { Input } from '@components/Form/Inputs'
import { keyframes, styled } from '@design'
import { FiChevronRight as InternalIcon } from '@react-icons/all-files/fi/FiChevronRight'
import useForm, { FormProvider } from '@/hooks/useForm'
import Load from '@legacy/assets/images/global/submit_load_spinner.svg'
import { useEffect, useRef, useState } from 'react'
import SubmitLoadSpinner from '@legacy/assets/svgs/SubmitLoadSpinner'
import { checkOverflow } from '@lib/forms/checkOverflow'
import planRedirect from '@lib/forms/planRedirect'
import externalRedirect from '@lib/forms/externalRedirect'

const overflowColors = {
  primary: '#4938C2',
  secondary: '$colors$ctaPurple',
  grayAlt: '$colors$grayAlt',
  tan: '$colors$tan',
  lavender: '$colors$lavenderLight',
  lavenderLight: '$colors$lavenderLight',
  champagne: '$colors$champagne',
  magnolia: '$colors$magnolia',
  lavenderBlush: '$colors$lavenderBlush',
  gray4: '$colors$gray',
  gray: '$colors$grayAlt',
  white: '$colors$white',
  tealLight: '$colors$tealLight',
  teal: '$colors$teal',
  purple: '$colors$purple',
  navy: '$colors$darkBlue',
  purpleDark: '$colors$purpleDark',
}

const getOverflowColors = ({ colors = overflowColors } = {}) =>
  Object.entries(colors).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        '&::before': {
          background: `linear-gradient(90deg, ${value} 52.8%, transparent 71.47%)`,
        },
      },
    }),
    {}
  )

const rotate = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

const $Form = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  position: 'relative',

  '@>l': {
    justifyContent: 'flex-start',
  },

  variants: {
    align: {
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'flex-start',
      },
    },
  },

  defaultVariants: {
    align: 'center',
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

  variants: {
    overflowing: {
      true: {
        '&::before': {
          borderLeft: '3px solid $colors$primary',
          borderTop: '3px solid $colors$primary',
          borderBottom: '3px solid $colors$primary',
          width: '42px',
          opacity: 1,
        },
      },
      false: {},
    },
    overflowColor: getOverflowColors(),
  },
  defaultVariants: {
    overflowing: false,
    overflowColor: 'primary',
  },
})

const $Input = styled(Input, {
  width: '100%',
})

const $FormErrors = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: '$2',
  color: '$error',
  fontSize: '16px',
  textAlign: 'center',
  type: 'cardHeading',
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
  signUpType,
  external,
  align = { '@initial': 'center', '@>l': 'start' },
  bgColor,
  className,
  ...props
}) => {
  const { 
    methods, 
    isLoading, 
    setIsLoading, 
    setFormError, 
    formError 
  } = useForm(
    { form: { name: 'HeroSignUp' } }
  )
  const { handleSubmit, watch } = methods
  const inputRef = useRef(null)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const inputValue = watch('email')
  const isExternalRedirect = signUpType === 'external'

  const onSubmit = async (formData) => {
    setIsLoading(true)
    setFormError(false)

    // Capture URL parameters (like XID) to preserve them
    const extraParams = Object.fromEntries(
      new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')
    )

    // DEBUG: Log para verificar que se capturan los parámetros
    if (Object.keys(extraParams).length > 0) {
      console.log('[SignUpWithEmailFieldLink] Parámetros capturados de la URL:', extraParams)
    }

    if (isExternalRedirect) {
      const { error } = await externalRedirect({
        formData,
        ...external,
      })

      if (error) setFormError(error)
    } else {
      const { error } = await planRedirect({
        type,
        formData: { ...formData, trial_type: type },
        extraParams,
      })

      if (error) setFormError(error)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    const currentOverflow = checkOverflow(inputRef)

    if (currentOverflow !== isOverflowing) {
      setIsOverflowing(checkOverflow(inputRef))
    }
  }, [inputValue, isOverflowing])

  return (
    <FormProvider {...methods}>
      <$Form align={align} className={className}>
        <$FormInner
          onSubmit={handleSubmit(onSubmit)}
          noValidate={!isExternalRedirect}
          className={'email-sign-up-input'}
          overflowing={isOverflowing}
          overflowColor={bgColor}
        >
          <$Input
            label="Email"
            name="email"
            placeholder={placeholder}
            type="email"
            component="emailSignUp"
            errorMessage="Please enter your email address"
            useValidation={false}
            ref={inputRef}
            className={isOverflowing ? 'overflowing' : ''}
            required={isExternalRedirect}
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
        {formError && (
          <$FormErrors>
            <span>{formError}</span>
          </$FormErrors>
        )}
      </$Form>
    </FormProvider>
  )
}

export default SignUpWithEmailFieldLink
