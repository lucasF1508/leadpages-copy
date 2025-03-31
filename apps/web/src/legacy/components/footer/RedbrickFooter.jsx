import Image from 'next/legacy/image'
import React from 'react'
import styled from 'styled-components'
import DeliveraSVG from '../../assets/images/logos/delivra-logo-black.svg'
import LeadpagesSVG from '../../assets/images/logos/leadpages-logo-black.svg'
import RebaseSVG from '../../assets/images/logos/rebase-logo-black.svg'
import ShiftSVG from '../../assets/images/logos/shift-logo-black.svg'

const RedbrickFooterContainer = styled.div`
  font-size: 12px;
  text-align: center;

  a:link,
  a:visited {
    color: rgba(0, 0, 0, 1);
  }

  a:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 42px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`

const RedbrickFooter = () => (
  <RedbrickFooterContainer>
    Leadpages is part of the{' '}
    <a target="_blank" rel="noreferrer noopener" href="https://rdbrck.com/">
      Redbrick
    </a>{' '}
    family of brands.
    <LogoContainer>
      <a target="_blank" rel="noreferrer noopener" href="https://tryshift.com/">
        <Image src={ShiftSVG} alt="Shift Logo" />
      </a>
      <a target="_blank" rel="noreferrer noopener" href="https://rebase.io/">
        <Image src={RebaseSVG} alt="Rebase Logo" />
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://leadpages.com/"
      >
        <Image src={LeadpagesSVG} alt="Leadpages Logo" />
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.delivra.com/"
      >
        <Image src={DeliveraSVG} alt="Delivera Logo" />
      </a>
    </LogoContainer>
  </RedbrickFooterContainer>
)

export default RedbrickFooter
