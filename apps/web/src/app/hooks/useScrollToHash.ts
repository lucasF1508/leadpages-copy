import { useRouter } from 'next/router'
import { magicNumbers } from '@/design/tokens/magicNumbers'

const scrollToHash = (hash: string, _offset?: number): void => {
  const section = document.getElementById(hash)
  if (!section) return undefined

  const { top } = section.getBoundingClientRect()
  const offset =
    _offset ||
    parseInt(magicNumbers['header-height']?.initial || '0', 10) * 16 * -1

  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: window.scrollY + top + offset,
  })
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
        return
      }
      if(hash || base) {
        scrollToHash((hash || base) ?? '', offset)
      }
      return undefined
    },
    href,
  }
}

const useScrollToHash = (asPath: string, timeout = 0): void => {
  const [, hash] = asPath.split('#')
  if (!hash) return undefined

  setTimeout(() => {
    scrollToHash(hash)
  }, timeout)

  return undefined
}

export default useScrollToHash
export { parseScrollTo, scrollToHash }
