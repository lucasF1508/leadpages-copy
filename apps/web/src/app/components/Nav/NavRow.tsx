import React from 'react'
import clsx from 'clsx'
import Link from '@/components/Link'
import { navStore } from '@/stores/navStore'
import NavHeading from './NavHeading'
import NavRowCards from './NavRowCards'
import NavRowPrimary from './NavRowPrimary'

export interface NavRowProps {
  _key?: string
  _type: string
  cards: any
  columnCount?: number
  isMobile?: boolean
  isTemplateRow: boolean
  items: any
  menuHeading: any
}

const NavRow = ({
  _type,
  cards,
  columnCount = 3,
  isMobile = false,
  isTemplateRow,
  items,
  menuHeading,
}: NavRowProps) => {
  const { links } = menuHeading || {}
  const setNavActive = navStore((state) => state.setNavActive)
  const link = links && links[0]

  return (
    <div
      className={clsx('flex w-full flex-col gap-2 [&:not(:last-child)]:mb-4')}
    >
      <NavHeading data={menuHeading} />
      <div>
        {_type === 'cardRow' ? (
          <NavRowCards cards={cards} />
        ) : (
          <NavRowPrimary
            columnCount={columnCount}
            isTemplateRow={isTemplateRow}
            items={items}
          />
        )}
      </div>
      {isMobile && link && (
        <div
          className="bg-surface-neutral-light/10 type-size-body-sm rounded-md text-center border border-border-light/60"
          onClick={() => setNavActive(false)}
        >
          <Link {...link} className='[&_.link-icon-background]:hidden' linkStyle="text-secondary" />
        </div>
      )}
    </div>
  )
}

export default NavRow
