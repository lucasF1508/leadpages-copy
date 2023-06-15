import React, { useState } from 'react'
import slugify from 'slugify'

const SidebarContext = React.createContext()

export const getSidebarSlug = (heading = '') =>
  heading
    ? slugify(heading, {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
      })
    : heading

export const flattenSidebarSlugs = (sidebarLinks) =>
  sidebarLinks
    .map(({ links }) =>
      links.map(({ heading, link }) => getSidebarSlug(heading || link?.label))
    )
    .flat()

const SidebarProvider = ({ children, value = {}, sidebarLinks, ...props }) => {
  const [activeStack, setActiveStack] = useState([])
  const [active, setActive] = useState()

  const sidebarSlugs = sidebarLinks ? flattenSidebarSlugs(sidebarLinks) : []

  const pushActive = (id) => {
    if (!activeStack.includes(id) && sidebarSlugs.includes(id)) {
      setActive(id)
      setActiveStack([id, ...activeStack])
    }
  }

  const popActive = (id) => {
    if (activeStack?.length && sidebarSlugs.includes(id)) {
      const [, ...stack] = activeStack
      setActive(stack[0])
      setActiveStack(stack)
    }
  }

  return (
    <SidebarContext.Provider
      value={{
        activeStack,
        setActiveStack,
        active,
        setActive,
        pushActive,
        popActive,
        ...value,
      }}
      {...props}
    >
      {children}
    </SidebarContext.Provider>
  )
}

const withSidebar =
  (Component) =>
  // eslint-disable-next-line react/display-name
  ({ sidebarLinks, ...props }) =>
    (
      <SidebarProvider sidebarLinks={sidebarLinks}>
        <Component sidebarLinks={sidebarLinks} {...props} />
      </SidebarProvider>
    )

withSidebar.displayName = 'withSidebar'

export default SidebarProvider
export { SidebarContext, withSidebar }
