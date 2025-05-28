import { create } from 'zustand'

export const navStore = create((set) => ({
  isNavOpen: false,
  dropdownSlug: '',
  hideNav: false,
  setHideNav: (hideNav) => set({ hideNav }),
  setDropdownSlug: (dropdownSlug) => set({ dropdownSlug }),
  setNavOpen: (isNavOpen) => set({ isNavOpen }),
}))
