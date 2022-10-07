import { useEffect } from 'react'

const handleScroll =
  (cb, elem, options = { bottomOnly: false }) =>
  () => {
    requestAnimationFrame(() => {
      if (!elem.current) return undefined

      const bounding = elem.current.getBoundingClientRect()
      if (options.bottomOnly) {
        cb(
          bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        )
      }

      return cb(
        bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth)
      )
    })
  }

export const useInViewport = (cb, elem) =>
  useEffect(() => {
    if (!elem) return undefined

    const handleScrollCurry = handleScroll(cb, elem, { bottomOnly: true })
    window.addEventListener('scroll', handleScrollCurry)

    return () => window.removeEventListener('scroll', handleScrollCurry)
  }, [cb, elem.current])

export const useAnimationPlayPause = ({ active, animation }) => {
  useEffect(() => {
    if (active && animation) {
      animation.play()
    } else if (!active && animation) {
      animation.restart()
      animation.pause()
    }
  }, [active, animation])
}

export const useAnimationCanceled = ({
  active,
  canceled,
  animation,
  transitionTime,
}) => {
  useEffect(() => {
    if (active && canceled) {
      animation.pause()
      animation.seek(animation.duration - transitionTime)
      animation.play()
    }
  }, [active, canceled])
}
