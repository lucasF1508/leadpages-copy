import { F, P } from '@/schema/tool'
import { BiImage as icon } from 'react-icons/bi'

export const startATrial = F.object({
    name: 'startATrial',
    title: 'Start a Trial CTA',
    icon,
    fields: [
        F.string({ name: 'heading' }),
        F.field('blockContent', { name: 'content' }),
        F.link({
            name: 'link',
            title: 'Start Free Trial Button',
            args: {
                label: { initialValue: 'Start Your Free Trial' },
            },
        }),
        F.image({ name: 'backgroundImage' }),
        F.radio(['horizontal', 'vertical'], {
            name: 'desktopOrientation',
            initialValue: 'vertical',
        }),
    ],
    preview: {
        select: {
            heading: 'heading',
            content: 'content',
            media: 'backgroundImage',
        },
        prepare({ heading = '', content, media }) {
            const subtitle = content ? P.richText(content) : ''
            return {
                title: heading || subtitle || 'Start a Trial',
                subtitle: heading ? subtitle : '',
                media: media?._ref ? media : icon,
            }
        },
    },
})

