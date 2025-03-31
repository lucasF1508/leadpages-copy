import type { SanityImageProps } from '@types'
import useImageParser from '@/hooks/useImageParser'

const useImageRatio = (
  image: SanityImageProps,
  value = 64,
  compareProperty = 'height'
) => {
  const { aspectRatio, ...imageProps } = useImageParser(image)

  if (!aspectRatio) {
    console.error("Image aspect ratio is missing or can't be made", image)

    return { dimension: '', aspectRatio, ...imageProps }
  }

  const dimension =
    compareProperty === 'height' ? aspectRatio * value : value / aspectRatio

  return {
    aspectRatio,
    dimension: `${dimension / 16}rem`,
    ...imageProps,
  }
}

export default useImageRatio
