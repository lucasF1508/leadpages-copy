import type { PlatformIconKey } from 'bolts/utils'
import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import { getPlatformNameByUrl } from '@gearbox-built/bolts/utils'
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaShareNodes,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'

// TODO Swap out for a more preformant import.
export const platformIcons = {
  default: FaShareNodes,
  email: FaEnvelope,
  facebook: FaFacebook,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  pinterest: FaPinterest,
  twitter: FaXTwitter,
  youtube: FaYoutube,
}
export interface SocialShareItemType {
  label?: string
  url: string
}
export interface SocialProps
  extends Omit<React.ComponentProps<'ul'>, 'className'> {
  className?: ClassValue
  social: SocialShareItemType[]
}

export const getPlatformFromUrl = (
  url: string
): keyof typeof platformIcons | undefined => {
  if (url.includes('mailto:')) {
    return 'email'
  }

  if (!url.includes('http')) {
    return 'default'
  }

  return getPlatformNameByUrl<PlatformIconKey>(url)
}

const Social = ({ className, social, ...props }: SocialProps) => (
  <ul
    className={clsx(
      'm-0 flex flex-row flex-nowrap items-center justify-start gap-1 [&>li]:list-none',
      className
    )}
    {...props}
  >
    {social.map(({ label, url }: SocialShareItemType) => {
      const platform = getPlatformFromUrl(url)

      const Icon = platformIcons[platform || 'default']

      return (
        <li key={url}>
          <a
            aria-label={platform}
            className="bg-obsidian-800/10 flex h-4 w-4 items-center justify-center rounded-full"
            data-content={label || platform}
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="h-1/2 w-1/2" />
          </a>
        </li>
      )
    })}
  </ul>
)

export default Social
