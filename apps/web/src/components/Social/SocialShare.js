import React from 'react'
import { styled } from '@design'
import useSocialShare from '@hooks/useSocialShare'

const $SocialShare = styled('div', {
  display: 'flex',
  gap: '$3',

  svg: {
    w: '$space$3',
    h: '$space$3',
    cursor: 'pointer',
  },

  variants: {
    layout: {
      horizontal: {
        ff: 'row nowrap',
      },
      vertical: {
        ff: 'column',
      },
    },
  },
})

const SocialShare = ({
  platforms = ['facebook', 'twitter', 'mailto'],
  layout = 'horizontal',
  doc,
  label,
  ...props
}) => {
  const { handleClick, Icons } = useSocialShare()

  return (
    <$SocialShare layout={layout} {...props}>
      {label && label}
      {platforms &&
        platforms.map((platform) => {
          const Icon = Icons[platform]
          return (
            <Icon
              key={platform}
              onClick={(event) => handleClick(event, platform)}
            />
          )
        })}
    </$SocialShare>
  )
}

export default SocialShare
