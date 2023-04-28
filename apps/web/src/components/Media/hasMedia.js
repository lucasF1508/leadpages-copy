const hasMedia = (media) => {
  const { condition } = media || {}
  return media ? !!media[condition] : false
}

export default hasMedia
