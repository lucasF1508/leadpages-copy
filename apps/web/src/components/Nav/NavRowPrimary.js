import { styled } from '@design'
import NavItem from './NavItem'

const $NavRowPrimary = styled('div', {
  d: 'grid',
  gridTemplateColumns: '1fr',

  '@>navigationDesktopAlt': {
    gcg: '$3',
    grg: '$1',
  },

  variants: {
    columns: {
      2: {
        '@>s': {
          gridTemplateColumns: '1fr 1fr',
        },
      },
      3: {
        '@>s': {
          gridTemplateColumns: '1fr 1fr',
        },
        '@>900': {
          gridTemplateColumns: '1fr 1fr 1fr',
        },
      },
    },
    isTemplateRow: {
      true: {
        '@>s': {
          gridTemplateColumns: '1fr 1fr',
        },
        '@>navigationDesktopAlt': {
          gridTemplateColumns: '1fr 1fr 1fr',
          gcg: '$2',
        },
      },
    },
  },
})

const NavRowPrimary = ({ items, columnCount, isTemplateRow = false }) => (
  <$NavRowPrimary columns={columnCount} isTemplateRow={isTemplateRow}>
    {items?.map(({ _key, ...rest }) => (
      <NavItem data={rest} key={_key} />
    ))}
  </$NavRowPrimary>
)

export default NavRowPrimary
