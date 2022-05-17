/* eslint-disable react/display-name */
import React from 'react'
import { styled } from '@design'
import Text from '@components/Text'
import Image from '@components/Image'
import Label from '@components/Label'
import NavBarLink from './NavBarLink'

const $NavBarColumn = styled('ul', {
  d: 'flex',
  ff: 'column',
  gap: '$3',
  m: 0,
  listStyle: 'none',

  variants: {
    isMobile: {},
    isMultiColumns: {},
    layout: {
      primaryColumn: {
        w: '$cols4',
        flex: '0 1 auto',
      },
      secondaryColumn: {
        w: '$cols2',
        gap: '$2',
        flex: '0 1 auto',

        '[data-columns="1"] &': {
          w: 'unset',
        },
      },
      featuredColumn: {
        gap: '$2',
        w: '18rem',
        flex: '0 1 auto',
        jc: 'flex-start',
        ai: 'flex-start',
      },
    },
  },
  compoundVariants: [
    {
      layout: 'primaryColumn',
      isMobile: true,
      css: {
        mw: '$cols5',
        w: '100%',
      },
    },
    {
      layout: 'secondaryColumn',
      isMobile: true,
      isMultiColumns: true,
      css: {
        mw: '$cols4',
        w: '100%',

        '@>navigationMobile': {
          d: 'grid',
          gtc: '1fr 1fr',
        },
      },
    },
    {
      layout: 'featuredColumn',
      isMobile: true,
      css: {
        mw: '$cols5',
        w: '100%',

        '@>navigationMobile': {
          d: 'grid',
          gtc: '1fr 10.5rem',
        },
      },
    },
  ],
})

const $NavBarDropdownItem = styled('li', {
  listStyle: 'none',
  w: 'auto',

  '&:first-child': {
    bt: 'none',
  },
})

const $NavBarLinkInner = styled('div', {
  d: 'flex',
  ff: 'row nowrap',
  ai: 'flex-start',
  jc: 'flex-start',

  variants: {
    layout: {
      secondaryColumn: {
        ai: 'center',
      },
    },
  },
})

const $NavBarLinkIcon = styled(Image, {
  variants: {
    layout: {
      primaryColumn: {
        flex: '0 0 $space$4',
        w: '$space$4',
        mr: '$1',
        ml: '-0.125rem',
      },
      secondaryColumn: {
        flex: '0 0 $space$3',
        mr: '$0_5',
        w: '$space$3',
        ml: '-0.125rem',
      },
    },
  },
})

const $NavBarLinkContent = styled('div', {
  f: '1 1 auto',
  d: 'block',
  c: '$text',
  type: 'textMd',
})

export const NavBarColumnFeatured = React.memo(
  ({
    _key,
    _type,
    label,
    image,
    content,
    link,
    isMobile,
    isMultiColumns,
    ...props
  }) => (
    <$NavBarColumn
      as="div"
      layout={_type}
      isMobile={isMobile}
      isMultiColumns={isMultiColumns}
      {...props}
    >
      {label && (
        <Label
          tag="h3"
          css={{
            mb: '$1',
            c: '$text',
            type: 'overline',
            fontWeight: '$semiBold',
            gridColumn: '1 / -1',
          }}
          content={label}
        />
      )}
      {image && (
        <Image
          css={{ w: '100%', br: '0.5rem', o: 'hidden' }}
          image={image}
          type="static"
          sizes="(max-width: 640px) 100vw, 340px"
        />
      )}
      <$NavBarLinkContent>
        {content && <Text as="span" content={content} tagStyle="textSm" />}
        {link && (
          <NavBarLink
            hasIcon
            isMobile={isMobile}
            {...link}
            css={{
              mt: '$1',
              c: '$brandAlt',
              svg: {
                stroke: '$brandAlt',
              },

              '&:hover': {
                c: 'transparent',

                svg: {
                  stroke: '$brand',
                },
              },
            }}
          />
        )}
      </$NavBarLinkContent>
    </$NavBarColumn>
  )
)

export const NavBarColumn = React.memo(
  ({ _type, label, items = [], isMobile, isMultiColumns, ...props }) => (
    <$NavBarColumn
      layout={_type}
      isMobile={isMobile}
      isMultiColumns={isMultiColumns}
      {...props}
    >
      {label && (
        <Label
          css={{
            mb: 0,
            c: '$hover',
            type: 'overline',
            fontWeight: '$semiBold',
            gridColumn: '1 / -1',
          }}
          content={label}
        />
      )}
      {items.map(({ link, content, icon }) => (
        <$NavBarDropdownItem key={link?.label}>
          <NavBarLink
            {...link}
            isMobile={isMobile}
            hasIcon={link?.label.includes(':arrow:')}
          >
            <$NavBarLinkInner layout={_type}>
              {icon && (
                <$NavBarLinkIcon layout={_type} image={icon} sizes="32px" />
              )}
              <$NavBarLinkContent css={{ f: '1 1 auto' }}>
                <Text
                  as="span"
                  className="heading"
                  css={{
                    type: 'textSm',
                    fontWeight: '$semiBold',
                    mb: 0,
                    whiteSpace: 'nowrap',
                    d: 'block',
                    transition: '$link',
                  }}
                  content={link?.label.replace(':arrow:', '')}
                />
                {content && (
                  <Text
                    as="span"
                    className="content"
                    css={{
                      d: 'block',
                      type: 'textXs',
                      c: '$text',
                      mb: 0,
                      transition: '$link',
                    }}
                    content={content}
                  />
                )}
              </$NavBarLinkContent>
            </$NavBarLinkInner>
          </NavBarLink>
        </$NavBarDropdownItem>
      ))}
    </$NavBarColumn>
  )
)

export default NavBarColumn
