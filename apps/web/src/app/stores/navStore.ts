import { create } from 'zustand'

interface NavState {
  dropdownSlug: string
  hideNav: boolean
  isNavActive: boolean
  isSticky: boolean
  setDropdownSlug: (dropdownSlug: string) => void
  setHideNav: (hideNav: boolean) => void
  setIsSticky: (isSticky: boolean) => void
  setNavActive: (isNavActive: boolean) => void
}

export const navStore = create<NavState>(
    (set) => ({
      dropdownSlug: '',
      hideNav: false,
      isNavActive: false,
      isSticky: false,
      isTransparent: true,
      setDropdownSlug: (dropdownSlug) => set({ dropdownSlug }),
      setHideNav: (hideNav) => set({ hideNav }),
      setIsSticky: (isSticky) => set({ isSticky }),
      setNavActive: (isNavActive) => set({ isNavActive }),
    })
  )
