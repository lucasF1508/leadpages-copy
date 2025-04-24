import type { VideoType } from './video'
// import type { ModalProps } from '@/components/Modal'
// import type { VideoProps } from '@/components/Video'
import type { IconType } from '@react-icons/all-files'
import type { Reference } from '@sanity/types'
import type { ClassValue } from 'clsx'

export type LinkStyleType = 'button-outline' | 'button-solid' | 'ghost' | 'none' | 'text'
export type LinkSizeType = 'large' | 'regular'

export interface CommonLinkType {
  _key?: string
  Icon?: IconType
  children?: React.ReactNode
  className?: ClassValue
  classNames?: {
    icon?: ClassValue
    root?: ClassValue
    span?: ClassValue
  }
  hasIcon?: boolean
  href?: string
  label?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  ref?: React.ForwardedRef<HTMLAnchorElement>
}

export interface LinkInternalType extends CommonLinkType {
  condition: 'internal'
  hasHash?: boolean
  hash?: string
  page?: Reference
  url?: string
}

export interface LinkExternalType extends CommonLinkType {
  condition: 'download' | 'external'
  rel?: string
  target?: boolean
  url?: string
}

export interface LinkModalType extends CommonLinkType {
  Modal?: React.ComponentType
  condition: 'modal' | 'video'
  modalKey?: string
  props?: {
    // modal?: ModalProps
    // video?: VideoProps
  }
  video?: VideoType
}

export interface LinkDisabledType extends CommonLinkType {
  condition: 'disabled'
}

export interface LinkNullType extends CommonLinkType {
  condition?: 'none'
}

export type LinkComponentProps =
  | LinkDisabledType
  | LinkExternalType
  | LinkInternalType
  // | LinkModalType
  | LinkNullType

export type LinkProps = {
  classNames?: {
    root?: ClassValue
    span?: ClassValue
  }
  hasIcon?: boolean
  href?: string
  linkSize?: LinkSizeType
  linkStyle?: LinkStyleType
  url?: string
}

export type LinkType = { _type?: 'link' | 'signUp' } &
  LinkComponentProps &
  LinkProps & 
  Omit<React.ComponentProps<'a'>, 'className' | 'target'>
