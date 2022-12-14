// eslint-disable-next-line import/no-extraneous-dependencies
const Schema = require('@sanity/schema').default

module.exports = Schema.compile({
  name: 'mockSchema',
  types: [
    {
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
            {
              title: 'Standard',
              value: 'normal',
            },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'H6', value: 'h6' },
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
              },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                fields: [
                  {
                    type: 'string',
                    name: 'condition',
                  },
                  {
                    type: 'string',
                    name: 'url',
                  },
                  {
                    type: 'string',
                    name: 'linkStyle',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'object',
          title: 'Media',
          name: 'media',
          fields: [
            {
              name: 'condition',
              title: 'Condition',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              fields: [
                { type: 'string', name: 'altText' },
                { type: 'string', name: 'title' },
                { type: 'string', name: 'description' },
              ],
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
})
