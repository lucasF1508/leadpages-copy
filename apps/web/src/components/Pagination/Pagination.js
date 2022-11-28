import React, { useEffect, useState } from 'react'
import usePagination from '@hooks/usePagination'
import NextLink from 'next/link'
import { styled } from '@design'
import { GrLinkNext as NextIcon } from '@react-icons/all-files/gr/GrLinkNext'
import { GrLinkPrevious as PrevIcon } from '@react-icons/all-files/gr/GrLinkPrevious'
import { uniqueId } from 'lodash'

const $Pagination = styled('div', {
  d: 'flex',
  ff: 'row nowrap',
  jc: 'center',
  ai: 'center',
  box: { property: 'mt', multiplier: 0.75 },
})

const $PaginationInner = styled('div', {
  position: 'relative',
  d: 'inline-flex',
  ff: 'row nowrap',
  jc: 'center',
  ai: 'center',
})

const $PaginationLink = styled('a', {
  m: '0 0.25rem',
  d: 'flex',
  ff: 'row nowrap',
  jc: 'center',
  ai: 'center',
  w: '$space$4',
  h: '$space$4',
  c: '$textAlt',
  transition: 'all 300ms',
  type: 'button',
  border: '1px solid transparent',
  br: '$round',
  fontWeight: 500,

  '& svg': {
    d: 'block',

    '& path': {
      transition: 'stroke $base',
      stroke: '$text',
    },
  },

  '&:hover': {
    color: '$hover',
    border: '1px solid $colors$primary',

    '& svg path': {
      stroke: '$hover',
    },
  },

  variants: {
    isActive: {
      true: {
        color: '$white',
        bc: '$primary',

        '&:hover': {
          c: '$lightGray',
        },
      },
    },
    hasIcon: {
      true: {
        position: 'absolute',
        top: '50%',
        t: 'translateY(-50%)',

        '&:first-child': {
          right: '100%',
        },

        '&:last-child': {
          left: '100%',
        },

        '& > span': {
          d: 'none',
        },
      },
    },
  },
})

const $PaginiationElipses = styled('div', {
  px: '$1',
})

const Pagination = ({ pagination }) => {
  const { links } = usePagination(pagination)

  return (
    <$Pagination>
      <$PaginationInner>
        {links &&
          links.map(({ key, url, isActive, icon, label }, i) => {
            if (!url) {
              return <$PaginiationElipses>{label}</$PaginiationElipses>
            }
            return (
              <NextLink key={key} href={url} passHref>
                <$PaginationLink isActive={isActive} hasIcon={!!icon}>
                  {icon === 'next' && <NextIcon />}
                  {icon === 'prev' && <PrevIcon />}
                  <span>{label}</span>
                </$PaginationLink>
              </NextLink>
            )
          })}
      </$PaginationInner>
    </$Pagination>
  )
}

export default Pagination
