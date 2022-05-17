import React, { useState } from 'react'
import { styled } from '@design'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { GoogleMapStyle } from '../GoogleMap'

const { SANITY_STUDIO_GOOGLE_API_KEY } = process.env

export const $GoogleMap = styled('div', {
  position: 'relative',
  w: '100%',

  '&::before': {
    pb: '100%',
    w: '100%',
    content: `''`,
    d: 'block',

    '@>s': {
      pb: '56.25%',
    },
  },

  '& > div': {
    top: 0,
    left: 0,
  },

  '& button[title="Close"]': {
    d: 'none !important',
  },
})

export const $InfoWindowInner = styled('div', {
  p: '$1 $1 0.75rem',
  ta: 'center',

  '@>s': {
    pl: '$2',
    pr: '$2',
  },

  '& h4, p': {
    m: 0,
  },
})

export function GoogleMap({ google, address, title }) {
  const [showInfoWindow, setShowInfoWindow] = useState(false)
  const [activeMarker, setActiveMarker] = useState(null)

  const handleMarkerClick = (props, marker) => {
    setShowInfoWindow(true)
    setActiveMarker(marker)
  }

  const closeInfoWindow = () => {
    if (showInfoWindow) {
      setShowInfoWindow(false)
      setActiveMarker(null)
    }
  }

  const onMapClicked = () => closeInfoWindow()
  const onInfoWindowClose = () => closeInfoWindow()

  // Set Styles
  const onMapLoaded = (props, map) => {
    map.setOptions({
      styles: GoogleMapStyle,
    })
  }

  return (
    <$GoogleMap id="derp">
      <Map
        google={google}
        zoom={15}
        initialCenter={{
          lat: address.cords.lat,
          lng: address.cords.lng,
        }}
        onClick={onMapClicked}
        scrollwheel={false}
        keyboardShortcuts={false}
        disableDoubleClickZoom={false}
        mapTypeControl={false}
        scaleControl={false}
        streetViewControl={false}
        panControl={false}
        rotateControl={false}
        fullscreenControl={false}
        onReady={(mapProps, map) => onMapLoaded(mapProps, map)}
      >
        <Marker
          icon={{
            path: 'M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z',
            fillColor: 'var(--colors-linkHover)',
            fillOpacity: 1,
            strokeColor: 'var(--colors-linkHover)',
            strokeWeight: 1,
            scale: 1.5,
            scaledSize: new google.maps.Size(36, 36),
            anchor: new google.maps.Point(12, 24),
          }}
          title={address.label}
          onClick={handleMarkerClick}
          name={'Current location'}
        />
        <InfoWindow
          marker={activeMarker}
          visible={showInfoWindow}
          onClose={onInfoWindowClose}
        >
          <$InfoWindowInner>
            <p style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>
              <strong>{title || address.street}</strong>
            </p>
            {title && !title.includes('-') && <p>{address.street}</p>}
          </$InfoWindowInner>
        </InfoWindow>
      </Map>
    </$GoogleMap>
  )
}

export default GoogleApiWrapper({
  apiKey: SANITY_STUDIO_GOOGLE_API_KEY,
})(GoogleMap)
