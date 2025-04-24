import React from 'react'
import {F} from '@/schema/tool'
import {AiOutlineAlignCenter as Icon} from 'react-icons/ai'

const SmallerTextStyle = (props:any) => <span style={{fontSize: '0.875em'}}>{props.children}</span>
const LargerTextStyle = (props:any) => <span style={{fontSize: '1.125em'}}>{props.children}</span>

export const blockContentSimple = F.array({
  title: 'Block Content Simple',
  name: 'blockContentSimple',
  of: [
    {
      title: 'Block',
      type: 'block',
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
      ],
      lists: [],
      marks: {
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
        annotations: [],
      },
    }
  ],
})
