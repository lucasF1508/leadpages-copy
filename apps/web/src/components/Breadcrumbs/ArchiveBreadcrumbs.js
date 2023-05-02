import React from 'react'
import Link from 'next/link'
import { styled } from '@design'

export const $Breadcrumbs = styled('nav', {
  position: 'relative',
  z: '$aboveContent',
  w: '100%',
  type: 'caption',
  mb: '$4',

  variants: {
    hidden: {
      true: {
        opacity: 0,
        v: 'hidden',
        pe: 'none',
      },
    },
  },
})

export const $BreadcrumbsInner = styled('ol', {
  maxWidth: '$base',
  ml: 'auto',
  mr: 'auto',
  d: 'flex',
  ff: 'row nowrap',
  jc: 'flex-start',
  ai: 'center',
})

export const $Breadcrumb = styled('li', {
  position: 'relative',
  pr: '0.75rem',
  mr: '0.75rem',
  ls: 'none',
  c: '$darkGrayAlt',

  '&:first-child': {
    ml: 0,
  },

  '&::after': {
    position: 'absolute',
    right: 0,
    top: 0,
    content: '/',
    display: 'block',
    height: '0.8em',
    width: '1px',
    transform: 'translate(-2px, 3px)',
    c: '$darkGrayAlt',
    fontSize: '15px',
  },

  '& > a': {
    fontWeight: '$medium',
    fontSize: '15px',

    '&:hover': {
      color: '$hover',
    },
  },

  '&:last-child': {
    pr: 0,
    mr: 0,

    '&::after': {
      d: 'none',
    },

    '& > a': {
      c: '$darkGrayAlt',

      '&:hover': {
        c: '$hover',
      },
    },
  },

  vartiants: {
    activeLink: {
      true: {
        c: '$brand',
      },
      false: {},
    },
  },
})

const ArchiveBreadcrumbs = ({ hidden, primaryCategory }) => (
  <$Breadcrumbs aria-label="breadcrumbs" hidden={hidden}>
    <$BreadcrumbsInner>
      <$Breadcrumb>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </$Breadcrumb>
      {primaryCategory && (
        <$Breadcrumb activeLink={true}>
          <Link href={primaryCategory.url}>
            <a>{primaryCategory.title}</a>
          </Link>
        </$Breadcrumb>
      )}
    </$BreadcrumbsInner>
  </$Breadcrumbs>
)

export default ArchiveBreadcrumbs
