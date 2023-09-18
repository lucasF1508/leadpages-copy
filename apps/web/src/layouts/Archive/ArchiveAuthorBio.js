import { styled } from '@design'
import Image from '@components/Image'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Link from '@components/Link'

const $AuthorContent = styled('div', {
  d: 'flex',
  fd: 'column',
  w: '100%',

  variants: {
    isMobile: {
      true: {
        gap: '0.375rem',
      },
      false: {
        bc: '$gray',
        borderBottomRightRadius: '3.75rem',
        marginLeft: '-5.375rem',
        paddingLeft: '5.375rem',
        gap: '$2_5',
        py: '$4_5',
        pr: '$4_5',
      },
    },
  },
})

const $Author = styled(Link, {
  d: 'none',
  ai: 'center',
  jc: 'flex-start',

  '@>navigationDesktopAlt': {
    d: 'flex',
    jc: 'center',
    w: '100%',
  },

  [`${$AuthorContent}`]: {
    'h6 > span': {
      transition: 'color $snappy',
    },
  },

  '&:hover': {
    [`${$AuthorContent}`]: {
      'h6 > span': {
        transition: 'color $snappy',
        c: '$purpleDark',
      },
    },
  },

  variants: {
    isMobile: {
      true: {
        d: 'flex',
        gap: '1.125rem',
        my: '$3',

        '@>navigationDesktopAlt': {
          d: 'none',
        },
      },
      false: {
        gap: '1.5rem',
        my: '$4_5',
      },
    },
  },
})

const $AuthorImage = styled('div', {
  minWidth: '125px',

  variants: {
    isMobile: {
      true: {
        minWidth: '60px',
      },
    },
  },
})

const ArchiveAuthorBio = ({ publisher, isMobile = false }) => (
  <$Author isMobile={isMobile} condition="internal" url={publisher.path}>
    <$AuthorImage isMobile={isMobile}>
      <Image image={publisher.headshot} />
    </$AuthorImage>
    <$AuthorContent isMobile={isMobile}>
      <Heading
        tag="h6"
        tagStyle="subHeading"
        css={{ fontWeight: 500, typeSizes: isMobile ? 'sm' : 'xl' }}
      >
        By <span>{publisher.title}</span>
      </Heading>
      <Text
        content={isMobile ? publisher.bioShort : publisher.bioLong}
        css={{
          '> *': {
            mw: '35rem',
          },

          '& p': {
            type: 'base',
            fontWeight: 400,
            fontSize: isMobile && '$space$1_5',
          },
          '&:last-child': { mb: 0 },
        }}
      />
    </$AuthorContent>
  </$Author>
)

export default ArchiveAuthorBio
