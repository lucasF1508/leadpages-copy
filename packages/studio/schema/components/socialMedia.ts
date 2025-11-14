import { F, G } from '@/schema/tool'
import { ShareIcon as icon } from '@sanity/icons'

export const socialMedia = F.object({
    name: 'socialMedia',
    title: 'Social Media',
    icon,
    groups: [
        G.define('content', { title: 'Content', default: true }),
    ],
    fields: [
        ...G.group('content', [
            F.string({
                name: 'heading',
                title: 'Heading',
                initialValue: 'Share This Post',
                validation: (Rule: any) => Rule.required()
            }),
            F.field('array', {
                name: 'icons',
                title: 'Social Media Icons',
                of: [
                    {
                        type: 'object',
                        name: 'socialMediaIcon',
                        fields: [
                            F.string({
                                name: 'platform',
                                title: 'Platform',
                                options: {
                                    list: [
                                        { title: 'Facebook', value: 'facebook' },
                                        { title: 'LinkedIn', value: 'linkedin' },
                                        { title: 'Instagram', value: 'instagram' },
                                        { title: 'YouTube', value: 'youtube' },
                                        { title: 'Pinterest', value: 'pinterest' },
                                        { title: 'X (Twitter)', value: 'x' },
                                    ],
                                },
                                validation: (Rule: any) => Rule.required()
                            }),
                            F.string({
                                name: 'url',
                                title: 'URL',
                                validation: (Rule: any) => Rule.required()
                            }),
                        ],
                        preview: {
                            select: {
                                title: 'platform',
                                subtitle: 'url',
                            },
                            prepare({ title, subtitle }: any) {
                                return {
                                    title: title ? title.charAt(0).toUpperCase() + title.slice(1) : 'Untitled',
                                    subtitle: subtitle,
                                }
                            },
                        },
                    },
                ],
                validation: (Rule: any) => Rule.min(1).max(6),
            }),
            F.image({
                name: 'buttonLogo',
                title: 'Button Logo',
                description: 'Logo that appears in the button (e.g., Leadpages logo)',
                options: { hotspot: true },
                fields: [F.string({ name: 'alt', title: 'Alt text' })],
            }),
            F.string({
                name: 'buttonText',
                title: 'Button Text',
                description: 'Text for the button (e.g., "By The Leadpages Team")',
                initialValue: 'By The Leadpages Team'
            }),
            F.string({
                name: 'buttonUrl',
                title: 'Button URL',
                description: 'URL where the button should link to'
            }),
        ]),
    ],
    preview: {
        select: { heading: 'heading', icons: 'icons' },
        prepare({ heading, icons }: any) {
            const count = Array.isArray(icons) ? icons.length : 0
            return { title: heading || 'Social Media', subtitle: `${count} icon(s)` }
        },
    },
})
