import React from 'react'
import Media from '@components/Media'

const MediaBlock = ({
  className,
  css,
  ratio,
  priority,
  type = 'static',
  ...media
}) => (
  <Media
    className={className}
    css={css}
    ratio={ratio}
    priority={priority}
    type={type}
    media={media}
  />
)

export default MediaBlock
