import React from 'react'

export const blockHeading = {
  title: 'Block Heading',
  name: 'blockHeading',
  type: 'array',
  parseType: 'blockContent',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [],
      },
    },
  ],
}
