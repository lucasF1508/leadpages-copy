import React, { useState } from 'react'
import ReactSelect from 'react-select'
import { $Input } from '@components/Form/Inputs'
import {
  InputSelectStylesOverrides,
  InputSelectOption,
  InputSelectIcon,
} from '@components/Form/Inputs/InputSelect'
import { styled } from '@design'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import Loader from '@components/Loader'

const $Filter = styled('div', {
  position: 'relative',
  box: [
    {
      property: 'mx',
      multiplier: -1,
    },
  ],
  mb: '$4',
  overflow: 'hidden',

  '@<s': {
    display: 'none',
  },

  '&::after': {
    position: 'absolute',
    display: 'block',
    content: '',
    top: 0,
    right: 0,
    bottom: 0,
    background: '$colors$gradientBackgroundOpacity',
    box: [
      {
        property: 'width',
        spacingAxis: 'x',
      },
    ],
  },
})

const $FilterInner = styled('div', {
  position: 'relative',
  d: 'flex',
  box: [
    {
      property: 'pl',
    },
  ],
  ff: 'row nowrap',
  jc: 'flex-start',
  ai: 'center',
  overflowY: 'hidden',
  overflowX: 'scroll',
  [`-ms-overflow-style`]: 'none',
  scrollbarWidth: `none`,

  '&::-webkit-scrollbar': {
    display: 'none' /* Safari and Chrome */,
  },

  '&::before': {
    position: 'absolute',
    display: 'block',
    content: '',
    h: '1px',
    width: 'auto',
    box: [
      {
        property: 'left',
        spacingAxis: 'x',
      },
      {
        property: 'right',
        spacingAxis: 'x',
      },
    ],
    bc: '$brand',
    bottom: 0,
  },
})

const $FilterItem = styled('a', {
  position: 'relative',
  py: '$2',
  px: '$3',
  f: '0 0 auto',
  transition: '$link',
  cursor: 'pointer',
  type: 'md',
  fontWeight: '$medium',

  '&::before': {
    position: 'absolute',
    z: '$content',
    bottom: '-1px',
    left: 0,
    content: '',
    d: 'block',
    w: '100%',
    h: 0,
    bc: '$brand',
    transition: 'height $duration$fast $easing$base',
  },

  '&::after': {
    position: 'absolute',
    display: 'block',
    content: '',
    h: '1px',
    left: 0,
    w: '100%',
    bottom: 0,
  },

  '&:hover': {
    c: '$hover',

    '&::before': {
      h: '0.375rem',
    },
  },

  variants: {
    isActive: {
      true: {
        c: '$hover',

        '&::before': {
          h: '0.375rem',
        },
      },
      false: {
        c: '$brand',
      },
    },
  },
})

const Filter = ({ items, ...props }) => {
  const router = useRouter()
  const { asPath } = router
  const [isLoading, setIsLoading] = useState(false)
  const [baseUrl, type, slug] = asPath
    .split('/')
    .filter((path) => !/.*\[.*\].*/.test(path) && path)
  const options = [{ title: 'All', path: `/${baseUrl}` }, ...items].map(
    ({ title, path }) => ({
      label: title,
      value: path,
    })
  )

  const handleFilterSelect = (value) => {
    if (value !== asPath) {
      setIsLoading(true)
      router.push(value)
    }
  }

  return (
    <>
      <$Filter {...props}>
        <$FilterInner>
          <NextLink href={`/${baseUrl}`} passHref>
            <$FilterItem isActive={asPath === `/${baseUrl}` || type === 'page'}>
              All
            </$FilterItem>
          </NextLink>
          {items
            .filter(({ path }) => path)
            .map(({ title, path, slug: filterSlug }) => (
              <NextLink key={title} href={path} passHref>
                <$FilterItem
                  isActive={
                    asPath === path ||
                    (type === 'category' && filterSlug?.current === slug)
                  }
                >
                  {title}
                </$FilterItem>
              </NextLink>
            ))}
        </$FilterInner>
      </$Filter>

      <$Input
        as="div"
        type="select"
        css={{
          p: 0,
          mb: '$5',
          '@>s': {
            display: 'none',
          },
        }}
      >
        <ReactSelect
          components={{
            DropdownIndicator: null,
            IndicatorSeparator: null,
            Option: InputSelectOption,
          }}
          placeholder="Select Category..."
          styles={InputSelectStylesOverrides}
          options={options}
          onChange={({ value }) => handleFilterSelect(value)}
          openMenuOnFocus
        />
        <InputSelectIcon />
        {isLoading && <Loader css={{ right: '$6' }} width={24} height={24} />}
      </$Input>
    </>
  )
}

export default Filter
