import React from 'react'
import { styled } from '@design'
import DeliveraSVG from '@legacy/assets/images/logos/delivra-logo-black.svg'
import LeadpagesSVG from '@legacy/assets/images/logos/leadpages-logo-black.svg'
import RebaseSVG from '@legacy/assets/images/logos/rebase-logo-black.svg'
import ShiftSVG from '@legacy/assets/images/logos/shift-logo-black.svg'

const RedbrickFooterContainer = styled('div', {
  fontSize: '12px',
  textAlign: 'center',

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
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',

  gap: '42px',
  marginTop: '30px',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '24px',
  },
})

const RedbrickFooter = () => (
  <RedbrickFooterContainer>
    Leadpages is part of the{' '}
    <a
      target="_blank"
      rel="noreferrer noopener"
      href="https://rdbrck.com/"
      style={{ textDecoration: 'underline' }}
    >
      Redbrick
    </a>{' '}
    family of brands.
    <LogoContainer>
      <a target="_blank" rel="noreferrer noopener" href="https://tryshift.com/">
        <img src={ShiftSVG.src} alt="Shift Logo" />
      </a>
      <a target="_blank" rel="noreferrer noopener" href="https://rebase.io/">
        <img src={RebaseSVG.src} alt="Rebase Logo" />
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://leadpages.com/"
      >
        <img src={LeadpagesSVG.src} alt="Leadpages Logo" />
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.delivra.com/"
      >
        <img src={DeliveraSVG.src} alt="Delivera Logo" />
      </a>
    </LogoContainer>
  </RedbrickFooterContainer>
)

export default RedbrickFooter
