import React from 'react'
import { components } from 'react-select'
import { styled } from '@design'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Link from '@components/Link'

const $SearchResult = styled(components.Option, {
  d: 'block',
  minHeight: '$5',
  p: '$3',
  cursor: 'pointer',
  borderTop: '$base',
  bc: '$white',
  type: 'baseType',

  '&:first-child': {
    borderTop: 'none',
  },

  '&:hover': {
    bc: '$brand',
    c: '$white',
  },
  variants: {
    isFocused: {
      true: {
        bc: '$brand',
        c: '$white',
      },
    },
  },
})

const SearchSelectOption = (props) => {
  const {
    data: { label, excerpt, value },
  } = props

  return (
    <$SearchResult key={value} {...props}>
      <Heading tag="h5" heading={label} />
      <Text
        content={excerpt}
        css={{
          mb: 0,
          type: 'baseTypeAlt',
        }}
      />
      <Link
        css={{
          mt: '$1',
          type: 'caption',
        }}
      >
        Read More
      </Link>
    </$SearchResult>
  )
}

export default SearchSelectOption
