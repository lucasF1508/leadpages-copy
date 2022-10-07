import React from 'react'
import dynamic from 'next/dynamic'
import { styled } from '@design'

const $Social = styled('ul', {
  d: 'flex',
  ff: 'row nowrap',
  jc: 'flex-start',
  ai: 'center',
  gap: '$2',
  m: 0,

  '& > li': {
    listStyle: 'none',
  },
})
const $SocialLink = styled('a', {
  position: 'relative',
  d: 'flex',
  ai: 'center',
  jc: 'center',
  h: '$space$2_5',
  w: '$space$2_5',

  svg: {
    d: 'block',
    w: '100%',
    h: '100%',
    transition: 'color $easing$base $duration$base',
    c: '$text',
  },

  '&:hover': {
    svg: {
      c: '$brand',
    },
  },
})

const platformIcons = {
  twitter: dynamic(() =>
    import('@react-icons/all-files/fa/FaTwitter').then(
      ({ FaTwitter }) => FaTwitter
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
  youtube: dynamic(() =>
    import('@react-icons/all-files/fa/FaYoutube').then(
      ({ FaYoutube }) => FaYoutube
    )
  ),
  facebook: dynamic(() =>
    import('@react-icons/all-files/fa/FaFacebookF').then(
      ({ FaFacebookF }) => FaFacebookF
    )
  ),
  default: dynamic(() =>
    import('@react-icons/all-files/ai/AiOutlineShareAlt').then(
      ({ AiOutlineShareAlt }) => AiOutlineShareAlt
    )
  ),
}

export const getPlatformFromUrl = (url) => {
  if (url.includes('mailto:')) {
    return 'email'
  }

  if (!url.includes('http')) {
    return 'default'
  }

  const parseUrl = new URL(url)
  const [platform] = parseUrl.hostname.replace('www.', '').split('.')
  return platform
}

const Social = ({ social, ...props }) => (
  <$Social {...props}>
    {social &&
      social.map(({ label, url }) => {
        const platform = getPlatformFromUrl(url)

        const Icon = platformIcons[platform] || platformIcons?.default

        return (
          <li key={url}>
            <$SocialLink
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              data-content={label || platform}
              aria-label={platform}
            >
              <Icon />
            </$SocialLink>
          </li>
        )
      })}
  </$Social>
)

export default Social
