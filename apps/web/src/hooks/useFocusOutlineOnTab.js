import React from 'react'
import useEventListener from '@hooks/useEventListener'

const enableOutline = (event) => {
  if (
    event.key === 'Tab' &&
    !document.body.classList.contains('focus-outline')
  ) {
    document.body.classList.add('focus-outline')
  }
}

const useFocusOutlineOnTab = () =>
  useEventListener('keydown', (event) => {
    enableOutline(event)
  })

export default useFocusOutlineOnTab
