import React from 'react'
import clsx from 'clsx'
import dynamic from 'next/dynamic'

const ColumnComponentList = {
  menuHeading: dynamic(() => import('@/components/Nav/NavHeading')),
  menuHorizontalCard: dynamic(
    () => import('@/components/Nav/NavHorizontalCard')
  ),
  menuItem: dynamic(() => import('@/components/Nav/NavItem')),
  menuStackedCard: dynamic(
    () => import('@/components/Nav/NavStackedCard')
  ),
}

const groupItemsByMenuHeading = (items: any) => {
  const groupedItems = items?.reduce((acc: any, item: any) => {
    if (item._type === 'menuHeading' || acc.length === 0) {
      acc.push([item])
    } else {
      acc[acc.length - 1].push(item)
    }
    return acc
  }, [])

  return groupedItems
}

interface NavColumnFeaturedProps {
  items: any
}

const NavColumnFeatured = ({ items }: NavColumnFeaturedProps) => {
  const groups = groupItemsByMenuHeading(items) || []

  return (
    <div className={clsx('flex flex-col sm:flex-row nav-break:flex-col nav-break:max-w-cols4 p-[1.25rem] bg-obsidian-800/30 rounded-md gap-4')}>
      {groups?.map((group:any, index: number) => (
        <div className={clsx('flex flex-col grow-1 gap-1.5 w-full')} key={index}>
          {group.map(({ _key, _type, ...componentData }: {
            _key: string
            _type: keyof typeof ColumnComponentList
            componentData: any
          }) => {
            const Component = ColumnComponentList[_type]
            if (!Component) {
              console.error(
                'Provided component was not found in ColumnComponentList',
                _type
              )
              return null
            }

            return (
              <Component data={componentData} key={_key} />
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default NavColumnFeatured
