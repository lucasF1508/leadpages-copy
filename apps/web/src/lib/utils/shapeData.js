import { features } from 'config'

export const shapeData = (data) => {
  const [pageData] = (data?.length && data) || []
  const {
    hero: heroes,
    options: pageOptions,
    hasSidebar = false,
    parent,
    sidebarLinks: links,
  } = pageData || {}
  const [hero] = heroes || []

  // Page options
  const darkHero = features.darkBackgrounds.includes(
    hero?.backgroundOptions?.backgroundColor
  )

  let sidebarLinks = null

  if (hasSidebar && parent?.hasSidebar && parent?.sidebarLinks?.length > 0) {
    sidebarLinks = parent?.sidebarLinks
  }

  if (hasSidebar && links?.length > 0) {
    sidebarLinks = links
  }

  const options = {
    ...pageData?.options,
    underlaidMenu: darkHero || pageOptions?.underlaidMenu || null,
    darkHero,
    hasSidebar,
  }

  return [
    {
      ...pageData,
      options,
      sidebarLinks,
    },
  ]
}