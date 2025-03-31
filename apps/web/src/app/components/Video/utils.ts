export const hasVideo = (video: any): boolean => {
  if (!video) return false
  if (!video?.url && !video?.file?.url) return false

  return true
}
