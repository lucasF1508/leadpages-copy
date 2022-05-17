import React from 'react'
import Slider from '@components/Slider'
import Image from '@components/Image'
import useImageRatio from '@hooks/useImageRatio'
import useEvalBreakpoint from '@hooks/useEvalBreakpoint'

const ImageSlider = ({ images, ...props }) => {
  if (!images) return null
  const isDesktop = useEvalBreakpoint('>s')
  return (
    <Slider
      css={{
        slide: {
          f: '0 0 auto',
          w: 'auto',
          mw: 'calc(100% - 2rem)',
        },
      }}
      {...props}
    >
      {images.map((image) => {
        const { dimension } = useImageRatio(image, isDesktop ? 500 : 300)

        return (
          <Image
            css={{
              w: dimension,
              mw: '100%',
              alignSelf: 'flex-end',
            }}
            key={image?._key}
            image={image}
          />
        )
      })}
    </Slider>
  )
}

export default ImageSlider
