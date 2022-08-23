import React from 'react'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import Link from 'next/link'
import { styled } from '@design'
// images
import rightArrowPurpleSVG from '@legacy/assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  position: 'relative',
})

const LPUContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
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
  textAlign: 'left',
  width: '75%',
  paddingRight: '10%',
  marginTop: '-15%',
  marginRight: 'auto',
  marginLeft: '-1px',
})

const StyledLink = styled('a', {
  textDecoration: 'none',
  color: '$primary',
  cursor: 'pointer',
  zIndex: 4,
})

const OutboundLink = styled('a', {
  textDecoration: 'none',
  color: '$primary',
  cursor: 'pointer',
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

const ThreeColumnOverlap = ({
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
  paddingBottom,
  paddingLeft,
  paddingLeftDesktop,
  paddingRight,
  paddingRightDesktop,
}) => (
  <OuterContainer>
    <LPUContainer
      css={{
        paddingTop: '3rem',
        paddingBottom: paddingBottom || '6rem',
        paddingRight: paddingRight || '3rem',
        paddingLeft: paddingLeft || '3rem',

        '@>m': {
          paddingRight: paddingRightDesktop || '6rem',
          paddingLeft: paddingLeftDesktop || '6rem',
        },
      }}
    >
      <FlexRow>
        <FlexRow3>
          <FlexRow3Container>
            {column1link && (
              <StyledLink href={column1link}>
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
              <OutboundLink href={column1outboundlink} alt={column1linkAlt}>
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
              <StyledLink href={column2link}>
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
              <OutboundLink href={column2outboundlink} alt={column2linkAlt}>
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
              <StyledLink href={column3link}>
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
              <OutboundLink href={column3outboundlink} alt={column3linkAlt}>
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

ThreeColumnOverlap.defaultProps = {
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
  paddingBottom: '6rem',
  paddingLeft: '3rem',
  paddingLeftDesktop: '6rem',
  paddingRight: '3rem',
  paddingRightDesktop: '6rem',
}

ThreeColumnOverlap.propTypes = {
  column1image: Image.isRequired,
  column1imageAlt: PropTypes.string,
  column1heading: PropTypes.string,
  column1copy: PropTypes.string,
  column1webinar: PropTypes.string,
  column1link: PropTypes.string,
  column1outboundlink: PropTypes.string,
  column1linkAlt: PropTypes.string,
  column1CTA: PropTypes.string,
  column2image: Image.isRequired,
  column2imageAlt: PropTypes.string,
  column2heading: PropTypes.string,
  column2copy: PropTypes.string,
  column2webinar: PropTypes.string,
  column2link: PropTypes.string,
  column2outboundlink: PropTypes.string,
  column2linkAlt: PropTypes.string,
  column2CTA: PropTypes.string,
  column3image: Image.isRequired,
  column3imageAlt: PropTypes.string,
  column3heading: PropTypes.string,
  column3copy: PropTypes.string,
  column3webinar: PropTypes.string,
  column3link: PropTypes.string,
  column3outboundlink: PropTypes.string,
  column3linkAlt: PropTypes.string,
  column3CTA: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingLeftDesktop: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingRightDesktop: PropTypes.string,
}

export default ThreeColumnOverlap
