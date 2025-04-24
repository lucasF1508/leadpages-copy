import React from 'react'
import {AiOutlineAlignCenter as Icon} from 'react-icons/ai'
import {TbListCheck} from 'react-icons/tb'
import {MdFormatListNumbered, MdOutlineBackupTable} from 'react-icons/md'
import {F} from '@/legacy/schema/tool'
import styled from 'styled-components'
import {colors} from '@/schema/decorators/colors'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

const SmallerTextStyle = (props) => <span style={{fontSize: '0.875em'}}>{props.children}</span>
const LargerTextStyle = (props) => <span style={{fontSize: '1.125em'}}>{props.children}</span>

export const blockContent = {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Smaller', value: 'small', component: SmallerTextStyle},
        {
          title: 'Larger',
          value: 'large',
          component: LargerTextStyle,
        },
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered (Plain)', value: 'number'},
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
        {
          title: 'Checks (Plain)',
          value: 'checkmarksPlain',

          icon: TbListCheck,
        },
        {
          title: 'Checks (Branded)',
          value: 'checkmarksBranded',
          icon: () => {
            const $TbListCheck = styled(TbListCheck)`
              > path[d^='M3.5'] {
                color: #603eff;
              }
            `
            return <$TbListCheck />
          },
        },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {
            title: 'UnderLine',
            value: 'underline',

            icon: () => <span style={{textDecoration: 'underline', fontWeight: 700}}>U</span>,
          },
          {
            title: 'Center Text',
            value: 'align',
            icon: () => <Icon />,
            component: (props) => (
              <div
                style={{
                  textAlign: 'center',
                }}
              >
                {props.children}
              </div>
            ),
          },
          ...colors,
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          F.link({
            name: 'link',
            args: {
              label: false,
            },
            fields: [
              F.string({
                name: 'href',
                hidden: ({parent}) => !parent.href,
                group: 'content',
              }),
            ],
          }),
          {
            icon: MdOutlineBackupTable,
            name: 'sidebarLink',
            type: 'object',
            fields: [
              {
                name: 'style',
                type: 'string',
                initialValue: 'h2',
                description:
                  'The style of the link: When h2, no bullet, and when set as h3 a bullet is shown.',
                options: {
                  layout: 'radio',
                  direction: 'horizontal',
                  list: [
                    {title: 'Primary', value: 'h2'},
                    {title: 'Secondary [w/Bullet]', value: 'h3'},
                  ],
                },
              },
              {
                name: 'text',
                title: 'Override Title',
                description:
                  'The text that will be visible in the sidebar. If empty, the highlighted text will be used.',
                type: 'string',
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    F.media({
      fields: [
        F.url({
          group: 'options',
        }),
        F.string({
          name: 'maxWidth',
          description: 'eg. auto, 100px, 100%, etc.',
          group: 'options',
          hidden: ({parent}) => parent.condition === 'none' || parent.condition === 'lottie',
        }),
        F.radio(['left', 'center', 'right'], {
          name: 'align',
          description:
            'Takes effect when the size of the image, controlled by Max Width, is smaller than the container.',
          title: 'Image Alignment',
          initialValue: 'center',
          group: 'options',
          hidden: ({parent}) => !parent.maxWidth,
        }),
      ],
    }),
    {
      type: 'inlineCTA',
      hidden: true,
    },
    {
      type: 'schemaInlineCTAGlobalBlock',
    },
    {
      type: 'logoGrid',
    },
    {
      type: 'dropShadowBox',
    },
    {
      type: 'table',
    },
    {
      type: 'embed',
    },
    {
      type: 'pageAnchor',
    },
    {
      type: 'audio',
    },
    {
      type: 'cardsPreviousNext',
    },
  ],
}
