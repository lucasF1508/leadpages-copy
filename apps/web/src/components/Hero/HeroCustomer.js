import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import Text from '@components/Text'

const OuterContainer = styled('div', {
  position: 'relative',
  paddingBottom: '4rem',
})

const InnerContainer = styled('div', {
  maxWidth: '$extended',
  mx: 'auto',
})

const Section = styled('div', {
  position: 'relative',
  background: '$white',
  px: '5%',
  marginTop: '-10%',
  marginBottom: '1rem',
  paddingTop: '2rem',

  '@<769': {
    width: '75%',
  },

  '@>769': {
    width: '45%',
    pt: '2rem',
  },

  '@>993': {
    pt: '4rem',
  },
})

const $Text = styled(Text, {
  '@>769': {
    px: '3.25rem',
  },

  '@>993': {
    paddingLeft: '5.9rem',
  },

  h1: {
    type: 'heroCustomer',
  },
})

const StyledImage = styled(Image, {
  width: '100%',
  height: '100%',
  zIndex: -1,
})

const HeroCustomer = ({ media, content }) => (
  <OuterContainer>
    <InnerContainer>
      <StyledImage {...media} />
      <Section>
        <$Text content={content} />
      </Section>
    </InnerContainer>
  </OuterContainer>
)

export default HeroCustomer
