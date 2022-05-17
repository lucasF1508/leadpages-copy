import React from 'react'
import Embed from '@components/Embed'

const EmbedRenderer = ({ node: { code, isResponsive, ratio } = {} }) => (
  <Embed code={code} isResponsive={isResponsive} ratio={ratio} />
)

export default EmbedRenderer
