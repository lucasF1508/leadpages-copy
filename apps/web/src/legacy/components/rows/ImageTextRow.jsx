import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { GATSBY_IMAGE } from '../../constants/types'
// utilities
import shouldDisplayVideo from '../../utils/should-display-video'
// gif
import gif from '../../assets/images/resources/marketing-resources-holiday-hustle-2021.gif'

const OuterContainer = styled.div`
  padding-right: 3rem;
  padding-left: 3rem;
  background-color: ${(props) => props.backgroundColor};
`

const InnerContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 576px) {
    flex-flow: column-reverse wrap;
  }
`

const MediaContainer = styled.div`
  position: relative;
  @media (max-width: 576px) {
    max-width: 100%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    margin-bottom: 4rem;
  }
  @media (min-width: 577px) {
    max-width: 41.6%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 41.6%;
    flex: 0 0 41.6%;
  }
  @media (min-width: 992px) {
    max-width: 41.6%;
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 41.6%;
    flex: 0 0 41.6%;
  }
`

const DesktopImage = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  @media (max-width: 576px) {
    display: none;
  }
`

const GifContainer = styled.div`
  width: 100%;
  max-width: 440px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`

const DesktopFallbackImage = styled(GatsbyImage)`
  width: 100%;
  max-width: 440px;
  @media (min-width: 576px) {
    margin-top: 3rem;
  }
`

const MobileImage = styled(GatsbyImage)`
  width: 100%;
  max-width: 440px;
  @media (min-width: 576px) {
    margin-top: 3rem;
  }
`

const TextContainer = styled.div`
  position: relative;
  text-align: center;
  margin: 4rem 0;
  @media (max-width: 576px) {
    max-width: 100%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
  }
  @media (min-width: 577px) {
    max-width: 50%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    text-align: left;
  }
`

const Badge = styled.div`
  display: inline-block;
  margin-bottom: 1.25rem;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  font-family: 'Space Mono';
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  > span {
    opacity: ${(props) => (props.textColor === '#ffffff' ? 0.7 : 1)};
  }
`

const Title = styled.div`
  margin-bottom: 1.25rem;
  font-family: 'Value Serif';
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  color: #fff;
`

const Body = styled.div`
  margin-bottom: 1.25rem;
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`

const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`

const Button = styled.button`
  width: 209px;
  height: 48px;
  border: 3px solid;
  border-radius: 48px;
  border-color: ${(props) => (props.secondary ? '#ffffff' : '#603eff')};
  background-color: ${(props) => (props.secondary ? '#ffffff' : '#603eff')};
  color: ${(props) => (props.secondary ? '#603eff' : '#ffffff')};
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  @media (max-width: 340px) {
    width: 240px;
    font-size: 16px;
    align-self: center;
  }
  &:hover {
    border: 3px solid;
    border-color: ${(props) => (props.secondary ? '#cccccc' : '#4d32cc')};
    background-color: ${(props) => (props.secondary ? '#cccccc' : '#4d32cc')};
  }
`

const ImageTextRow = ({
  image,
  backgroundColor,
  badgeColor,
  badgeTextColor,
  badgeText,
  title,
  body,
  ctaText,
  ctaLink,
  buttonStyling,
}) => {
  const displayGif = shouldDisplayVideo()
  return (
    <OuterContainer backgroundColor={backgroundColor}>
      <InnerContainer>
        <MediaContainer>
          {gif !== null ? (
            <GifContainer>
              {!displayGif ? (
                <DesktopFallbackImage image={image} alt={badgeText} />
              ) : (
                <DesktopImage src={gif} alt={badgeText} />
              )}
            </GifContainer>
          ) : (
            <MobileImage image={image} alt={badgeText} />
          )}
        </MediaContainer>
        <TextContainer>
          <Badge textColor={badgeTextColor} backgroundColor={badgeColor}>
            <span>{badgeText}</span>
          </Badge>
          <Title>{title}</Title>
          <Body>{body}</Body>
          <StyledLink
            href={ctaLink}
            alt={ctaText}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Button secondary={buttonStyling === 'secondary'}>{ctaText}</Button>
          </StyledLink>
        </TextContainer>
      </InnerContainer>
    </OuterContainer>
  )
}

ImageTextRow.defaultProps = {
  backgroundColor: '#ffffff',
  buttonStyling: 'primary',
}

ImageTextRow.propTypes = {
  backgroundColor: PropTypes.string,
  image: GATSBY_IMAGE.isRequired,
  badgeColor: PropTypes.string.isRequired,
  badgeTextColor: PropTypes.string.isRequired,
  badgeText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  buttonStyling: PropTypes.oneOf(['primary', 'secondary']),
}

export default ImageTextRow
