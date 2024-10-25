import { styled } from '@design'
import dynamic from 'next/dynamic'

const ColumnComponentList = {
  menuItem: dynamic(() => import('@components/Nav/NavItem')),
  menuHeading: dynamic(() => import('@components/Nav/NavHeading')),
  menuStackedCard: dynamic(() => import('@components/Nav/NavStackedCard')),
  menuHorizontalCard: dynamic(() =>
    import('@components/Nav/NavHorizontalCard')
  ),
}

const $NavColumnFeatured = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray',
  borderRadius: '$radii$nav',
  p: '$2_5',
  gap: '$4',
  boxSizing: 'border-box',
  flexGrow: 1,

  '@>700': {
    gap: '$1_5',
    flexDirection: 'row',
  },

  '@>navigationDesktopAlt': {
    flexDirection: 'column',
    maxWidth: '24.625rem',
    gap: '2.625rem',
  },
})

const $NavColumnFeaturedGroup = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  gap: '$1_5',
  flex: '1 1 100%',

  '@>navigationDesktopAlt': {
    flex: 'initial',
  },
})

const groupItemsByMenuHeading = (items) => {
  const groupedItems = items?.reduce((acc, item) => {
    if (item._type === 'menuHeading' || acc.length === 0) {
      acc.push([item])
    } else {
      acc[acc.length - 1].push(item)
    }
    return acc
  }, [])

  return groupedItems
}

const NavColumnFeatured = ({ items }) => {
  const groups = groupItemsByMenuHeading(items) || []

  return (
    <$NavColumnFeatured>
      {groups?.map((group, index) => (
        <$NavColumnFeaturedGroup key={index}>
          {group.map(({ _type, _key, ...componentData }) => {
            const Component = ColumnComponentList[_type]
            if (!Component) {
              console.error(
                'Provided component was not found in ColumnComponentList',
                _type
              )
              return null
            }

            return (
              <Component data={componentData} key={_key} isFeaturedColumn />
            )
          })}
        </$NavColumnFeaturedGroup>
      ))}
    </$NavColumnFeatured>
  )
}

export default NavColumnFeatured
