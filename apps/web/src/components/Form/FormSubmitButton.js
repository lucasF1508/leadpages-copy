import React from 'react'
import { $Link } from '@components/Link'

const FormSubmitButton = ({
  className,
  children,
  isLoading,
  label = 'Submit',
  ...props
}) => (
  <$Link
    as="button"
    disabled={isLoading}
    className={className}
    type="submit"
    linkStyle="button"
    {...props}
  >
    {children || label}
  </$Link>
)

export default FormSubmitButton
