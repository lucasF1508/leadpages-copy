import React from 'react'
import clsx from 'clsx'
import NavItem from './NavItem'

export interface NavRowPrimaryProps {
  columnCount: number
  isTemplateRow?: boolean
  items: any
}

const NavRowPrimary = ({
  columnCount,
  isTemplateRow = false,
  items,
}: NavRowPrimaryProps) => (
  <div
    className={clsx(
      'grid grid-cols-1 gap-x-3 sm:gap-y-1',
      columnCount === 2 && 'sm:grid-cols-2',
      columnCount === 3 && 'sm:grid-cols-2 lg:grid-cols-3', 
      isTemplateRow && 'sm:grid-cols-2 md:grid-cols-3'
    )}
  >
    {items?.map(({ _key, ...rest }: { _key: string; [key: string]: any }) => (
      <NavItem data={rest} key={_key} />
    ))}
  </div>
)

export default NavRowPrimary
