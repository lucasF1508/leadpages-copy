import Heading from '@components/Heading'
import Link from '@components/Link'
import { styled } from '@design'

const $ArchiveLink = styled(Link, {
  '&:hover': {
    c: '$hover',
  },
})

const $Publisher = styled('span', {
  display: 'none',

  '@>navigationDesktopAlt': {
    display: 'inline',
  },
})

const ArchivePublishDate = ({ publisher, updatedAt, publishedDate }) =>
  publisher && (
    <Heading
      tag="h6"
      css={{
        c: '$darkGrayAlt',
        type: 'base',
        typeSizes: 'sm',
        fontFamily: '$apercuPro',
        fontWeight: 400,
        mb: '$3',
        lineHeight: '$lineHeights$m',

        '@>navigationDesktopAlt': {
          mb: '$4_5',
        },
      }}
    >
      <$Publisher>
        By{' '}
        <$ArchiveLink
          url={publisher.path || '/blog'}
          label={publisher.title}
          condition="internal"
        />
        <>&nbsp;&nbsp;</>|<>&nbsp;&nbsp;</>
      </$Publisher>
      Published{' '}
      {new Date(publishedDate).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      })}
      <>&nbsp;&nbsp;</>|<>&nbsp;&nbsp;</>
      Updated{' '}
      {new Date(updatedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      })}
    </Heading>
  )

export default ArchivePublishDate
