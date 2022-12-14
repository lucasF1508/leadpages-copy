import React from 'react'
import { styled } from '@design'

const Heading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: '-0.07px',
  color: '$text',
  marginBottom: '51px',

  '@media (max-width: 768px)': {
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.07px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
  },

  '@media (min-width: 993px)': {
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-0.5px',
  },
})

const OrangeHeadingContainer = styled('div', {
  mx: 'auto',
  textAlign: 'center',
})

const CenteredHeading = styled(Heading, {
  textAlign: 'center',
})

const OrangeCenteredHeading = styled(CenteredHeading, {
  color: '$textHighlight',
})

const SubHeading = styled('div', {
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '24px',
})

function QuoteComponent({ text, underline }) {
  return (
    <OrangeHeadingContainer>
      <OrangeCenteredHeading>{text}</OrangeCenteredHeading>
      {underline && <SubHeading>{underline}</SubHeading>}
    </OrangeHeadingContainer>
  )
}

export default QuoteComponent
