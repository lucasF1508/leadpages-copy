import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Image from '@components/Image'
// Image
import leadpagesLogoSVG from '@legacy/assets/images/global/leadpages-wordmark_white.svg'

const SidebarSVGImage = styled('img', {
  width: '33%',
  maxHeight: '20px',
})

const CompareImage = styled(Image, {
  width: '33%',
  maxHeight: '20px',
})

const ComparisonImageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$darkBlue',
  width: 'calc(100% + 1rem)',
  height: '113px',
  marginBottom: '1rem',
})

const ComparisonVersusText = styled('span', {
  fontWeight: 500,
  fontSize: '13.9px',
  lineHeight: '17px',
  textAlign: 'center',
  color: '#c3c2c1',
  margin: '0 1.2rem 0 1.2rem',
})

const SidebarCompareImage = ({ compareLogo, className }) => (
  <ComparisonImageContainer className={className}>
    <SidebarSVGImage src={leadpagesLogoSVG.src} />
    <ComparisonVersusText>vs.</ComparisonVersusText>
    <CompareImage image={compareLogo} />
  </ComparisonImageContainer>
)

SidebarCompareImage.defaultProps = {
  className: '',
}

SidebarCompareImage.propTypes = {
  competitorImage: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default SidebarCompareImage
