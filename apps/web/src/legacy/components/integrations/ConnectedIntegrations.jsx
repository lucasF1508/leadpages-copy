import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const OuterContainer = styled.div`
  padding-top: 6rem;
  padding-right: 6rem;
  padding-left: 6rem;
  background-color: white;
  @media (max-width: 425px) {
    padding-right: 2%;
    padding-left: 2%;
  }
  @media (min-width: 426px) and (max-width: 576px) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
  @media (min-width: 577px) {
    padding-top: 10rem;
  }
`

const InnerContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`

const TextContainer = styled.div`
  text-align: center;
  @media (max-width: 425px) {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
`

const Title = styled.div`
  opacity: 0.5;
  color: #000000;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  font-family: 'Space Mono';
  text-transform: uppercase;
  margin-bottom: 2rem;
`

const Heading = styled.div`
  font-family: 'Value Serif';
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.08px;
  color: #0f0c09;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.08px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
  }

  @media (min-width: 993px) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.5px;
  }
`

const Caption = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 4rem;
  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media (min-width: 577px) and (max-width: 991px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (min-width: 992px) {
    font-size: 18px;
    line-height: 28px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`

const ButtonContainer = styled.div`
  margin-top: 4rem;
  text-align: center;
  @media (max-width: 340px) {
    padding: 0;
  }
`

const Button = styled.button`
  height: 48px;
  border-radius: 48px;
  color: #603eff;
  background: transparent;
  border: 3px solid #d1c5f9;
  font-family: 'Apercu Pro';
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  transition: all 0.3s ease;
  margin-bottom: 4rem;
  padding: 0rem 1rem;
  @media (max-width: 425px) {
    min-width: 240px;
    font-size: 16px;
    align-self: center;
  }
  &:hover {
    border: 3px solid #603eff;
    background-color: #603eff;
    color: #fff;
    cursor: pointer;
  }
`

const DesktopImage = styled(Image)`
  display: none;
  @media (min-width: 577px) {
    display: block;
  }
`

const MobileImage = styled(Image)`
  display: none;
  @media (max-width: 576px) {
    width: 100%;
    height: 100%;
    display: block;
    margin: 3%;
    max-width: 68px;
    max-height: 68px;
    box-shadow: 0 0 2px 0 rgba(15, 12, 9, 0.04),
      0 2px 4px 0 rgba(15, 12, 9, 0.08);
  }
`

const MobileFlexContainer = styled.div`
  display: none;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  max-width: 357px;
  margin: auto;
  @media (max-width: 425px) {
    width: 99%;
  }
  @media (max-width: 576px) {
    display: flex;
  }
`

const ConnectedIntegrations = () => (
  <OuterContainer>
    <InnerContainer>
      <TextContainer>
        <Title>Leadpages Integrations</Title>
        <Heading>
          <h2>Save time by connecting the data dots</h2>
        </Heading>
        <Caption>
          Integrate your favorite online marketing apps to automatically add
          leads to email lists and trigger follow-up workflows.
        </Caption>
      </TextContainer>
      <ImageContainer>
        {/* <DesktopImage
          src={getImage(data.desktopImage)}
          alt="Desktop integrations image"
        /> */}
        <MobileFlexContainer>
          {/* <MobileImage src={getImage(data.mobileOne)} alt="drip integration" /> */}
          {/* <MobileImage
            src={getImage(data.mobileTwo)}
            alt="google analytics integration"
          />
          <MobileImage
            src={getImage(data.mobileThree)}
            alt="salesforce integration"
          />
          <MobileImage
            src={getImage(data.mobileFour)}
            alt="gotowebinar integration"
          />
          <MobileImage
            src={getImage(data.mobileFive)}
            alt="Facebook pixel ads integration"
          />
          <MobileImage
            src={getImage(data.mobileSix)}
            alt="OpenTable integration"
          />
          <MobileImage
            src={getImage(data.mobileSeven)}
            alt="Zapier integration"
          />
          <MobileImage
            src={getImage(data.mobileEight)}
            alt="Stripe integration"
          />
          <MobileImage
            src={getImage(data.mobileNine)}
            alt="Mailchimp integration"
          /> */}
        </MobileFlexContainer>
      </ImageContainer>
      <ButtonContainer>
        <StyledLink href="/integrations">
          <Button>Explore Leadpages Integrations</Button>
        </StyledLink>
      </ButtonContainer>
    </InnerContainer>
  </OuterContainer>
)

export default ConnectedIntegrations
