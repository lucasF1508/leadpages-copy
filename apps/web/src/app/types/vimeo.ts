export interface VimeoVideoFile {
  created_time: string
  fps: number
  height: number
  link: string
  md5: null | string
  public_name: string
  quality: string
  rendition: string
  size: number
  type: string
  width: number
}

export interface VimeoPrivacy {
  add: boolean
  comments: string
  download: boolean
  embed: string
  view: string
}

export interface VimeoPictureSize {
  height: number
  link: string
  link_with_play_button: string
  width: number
}

export interface VimeoPictures {
  active: boolean
  base_link: string
  default_picture: boolean
  resource_key: string
  sizes: VimeoPictureSize[]
  type: string
  uri: string
}

export interface VimeoVideo {
  _type: 'video'
  aspectRatio: number
  created_time: string
  description: null | string
  duration: number
  files: VimeoVideoFile[]
  height: number
  is_playable: boolean
  label: string
  link: string
  manage_link: string
  modified_time: string
  name: string
  pictures: VimeoPictures
  privacy: VimeoPrivacy
  release_time: string
  resource_key: string
  status: string
  width: number
}