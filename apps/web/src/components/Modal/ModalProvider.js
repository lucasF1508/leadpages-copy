import React from 'react'
import useModal from '@hooks/useModal'

export const ModalContext = React.createContext()

const ModalProvider = ({ children, value = {}, ...props }) => {
  const modal = useModal()
  return (
    <ModalContext.Provider
      value={{
        ...modal,
        ...value,
      }}
      {...props}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
