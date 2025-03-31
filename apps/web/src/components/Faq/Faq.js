import React from 'react'
import { styled } from '@design'
import Accordion from '@components/Accordion'
import Link from 'next/link'

const $AccordionSection = styled('div', {})

const $AccordionContainer = styled('div', {
  width: '100%',
  maxWidth: 540,
  margin: 'auto',
})

const StyledLink = styled(Link, {
  c: '$primary',
  pb: '3px',
  bb: '2px solid $colors$purpleLight',

  '&:hover': {
    bb: '2px solid $colors$primary',
  },
})

const SectionLink = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '32px',
  ta: 'center',
  c: '$textAlt',
  mb: '4rem',
  pt: '3rem',
})

const Faq = ({ showSectionLink, faqs }) => (
  <$AccordionSection>
    <$AccordionContainer
      css={{
        width: '100%',
        maxWidth: 540,
        margin: 'auto',
      }}
    >
      <Accordion accordionItems={faqs} />
    </$AccordionContainer>
    {showSectionLink && (
      <SectionLink>
        Have more questions? See our{' '}
        <StyledLink href="/faq">full FAQ page</StyledLink> or{' '}
        <StyledLink href="/contact">contact us</StyledLink>.
      </SectionLink>
    )}
  </$AccordionSection>
)

export default Faq
