import type { MouseEvent } from 'react'
import { FiFacebook } from '@react-icons/all-files/fi/FiFacebook'
import { FiMail } from '@react-icons/all-files/fi/FiMail'
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter'

const useSocialShare = (mailto?: { body: string; subject: string }) => {
  const getSharingUrl = (platform: string) => {
    if (typeof window === 'undefined') return undefined
    const siteName = document.querySelector<HTMLMetaElement>(
      'meta[property="og:site_name"]'
    )?.content
    const pageUrl = document.querySelector<HTMLMetaElement>(
      'meta[property="og:url"]'
    )?.content
    const {
      body = `Here is the url: ${pageUrl}`,
      subject = `I wanted to share an article on the ${siteName} website`,
    } = mailto || {}

    return {
      facebook: `https://www.facebook.com/sharer.php?u=${window.location.href}`,
      mailto: `mailto:?subject=${subject}&body=${body}`,
      twitter: `https://twitter.com/intent/tweet?url=${window.location.href}`,
    }[platform]
  }

  const openWindow = (url: string): void => {
    if (typeof window === 'undefined') return undefined
    if (url.includes('mailto:')) {
      window.location.href = url
      return undefined
    }
    const size = 570
    const params = [
      'menubar=no',
      'toolbar=no',
      'status=no',
      `width=${size}`,
      `height=${size}`,
      `top=${(window.innerHeight - size) / 2}`,
      `left=${(window.innerWidth - size) / 2}`,
    ].join(',')
    window.open(url, 'NewWindow', params)

    return undefined
  }

  const handleClick = (
    event: MouseEvent<SVGElement>,
    platform: keyof typeof Icons
  ) => {
    event.preventDefault()
    const url = getSharingUrl(platform)

    if (!url) {
      console.warn('No url found for platform', platform)
      return
    }

    openWindow(url)
  }

  const Icons = {
    facebook: FiFacebook,
    mailto: FiMail,
    twitter: FiTwitter,
  }

  return {
    Icons,
    getSharingUrl,
    handleClick,
    openWindow,
  }
}

export default useSocialShare
