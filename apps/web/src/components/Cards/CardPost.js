import React from 'react'
import { styled } from '@design'
import Heading from '@components/Heading'
import Link, { InternalIcon } from '@components/Link'
import Media from '@components/Media'
import Text from '@components/Text'
import Tag from '@components/Tag'

const $CardPost = styled('div', {
  d: 'flex',
  w: '100%',
  br: '$s',
  o: 'hidden',
  c: '$slate8',

  variants: {
    layout: {
      horizontal: {
        ff: 'row nowrap',
      },
      vertical: {
        ff: 'column',
        jc: 'flex-start',
        ai: 'flex-start',
      },
    },
  },
})

const $CardImage = styled('div', {
  position: 'relative',
  w: '100%',
  ratio: '384:265',
  o: 'hidden',
  br: '$m',

  variants: {
    align: {
      left: {
        order: -1,
      },
      right: {
        order: 1,
      },
    },
  },

  defaultVariants: {
    align: 'left',
  },
})

const $CardContent = styled('div', {
  d: 'flex',
  ff: 'column nowrap',
  pt: '$3',
  f: '1 1 auto',
  mw: '22rem',

  variants: {
    layout: {
      horizontal: {
        gap: '$2',
      },
      vertical: {
        gap: '$2',
      },
    },
  },
})

const $CardHeading = styled('div', {
  d: 'flex',
  gap: '$1',
  f: '0 0 auto',

  variants: {
    align: {
      horizontal: {
        ff: 'row nowrap',
      },
      vertical: {
        ff: 'column nowrap',
      },
    },
  },
})

const CardPost = ({
  align,
  layout = 'vertical',
  children,
  content,
  heading,
  image,
  link: linkOrg,
  label,
  articleUrl,
  url,
  isExternal,
  categoryTitle,
  target,
  publishedDate,
  ...props
}) => {
  const link = linkOrg || {
    condition: isExternal ? 'external' : 'internal',
    url: isExternal ? articleUrl : url,
    label: label || 'Read More',
    page: {
      path: url,
    },
  }

  return (
    <$CardPost layout={layout} {...props}>
      {image && (
        <$CardImage layout={layout}>
          <Media
            media={{
              condition: 'image',
              image,
            }}
            type="fluid"
            sizes="(max-width: 640px) 100vw, (max-width: 840px) 240px, 400px"
          />
        </$CardImage>
      )}
      <$CardContent layout={children ? null : layout}>
        {children || (
          <>
            {categoryTitle && <Tag>{categoryTitle}</Tag>}
            <$CardHeading align={align}>
              {heading && (
                <Heading
                  tag="h4"
                  heading={heading}
                  css={{
                    fontWeight: '$semiBold',
                    mb: '$1',
                  }}
                />
              )}
            </$CardHeading>
            {content && <Text tagStyle="sm" content={content} />}
            {link && (
              <Link
                linkStyle="text"
                {...link}
                css={{
                  gap: '$1',
                  mt: 'auto',
                  alignSelf: 'flex-start',
                }}
                aria-label={`Learn more about ${heading}`}
              >
                {link?.label}
                <InternalIcon />
              </Link>
            )}
          </>
        )}
      </$CardContent>
    </$CardPost>
  )
}

export default CardPost
