import { create } from 'zustand'
import { styled } from '@design'
import Image from '@components/Image'
import NavColumnCarouselForeground from './NavColumnCarouselForeground'

export const useCarouselStore = create((set) => ({
  imageData: null,
  updateImageData: (imageData) => set({ imageData }),
  isTimerActive: true,
  setIsTimerActive: (isTimerActive) => set({ isTimerActive }),
  timeoutId: null,
  setTimeoutId: (id) => set({ timeoutId: id }),
  clearTimeoutId: () => set({ timeoutId: null }),
}))

const $NavColumnCarousel = styled('div', {
  d: 'none',
  fd: 'column',
  jc: 'flex-end',
  backgroundColor: '$lavenderDark',
  borderRadius: '$radii$navItem',
  boxSizing: 'border-box',
  flexGrow: 1,
  maxWidth: '22.125rem',
  overflow: 'hidden',
  position: 'relative',
  backdropFilter: 'blur(0)',

  '@>993': {
    d: 'flex',
  },
})

const $Image = styled('div', {
  position: 'absolute',
  inset: 0,

  '& > figure': {
    height: '100%',
  },
})

const NavColumnCarousel = ({
  rows,
  templateBackgroundImage,
  templateCarouselIdleImages,
}) => {
  const slides = rows.reduce((acc, row) => {
    const filteredItems = row.items.filter((item) => item.templateImage)
    return acc.concat(filteredItems)
  }, [])

  return (
    <$NavColumnCarousel>
      {templateBackgroundImage && (
        <$Image>
          <Image image={templateBackgroundImage} />
        </$Image>
      )}
      <NavColumnCarouselForeground
        slides={slides}
        templateCarouselIdleImages={templateCarouselIdleImages}
      />
    </$NavColumnCarousel>
  )
}

export default NavColumnCarousel
