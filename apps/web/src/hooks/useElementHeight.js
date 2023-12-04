import { useEffect, useState } from 'react'

const useElementHeight = (querySelector) => {
  const [height, setHeight] = useState(0)
  const observeElement = (element) => {
    const resizeObserver = new ResizeObserver((entries) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const entry of entries) {
        const { height: _height } = entry.contentRect
        setHeight(_height)
      }
    })

    resizeObserver.observe(element)

    return () => resizeObserver.disconnect()
  }

  useEffect(() => {
    const mutationObserver = new MutationObserver((mutations) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const mutation of mutations) {
        if (mutation.addedNodes.length) {
          const targetElement = document.querySelector(querySelector)
          if (targetElement) {
            observeElement(targetElement)
            mutationObserver.disconnect() // Stop observing after finding the element
            break
          }
        }
      }
    })

    mutationObserver.observe(document.body, {
      childList: true, // Observe direct children additions or removals
      subtree: false, // Do not observe the descendants of the body
    })

    return () => mutationObserver.disconnect()
  }, [])

  return {
    height,
  }
}

export default useElementHeight
