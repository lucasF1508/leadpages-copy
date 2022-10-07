import { styled } from '@design'

export const PageSuperTitle = styled('div', {
  opacity: 0.5,
  color: '$black',
  fontFamily: 'Space Mono',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
})

export const PageTitle = styled('h1', {
  color: '$text',
  fontFamily: 'Value Serif',
  fontSize: '40px',
  letterSpacing: '-0.5px',
  lineHeight: '48px',
  marginTop: '0.5rem',
})

export const ParagraphLarge = styled('p', {
  color: '$textAlt',
  fontSize: '22px',
  lineHeight: '36px',
})

export const ParagraphSmall = styled('p', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '32px',
  margin: '1rem 0',
  width: '80%',

  '@media (max-width: 768px)': {
    width: '100%',
    fontSize: '18px',
    lineHeight: '28px',
  },
})

export const H4 = styled('h4', {
  color: '$text',
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
})

export const H5 = styled('h5', {
  color: '$text',
  fontFamily: 'Value Serif',
  fontSize: '24px',
  letterSpacing: '-0.08px',
  lineHeight: '36px',
  margin: '0.5rem 0',
})

export const H6 = styled('h6', {
  color: '$text',
  fontSize: '22px',
  fontWeight: 500,
  lineHeight: '36px',
  margin: '1rem 0',
})

export const ParagraphHeader = styled('p', {
  color: '$text',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '30px',
  margin: '1rem 0',
  paddingTop: '25px',
})
