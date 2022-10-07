import { useState } from 'react'
import useEventListener from '@hooks/useEventListener'

const useModal = () => {
  const [activeModal, setActiveModal] = useState([])

  const openModal = (modalKey) => {
    setActiveModal([modalKey])
  }

  const closeModal = () => {
    setActiveModal([])
  }

  const handleClick = (e, modalKey) => {
    e.preventDefault()
    openModal(modalKey)
  }

  useEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal()
    }
  })

  return {
    activeModal,
    setActiveModal,
    openModal,
    closeModal,
    handleClick,
  }
}

export default useModal
