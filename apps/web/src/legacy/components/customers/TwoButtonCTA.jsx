import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Container = styled('div', {
  paddingTop: '6rem',
  paddingBottom: '6rem',
  px: '3rem',
  backgroundColor: '$darkBlue',
  textAlign: 'center',

  '@<s': {
    paddingTop: '4rem',
    paddingBottom: '3rem',
  },

  '@media (max-width: 360px)': {
    px: '1rem',
  },
})

const Title = styled('div', {
  fontFamily: 'Space Mono',
  fontWeight: 700,
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  textTransform: 'uppercase',
  opacity: 0.5,
  color: '$white',
  marginBottom: '0.5rem',
})

const Headline = styled('h2', {
  fontFamily: 'Value Serif',
  fontSize: '56px',
  letterSpacing: '-1px',
  lineHeight: '60px',
  color: '$white',
  marginBottom: '2rem',

  '@<s': {
    fontSize: '30px',
    lineHeight: '30px',
    letterSpacing: '-0.1px',
  },
})

const Caption = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  letterSpacing: '-0.1px',
  lineHeight: '28px',
  color: '$white',
  marginBottom: '2rem',
})

const ButtonContainer = styled('div', {
  textAlign: 'center',

  '@<xs': {
    padding: 0,
  },
})

const LeftButton = styled('button', {
  mx: '2%',
  marginBottom: '2rem',
  width: '278px',
  height: '48px',
  borderRadius: '48px',
  border: '3px solid rgba(255, 255, 255, 0.7)',
  backgroundColor: 'transparent',
  color: '$white',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '30px',
  textAlign: 'center',
  transition: 'all 0.3s ease',

  '@<xs': {
    width: '240px',
    fontSize: '16px',
    alignSelf: 'center',
  },

  '&:hover': {
    backgroundColor: '$indigoDark',
    border: '3px solid $colors$indigoDark',
    cursor: 'pointer',
  },
})

const RightButton = styled('button', {
  mx: '2%',
  marginBottom: '2rem',
  width: '278px',
  height: '48px',
  borderRadius: '48px',
  border: '3px solid $colors$primary',
  backgroundColor: '$primary',
  color: '$white',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '30px',
  textAlign: 'center',
  transition: 'all 0.3s ease',

  '@<xs': {
    width: '240px',
    fontSize: '16px',
    alignSelf: 'center',
  },

  '&:hover': {
    backgroundColor: '$indigoDark',
    border: '3px solid $colors$indigoDark',
    cursor: 'pointer',
  },
})

const TwoButtonCTA = ({ headline, caption }) => (
  <Container>
    <Title>Let’s Get Started</Title>
    <Headline>{headline}</Headline>
    <Caption>{caption}</Caption>
    <ButtonContainer>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSewLVWXgi4vhrnrocbZ_Q7cksoR4hA9Kpbj4miYWQpiJFsvKg/viewform?usp=sf_link"
        target="_blank"
        aria-label="Share your story"
        rel="noreferrer noopener"
      >
        <LeftButton>Share Your Story</LeftButton>
      </a>
      <Link href="/pricing">
        <a aria-label="Start a free trial">
          <RightButton>Start a Free Trial</RightButton>
        </a>
      </Link>
    </ButtonContainer>
  </Container>
)

TwoButtonCTA.defaultProps = {
  headline: 'Create your own story',
  caption:
    'Join 40,000+ businesses that trust Leadpages every day to grow their business online. Already part of the tribe? Share your own story.',
}

TwoButtonCTA.propTypes = {
  headline: PropTypes.string,
  caption: PropTypes.string,
}

export default TwoButtonCTA
