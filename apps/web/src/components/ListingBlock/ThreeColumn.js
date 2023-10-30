import React from 'react'
import Image from '@components/Image'
import { styled } from '@design'
// images
import rightArrowPurpleSVG from '@legacy/assets/images/global/arrow_right_purple.svg'
import Link from '@components/Link'

const OuterContainer = styled('div', {
  position: 'relative',
})

const LPUContainer = styled('div', {
  paddingTop: '3rem',
  paddingBottom: '1rem',

  '@>m': {
    px: '$2',
  },

  '@>l': {
    px: '$12',
  },
})

const FlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  flexWrap: 'wrap',

  '@media (max-width: 768px)': {
    display: 'block',
  },
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
})

const FlexRow3 = styled(FlexRowItem, {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',
  flex: '0 0 29.3333%',
  maxWidth: '29.3333%',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
})

const FlexRow3Container = styled('div', {
  width: '100%',
})

const ImageContainer = styled(Image, {
  display: 'block',
  width: '100%',
  maxWidth: '350px',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
})

const FlexRow3Heading = styled('div', {
  paddingTop: '1.5rem',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '24px',
  fontWeight: 500,
  marginBottom: '1.5rem',
  color: '$text',
})

const FlexRow3Copy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '1.25rem',
  color: '$textAlt',
})

const FlexRow3Webinar = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  marginBottom: '1.25rem',
  color: '$text',
})

const TextContainer = styled('div', {
  zIndex: 2,
  position: 'relative',
  background: '$white',

  variants: {
    type: {
      overlap: {
        textAlign: 'left',
        width: '75%',
        paddingRight: '10%',
        marginTop: '-15%',
        marginRight: 'auto',
        marginLeft: '-1px',
      },
    },
  },
})

const StyledLink = styled(Link, {
  color: '$primary',
  zIndex: 4,
})

const BigTabImage = styled('div', {
  width: '100%',
  height: '100%',
  zIndex: -1,
})

const GalleryContainer = styled('div', {
  position: 'relative',
  zIndex: 4,
})

const ArrowRightPurple = styled('img', {
  width: '20px',
  height: '10px',
})

const CTA = styled('div', {
  color: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '30px',
  textAlign: 'left',
  fontWeight: 500,
  marginBottom: '2rem',
})

const ThreeColumn = ({ listings, type, ctaLabel }) => (
  <OuterContainer>
    <LPUContainer>
      <FlexRow>
        {listings.map(
          ({ _id, _key, image, title, excerpt, meta, path, link }) => (
            <FlexRow3 key={_id || _key}>
              <FlexRow3Container>
                <StyledLink
                  {...(path
                    ? { url: path, condition: 'internal' }
                    : link || {})}
                  linkStyle="none"
                >
                  <GalleryContainer>
                    {image && (
                      <BigTabImage>
                        <ImageContainer image={image} alt={image?.altText} />
                      </BigTabImage>
                    )}
                    <TextContainer type={type}>
                      {title && <FlexRow3Heading>{title}</FlexRow3Heading>}
                      {excerpt && <FlexRow3Copy>{excerpt}</FlexRow3Copy>}
                      {meta && <FlexRow3Webinar>{meta}</FlexRow3Webinar>}
                      <CTA>
                        {link?.label || ctaLabel} &nbsp;
                        <ArrowRightPurple
                          src={rightArrowPurpleSVG.src}
                          alt="purple right arrow"
                        />{' '}
                      </CTA>
                    </TextContainer>
                  </GalleryContainer>
                </StyledLink>
              </FlexRow3Container>
            </FlexRow3>
          )
        )}
      </FlexRow>
    </LPUContainer>
  </OuterContainer>
)

export default ThreeColumn
