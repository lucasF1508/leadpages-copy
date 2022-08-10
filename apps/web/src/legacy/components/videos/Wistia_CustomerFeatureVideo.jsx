import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Script from 'next/script'
import WistiaTrackingScript from '@legacy/scripts/WistiaTrackingScript'

const WistiaContainer = styled('div', {
  marginBottom: '6rem',
})

const WistiaResponsivePadding = styled('div', {
  padding: '56.25% 0 0 0',
  position: 'relative',
})

const WistiaResponsiveWrapper = styled('div', {
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
})

const WistiaEmbed = styled('div', {
  height: '100%',
  position: 'relative',
  width: '100%',
})

const WistiaSwatch = styled('div', {
  height: '100%',
  left: 0,
  opacity: 0,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  transition: 'opacity 200ms',
  width: '100%',
})

const WistiaImg = styled('img', {
  filter: 'blur(5px)',
  height: '100%',
  objectFit: 'contain',
  width: '100%',
})

const Wistia_CustomerFeatureVideo = ({ videoId, className }) => (
  <>
    <WistiaTrackingScript />
    <Script src={`https://fast.wistia.com/embed/medias/${videoId}.jsonp`} />
    <Script src="https://fast.wistia.com/assets/external/E-v1.js" />
    <WistiaContainer className={className}>
      <WistiaResponsivePadding className="wistia_responsive_padding">
        <WistiaResponsiveWrapper className="wistia_responsive_wrapper">
          <WistiaEmbed
            className={`wistia_embed wistia_async_${videoId} videoFoam=true`}
          >
            <WistiaSwatch className="wistia_swatch">
              <WistiaImg
                src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
                alt="wistia video link"
                onload="this.parentNode.style.opacity=1;"
              />
            </WistiaSwatch>
          </WistiaEmbed>
        </WistiaResponsiveWrapper>
      </WistiaResponsivePadding>
    </WistiaContainer>
  </>
)

Wistia_CustomerFeatureVideo.defaultProps = {
  className: '',
}

Wistia_CustomerFeatureVideo.propTypes = {
  videoId: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Wistia_CustomerFeatureVideo
