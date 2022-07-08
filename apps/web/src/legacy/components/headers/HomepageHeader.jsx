import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
// components
import Wistia_DemoVideo from '../videos/Wistia_DemoVideo'
// utilities
import shouldDisplayVideo from '../../utils/should-display-video'
// images
import playButtonSVG from '../../assets/images/global/play-button_purple.svg'
import totemLeftSVG from '../../assets/images/totems/homepage-hero-totem-left.svg'
import totemRightSVG from '../../assets/images/totems/homepage-hero-totem-right.svg'
import wavyLineVerticalLavenderSVG from '../../assets/images/shapes/wavy-line-vertical-lavender.svg'
// videos
const videoWebM =
  'https://static.leadpages.com/mktg/videos/homepage-hero-variant-w918.webm'
const videoMp4 =
  'https://static.leadpages.com/mktg/videos/homepage-hero-variant-w918.mp4'

const OuterContainer = styled.div`
  position: relative;
  min-height: 600px;
  overflow-x: hidden;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100%;
  }
`

const InnerContainer = styled.div`
  max-width: 1140px;
  padding: 0 4rem;
  margin: 0 auto 52px auto;
  min-height: 600px;
  position: relative;

  @media (max-width: 768px) {
    height: 100%;
    min-height: 1px;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-bottom: 44px;
  }

  @media (min-width: 769px) {
    margin-bottom: 36px;
  }
`

const ShapesLeft = styled.div`
  position: absolute;
  top: -18%;
  left: -69.85%;
  width: 100%;
  height: 100%;
  z-index: -1;

  img {
    width: 70%;
  }

  @media (min-width: 1066px) {
    top: -48%;
    left: -60.35%;
  }
`

const ShapesRight = styled.div`
  position: absolute;
  top: -3.75%;
  right: -61%;
  width: 100%;
  height: 100%;
  z-index: -1;

  img {
    width: 110%;
  }

  @media (min-width: 1066px) {
    top: -27.25%;
    right: -51%;
  }
`

const TextContainer = styled.div`
  position: relative;
  margin-top: 17px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 100%;

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 55px;
  }
  @media (min-width: 769px) {
    margin-top: 68px;
    max-width: 760px;
  }
`

const Headline = styled.div`
  font-family: 'Value Serif';
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0;
  color: #0f0c09;
  margin-bottom: 2rem;

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.5px;
  }

  @media (min-width: 769px) {
    font-size: 56px;
    line-height: 60px;
    letter-spacing: 0;
  }
`

const Caption = styled.div`
  font-family: 'Apercu Pro';
  color: #575452;
  margin-bottom: 2rem;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;

  @media (min-width: 577px) {
    font-size: 18px;
    line-height: 28px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`

const Button = styled.button`
  width: 209px;
  height: 48px;
  border-radius: 48px;
  border: 3px solid #603eff;
  background-color: #603eff;
  color: #ffffff;
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #4d32cc;
    border: 3px solid #4d32cc;
  }
`

const SVG = styled(Image)``

const VideoBrowserContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 38px;

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 64px;
  }

  @media (min-width: 769px) {
    margin-top: 86px;
  }
`

const RevealVideoBrowserAnimation = keyframes`
  0% { opacity: 0; transform: translateY(25%) }
  100% { opacity: 1; transform: translateY(0) }
`

const VideoBrowser = styled.div`
  width: 100%;
  opacity: 0;
  animation-delay: 0.5s;
  animation-duration: 0.75s;
  animation-name: ${RevealVideoBrowserAnimation};
  animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
  animation-fill-mode: forwards;
`

const VideoBrowserChrome = styled.div`
  width: 100%;
  height: 11px;
  background-color: #fff;
  border: 2px solid #575452;
  border-bottom: 0;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  max-width: 918px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  & > span {
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 3px;
    background-color: #c3c2c1;
    margin-left: 4px;

    &:nth-child(1) {
      margin-left: 6px;
    }
  }

  @media (min-width: 577px) and (max-width: 768px) {
    height: 19px;

    & > span {
      width: 7px;
      height: 7px;
      border-radius: 7px;
    }
  }

  @media (min-width: 769px) {
    height: 26px;
    border-width: 3px;

    & > span {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      margin-left: 6px;

      &: nth-child(1) {
        margin-left: 9px;
      }
    }
  }
`

const VideoBrowserViewport = styled.div`
  background-color: #fff;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 918px;
  margin: 0 auto;
  overflow: hidden;
  border: 2px solid #575452;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;

  @media (min-width: 769px) {
    border-width: 3px;
  }
`

const Video = styled.video`
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const VideoFallbackImage = styled(Image)`
  padding-top: 0;
  & > div {
    padding-bottom: 0 !important;
  }
`

const VideoButtonContainer = styled.div`
  position: relative;
  margin-top: 52px;
  text-align: center;

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 44px;
  }

  @media (min-width: 769px) {
    margin-top: 36px;
  }
`

const WavyLineVerticalLavender = styled.div`
  position: absolute;
  top: -71px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  background: url('${wavyLineVerticalLavenderSVG}') no-repeat;
  width: 9px;
  height: 66px;
`

const VideoButtonArrow = styled.span`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08);
  transition: all 0.3s ease;

  & ${SVG} {
    width: 8px;
    height: 10px;
    margin-left: 2px;
  }
`

const VideoButton = styled.button`
  background: none;
  border: 0;
  display: inline-flex;
  align-items: center;
  height: 30px;
  font-family: 'Apercu Pro';
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #603eff;

  &:hover {
    color: #4d32cc;

    & ${VideoButtonArrow} {
      background-color: #603eff;
    }

    & ${SVG} {
      -webkit-filter: brightness(0) invert(1);
      filter: brightness(0) invert(1);
    }
  }
`

const HomepageHeader = () => {
  const displayVideo = shouldDisplayVideo()

  return (
    <OuterContainer>
      <InnerContainer>
        <TextContainer>
          <Headline>
            <h1>Turn Clicks into Customers</h1>
          </Headline>
          <Caption>
            Leadpages helps small businesses connect with an audience, collect
            leads, and close sales. Easily build websites, landing pages,
            pop-ups, alert bars, and beyond.
          </Caption>
          <StyledLink href="/pricing" data-qa-selector="hero-trial-link">
            <Button>Start a Free Trial</Button>
          </StyledLink>
        </TextContainer>
        <VideoBrowserContainer>
          <ShapesLeft>
            <SVG src={totemLeftSVG} alt="shapes" />
          </ShapesLeft>
          <ShapesRight>
            <SVG src={totemRightSVG} alt="shapes" />
          </ShapesRight>
          <VideoBrowser>
            <VideoBrowserChrome>
              <span></span>
              <span></span>
              <span></span>
            </VideoBrowserChrome>
            <VideoBrowserViewport>
              {/* <VideoFallbackImage
                src={getImage(images.heroFallbackImage)}
                alt="website template image"
              /> */}
              {displayVideo && (
                <Video autoPlay playsinline muted loop>
                  <source src={videoWebM} type="video/webm" />
                  <source src={videoMp4} type="video/mp4" />
                </Video>
              )}
            </VideoBrowserViewport>
            <VideoButtonContainer>
              <WavyLineVerticalLavender />
              <Wistia_DemoVideo>
                <VideoButton>
                  <span>Watch the Full Demo</span>
                  <VideoButtonArrow>
                    <SVG src={playButtonSVG} alt="purple right arrow" />
                  </VideoButtonArrow>
                </VideoButton>
              </Wistia_DemoVideo>
            </VideoButtonContainer>
          </VideoBrowser>
        </VideoBrowserContainer>
      </InnerContainer>
    </OuterContainer>
  )
}

export default HomepageHeader
