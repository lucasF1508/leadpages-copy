import React from 'react'
import { FiFacebook } from '@react-icons/all-files/fi/FiFacebook'
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter'
import { FiMail } from '@react-icons/all-files/fi/FiMail'

const useSocialShare = (mailto = {}) => {
  const getSharingUrl = (platform) => {
    if (typeof window === 'undefined') return {}
    const siteName = document.querySelector(
      'meta[property="og:site_name"]'
    ).content
    const pageUrl = document.querySelector('meta[property="og:url"]').content
    const {
      subject = `I wanted to share an article on the ${siteName} website`,
      body = `Here is the url: ${pageUrl}`,
    } = mailto || {}

    return {
      facebook: `https://www.facebook.com/sharer.php?u=${window.location.href}`,
      twitter: `https://twitter.com/intent/tweet?url=${window.location.href}`,
      mailto: `mailto:?subject=${subject}&body=${body}`,
    }[platform]
  }

  const openWindow = (url) => {
    if (typeof window === 'undefined') return false
    if (url.includes('mailto:')) {
      window.location.href = url
      return false
    }
    const size = 570
    const params = [
      'menubar=no',
      'toolbar=no',
      'status=no',
      `width=${size}`,
      `height=${size}`,
      `top=${(window.height - size) / 2}`,
      `left=${(window.width - size) / 2}`,
    ].join(',')
    window.open(url, 'NewWindow', params)
  }

  const handleClick = (event, platform) => {
    event.preventDefault()
    const url = getSharingUrl(platform)
    openWindow(url)
  }

  const Icons = {
    facebook: FiFacebook,
    twitter: FiTwitter,
    mailto: FiMail,
  }

  return {
    getSharingUrl,
    openWindow,
    handleClick,
    Icons,
  }
}

export default useSocialShare
