import React from 'react'
import { styled } from '@design'
import Cta from './Cta'

const $CtaSection = styled('div', {
  variants: {
    rounded: {
      true: {
        box: [{ property: 'mx' }, { property: 'my' }],
      },
    },
  },
})

const $CtaInner = styled('div', {
  '& div': {
    maxWidth: 'unset',
  },

  variants: {
    rounded: {
      true: {
        borderTopLeftRadius: '$statsCard',
        borderBottomRightRadius: '$statsCard',
        overflow: 'hidden',
        maxWidth: '$base',
        mx: 'auto',

        '& > div': {
          px: '$8',
          py: '4.875rem',

          '@>993': {
            py: '6rem',
          },
        },

        '& > * > div': {
          mb: '$3',

          '& p': {
            typeSizes: 'base',
            fontWeight: '$normal',
            lh: '$l',

            '@>993': {
              typeSizes: 'lg',
            },
          },

          '&:last-child': {
            mb: 0,

            '& > div': {
              py: 0,
            },
          },
        },
      },
    },
  },
})

const CtaInline = ({ cta: _cta, rounded, bgColor }) => {
  const cta = {
    ..._cta,
    bgColor: bgColor || _cta.backgroundColor,
  }

  return (
    <$CtaSection rounded={rounded}>
      <$CtaInner rounded={rounded}>
        <Cta
          headlineType={rounded ? 'h1Alt' : 'h3'}
          paddingScale={0.7}
          {...cta}
        />
      </$CtaInner>
    </$CtaSection>
  )
}

export default CtaInline
