import React from 'react'
import { F } from 'part:gearbox-schema-tool/schema-builder'

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

const colorText = '#0f0c09'
const colorTextAlt = '#575452'
const colorTextHighlight = '#603eff'
const colorTextHighlightAlt = '#34afbb'

const LargerTextStyle = (props) => (
  <span style={{ fontSize: '1.125em' }}>{props.children}</span>
)

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
        { title: 'Normal', value: 'normal' },
        {
          title: 'Larger',
          value: 'large',
          blockEditor: {
            render: LargerTextStyle,
          },
        },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          {
            title: 'UnderLine',
            value: 'underline',
            blockEditor: {
              icon: () => (
                <span style={{ textDecoration: 'underline', fontWeight: 700 }}>
                  U
                </span>
              ),
            },
          },
          ...[
            {
              title: 'Default Color',
              value: 'textColor',
              color: colorText,
            },
            {
              title: 'Alt Color',
              value: 'textColorAlt',
              color: colorTextAlt,
            },
            {
              title: 'Highlight Color',
              value: 'textColorHighlight',
              color: colorTextHighlight,
            },
            {
              title: 'Alt Highlight Color',
              value: 'textColorHighlightAlt',
              color: colorTextHighlightAlt,
            },
          ].map(({ title, value, color }) => ({
            title,
            value,
            blockEditor: {
              render: (props) => (
                <span
                  style={{
                    color,
                  }}
                >
                  {props.children}
                </span>
              ),
              icon: () => (
                <span
                  style={{
                    display: 'block',
                    width: '20px',
                    height: '20px',
                    borderRadius: '4px',
                    backgroundColor: color,
                  }}
                />
              ),
            },
          })),
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          F.link({
            name: 'link',
            fields: [
              F.string({
                name: 'href',
                hidden: ({ parent }) => !parent.href,
                group: 'content',
              }),
            ],
          }),
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'media',
    },
    {
      type: 'inlineCTA',
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
  ],
}
