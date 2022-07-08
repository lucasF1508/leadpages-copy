import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { GATSBY_IMAGE } from '../../constants/types'
// images
import checkInCircleSVG from '../../assets/images/global/check_in-circle.svg'
import rightArrowSVG from '../../assets/images/global/arrow_right.svg'

const OuterContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: visible !important;
  padding-top: 9rem;
  @media (max-width: 768px) {
    padding-top: 3rem;
  }
`

const BackgroundImage = styled(Image)`
  position: absolute;
  bottom: 0px;
  z-index: -1;
  width: 100%;
  ${(props) => (props.reverse ? 'left: 0' : 'right: 0')};
  margin-left: ${(props) => (props.reverse && props.margin ? props.margin : 0)};
  margin-right: ${(props) =>
    !props.reverse && props.margin ? props.margin : 0};
  @media (max-width: 768px) {
    width: 80%;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 0;
  @media (min-width: 576px) {
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  }
`

const RowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  justify-content: space-between;
  text-align: left;
`

const TextContainer = styled(RowItem)`
  color: #575452;
  padding-left: ${(props) => (props.reverse ? '10%' : '5%')};
  padding-right: ${(props) => (props.reverse ? '1%' : '5%')};
  margin-right: 1%;
  @media (max-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
    margin-bottom: 2rem;
    padding-left: 12.5%;
    padding-right: 12.5%;
  }
  @media (min-width: 577px) and (max-width: 991px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66%;
    flex: 0 0 66%;
    max-width: 66%;
    margin-bottom: 4rem;
    padding-left: 10%;
    padding-right: 20%;
  }
  @media (min-width: 992px) {
    ${(props) => (props.reverse ? 'margin-right: auto' : 'margin-left: auto')};
    margin-top: auto;
    margin-bottom: auto;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33%;
    flex: 0 0 33%;
    max-width: 570px;
  }
`

const ImageContainer = styled(RowItem)`
  position: relative;
  align-self: flex-end;
  padding-left: ${(props) => (props.reverse && props.padImage ? '3rem' : 0)};
  padding-right: ${(props) => (!props.reverse && props.padImage ? '3rem' : 0)};
  ${(props) =>
    !props.reverse && props.narrowOverride
      ? 'margin-left:-3rem; margin-right:3rem'
      : null};
  ${(props) =>
    props.reverse && props.narrowOverride
      ? 'margin-right:-3rem; margin-left:3rem'
      : null};
  @media (max-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 90%;
    flex: 0 0 90%;
    max-width: 90%;
    padding-left: ${(props) => (props.reverse && props.padImage ? '3rem' : 0)};
    padding-right: ${(props) =>
      !props.reverse && props.padImage ? '3rem' : 0};
  }
  @media (min-width: 577px) and (max-width: 991px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
  }
  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
    width: 46%;
  }
  @media (max-width: 991px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
  }
  > .gatsby-image-wrapper {
    ${(props) =>
      props.imageMaxWidth
        ? `max-width: ${props.imageMaxWidth}`
        : `max-width: auto`};
  }
  > .gatsby-image-wrapper > picture img {
    object-fit: contain !important;
  }
`

const Title = styled.div`
  font-family: 'Space Mono';
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
  opacity: 0.5;
  color: #000000;
  margin-bottom: 26px;
`

const Headline = styled.h3`
  width: 100%;
  font-family: 'Value Serif';
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.07px;
  color: #0f0c09;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.07px;
    margin-bottom: 16px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
    margin-bottom: 22px;
  }
  @media (min-width: 993px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
    margin-bottom: 26px;
  }
`

const Caption = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #575452;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    margin-bottom: 16px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    margin-bottom: 16px;
  }
  @media (min-width: 993px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;
    margin-bottom: 24px;
  }
`

const LinkHolder = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLink = styled(Link)`
  width: fit-content;
  margin-bottom: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
`

const OutboundStyledLink = styled.a`
  width: fit-content;
  margin-bottom: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
`

const TextWrapper = styled.span`
  padding-bottom: 2px;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
`

const CheckInCircle = styled(Image)`
  width: 18px;
  height: 18px;
  margin-bottom: -3px;
  margin-right: 20px;
  filter: brightness(0) saturate(100%) invert(3%) sepia(4%) saturate(4575%)
    hue-rotate(349deg) brightness(97%) contrast(96%);
  transition: filter 0.3s ease;
`

const ArrowRight = styled(Image)`
  width: 20px;
  height: 10px;
  margin-left: 17px;
  filter: brightness(0) saturate(100%) invert(32%) sepia(9%) saturate(194%)
    hue-rotate(341deg) brightness(94%) contrast(87%);
  transition: filter 0.3s ease;
`

const CTA = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  font-weight: 500;
  &:hover ${ArrowRight}, &:hover ${CheckInCircle} {
    filter: invert(23%) sepia(63%) saturate(3382%) hue-rotate(243deg)
      brightness(102%) contrast(107%);
    transition: filter 0.3s ease;
  }
  &:hover ${TextWrapper} {
    color: #603eff;
    border-bottom: 2px solid #603eff;
    transition: all 0.3s ease;
  }
`

const FlexRow = ({
  title,
  headline,
  caption,
  image,
  imageAlt,
  imageMaxWidth,
  padImage,
  bgImage,
  bgImageAlt,
  bgImageMargin,
  ctaArray,
  flexDirectionReverse,
  narrowOverride,
  arrows,
  checkmarks,
}) => {
  return (
    <OuterContainer>
      <FlexContainer reverse={flexDirectionReverse}>
        <TextContainer reverse={flexDirectionReverse}>
          {title && <Title>{title}</Title>}
          {headline && <Headline>{headline}</Headline>}
          {caption && <Caption>{caption}</Caption>}
          <LinkHolder>
            {!!ctaArray.length &&
              ctaArray.map((item, index) => {
                const { text, link, linkAlt, outbound } = item
                return outbound ? (
                  <OutboundStyledLink
                    key={index}
                    href={link}
                    alt={linkAlt || TextEncoder}
                  >
                    <CTA>
                      {checkmarks && (
                        <CheckInCircle
                          src={checkInCircleSVG}
                          alt="checkmark circle"
                        />
                      )}
                      <TextWrapper>{text}</TextWrapper>
                      {arrows && (
                        <ArrowRight src={rightArrowSVG} alt="right arrow" />
                      )}
                    </CTA>
                  </OutboundStyledLink>
                ) : (
                  <StyledLink key={index} href={link} alt={linkAlt || text}>
                    <CTA>
                      {checkmarks && (
                        <CheckInCircle
                          src={checkInCircleSVG}
                          alt="checkmark circle"
                        />
                      )}
                      <TextWrapper>{text}</TextWrapper>
                      {arrows && (
                        <ArrowRight src={rightArrowSVG} alt="right arrow" />
                      )}
                    </CTA>
                  </StyledLink>
                )
              })}
          </LinkHolder>
        </TextContainer>
        <ImageContainer
          reverse={flexDirectionReverse}
          padImage={padImage}
          imageMaxWidth={imageMaxWidth}
          narrowOverride={narrowOverride}
        >
          {bgImage && (
            <BackgroundImage
              src={bgImage}
              alt={bgImageAlt}
              reverse={flexDirectionReverse}
              margin={bgImageMargin}
            />
          )}
          <Image
            className="gatsby-image-wrapper"
            src={image}
            alt={imageAlt || title}
          />
        </ImageContainer>
      </FlexContainer>
    </OuterContainer>
  )
}

FlexRow.defaultProps = {
  title: '',
  headline: '',
  caption: '',
  imageAlt: null,
  imageMaxWidth: null,
  padImage: false,
  bgImage: '',
  bgImageAlt: 'background image',
  bgImageMargin: null,
  ctaArray: [],
  flexDirectionReverse: false,
  narrowOverride: false,
  arrows: true,
  checkmarks: false,
}

FlexRow.propTypes = {
  title: PropTypes.string,
  headline: PropTypes.string,
  caption: PropTypes.string,
  image: GATSBY_IMAGE.isRequired,
  imageAlt: PropTypes.string,
  imageMaxWidth: PropTypes.string,
  padImage: PropTypes.bool,
  bgImage: PropTypes.string,
  bgImageAlt: PropTypes.string,
  bgImageMargin: PropTypes.string,
  ctaArray: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      linkAlt: PropTypes.string,
      outbound: PropTypes.bool,
    })
  ),
  flexDirectionReverse: PropTypes.bool,
  narrowOverride: PropTypes.bool,
  arrows: PropTypes.bool,
  checkmarks: PropTypes.bool,
}

export default FlexRow
