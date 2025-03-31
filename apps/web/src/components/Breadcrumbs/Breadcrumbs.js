import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import capitalize from 'lodash/capitalize'
import { styled } from '@design'
import Pinion from '@components/Pinion'

export const $Breadcrumbs = styled('nav', {
  position: 'relative',
  z: '$aboveContent',
  mt: '$5',
  mb: '$3',
  w: '100%',
  type: 'caption',
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

  '&:first-child': {
    ml: 0,
  },

  '&::after': {
    position: 'absolute',
    right: 0,
    top: '50%',
    content: '',
    d: 'block',
    h: '0.8em',
    w: '1px',
    t: 'translate3d(50%, -50%, 0)',
    bc: '$border',
  },

  '& > a': {
    c: '$border',

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
      c: '$border',

      '&:hover': {
        c: '$hover',
      },
    },
  },
})

const convertBreadcrumb = (string) =>
  string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ')

const Breadcrumbs = ({ hidden }) => {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState(null)

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath
        .split('/')
        .filter((path) => !/.*\[.*\].*/.test(path) && path)

      const pathArray = linkPath
        .map((path, i) => {
          const isPaged = !!parseInt(path, 10)
          const href = `/${linkPath.slice(0, i + 1).join('/')}`

          if (path === 'page') {
            return false
          }

          return {
            breadcrumb: `${isPaged ? `Page ` : ''}${path}`,
            href,
          }
        })
        .filter(Boolean)

      setBreadcrumbs(pathArray)
    }
  }, [router])

  return (
    <Pinion
      css={{
        box: {
          property: 'px',
        },
        my: 0,
      }}
      maxWidth="base"
    >
      <$Breadcrumbs aria-label="breadcrumbs" hidden={hidden}>
        <$BreadcrumbsInner>
          <$Breadcrumb>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </$Breadcrumb>
          {breadcrumbs &&
            breadcrumbs.map((breadcrumb) => {
              if (breadcrumb.href === '/') {
                return null
              }
              return (
                <$Breadcrumb key={breadcrumb.href}>
                  <Link href={breadcrumb.href} legacyBehavior>
                    <a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
                  </Link>
                </$Breadcrumb>
              )
            })}
        </$BreadcrumbsInner>
      </$Breadcrumbs>
    </Pinion>
  )
}

export default Breadcrumbs
