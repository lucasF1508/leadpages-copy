import React from 'react'
import { styled } from '@design'
import DeliveraSVG from '@legacy/assets/images/logos/delivra-logo-black.svg'
import LeadpagesSVG from '@legacy/assets/images/logos/leadpages-logo-black.svg'
import AnimotoSVG from '@legacy/assets/images/logos/animoto-logo-black.svg'
import ShiftSVG from '@legacy/assets/images/logos/shift-logo-black-alt.svg'
import Image from 'next/legacy/image'

const RedbrickFooterContainer = styled('div', {
  fontSize: '0.75rem',
  textAlign: 'center',
  color: '$textAlt',
  paddingTop: '3.75rem',
  justifyContent: 'center',
  borderTop: '1px solid rgba(15, 12, 9, 0.08)',

  [`
    a:link,
    a:visited
  `]: {
    color: 'rgba(0, 0, 0, 1)',
  },

  'a:hover': {
    color: 'rgba(0, 0, 0, 0.8)',
  },
})

const LogoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1.5rem',
  marginTop: '1.875rem',

  '@>769': {
    flexDirection: 'row',
    gap: '2.625rem',
  },
})

const RedbrickFooter = () => (
  <RedbrickFooterContainer>
    Leadpages is part of the{' '}
    <a
      target="_blank"
      rel="noreferrer noopener"
      href="https://rdbrck.com?utm_source=leadpages"
      style={{ textDecoration: 'underline' }}
    >
      Redbrick
    </a>{' '}
    family of brands.
    <LogoContainer>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://animoto.com?utm_source=leadpages"
      >
        <Image
          src={AnimotoSVG.src}
          alt="Animoto Logo"
          width={122}
          height={32}
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.delivra.com?utm_source=leadpages"
      >
        <Image
          src={DeliveraSVG.src}
          alt="Delivera Logo"
          width={77}
          height={16}
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://leadpages.com/"
      >
        <Image
          src={LeadpagesSVG.src}
          alt="Leadpages Logo"
          width={146}
          height={24}
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://shift.com?utm_source=leadpages"
      >
        <Image src={ShiftSVG.src} alt="Shift Logo" width={80} height={24} />
      </a>
    </LogoContainer>
  </RedbrickFooterContainer>
)

export default RedbrickFooter
