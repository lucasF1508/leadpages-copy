import React, { useState, useContext, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence } from 'framer-motion'
import scrollLock from '@hooks/useScrollLock'
import {
  ModalClose,
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalContext,
} from '../Modal'

const Modal = ({ modalKey, css: cssOrg = {}, hasClose = true, children }) => {
  const { activeModal, closeModal } = useContext(ModalContext)
  const modalIsOpen = activeModal.includes(modalKey)
  const [activeKey, setActiveKey] = useState(null)
  const {
    overlay: overlayCss,
    close: closeCss,
    content: contentCss,
    ...css
  } = cssOrg

  useEffect(() => {
    if (modalIsOpen) {
      setActiveKey(modalKey)
    } else if (activeModal.length < 1) {
      setActiveKey(null)
    }
  }, [activeModal])

  useEffect(() => {
    scrollLock(!!activeKey)
  }, [activeKey])

  return (
    <AnimatePresence>
      {modalIsOpen && (
        <>
          {createPortal(
            <ModalContainer css={css}>
              <ModalOverlay css={overlayCss} closeModal={closeModal} />
              {hasClose && (
                <ModalClose css={closeCss} closeModal={closeModal} />
              )}
              <ModalContent css={contentCss}>{children}</ModalContent>
            </ModalContainer>,
            document.getElementById('modal-parent')
          )}
        </>
      )}
    </AnimatePresence>
  )
}

export default Modal
