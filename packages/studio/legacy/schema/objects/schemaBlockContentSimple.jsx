import React from 'react'
import {F} from '@/legacy/schema/tool'
import styled from 'styled-components'
import {MdFormatListNumbered} from 'react-icons/md'
import {blockContentHeadline} from './schemaBlockContentHeadline'
import {colors} from '@/schema/decorators/colors'

const [toolbar] = blockContentHeadline?.of || []

export const blockContentSimple = F.array({
  title: 'Block Content Simple',
  name: 'blockContentSimple',
  parseType: 'blockContent',
  of: [
    {
      ...toolbar,
      marks: {
        ...toolbar?.marks,
        decorators: [...(toolbar?.marks?.decorators || []), ...colors],
      },
      lists: [
        ...(toolbar?.lists || []),
        {
          title: 'Numbered (Branded)',
          value: 'numberBranded',
          icon: () => {
            const $TbListCheck = styled(MdFormatListNumbered)`
              > path[d^='M2'] {
                color: #603eff;
              }
            `
            return <$TbListCheck />
          },
        },
      ],
    },
  ],
})
