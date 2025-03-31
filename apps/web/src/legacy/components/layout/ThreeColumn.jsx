import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from '@components/Image'
import { styled } from '@design'
import { RPImage } from '@legacy/constants/types'
// images
import rightArrowPurpleSVG from '@legacy/assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  position: 'relative',
})

const LPUContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '3rem',
  paddingBottom: '6rem',
  paddingRight: '3rem',
  paddingLeft: '3rem',

  '@>s': {
    paddingRight: '6rem',
    paddingLeft: '6rem',
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
})

const GalleryQuoteSection = styled('div', {
  position: 'relative',
  background: '$white',
  zIndex: -1,
  width: '100%',
  display: 'none',

  '&.activeBlock': {
    display: 'block',
    zIndex: 3,
  },
})

const GalleryQuoteTitle = styled('div', {
  fontFamily: 'Space Mono',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  textTransform: 'uppercase',
  opacity: 0.5,
  color: '$black',
  marginBottom: '1rem',
  paddingTop: '2rem',

  '@media (min-width: 769px) and (max-width: 992px)': {
    paddingRight: '3.25rem',
    paddingLeft: '3.25rem',
    paddingTop: '2rem',
  },

  '@>m': {
    paddingLeft: '5rem',
    paddingRight: '0.9rem',
    paddingTop: '4rem',
  },
})

const GalleryQuote = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '1.25rem',
  lineHeight: '1.5rem',
  letterSpacing: '-0.07px',
  color: '$text',
  marginBottom: '1rem',

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    letterSpacing: '-0.07px',
    paddingRight: '3.25rem',
    paddingLeft: '3.25rem',
    marginBottom: '1rem',
  },

  '@>m': {
    fontSize: '1.875rem',
    letterSpacing: '-0.03125rem',
    lineHeight: '2.25rem',
    paddingLeft: '5rem',
    paddingRight: '0.9rem',
    marginBottom: '2rem',
  },
})

const GalleryQuoteLink = styled('div', {
  color: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '0.875rem',
  lineHeight: '1.5rem',
  textAlign: 'left',
  fontWeight: 500,

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    paddingRight: '3.25rem',
    paddingLeft: '3.25rem',
    paddingBottom: '1.75rem',
  },

  '@>m': {
    paddingLeft: '5rem',
    paddingRight: '0.9rem',
    fontSize: '18px',
    lineHeight: '30px',
    paddingBottom: '4rem',
  },
})

const StyledLink = styled(Link, {
  color: '$primary',
  zIndex: 4,
})

const OutboundLink = styled('a', {
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

const ThreeColumn = ({
  column1image,
  column1imageAlt,
  column1heading,
  column1copy,
  column1webinar,
  column1link,
  column1outboundlink,
  column1linkAlt,
  column1CTA,
  column2image,
  column2imageAlt,
  column2heading,
  column2copy,
  column2webinar,
  column2link,
  column2outboundlink,
  column2linkAlt,
  column2CTA,
  column3image,
  column3imageAlt,
  column3heading,
  column3copy,
  column3webinar,
  column3link,
  column3outboundlink,
  column3linkAlt,
  column3CTA,
}) => (
  <OuterContainer>
    <LPUContainer>
      <FlexRow>
        <FlexRow3>
          <FlexRow3Container>
            {column1link && (
              <StyledLink href={column1link} legacyBehavior>
                <a aria-label={column1linkAlt}>
                  <GalleryContainer>
                    <BigTabImage>
                      <ImageContainer
                        image={column1image}
                        alt={column1imageAlt}
                      />
                    </BigTabImage>
                    <TextContainer>
                      <FlexRow3Heading>{column1heading}</FlexRow3Heading>
                      <FlexRow3Copy>{column1copy}</FlexRow3Copy>
                      <FlexRow3Webinar>{column1webinar}</FlexRow3Webinar>

                      <CTA>
                        {column1CTA}
                        &nbsp;
                        <ArrowRightPurple
                          src={rightArrowPurpleSVG.src}
                          alt="purple right arrow"
                        />
                      </CTA>
                    </TextContainer>
                  </GalleryContainer>
                </a>
              </StyledLink>
            )}
            {column1outboundlink && (
              <OutboundLink
                href={column1outboundlink}
                alt={column1linkAlt}
                legacyBehavior
              >
                <GalleryContainer>
                  <BigTabImage>
                    <ImageContainer
                      image={column1image}
                      alt={column1imageAlt}
                    />
                  </BigTabImage>
                  <TextContainer>
                    <FlexRow3Heading>{column1heading}</FlexRow3Heading>
                    <FlexRow3Copy>{column1copy}</FlexRow3Copy>
                    <FlexRow3Webinar>{column1webinar}</FlexRow3Webinar>

                    <CTA>
                      {column1CTA}
                      &nbsp;
                      <ArrowRightPurple
                        src={rightArrowPurpleSVG.src}
                        alt="purple right arrow"
                      />
                    </CTA>
                  </TextContainer>
                </GalleryContainer>
              </OutboundLink>
            )}
          </FlexRow3Container>
        </FlexRow3>
        <FlexRow3>
          <FlexRow3Container>
            {column2link && (
              <StyledLink href={column2link} legacyBehavior>
                <a aria-label={column2linkAlt}>
                  <GalleryContainer>
                    <BigTabImage>
                      <ImageContainer
                        image={column2image}
                        alt={column2imageAlt}
                      />
                    </BigTabImage>
                    <TextContainer>
                      <FlexRow3Heading>{column2heading}</FlexRow3Heading>
                      <FlexRow3Copy>{column2copy}</FlexRow3Copy>
                      <FlexRow3Webinar>{column2webinar}</FlexRow3Webinar>

                      <CTA>
                        {column2CTA}
                        &nbsp;
                        <ArrowRightPurple
                          src={rightArrowPurpleSVG.src}
                          alt="purple right arrow"
                        />
                      </CTA>
                    </TextContainer>
                  </GalleryContainer>
                </a>
              </StyledLink>
            )}
            {column2outboundlink && (
              <OutboundLink
                href={column2outboundlink}
                alt={column2linkAlt}
                legacyBehavior
              >
                <GalleryContainer>
                  <BigTabImage>
                    <ImageContainer
                      image={column2image}
                      alt={column2imageAlt}
                    />
                  </BigTabImage>
                  <TextContainer>
                    <FlexRow3Heading>{column2heading}</FlexRow3Heading>
                    <FlexRow3Copy>{column2copy}</FlexRow3Copy>
                    <FlexRow3Webinar>{column2webinar}</FlexRow3Webinar>

                    <CTA>
                      {column2CTA}
                      &nbsp;
                      <ArrowRightPurple
                        src={rightArrowPurpleSVG.src}
                        alt="purple right arrow"
                      />
                    </CTA>
                  </TextContainer>
                </GalleryContainer>
              </OutboundLink>
            )}
          </FlexRow3Container>
        </FlexRow3>
        <FlexRow3>
          <FlexRow3Container>
            {column3link && (
              <StyledLink href={column3link} legacyBehavior>
                <a aria-label={column3linkAlt}>
                  <GalleryContainer>
                    <BigTabImage>
                      <ImageContainer
                        image={column3image}
                        alt={column3imageAlt}
                      />
                    </BigTabImage>
                    <TextContainer>
                      <FlexRow3Heading>{column3heading}</FlexRow3Heading>
                      <FlexRow3Copy>{column3copy}</FlexRow3Copy>
                      <FlexRow3Webinar>{column3webinar}</FlexRow3Webinar>

                      <CTA>
                        {column3CTA}
                        &nbsp;
                        <ArrowRightPurple
                          src={rightArrowPurpleSVG.src}
                          alt="purple right arrow"
                        />
                      </CTA>
                    </TextContainer>
                  </GalleryContainer>
                </a>
              </StyledLink>
            )}
            {column3outboundlink && (
              <OutboundLink
                href={column3outboundlink}
                alt={column3linkAlt}
                legacyBehavior
              >
                <GalleryContainer>
                  <BigTabImage>
                    <ImageContainer
                      image={column3image}
                      alt={column3imageAlt}
                    />
                  </BigTabImage>
                  <TextContainer>
                    <FlexRow3Heading>{column3heading}</FlexRow3Heading>
                    <FlexRow3Copy>{column3copy}</FlexRow3Copy>
                    <FlexRow3Webinar>{column3webinar}</FlexRow3Webinar>

                    <CTA>
                      {column3CTA}
                      &nbsp;
                      <ArrowRightPurple
                        src={rightArrowPurpleSVG.src}
                        alt="purple right arrow"
                      />
                    </CTA>
                  </TextContainer>
                </GalleryContainer>
              </OutboundLink>
            )}
          </FlexRow3Container>
        </FlexRow3>
      </FlexRow>
    </LPUContainer>
  </OuterContainer>
)

ThreeColumn.defaultProps = {
  column1imageAlt: '',
  column1heading: '',
  column1copy: '',
  column1webinar: '',
  column1link: '',
  column1outboundlink: '',
  column1linkAlt: '',
  column1CTA: '',
  column2imageAlt: '',
  column2heading: '',
  column2copy: '',
  column2webinar: '',
  column2link: '',
  column2outboundlink: '',
  column2linkAlt: '',
  column2CTA: '',
  column3imageAlt: '',
  column3heading: '',
  column3copy: '',
  column3webinar: '',
  column3link: '',
  column3outboundlink: '',
  column3linkAlt: '',
  column3CTA: '',
}

ThreeColumn.propTypes = {
  column1image: RPImage.isRequired,
  column1imageAlt: PropTypes.string,
  column1heading: PropTypes.string,
  column1copy: PropTypes.string,
  column1webinar: PropTypes.string,
  column1link: PropTypes.string,
  column1outboundlink: PropTypes.string,
  column1linkAlt: PropTypes.string,
  column1CTA: PropTypes.string,
  column2image: RPImage.isRequired,
  column2imageAlt: PropTypes.string,
  column2heading: PropTypes.string,
  column2copy: PropTypes.string,
  column2webinar: PropTypes.string,
  column2link: PropTypes.string,
  column2outboundlink: PropTypes.string,
  column2linkAlt: PropTypes.string,
  column2CTA: PropTypes.string,
  column3image: RPImage.isRequired,
  column3imageAlt: PropTypes.string,
  column3heading: PropTypes.string,
  column3copy: PropTypes.string,
  column3webinar: PropTypes.string,
  column3link: PropTypes.string,
  column3outboundlink: PropTypes.string,
  column3linkAlt: PropTypes.string,
  column3CTA: PropTypes.string,
}

export default ThreeColumn
