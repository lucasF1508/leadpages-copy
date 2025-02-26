import dynamic from 'next/dynamic'

export const platformIcons = {
  default: dynamic(() =>
    import('@react-icons/all-files/ai/AiOutlineShareAlt').then(
      ({ AiOutlineShareAlt }) => AiOutlineShareAlt
    )
  ),
  email: dynamic(() =>
    import('@react-icons/all-files/ai/AiOutlineMail').then(
      ({ AiOutlineMail }) => AiOutlineMail
    )
  ),
  facebook: dynamic(() =>
    import('@react-icons/all-files/fa/FaFacebookF').then(
      ({ FaFacebookF }) => FaFacebookF
    )
  ),
  instagram: dynamic(() =>
    import('@react-icons/all-files/fa/FaInstagram').then(
      ({ FaInstagram }) => FaInstagram
    )
  ),
  linkedin: dynamic(() =>
    import('@react-icons/all-files/fa/FaLinkedinIn').then(
      ({ FaLinkedinIn }) => FaLinkedinIn
    )
  ),
  twitter: dynamic(() =>
    import('@react-icons/all-files/fa/FaTwitter').then(
      ({ FaTwitter }) => FaTwitter
    )
  ),
  youtube: dynamic(() =>
    import('@react-icons/all-files/fa/FaYoutube').then(
      ({ FaYoutube }) => FaYoutube
    )
  ),
}

export type PlatformIconKey = keyof typeof platformIcons

export const getPlatformNameByUrl = <T extends PlatformIconKey | string>(
  url: string
): T | undefined => {
  if (!url) return undefined

  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
  const isValidUrl = urlRegex.test(url)

  if (!isValidUrl) return undefined

  const platform = new URL(url).hostname.replace('www.', '').split('.')[0]

  return platform as T
}

export default getPlatformNameByUrl
