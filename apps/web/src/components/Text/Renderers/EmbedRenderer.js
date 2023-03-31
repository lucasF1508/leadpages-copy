import React from 'react'
import Embed from '@components/Embed'

const EmbedRenderer = ({ node: { code, isResponsive, ratio } = {} }) => (
  <Embed
    css={{ my: '$4', '&:last-child': { mb: 0 }, '& + &': { mt: '-$4' } }}
    code={code}
    isResponsive={isResponsive}
    ratio={ratio}
  />
)

export default EmbedRenderer
