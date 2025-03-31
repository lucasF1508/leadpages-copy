import { LinkType } from "@/types"
import { NavRowProps } from "./NavRow"

export interface MenuItem {
  link?: LinkType
  rows?: NavRowProps[]
}

// TODO: Fix link type to include dropdown as a condirion
export const isDropdown = (link?: any): boolean =>
  link?.condition === 'dropdown'

export const hasDropdown = ({ link, rows }: MenuItem): boolean =>
  isDropdown(link) && Array.isArray(rows) && rows.length > 0

export const menuHasDropdown = (menu: MenuItem[]): boolean =>
  menu.some(({ link, rows }) => hasDropdown({ link, rows }))
