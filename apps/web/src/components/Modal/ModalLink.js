import React, { useContext } from 'react'
import { ModalContext } from '@components/Modal'
import { styled } from '@design'

const $ModalLink = styled('a', {})

const ModalLink = ({
  modalKey,
  component: componentOrg,
  children,
  ...props
}) => {
  const { handleClick } = useContext(ModalContext)
  const Component = componentOrg || $ModalLink
  return (
    <Component onClick={(e) => handleClick(e, modalKey)} {...props}>
      {children}
    </Component>
  )
}

export default ModalLink
