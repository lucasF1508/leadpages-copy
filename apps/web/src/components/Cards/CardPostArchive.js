import Heading from '@components/Heading'
import Image from '@components/Image'
import Link from '@components/Link'
import { styled } from '@design'

const $Link = styled(Link)
const $ArchiveLink = styled(Link, {
  c: '$primary',

  '&:hover': {
    c: '$hover',
  },
})

const $ImageLink = styled(Link, {
  w: '100%',
})

const $CardHeading = styled(Heading, {})

const $Card = styled('div', {
  a: {
    [`${$CardHeading}`]: {
      '&:hover': {
        c: '$hover',
      },
    },
  },

  variants: {
    isFeatured: {
      true: {
        mb: '$0_5',

        '@>s': {
          gc: '1 / span 2',
        },
      },
      false: {},
    },
    cardsPerRow: {
      2: {},
      3: {},
    },
    isReachingEnd: {
      false: {
        '&:nth-last-child(1)': {
          d: 'none',
        },
        '&:nth-last-child(2)': {
          pointerEvents: 'none',

          [`${$CardHeading},${$Link}`]: {
            d: 'none',
          },
        },
        '@>s': {
          '&:nth-last-child(1),&:nth-last-child(2)': {
            display: 'block',
            pointerEvents: 'none',

            [`${$CardHeading},${$Link}`]: {
              d: 'none',
            },
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      isReachingEnd: false,
      cardsPerRow: 3,
      css: {
        '@>m': {
          '&:nth-last-child(3)': {
            display: 'block',
            pointerEvents: 'none',

            [`${$CardHeading},${$Link}`]: {
              d: 'none',
            },
          },
        },
      },
    },
  ],
})

const $AuthorLeadIn = styled('span', {
  '&::before': {
    content: 'attr(data-content-short) " "',
  },

  '@>s': {
    '&::before': {
      content: 'attr(data-content-long) " "',
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
  className,
  isReachingEnd,
  cardsPerRow = 2,
}) => (
  <$Card
    className={className}
    isFeatured={isFeatured}
    isReachingEnd={isReachingEnd}
    cardsPerRow={cardsPerRow}
  >
    <$ImageLink url={path} condition="internal">
      <Image image={image} css={{ mb: isFeatured ? '$2' : '$1_5' }} />
    </$ImageLink>
    {primaryCategory && (
      <$Link url={primaryCategory.url} condition="internal">
        <$CardHeading
          heading={primaryCategory.title}
          tag="h5"
          css={{
            c: '$primary',
            type: isFeatured ? 'captionFeature' : 'captionSm',
            mb: '$1',
            fontFamily: '$apercuPro',
          }}
        />
      </$Link>
    )}
    <$Link
      url={path}
      condition="internal"
      css={{ d: 'block', mb: isFeatured ? '$2' : '$1_5' }}
    >
      <$CardHeading
        heading={title}
        tag="h3"
        tagStyle={isFeatured ? 'h4' : 'blogCard'}
      />
    </$Link>
    <Heading
      tag="h6"
      tagStyle={isFeatured ? 'blogMetaFeature' : 'blogMeta'}
      css={{
        c: '$textAlt',
        mb: '0',
        fontFamily: '$apercuPro',
        fontWeight: 400,
      }}
    >
      {publisher && (
        <>
          <$AuthorLeadIn
            data-content-short="By"
            data-content-long="Posted by"
          />
          <$ArchiveLink
            url={publisher.path || '/blog'}
            label={publisher.title}
            condition="internal"
          />
          <>&nbsp;&nbsp;</>|<>&nbsp;&nbsp;</>
        </>
      )}
      <span style={{ whiteSpace: 'nowrap' }}>
        {new Date(publishedDate).toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit',
        })}
        ,{' '}
        {new Date(publishedDate).toLocaleDateString('en-US', {
          year: 'numeric',
        })}
      </span>
    </Heading>
  </$Card>
)
export default CardPostArchive
