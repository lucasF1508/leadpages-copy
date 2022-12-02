import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import quotationImage from '@legacy/assets/images/global/quote-mark_tan_62px@2x.svg'

const $QuoteCustomer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  px: '7.5%',

  '@media (max-width: 768px)': {
    display: 'block',
    px: '12.5%',
  },
})

const $ImageContainer = styled('div', {
  flex: '0 0 70%',
  maxWidth: '70%',

  '@media (max-width: 768px)': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },
})

const $Image = styled(Image, {
  maxWidth: '1140px',
  mx: 'auto',
})

const $Quote = styled('div', {
  flex: '0 0 25%',
  maxWidth: '25%',

  '@media (max-width: 768px)': {
    marginTop: '50px',
    marginBottom: '96px',
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  variants: {
    align: {
      left: {
        order: -1,
      },
    },
  },
})

const Quotation = styled('img', {
  width: '62.05px',
  height: '48.25px',
  marginBottom: '2rem',
})

const QuotationText = styled('div', {
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontSize: '24px',
  lineHeight: '36px',
  marginBottom: '2rem',

  '@media (max-width: 768px)': {
    fontSize: '18px',
    lineHeight: '28px',
  },
})

const QuotationAuthor = styled('div', {
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  marginBottom: '0.5rem',
})

const MediaWithTextCustomer = ({ text, underline, image, align }) => (
  <$QuoteCustomer>
    <$ImageContainer>
      <$Image image={image} />
    </$ImageContainer>
    <$Quote align={align}>
      <Quotation src={quotationImage.src} alt="quotation mark" />
      <QuotationText>{text}</QuotationText>
      <QuotationAuthor>{underline}</QuotationAuthor>
    </$Quote>
  </$QuoteCustomer>
)

export default MediaWithTextCustomer
