import React from 'react'
import Blockquote from '@components/Blockquote'

const BlockQuoteRenderer = ({ node: { author, content } = {} }) => (
  <Blockquote author={author} content={content} />
)

export default BlockQuoteRenderer
