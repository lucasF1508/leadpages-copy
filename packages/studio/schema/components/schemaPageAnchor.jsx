import React from 'react'
import {FiAnchor as icon} from 'react-icons/fi'
import {F} from '@/schema/tool'

export const schemaPageAnchor = F.object({
  name: 'pageAnchor',
  icon,
  fields: [
    {
      name: 'slug',
      type: 'string',
      description: (
        <span>
          This phrase will be set as kebab case and be available to link to directly.
          <br />
          <br />
          Example:
          <br />
          Input: Frequently Asked Questions
          <br />
          Output: #frequently-asked-questions
        </span>
      ),
    },
  ],
  preview: {
    select: {
      slug: 'slug',
    },
    prepare: ({slug}) => ({
      title: slug,
      media: icon,
    }),
  },
})
