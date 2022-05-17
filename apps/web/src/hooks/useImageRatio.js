import useImageParser from '@hooks/useImageParser'

const useImageRatio = (image, value = 64, compareProperty = 'height') => {
  const { aspectRatio, ...imageProps } = useImageParser(image)
  const dimension =
    compareProperty === 'height' ? aspectRatio * value : value / aspectRatio

  return {
    dimension: `${dimension / 16}rem`,
    aspectRatio,
    ...imageProps,
  }
}

export default useImageRatio
