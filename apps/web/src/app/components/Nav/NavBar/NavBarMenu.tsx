import React from 'react'
import clsx from 'clsx'
import {
  Content as NavBarPrimitiveContent,
  Item as NavBarPrimitiveItem,
  Trigger as NavBarPrimitiveTrigger,
} from '@radix-ui/react-navigation-menu'
import { FaCaretDown as Icon } from '@react-icons/all-files/fa/FaCaretDown'
import Link from '@/components/Link'
import NavColumnCarousel from '@/components/Nav/NavColumnCarousel'
import NavColumnFeatured from '@/components/Nav/NavColumnFeatured'
import NavRow, { NavRowProps } from '@/components/Nav/NavRow'
import { useNavStore } from '@/state/navStore'
import { hasDropdown } from '../utils'
import {LinkType, SanityImageProps} from '@/types'
import { NavRowPrimaryProps } from '../NavRowPrimary'

export interface NavBarItemProps {
  _key: string
  dropdownType: string
  link: LinkType
  menuColumnFeatured: any
  rows: NavRowProps[]
  templateBackgroundImage: SanityImageProps
  templateCarouselIdleImages: SanityImageProps[]
  templateRows: NavRowPrimaryProps[]
}

const Item = ({ children, dropdown, index }: {
  children: React.ReactNode
  dropdown?: boolean
  index: number
}) => (
  <NavBarPrimitiveItem value={dropdown ? `trigger-${index}` : undefined} className='h-full flex flex-col justify-center relative'>
    {children}
  </NavBarPrimitiveItem>
)

const Trigger = ({ children }: { children: React.ReactNode }) => (
  <NavBarPrimitiveTrigger className="link-text-secondary text-button-text-secondary group-hover/trigger:text-button-text-secondary transition-colors duration-300 h-full">
    {children}
  </NavBarPrimitiveTrigger>
)

const Content = ({ children }: { children: React.ReactNode }) => (
  <NavBarPrimitiveContent
    className={clsx(
      'absolute left-0 top-0 box-border w-full p-3',
      'data-[motion=from-end]:animate-[enter-from-left_200ms_ease]',
      'data-[motion=from-start]:animate-[enter-from-right_200ms_ease]',
      'data-[motion=to-end]:animate-[enter-to-left_200ms_ease]',
      'data-[motion=to-start]:animate-[enter-to-right_200ms_ease]'
    )}
  >
    {children}
  </NavBarPrimitiveContent>
)

const NavBarMenu = ({ menu }: { menu: any }) =>
  menu.map(
    (
      {
        _key,
        dropdownType,
        link,
        menuColumnFeatured,
        rows: _rows,
        templateBackgroundImage,
        templateRows,
      }: NavBarItemProps,
      index: number
    ) => {
      const { dropdownSlug } = useNavStore()
      const rows = _rows || templateRows
      const active = dropdownSlug === `trigger-${index}`
      const { items, position = 'right' } = menuColumnFeatured || {}
      const label = link?.label

      if (hasDropdown({ link, rows })) {
        return (
          <Item dropdown index={index} key={_key}>
            <div className='group/trigger h-full'>
              <Trigger>
                {label}
                <Icon
                  className="transition-transform duration-200 ease-in-out"
                  size={12}
                  style={{ transform: active ? 'scale(-1, -1)' : 'scale(1, 1)' }}
                />
              </Trigger>
              <div className='h-[0.125rem] w-full bg-surface-neutral-light absolute -bottom-[calc(1rem+1px)] scale-x-0 group-hover/trigger:scale-x-100 transition-all duration-300'/>
            </div>
            <Content>
              <ul
                className={clsx(
                  'flex list-none flex-col gap-3',
                  position === 'right' ? 'nav-break:flex-row' : 'nav-break:flex-row-reverse',
                  dropdownType === 'templates' && 'nav-break:flex-row-reverse templates'
                )}
              >
                <div className="flex-grow nav-break:p-[1.25rem]">
                  {rows.map(({ _key: __key, ...rest }: Omit<NavRowProps, 'isTemplateRow'>) => (
                    <NavRow
                      isTemplateRow={dropdownType === 'templates'}
                      key={__key}
                      {...rest}
                    />
                  ))}
                </div>
                {items && <NavColumnFeatured items={items} />}
                {dropdownType === 'templates' && (
                  <NavColumnCarousel
                    rows={rows}
                    templateBackgroundImage={templateBackgroundImage}
                  />
                )}
              </ul>
            </Content>
          </Item>
        )
      }

      return (
        <Item index={index} key={_key}>
          <div className='group/trigger'>
            <Link {...link} hasIcon={false} className='link-text-secondary text-button-text-secondary' linkStyle='text' />
            <div className='h-[0.188rem] w-full bg-surface-neutral-light absolute -bottom-[calc(1rem+1px)] scale-x-0 group-hover/trigger:scale-x-100 transition-all duration-300'/>
          </div>
        </Item>
      )
    }
  )

export default NavBarMenu
