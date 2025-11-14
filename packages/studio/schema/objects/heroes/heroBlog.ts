import { RxPerson as icon } from 'react-icons/rx'
import { F, G, P } from '@/schema/tool'

export const heroBlog = F.object({
    icon,
    name: 'heroBlog',
    groups: [
        G.define('content', { title: 'Content', default: true }),
    ],
    fields: [
        ...G.group('content', [
            F.string({
                name: 'label',
                title: 'Label',
                description: 'Breadcrumb/category label (e.g., "BLOG / AUTHOR NAME")',
            }),
            F.image({
                name: 'profileImage',
                title: 'Profile Image',
                description: 'Author profile picture (circular)',
                options: { hotspot: true },
            }),
            F.string({
                name: 'profileImageAlt',
                title: 'Profile Image Alt Text',
                description: 'Alt text for the profile image',
            }),
            F.string({
                name: 'authorName',
                title: 'Author Name',
                description: 'Full name of the author',
                validation: (Rule) => Rule.required(),
            }),
            F.string({
                name: 'authorTitle',
                title: 'Author Title/Role',
                description: 'Job title or role (e.g., "SEO Optimization Specialist, VonClaro")',
            }),
            F.text({
                name: 'biography',
                title: 'Biography',
                description: 'Author biography/description',
                rows: 4,
                validation: (Rule) => Rule.required(),
            }),
        ]),
    ],
    preview: {
        select: {
            authorName: 'authorName',
            authorTitle: 'authorTitle',
            label: 'label',
            media: 'profileImage',
        },
        prepare({ authorName = '', authorTitle = '', label = '' }) {
            return {
                title: authorName || 'Hero Blog',
                subtitle: authorTitle || label || 'Author Profile',
                media: icon,
            }
        },
    },
})
