import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'
import { GATSBY_IMAGE } from '../../constants/types'
import styled from 'styled-components'
// images
import rightArrowPurpleSVG from '../../assets/images/global/arrow_right_purple.svg'

const IconCardStyle_4Across = styled.div`
  min-height: 1px;
  position: relative;
  text-align: left;
  text-decoration: none;
  padding-right: 48px;
  display: flex;
  margin: 1rem 0;
  @media (min-width: 1200px) {
    max-width: 25%;
  }
  @media (min-width: 1024px) {
    max-width: 20%;
    &:nth-child(4n) {
      padding-right: 0px;
    }
  }
  @media (max-width: 1023px) {
    text-align: center;
    max-width: 325px;
    &:nth-child(2n) {
      padding-right: 0px;
    }
  }
  @media (max-width: 899px) {
    max-width: 38%;
  }
  @media (max-width: 600px) {
    max-width: 100%;
    padding-right: 0px;
  }
  & .details {
    font-size: 14px;
    line-height: 20px;
    color: #575452;
  }
  & h3 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #0f0c09;
  }
`

const IconCardStyle_3Across = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  @media (min-width: 576px) and (max-width: 768px) {
    flex: 0 0 48%;
    max-width: 48%;
  }
  @media (min-width: 769px) and (max-width: 991px) {
    flex: 0 0 29%;
    max-width: 29%;
  }
  @media (min-width: 992px) {
    margin-bottom: 0;
    flex: 0 0 29%;
    max-width: 29%;
    text-align: left;
  }
  & .details {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 1rem;
    color: #575452;
  }
  & h3 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #0f0c09;
  }
`

const ImageContainer = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  max-height: 3rem;
  max-width: 3rem;
  margin-right: auto;
  margin-bottom: 1rem;
  @media (max-width: 1023px) {
    margin-left: auto;
  }
`

const InternalLink = styled(Link)`
  text-decoration: none;
  color: #603eff;
  cursor: pointer;
`

const OutboundLink = styled.a`
  text-decoration: none;
  color: #603eff;
  cursor: pointer;
`

const ArrowRightPurple = styled.img`
  width: 20px;
  height: 10px;
`

const CTA = styled.span`
  color: #603eff;
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  font-weight: 500;
  margin-bottom: 2rem;
  &:hover {
    color: #4d32cc;
  }
  &:hover ${ArrowRightPurple} {
    filter: invert(18%) sepia(97%) saturate(3719%) hue-rotate(249deg)
      brightness(81%) contrast(95%);
  }
`

const IconCard = (props) => {
  const { title, icon, alt, description, link, itemsPerRow } = props
  if (itemsPerRow === 3) {
    return (
      <IconCardStyle_3Across>
        <div>
          <ImageContainer src={icon} alt={alt} width="48" height="48" />
          <h3>{title}</h3>
          <div className="details">{description}</div>
          {link && (
            <>
              {link.type === 'internal' && (
                <InternalLink href={link.route} alt={link.altText}>
                  <CTA>
                    {link.label}
                    &nbsp;
                    <ArrowRightPurple
                      src={rightArrowPurpleSVG}
                      alt="purple right arrow"
                    />
                  </CTA>
                </InternalLink>
              )}
              {link.type === 'outbound' && (
                <OutboundLink href={link.route} alt={link.altText}>
                  <CTA>
                    {link.label}
                    &nbsp;
                    <ArrowRightPurple
                      src={rightArrowPurpleSVG}
                      alt="purple right arrow"
                    />
                  </CTA>
                </OutboundLink>
              )}
            </>
          )}
        </div>
      </IconCardStyle_3Across>
    )
  }

  return (
    <IconCardStyle_4Across>
      <div>
        <ImageContainer src={icon} alt={alt} width="48" height="48" />
        <h3>{title}</h3>
        <div className="details">{description}</div>
        {link && (
          <>
            {link.type === 'internal' && (
              <InternalLink href={link.route} alt={link.altText}>
                <CTA>
                  {link.label}
                  &nbsp;
                  <ArrowRightPurple
                    src={rightArrowPurpleSVG}
                    alt="purple right arrow"
                  />
                </CTA>
              </InternalLink>
            )}
            {link.type === 'outbound' && (
              <OutboundLink href={link.route} alt={link.altText}>
                <CTA>
                  {link.label}
                  &nbsp;
                  <ArrowRightPurple
                    src={rightArrowPurpleSVG}
                    alt="purple right arrow"
                  />
                </CTA>
              </OutboundLink>
            )}
          </>
        )}
      </div>
    </IconCardStyle_4Across>
  )
}

IconCard.defaultProps = {
  alt: '',
  description: '',
  itemsPerRow: 4,
  link: null,
}

IconCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: GATSBY_IMAGE.isRequired,
  alt: PropTypes.string,
  link: PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
  }),
  itemsPerRow: PropTypes.number,
}

export default IconCard
