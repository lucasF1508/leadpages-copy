import type { ContentType } from './content'
import type { SanityImageProps } from './image'
import type { LinkComponentProps, LinkProps, LinkType } from './link'

export type Column = {
  _key: string
  _type: 'featuredColumn' | 'primaryColumn' | 'secondaryColumn'
  className?: string
  isMobile?: boolean
  isMultiColumns?: boolean
  label?: string
}

export interface ColumnFeatured extends Column {
  content?: ContentType
  image?: SanityImageProps
  link?: LinkType
}

export interface ColumnPrimary extends Column {
  items?: {
    _key: string
    content?: ContentType
    icon?: SanityImageProps
    link?: LinkType
  }[]
}

export type Columns = Array<ColumnFeatured | ColumnPrimary>

export interface LinkDropdownType {
  condition: 'dropdown'
  label?: string
}

export type MenuComponentProps = LinkComponentProps | LinkDropdownType
export type MenuLinkType = LinkProps & MenuComponentProps

export type MenuItem = {
  _key: string
  columns: Columns
  index?: number
  link: MenuLinkType
}
export type MenuType = Array<MenuItem>

export interface HeaderProps {
  navigation: {
    cta?: LinkType
    menu?: MenuType
  }
}
