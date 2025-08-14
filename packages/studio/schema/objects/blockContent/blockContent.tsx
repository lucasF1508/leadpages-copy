import React from 'react'
import {F} from '@/schema/tool'
import {AiOutlineAlignCenter as Icon} from 'react-icons/ai'
import {TbListCheck} from 'react-icons/tb'
import {AiOutlineColumnWidth as MaxWidthIcon} from 'react-icons/ai'
import {MdFormatListNumbered} from 'react-icons/md'
import styled from 'styled-components'
import {findChildProp} from '@/utils/findChildProp'

const SmallerTextStyle = (props:any) => <span style={{fontSize: '0.875em'}}>{props.children}</span>
const LargerTextStyle = (props:any) => <span style={{fontSize: '1.125em'}}>{props.children}</span>

export const blockContent = F.array({
  title: 'Block Content',
  name: 'blockContent',
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
          title: 'Checks (Plain)',
          value: 'checkmark',
          icon: TbListCheck,
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
            component: (props: any) => (
              <div
                style={{
                  textAlign: 'center',
                }}
              >
                {props.children}
              </div>
            ),
          },
          {
            title: 'Text Gradient',
            value: 'textGradient',
            icon: () => <span
              style={{
                display: 'block',
                width: '20px',
                height: '20px',
                borderRadius: '4px',
                backgroundColor: '#9061EE',
              }}
            />,
            component: (props: any) => (
              <span
                style={{
                  color: '#9061EE',
                }}
              >{props?.children}</span>
            ),
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          F.link({
            name: 'link',
            args: {
              label: false,
              linkStyle: false,
            },
            fields: [
              F.dropdown(['button-solid', 'button-outline', 'button-secondary', 'text', 'text-secondary', 'inline'], {
                name: 'linkStyle',
                initialValue: 'inline',
                group:'options'
              }),
              F.string({
                name: 'href',
                hidden: ({parent}) => !parent.href,
                group: 'content',
              }),
            ],
          }),
          F.object({
            name: 'maxWidth',
            icon: MaxWidthIcon,
            components: {
              annotation: (props) => {
                if (!props?.value?.columnsWidth || typeof props.value.columnsWidth !== 'string') {
                  return props.renderDefault(props)
                }

                const width = (parseInt(props.value.columnsWidth.replace(/\D/g, ''), 10) / 8) * 100
                const align = findChildProp(props.textElement.props.children, 'align')

                return (
                  <div
                    style={{
                      paddingLeft: '0.5rem',
                      paddingRight: '0.5rem',
                      marginLeft: align ? 'auto' : 0,
                      marginRight: 'auto',
                      width: `${width}%`,
                      display: 'block',
                      position: 'relative',
                      borderLeft: '2px solid var(--card-border-color)',
                      borderRight: '2px solid var(--card-border-color)',
                    }}
                  >
                    {props.renderDefault(props)}
                  </div>
                )
              },
            },
            fields: [
              F.dropdown(
                [
                  {title: '8 columns', value: 'cols8'},
                  {title: '7 columns', value: 'cols7'},
                  {title: '6 columns', value: 'cols6'},
                  {title: '5 columns', value: 'cols5'},
                  {title: '4 columns', value: 'cols4'},
                  {title: '3 columns', value: 'cols3'},
                  {title: '2 columns', value: 'cols2'},
                ],
                {name: 'columnsWidth', initialValue: 'cols6'}
              ),
            ],
          }),
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
  ],
})
