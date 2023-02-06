import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import useImageParser from '@hooks/useImageParser'
// images
import LeadpagesIcon from '@legacy/assets/images/integrations/Leadpages-Leadpages-Zapier@2x.jpg'
import ZapierIcon from '@legacy/assets/images/integrations/zapier-100x100.png'
import IntegrationsIcon from '@legacy/assets/images/integrations/Infinite-Integrations@2x.jpg'

const OuterContainer = styled('div', {
  position: 'relative',
  backgroundColor: '$grayAlt',
})

const LPUContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  paddingTop: '4rem',
  paddingBottom: '12rem',
  px: '3rem',

  '@>s': {
    paddingBottom: '10rem',
  },

  '@>m': {
    paddingTop: '10rem',
    paddingBottom: '6rem',
    px: '6rem',
  },
})

const Headline = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '2.5rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '3rem',
  textAlign: 'center',
  marginBottom: '6rem',
  color: '$text',

  '@media (max-width: 767px)': {
    marginBottom: '3rem',
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const FlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  px: '1%',
  mx: 'auto',
  alignSelf: 'flex-start',
})

const FlexRow3 = styled(FlexRowItem, {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '23.3333%',
  marginBottom: 0,

  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
})

const FlexRow3Container = styled('div', {
  textAlign: 'center',
  mx: 'auto',
  minHeight: '158px',
})

const ImageIcon = styled(Image, {
  width: '100%',
  height: '100%',
  display: 'block',
  mx: 'auto',
  marginBottom: '2rem',
})

const FlexRow3Heading = styled('div', {
  fontFamily: 'Apercu Pro',
  fontWeight: 500,
  textAlign: 'center',
  marginBottom: '2rem',
  color: '$text',

  '@media (max-width: 768px)': {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0px',
  },

  '@media (min-width: 993px)': {
    fontSize: '22px',
    lineHeight: '36px',
    letterSpacing: '0px',
  },
})

const FlexRow3Copy = styled('div', {
  fontFamily: 'Apercu Pro',
  textAlign: 'center',
  marginBottom: '1.25rem',
  color: '$textAlt',

  '@media (max-width: 768px)': {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  },

  '@media (min-width: 993px)': {
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0px',
  },
})

const Character = styled('div', {
  display: 'inline-block',
  verticalAlign: 'middle',
  mx: '10px',
  color: '$darkGray',
  fontSize: '80px',

  '@media (max-width: 768px)': {
    mx: 'auto',
  },
})

const CollectLeads = () => {
  const collectLeadsData = [
    {
      image: LeadpagesIcon,
      heading: 'Leadpages',
      copy: 'Easily build stunning webpages and campaigns to capture leads and convert customers.',
      character: '+',
    },
    {
      image: ZapierIcon,
      heading: 'Zapier',
      copy: 'Instantly move info between your web apps and trigger automatic actions.',
      character: '=',
    },
    {
      image: IntegrationsIcon,
      heading: 'Infinite Integrations',
      copy: 'Send leads to your favorite web apps—and get endless lead nurture possibilities.',
    },
  ]

  return (
    <OuterContainer>
      <LPUContainer>
        <Headline>Collect leads + connect to powerful workflows</Headline>
        <FlexRow>
          {collectLeadsData.map(({ image, heading, copy, character }) => {
            const { height, width } = useImageParser(image)
            const maxSize = 158
            const css =
              height <= maxSize
                ? { maxWidth: width, maxHeight: height }
                : { maxWidth: maxSize, maxHeight: maxSize }

            return (
              <>
                <FlexRow3 key={heading}>
                  <FlexRow3Container>
                    <ImageIcon image={image} alt="Leadpage Icon" css={css} />
                    <FlexRow3Heading>{heading}</FlexRow3Heading>
                    <FlexRow3Copy>{copy}</FlexRow3Copy>
                  </FlexRow3Container>
                </FlexRow3>
                {character && <Character>{character}</Character>}
              </>
            )
          })}
        </FlexRow>
      </LPUContainer>
    </OuterContainer>
  )
}

export default CollectLeads
