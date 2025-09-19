import { BsArrowLeftRight as icon } from 'react-icons/bs'
import { F } from '@/schema/tool'

export const prevNextCard = F.object({
    name: 'prevNextCard',
    title: 'Prev & Next Cards Row',
    icon,
    fields: [
        F.object({
            name: 'prevCard',
            title: 'Previous Card',
            fields: [
                F.string({ name: 'label', title: 'Label (ej. PREVIOUS)' }),
                F.string({ name: 'heading', title: 'Heading' }),
                F.rawLink({ name: 'link', args: { label: false }, required: true }),
            ],
        }),
        F.object({
            name: 'nextCard',
            title: 'Next Card',
            fields: [
                F.string({ name: 'label', title: 'Label (ej. NEXT)' }),
                F.string({ name: 'heading', title: 'Heading' }),
                F.rawLink({ name: 'link', args: { label: false }, required: true }),
            ],
        }),
    ],
    preview: {
        select: {
            prevLabel: 'prevCard.label',
            prevHeading: 'prevCard.heading',
            nextLabel: 'nextCard.label',
            nextHeading: 'nextCard.heading',
        },
        prepare: ({ prevLabel, prevHeading, nextLabel, nextHeading }) => ({
            title: `Prev: ${prevHeading || 'Untitled'} / Next: ${nextHeading || 'Untitled'}`,
            subtitle: `${prevLabel || ''} → ${nextLabel || ''}`,
            media: icon,
        }),
    },
})
