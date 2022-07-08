import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// images
import ArrowRightPurple from '../../assets/images/global/arrow_right_purple.svg'

const MainContainer = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'rgb(0,0,0,0)'};
`

const InnerContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: ${(props) => (props.noPadding ? '0 3rem' : '3rem')};
  @media (max-width: 576px) {
    margin-bottom: 0;
  }
  @media (min-width: 992px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'rgb(0,0,0,0)'};
`

const Supertitle = styled.div`
  font-family: 'Space Mono';
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 0.5rem;
  color: ${(props) => (props.textColor ? props.textColor : '#0f0c09')};
`

const AlternateSupertitle = styled.div`
  font-family: 'Apercu Pro';
  font-size: 18px;
  letter-spacing: 0;
  line-height: 28px;
  text-align: center;
  text-transform: none;
  opacity: 1;
  margin-bottom: 0.5rem;
  color: ${(props) => (props.textColor ? props.textColor : '#575452')};
`

const Title = styled.div`
  font-family: 'Value Serif';
  font-size: 2.5rem;
  letter-spacing: -0.03125rem;
  line-height: 3rem;
  text-align: center;
  margin-bottom: ${(props) => (props.noPadding ? '0' : '1.5rem')};
  color: ${(props) => (props.textColor ? props.textColor : '#0f0c09')};
  width: 70%;
  margin-left: 15%;
  @media (max-width: 767px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
    width: 100%;
    margin-left: 0;
  }
`

const Subtitle = styled(Title)`
  font-size: 2rem;
  color: ${(props) => (props.textColor ? props.textColor : '#0f0c09')};
`

const Caption = styled.div`
  font-family: 'Apercu Pro';
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: ${(props) => (props.textColor ? props.textColor : '#575452')};
  padding-left: 4rem;
  padding-right: 4rem;
  @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 1.5rem;
    padding-left: 0rem;
    padding-right: 0rem;
  }
`

const ButtonHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

const StyledLink = styled(Link)`
  cursor: default;
`

const ButtonContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #603eff;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  transition: all 0.3s ease;
`

const ArrowSVG = styled(Image)`
  height: 12px;
  width: 12px;
  margin-left: 12px;
  transition: all 0.3s ease;
`

const Button = styled.button`
  background-color: transparent;
  border: 3px solid #d1c6f9;
  border-radius: 24px;
  padding: 7px 33px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #603eff;
    border: 3px solid #603eff;
  }
  &:hover ${ButtonContents} {
    color: white;
  }
  &:hover ${ArrowSVG} {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
      hue-rotate(93deg) brightness(103%) contrast(103%);
  }
`

const HeadlineSection = ({
  supertitle,
  alternateSupertitle,
  title,
  subtitle,
  caption,
  button,
  backgroundColor,
  textColor,
  noPadding,
  className,
}) => (
  <MainContainer backgroundColor={backgroundColor} className={className}>
    <InnerContainer noPadding={noPadding}>
      {supertitle && !alternateSupertitle && (
        <Supertitle
          dangerouslySetInnerHTML={{ __html: supertitle }}
          textColor={textColor}
        ></Supertitle>
      )}
      {alternateSupertitle && (
        <AlternateSupertitle
          dangerouslySetInnerHTML={{ __html: supertitle }}
          textColor={textColor}
        ></AlternateSupertitle>
      )}
      {title && (
        <Title
          dangerouslySetInnerHTML={{ __html: title }}
          textColor={textColor}
          noPadding={noPadding}
        />
      )}
      {subtitle && (
        <Subtitle
          dangerouslySetInnerHTML={{ __html: subtitle }}
          textColor={textColor}
        />
      )}
      {caption && (
        <Caption
          dangerouslySetInnerHTML={{ __html: caption }}
          textColor={textColor}
        />
      )}
      {button && (
        <ButtonHolder>
          <StyledLink href={button.route} alt={button.text}>
            <Button>
              <ButtonContents>
                <span>{button.text}</span>{' '}
                <ArrowSVG src={ArrowRightPurple} alt="right arrow" />
              </ButtonContents>
            </Button>
          </StyledLink>
        </ButtonHolder>
      )}
    </InnerContainer>
  </MainContainer>
)

HeadlineSection.defaultProps = {
  supertitle: '',
  alternateSupertitle: false,
  title: '',
  subtitle: '',
  caption: '',
  button: false,
  backgroundColor: '',
  textColor: '',
  noPadding: false,
  className: null,
}

HeadlineSection.propTypes = {
  supertitle: PropTypes.string,
  alternateSupertitle: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  caption: PropTypes.string,
  button: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  noPadding: PropTypes.bool,
  className: PropTypes.string,
}

export default HeadlineSection
