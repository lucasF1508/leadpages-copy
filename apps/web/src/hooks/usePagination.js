import { useCallback } from 'react'
import { useRouter } from 'next/router'

const buildPaginationLinks = ({ currentPage, totalPages, router }) => {
  const pageLinks = []

  const [baseName, slug, category] = router.asPath
    .split('/')
    .filter((path) => !/.*\[.*\].*/.test(path) && path)

  const isCategory = slug === 'category'
  const baseUrl = isCategory ? [baseName, slug, category].join('/') : baseName
  for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
    const url = `/${baseUrl}${pageNum !== 1 ? `/page/${pageNum}` : ''}`

    pageLinks.push({
      url,
      label: pageNum,
      isActive: pageNum === currentPage,
    })
  }

  return [
    pageLinks[currentPage - 2]
      ? {
          ...pageLinks[currentPage - 2],
          icon: 'prev',
          label: 'Previous',
        }
      : false,
    ...pageLinks,
    pageLinks[currentPage]
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

const usePagination = ({ currentPage, totalPages }) => {
  const router = useRouter()
  const links = useCallback(
    buildPaginationLinks({
      currentPage: Number(currentPage),
      totalPages,
      router,
    }),
    [currentPage]
  )

  return {
    links,
  }
}

export default usePagination
