export const getRatioStyles = (ratio) => {
  const [width, height] = ratio.split(':')
  return {
    '&::before': {
      content: '',
      d: 'block',
      w: '100%',
      pb: `${(height / width) * 100}%`,
    },
  }
}
