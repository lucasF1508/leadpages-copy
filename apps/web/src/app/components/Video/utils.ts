export const hasVideo = (video: any): boolean => {
  if (!video) return false
  if (!video?.url && !video?.file?.asset?._ref && !video?.file?.url) return false

  return true
}

const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_API_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET

const VIDEO_MIME_TYPES: Record<string, string> = {
  mov: 'video/quicktime',
  mp4: 'video/mp4',
  ogg: 'video/ogg',
  webm: 'video/webm',
}

export interface FileVideoInfo {
  extension: string
  mimeType: string
  url: string
}

export const getFileVideoInfo = (video: any): FileVideoInfo | null => {
  const ref = video?.file?.asset?._ref
  if (!ref) return null
  const [, hash, extension] = ref.split('-')
  if (!hash || !extension) return null
  return {
    extension,
    mimeType: VIDEO_MIME_TYPES[extension] || `video/${extension}`,
    url: `https://cdn.sanity.io/files/${projectId}/${dataset}/${hash}.${extension}`,
  }
}
