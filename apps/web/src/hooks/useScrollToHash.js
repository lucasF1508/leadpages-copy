import { useRouter } from 'next/router'

const scrollToHash = (hash, offset = 0) => {
  const section = document.getElementById(hash)

  if (!section) return null

  const { top } = section.getBoundingClientRect()

  window.scrollTo({
    top: window.pageYOffset + top + offset,
    left: 0,
    behavior: 'smooth',
  })
  return null
}

const parseScrollTo = ({ scrollTo = '', offset } = {}) => {
  const router = useRouter()
  const [base, hash] = scrollTo.split('#')
  const href = base.includes('/') ? scrollTo : `#${hash || base}`

  return {
    href,
    handleScroll: (event) => {
      event.preventDefault()
      if (hash && base !== router.pathname) {
        router.push(scrollTo)
      } else {
        scrollToHash(hash || base, offset)
      }
      return null
    },
  }
}

const useScrollToHash = (asPath, timeout = 0) => {
  const [, hash] = asPath.split('#')
  if (!hash) return null

  setTimeout(() => {
    scrollToHash(hash)
  }, timeout)
}

export default useScrollToHash
export { scrollToHash, parseScrollTo }
