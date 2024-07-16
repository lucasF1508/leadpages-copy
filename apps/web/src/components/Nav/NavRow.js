import { styled } from '@design'
import Link from '@components/Link'
import NavHeading from './NavHeading'
import NavRowCards from './NavRowCards'
import NavRowPrimary from './NavRowPrimary'
import { useNavStore } from './NavStore'

const $NavRow = styled('div', {
  w: '100%',
  d: 'flex',
  flexDirection: 'column',
  gap: '$2',

  '&:not(:last-child)': {
    mb: '$3_5',

    '@>navigationDesktopAlt': {
      mb: '$5',
    },
  },
})

const $MobileButton = styled('div', {
  backgroundColor: '$gray',
  p: '$1_5',
  textAlign: 'center',
  type: 'buttonSm',
  borderRadius: '$xl',
})

const NavRow = ({
  menuHeading,
  _type,
  _key,
  cards,
  items,
  columnCount = 3,
  isMobile = false,
  isTemplateRow,
}) => {
  const { links } = menuHeading || {}
  const setNavOpen = useNavStore((state) => state.setNavOpen)
  const link = links && links[0]

  return (
    <$NavRow key={_key}>
      <NavHeading data={menuHeading} isMobile={isMobile} />

      <div>
        {_type === 'cardRow' ? (
          <NavRowCards cards={cards} />
        ) : (
          <NavRowPrimary
            items={items}
            columnCount={columnCount}
            isTemplateRow={isTemplateRow}
          />
        )}
      </div>
      {isMobile && link && (
        <$MobileButton onClick={() => setNavOpen(false)}>
          <Link
            linkStyle="text"
            hasIcon
            css={{ color: '$textAlt' }}
            {...link}
          />
        </$MobileButton>
      )}
    </$NavRow>
  )
}

export default NavRow
