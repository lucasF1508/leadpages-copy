import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
// images
import PlayButtonSVG from '../../assets/images/global/play-button_purple.svg'

const RTGContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: ${(props) => `${6 * props.padding}rem`};
  padding-bottom: ${(props) => `${6 * props.padding}rem`};
  padding-right: 3rem;
  padding-left: 3rem;
  background-color: ${(props) => props.background || '#0a236d'};
  z-index: ${(props) => props.zIndex};
  text-align: center;
  overflow-x: hidden;

  @media (min-width: 576px) {
    padding-top: ${(props) => `${10 * props.padding}rem`};
    padding-bottom: ${(props) => `${10 * props.padding}rem`};
    padding-right: 6rem;
    padding-left: 6rem;
  }

  @media (max-width: 360px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`

const ScrollingLink = styled(ScrollLink)`
  cursor: pointer;
  text-decoration: none;
`

const DownloadLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`

const FlexItem = styled.div`
  align-self: center;
  color: #ffffff;
`

const RTGTitle = styled(FlexItem)`
  font-family: 'Space Mono';
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 0.5rem;
`

const RTGHeadline = styled(FlexItem)`
  font-family: 'Value Serif';
  font-size: ${(props) =>
    props.headlineFontSize ? props.headlineFontSize : '3.5rem'};
  font-weight: 400;
  letter-spacing: -0.0625rem;
  line-height: 3.75rem;
  margin-bottom: 2rem;
  max-width: 730px;
  @media (max-width: 576px) {
    font-size: ${(props) =>
      props.mobileHeadlineFontSize ? props.mobileHeadlineFontSize : '1.875rem'};
    line-height: ${(props) =>
      props.mobileHeadlineLineHeight
        ? props.mobileHeadlineLineHeight
        : '2.125rem'};
    letter-spacing: 0;
  }
`

const RTGCaption = styled(FlexItem)`
  font-family: 'Apercu Pro';
  font-size: 18px;
  letter-spacing: -0.1px;
  line-height: 28px;
  margin-bottom: 2rem;
`

const MainButtonContainer = styled.div`
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: center;
`

const RTGButtonContainer = styled.div`
  align-self: center;
  padding: 0.75rem;
`

const RTGButton = styled.button`
  width: auto;
  height: 48px;
  border-radius: 48px;
  border: 3px solid #603eff;
  background-color: #603eff;
  color: #ffffff;
  font-family: 'Apercu Pro';
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  padding: 0 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  @media (min-width: 341px) and (max-width: 425px) {
    height: auto;
  }

  @media (max-width: 340px) {
    width: 240px;
    font-size: 16px;
    align-self: center;
  }

  &:hover {
    background-color: #4d32cc;
    border: 3px solid #4d32cc;
  }
`

const RTGVideoButton = styled(RTGButton)`
  background-color: transparent;
  border: 3px solid rgba(255, 255, 255, 0.7);
`

const PlayButtonIcon = styled.img`
  margin-right: 1rem;
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7478%)
    hue-rotate(186deg) brightness(114%) contrast(100%);
`

const OutboundLink = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`

const BGImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  height: 100%;
  width: auto;
  @media (max-width: 768px) {
    display: none;
  }
`

const SubText = styled(FlexItem)`
  font-family: 'Apercu Pro';
  font-size: 12px;
  letter-spacing: -0.1px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  width: 500px;
  max-width: 90%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
`

const ReadyToGrow = ({
  bgImage,
  bgColor,
  paddingScale,
  title,
  headline,
  headlineFontSize,
  mobileHeadlineFontSize,
  mobileHeadlineLineHeight,
  caption,
  buttonText,
  subText,
  showCTA,
  showDemoVideo,
  showDownloader,
  scrollTarget,
  zIndex,
}) => (
  <RTGContainer background={bgColor} padding={paddingScale} zIndex={zIndex}>
    {bgImage && <BGImage src={bgImage} alt="background svg squiggly line" />}
    <RTGTitle>{title}</RTGTitle>
    <RTGHeadline
      headlineFontSize={headlineFontSize}
      mobileHeadlineFontSize={mobileHeadlineFontSize}
      mobileHeadlineLineHeight={mobileHeadlineLineHeight}
    >
      <h2>{headline}</h2>
    </RTGHeadline>
    {caption && (
      <RTGCaption>
        <div dangerouslySetInnerHTML={{ __html: caption }} />
      </RTGCaption>
    )}
    <MainButtonContainer>
      {showCTA && (
        <RTGButtonContainer>
          {!scrollTarget && (
            <StyledLink href="/pricing" alt={buttonText}>
              <RTGButton>{buttonText}</RTGButton>
            </StyledLink>
          )}
          {scrollTarget && (
            <ScrollingLink
              href={scrollTarget}
              smooth
              duration={500}
              offset={-15}
              alt={buttonText}
            >
              <RTGButton>{buttonText}</RTGButton>
            </ScrollingLink>
          )}
          {subText && (
            <SubText>
              <p>{subText}</p>
            </SubText>
          )}
        </RTGButtonContainer>
      )}
      {showDemoVideo && (
        <RTGButtonContainer>
          <OutboundLink
            href=""
            alt="wistia video"
            data-leadbox-popup="nTViYpWLsxbkHpgfxpzrM2"
            data-leadbox-domain="lps.leadpages.net"
          >
            <RTGVideoButton>
              <PlayButtonIcon
                src={PlayButtonSVG}
                alt="play button icon"
              ></PlayButtonIcon>
              Watch a quick demo
            </RTGVideoButton>
          </OutboundLink>
        </RTGButtonContainer>
      )}
      {showDownloader && (
        <RTGButtonContainer>
          <DownloadLink
            href="https://s3.amazonaws.com/lpmarketinglibrary/Brand+Assets+-+Leadpages/Leadpages+Press+Kit.zip"
            alt="Download Brand Assets"
          >
            <RTGButton>Download Brand Assets</RTGButton>
          </DownloadLink>
        </RTGButtonContainer>
      )}
    </MainButtonContainer>
  </RTGContainer>
)

ReadyToGrow.defaultProps = {
  bgImage: null,
  bgColor: null,
  paddingScale: 1,
  title: "Let's Get Started",
  headline: 'Ready to grow?',
  headlineFontSize: '56px',
  caption:
    '<p>Take Leadpages for a test drive when you start your free 14-day trial.<br />No obligation. No reason not to.</p>',
  buttonText: 'Start a Leadpages Free Trial',
  subText: '',
  showCTA: true,
  showDemoVideo: false,
  showDownloader: false,
  scrollTarget: '',
  zIndex: 'unset',
}

ReadyToGrow.propTypes = {
  bgImage: PropTypes.string,
  bgColor: PropTypes.string,
  paddingScale: PropTypes.number,
  title: PropTypes.string,
  headline: PropTypes.string,
  headlineFontSize: PropTypes.string,
  mobileHeadlineFontSize: PropTypes.string,
  mobileHeadlineLineHeight: PropTypes.string,
  caption: PropTypes.string,
  buttonText: PropTypes.string,
  subText: PropTypes.string,
  showCTA: PropTypes.bool,
  showDemoVideo: PropTypes.bool,
  showDownloader: PropTypes.bool,
  scrollTarget: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default ReadyToGrow
