import { useCallback } from 'react'
import { useRouter } from 'next/router'

const buildPaginationLinks = (
  { currentPage, totalPages, router },
  isMobile = false
) => {
  const pageLinks = []

  const [baseName, slug, category] = router.asPath
    .split('/')
    .filter((path) => !/.*\[.*\].*/.test(path) && path)

  const isCategory = slug === 'category'
  const baseUrl = isCategory ? [baseName, slug, category].join('/') : baseName
  for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
    const pageUrl = pageNum !== 1 ? `/page/${pageNum}` : ''
    const url = `/${baseUrl}${pageUrl}`

    pageLinks.push({
      url,
      label: pageNum,
      isActive: pageNum === currentPage,
    })
  }

  const settingsCalculator = (page, offset) => {
    const settings = {
      prev: false,
      next: false,
      visiblefirst: false,
      visibleLast: false,
      arrayStart: 0,
      arrayEnd: 0,
      elipsesStart: false,
      elipsesEnd: false,
    }

    if (pageLinks[page - 2]) {
      settings.prev = true
    }
    if (pageLinks[page]) {
      settings.next = true
    }
    if (pageLinks[page - offset + 1] && page >= offset + 1) {
      settings.visiblefirst = true
    }
    if (pageLinks[page - 1 + offset]) {
      settings.visibleLast = true
    }
    if (pageLinks[page - offset - 1] && page - offset - 1 !== 0) {
      settings.elipsesStart = true
    }
    if (pageLinks[page - 1 + offset] && page + offset < totalPages) {
      settings.elipsesEnd = true
    }

    for (let i = offset; i > 0; i--) {
      if (pageLinks[page - i]) {
        settings.arrayStart = page - i
        break
      }
    }

    for (let i = offset; i > 0; i--) {
      if (pageLinks[page - 2 + i]) {
        settings.arrayEnd = page - 1 + i
        break
      }
    }
    return settings
  }

  const paginationConfig = settingsCalculator(currentPage, isMobile ? 1 : 3)

  return [
    paginationConfig.prev
      ? {
          ...pageLinks[currentPage - 2],
          icon: 'prev',
          label: 'Previous',
        }
      : false,
    paginationConfig.visiblefirst ? { ...pageLinks[0] } : false,
    paginationConfig.elipsesStart ? { label: '...' } : false,
    ...pageLinks.slice(paginationConfig.arrayStart, paginationConfig.arrayEnd),
    paginationConfig.elipsesEnd ? { label: '...' } : false,
    paginationConfig.visibleLast ? { ...pageLinks[totalPages - 1] } : false,
    paginationConfig.next
      ? {
          ...pageLinks[currentPage],
          icon: 'next',
          label: 'Next',
        }
      : false,
  ]
    .filter(Boolean)
    .map((link, index) => ({ ...link, key: `page-link-${index}` }))
}

const usePagination = ({ currentPage, totalPages }, isMobile) => {
  const router = useRouter()
  const links = useCallback(
    buildPaginationLinks(
      {
        currentPage: Number(currentPage),
        totalPages,
        router,
      },
      isMobile
    ),
    [currentPage, isMobile]
  )

  return {
    links,
  }
}

export default usePagination
