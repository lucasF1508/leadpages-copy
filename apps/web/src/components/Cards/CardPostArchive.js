import Heading from '@components/Heading'
import Image from '@components/Image'
import Link from '@components/Link'
import { styled } from '@design'

const $ArchiveLink = styled(Link, {
  c: '$primary',
  borderBottom: '1px solid transparent',

  '&:hover': {
    c: '$black',
    borderBottom: '1px solid $colors$primary',
  },
})

const $ImageLink = styled(Link, {
  w: '100%',
})

const $CardHeading = styled(Heading, {})

const $Card = styled('div', {
  a: {
    [`${$CardHeading}`]: {
      borderBottom: '1px solid $colors$white',
      d: 'inline',

      '&:hover': {
        c: '$black',
        borderBottom: '1px solid $colors$primary',
      },
    },
  },

  variants: {
    isFeatured: {
      true: { gc: '1 / span 2' },
      false: {},
    },
  },
})

const CardPostArchive = ({
  image,
  title,
  path,
  publishedDate,
  publisher,
  primaryCategory,
  isFeatured,
}) => (
  <$Card isFeatured={isFeatured}>
    <$ImageLink url={path} condition="internal">
      <Image image={image} css={{ mb: '$2_5' }} />
    </$ImageLink>
    {primaryCategory && (
      <Link url={primaryCategory.url} condition="internal">
        <$CardHeading
          heading={primaryCategory.title}
          tag="h5"
          css={{
            c: '$primary',
            type: 'base',
            fontSize: '15px',
            mb: '$0_5',
            fontWeight: '500',
          }}
        />
      </Link>
    )}
    <Link url={path} condition="internal" css={{ d: 'block', mb: '$4' }}>
      <$CardHeading
        heading={title}
        tag="h3"
        tagStyle={isFeatured ? 'h4' : 'h6'}
        css={{ d: 'inline' }}
      />
    </Link>
    <Heading
      tag="h6"
      css={{
        c: '$darkGrayAlt',
        type: 'base',
        fontSize: '15px',
        mb: '$3_5',
      }}
    >
      {publisher && (
        <>
          Posted by{' '}
          <$ArchiveLink
            url={'/blog'}
            label={publisher.title}
            condition="internal"
          />
          <>&nbsp;&nbsp;</>|<>&nbsp;&nbsp;</>
        </>
      )}
      {new Date(publishedDate).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
      })}
      ,{' '}
      {new Date(publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
      })}
    </Heading>
  </$Card>
)
export default CardPostArchive
