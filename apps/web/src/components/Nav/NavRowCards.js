import Image from '@components/Image'
import Link from '@components/Link'
import { styled } from '@design'
import { useNavStore } from './NavStore'

const $NavRowCards = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$2',
  mw: '100%',

  '@>s': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  '@>900': {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
})

const $NavRowCard = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  gap: '0.625rem',
  w: '100%',
  cursor: 'pointer',
})

const $Label = styled('div', {
  type: 'buttonSm',
})

const $Link = styled(Link, {})

const $Image = styled('div', {
  h: '4.75rem',
  px: '0.875rem',
  py: '1.125rem',
  boxSizing: 'border-box',
  backgroundColor: '$gray',
  borderRadius: '0.375rem',
  transition: 'all $snappy',

  figure: {
    h: '100%',
  },

  variants: {
    hover: {
      black: {
        '&:hover figure': {
          filter: 'brightness(0)',
        },
      },
      white: {
        '&:hover figure': {
          filter: 'brightness(0) invert(100%)',
        },
      },
    },
  },
})

const NavRowCards = ({ cards }) => {
  const setNavOpen = useNavStore((state) => state.setNavOpen)

  return (
    <$NavRowCards>
      {cards.map(
        ({
          _key,
          image,
          label,
          link,
          hoverColor = 'white',
          backgroundColor,
          disableHover
        }) => (
          <$Link {...link} linkStyle="none" key={_key}>
            <$NavRowCard onClick={() => setNavOpen(false)}>
              <$Image
                hover={!disableHover && hoverColor}
                css={{ '&:hover': { backgroundColor } }}
              >
                <Image image={image} objectFit="contain" />
              </$Image>
              <$Label>{label}</$Label>
            </$NavRowCard>
          </$Link>
        )
      )}
    </$NavRowCards>
  )
}

export default NavRowCards
