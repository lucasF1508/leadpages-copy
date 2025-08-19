import { useRouter } from 'next/router'
import getCSSvar from '@/lib/utils/getCSSvar'
import remToPixels from '@/lib/utils/remToPixels'

export type CssOffsetHeights = Array<CssOffsetName>
type CssOffsetName = 'header-height'

interface ScrollToHashProps {
  behavior?: ScrollOptions['behavior']
  callback?: () => void
  hash: string
  offset?: number
  scrollDownOffset?: CssOffsetHeights
  scrollUpOffset?: CssOffsetHeights
}

const calcScrollOffset = (offsetVars?: CssOffsetHeights) => {
  const offsetValue = ['header-height']
    .filter(
      (name: CssOffsetName) => !!offsetVars?.length && offsetVars.includes(name)
    )
    .map((cssVarName) => remToPixels(getCSSvar(cssVarName)))
    .reduce((prev: number, current: number) => prev + current, 0) as number

  return offsetValue
}

const waitForScrollTo = async (y: number, threshold = 5) =>
  new Promise<void>((resolve) => {
    const check = () => {
      if (Math.abs(window.scrollY - y) <= threshold) {
        resolve()
      } else {
        requestAnimationFrame(check)
      }
    }
    check()
  })

const scrollToHash = async ({
  behavior = 'smooth',
  callback,
  hash,
  offset: _offset,
  scrollDownOffset,
  scrollUpOffset,
}: ScrollToHashProps): Promise<void> => {
  const section = document.getElementById(hash)
  if (!section) return undefined

  const { top } = section.getBoundingClientRect()
  const defaultOffset = calcScrollOffset(
    top < 0 ? scrollUpOffset : scrollDownOffset
  )

  const offset = (_offset ?? defaultOffset) * -1
  const y = window.scrollY + top + offset

  window.scrollTo({
    behavior,
    left: 0,
    top: y,
  })

  if (typeof callback === 'function') {
    await waitForScrollTo(y)
    callback()
  }

  return undefined
}

const parseScrollTo = ({
  offset,
  scrollTo = '',
}: { offset?: number; scrollTo?: string } = {}) => {
  const router = useRouter()
  const [base, hash] = scrollTo.split('#')
  const href = base?.includes('/') ? scrollTo : `#${hash || base}`

  return {
    handleScroll: (event: React.UIEvent): void => {
      event.preventDefault()
      if (hash && base !== router.pathname) {
        router.push(scrollTo)
        return undefined
      }

      const target = hash || base
      if (!target) return undefined

      scrollToHash({ hash: target, offset })

      return undefined
    },
    href,
  }
}

const useScrollToHash = (asPath: string, timeout = 0): void => {
  const [, hash] = asPath.split('#')
  if (!hash) return undefined

  setTimeout(() => {
    scrollToHash({ hash })
  }, timeout)

  return undefined
}

export default useScrollToHash
export { parseScrollTo, scrollToHash }
