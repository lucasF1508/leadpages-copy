import {F, G} from '@/schema/tool'
import {MdSecurity as icon} from 'react-icons/md'

export const privacySecurity = F.object({
  icon,
  title: 'Privacy & Security',
  name: 'privacySecurity',
  groups: [G.define('content', {title: 'Content', default: true})],
  fields: [
    ...G.group('content', [
      F.string({
        name: 'heading',
        title: 'Heading',
        initialValue: 'Your Privacy & Security Matter',
      }),
      F.text({
        name: 'subtitle',
        title: 'Subtitle',
        rows: 2,
        initialValue: 'We take your privacy seriously. Here is how we protect your data.',
      }),
      F.array({
        name: 'features',
        title: 'Features',
        of: [
          F.object({
            name: 'feature',
            fields: [
              F.image({
                name: 'icon',
                title: 'Icon',
              }),
              F.string({
                name: 'title',
                title: 'Title',
                validation: (Rule) => Rule.required(),
              }),
              F.text({
                name: 'description',
                title: 'Description',
                rows: 3,
              }),
            ],
            preview: {
              select: {
                title: 'title',
                subtitle: 'description',
                media: 'icon',
              },
            },
          }),
        ],
        validation: (Rule) => Rule.max(2),
        initialValue: [
          {
            title: '100% Client-Side Processing',
            description:
              'All signature generation happens in your browser. Your personal information never leaves your device or gets stored on our servers.',
          },
          {
            title: 'Secure by Design',
            description:
              'HTTPS encryption, input validation, and Content Security Policy headers protect against malicious attacks.',
          },
        ],
      }),
      F.array({
        name: 'practices',
        title: 'Security Best Practices',
        of: [
          F.object({
            name: 'practice',
            fields: [
              F.string({
                name: 'text',
                title: 'Text',
              }),
            ],
            preview: {
              select: {
                title: 'text',
              },
            },
          }),
        ],
        initialValue: [
          {text: 'HTTPS encryption enforced everywhere'},
          {text: 'Input sanitization to prevent XSS attacks'},
          {text: 'No analytics or behavioral tracking'},
          {text: 'Content Security Policy (CSP) headers'},
          {text: 'Email validation only for signature export access'},
          {text: 'Privacy first, GDPR & CCPA compliant'},
        ],
      }),
    ]),
  ],
  preview: {
    select: {
      heading: 'heading',
      features: 'features',
    },
    prepare({heading, features}) {
      const featuresCount = features?.length || 0
      return {
        title: heading || 'Privacy & Security',
        subtitle: `${featuresCount} features`,
        media: icon,
      }
    },
  },
})

