import React from 'react'
import Social from '@components/Social'

const SocialLinksRenderer = ({ node: { social } = {} }) => {
  if (!social) return null

  return (
    <Social
      css={{
        gap: '$1',
        '& li': { m: 0, p: 0, '&::before': { d: 'none !important' } },

        '@<s': {
          jc: 'center',
        },
      }}
      social={social}
    />
  )
}

export default SocialLinksRenderer
