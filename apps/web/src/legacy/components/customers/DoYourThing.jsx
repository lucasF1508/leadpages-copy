import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import image1 from '@legacy/assets/images/customers/jody/you-do-your-thing_leadpages_450px@2x.png'

const OuterContainer = styled('div', {
  paddingTop: '6rem',

  '@>s': {
    paddingTop: '8rem',
  },

  '@media (max-width: 768px)': {
    marginBottom: '-10rem',
  },
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  position: 'relative',
})

const Heading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: '-0.07px',
  color: '$white',
  marginBottom: '27px',
  width: '80%',
  mx: 'auto',

  '@media (max-width: 768px)': {
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    paddingTop: '58px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    marginTop: '71px',
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
  },

  '@media (min-width: 993px)': {
    marginTop: '98px',
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-0.5px',
  },
})

const SubHeading = styled('div', {
  color: '$white',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  width: '80%',
  mx: 'auto',

  '@media (max-width: 768px)': {
    fontSize: '16px',
    lineHeight: '24px',
    paddingBottom: '56px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    marginBottom: '2rem',
    fontSize: '16px',
    lineHeight: '24px',
  },

  '@media (min-width: 993px)': {
    marginBottom: '2rem',
    fontSize: '18px',
    lineHeight: '28px',
  },
})

const MobileImage = styled(Image, {
  zIndex: '$under',
  width: '100%',
  height: '100%',

  '@media (min-width: 769px)': {
    display: 'inline-block',
    minHeight: '491px',
    maxHeight: '491px',
    minWidth: '450px',
    maxWidth: '450px',
  },
})

const Container = styled('div', {
  '@media (min-width: 769px)': {
    height: '350px',
    bottom: '50px',
    position: 'relative',
  },
})

const TextContainer = styled('div', {
  background: '$lightBrown',
  position: 'relative',

  '@media (max-width: 768px)': {
    bottom: '150px',
  },

  '@media (min-width: 769px) and (max-width: 1159px)': {
    position: 'absolute',
    maxWidth: '61%',
    top: '40px',
    right: 0,
    minHeight: '450px',
    maxHeight: '450px',
  },

  '@media (min-width: 1160px)': {
    position: 'absolute',
    maxWidth: '690px',
    top: '40px',
    right: 0,
    minHeight: '450px',
    maxHeight: '450px',
  },
})

const DoYourThing = () => (
  <OuterContainer>
    <InnerContainer>
      <MobileImage image={image1} alt="customers do your thing" />
      <TextContainer>
        <Container>
          <Heading>
            You do your thing.
            <br />
            We’ll do the rest.
          </Heading>
          <SubHeading>
            Whatever you do, whatever industry you’re in, country you’re from,
            or lifestyle you lead—Leadpages is designed to transform your
            passion into a profitable business. As an entrepreneur, you need a
            fast, powerful, optimized platform to convert leads and close sales.
            That’s what we do. So you can get back to doing what you do best.
          </SubHeading>
        </Container>
      </TextContainer>
    </InnerContainer>
  </OuterContainer>
)

export default DoYourThing
