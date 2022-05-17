import React from 'react'
import { styled } from '@design'

const $Social = styled('ul', {
  d: 'flex',
  ff: 'row nowrap',
  jc: 'flex-end',
  ai: 'center',

  '& > li': {
    ml: '$3',

    '@>s': {
      ml: '$5',
    },
  },

  '& a': {
    tt: 'uppercase',
  },
})

const Social = ({ className = 'social', social }) => (
  <$Social className={className}>
    {social &&
      social.map(({ label, url }) => (
        <li key={label}>
          <a href={url} rel="noopener noreferrer" data-content={label}>
            {label}
          </a>
        </li>
      ))}
  </$Social>
)

export default Social
