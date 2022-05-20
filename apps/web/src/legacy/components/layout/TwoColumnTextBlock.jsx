import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'
// images
import arrowRightPurpleSVG from '../../assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled.div`
  position: relative;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1140px;
  margin: 0 auto 3rem;
  padding: 0 3rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const TextBlock = styled.div`
  padding: 0 1rem;
  width: 100%;
  max-width: 300px;
  @media (max-width: 900px) {
    max-width: 250px;
  }
  @media (max-width: 600px) {
    padding: 1rem 0;
    max-width: 100%;
  }
`

const Heading = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 1rem;
  color: #0f0c09;
`

const MainText = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 1rem;
  color: #575452;
`

const LinkText = styled.div`
  color: #603eff;
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  font-weight: 500;
`

const ArrowSVG = styled.img`
  width: 20px;
  height: 10px;
  position: absolute;
  top: 10px;
  margin-left: 4px;
`

const StyledLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &:hover ${LinkText} {
    color: #4d32cc;
  }
  &:hover ${ArrowSVG} {
    filter: invert(18%) sepia(97%) saturate(3719%) hue-rotate(249deg)
      brightness(81%) contrast(95%);
  }
`

const GatsbyLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &:hover ${LinkText} {
    color: #4d32cc;
  }
  &:hover ${ArrowSVG} {
    filter: invert(18%) sepia(97%) saturate(3719%) hue-rotate(249deg)
      brightness(81%) contrast(95%);
  }
`

const TwoColumnTextBlock = ({ textBlockArray }) => {
  return (
    <OuterContainer>
      <InnerContainer>
        {textBlockArray.map((item, index) => {
          const { heading, text, linkType, linkRoute, linkText, linkAltText } =
            item
          return (
            <TextBlock key={index}>
              <Heading>{heading}</Heading>
              <MainText>{text}</MainText>
              {linkType === 'external' && (
                <StyledLink
                  href={linkRoute}
                  alt={linkAltText}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LinkText>
                    {linkText}
                    <ArrowSVG
                      src={arrowRightPurpleSVG}
                      alt="purple right arrow"
                    />
                  </LinkText>
                </StyledLink>
              )}
              {linkType === 'internal' && (
                <GatsbyLink href={linkRoute} alt={linkAltText} target="_blank">
                  <LinkText>
                    {linkText}
                    <ArrowSVG
                      src={arrowRightPurpleSVG}
                      alt="purple right arrow"
                    />
                  </LinkText>
                </GatsbyLink>
              )}
            </TextBlock>
          )
        })}
      </InnerContainer>
    </OuterContainer>
  )
}

TwoColumnTextBlock.propTypes = {
  textBlockArray: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      linkType: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      linkRoute: PropTypes.string.isRequired,
      linkAltText: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default TwoColumnTextBlock
