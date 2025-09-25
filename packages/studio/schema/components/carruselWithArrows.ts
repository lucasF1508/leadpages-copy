import { BsGrid3X3Gap as icon } from 'react-icons/bs'
import { F } from '@/schema/tool'

export const carruselWithArrows = F.object({
    fields: [
        F.string({
            name: 'heading',
            title: 'Heading',
            description: 'Main heading for the carousel section',
            validation: (Rule) => Rule.required(),
        }),
        F.string({
            name: 'label',
            title: 'Label',
            description: 'Optional label/tag below the heading',
        }),
        F.array({
            name: 'cards',
            title: 'Cards',
            description: 'Cards to display in the carousel',
            of: [
                F.object({
                    name: 'card',
                    title: 'Card',
                    fields: [
                        F.image({
                            name: 'image',
                            title: 'Image',
                            description: 'Card image',
                            validation: (Rule) => Rule.required(),
                        }),
                        F.string({
                            name: 'title',
                            title: 'Title',
                            description: 'Card title',
                            validation: (Rule) => Rule.required(),
                        }),
                        F.text({
                            name: 'description',
                            title: 'Description',
                            description: 'Card description',
                            rows: 3,
                            validation: (Rule) => Rule.required(),
                        }),
                        F.object({
                            name: 'button',
                            title: 'Button',
                            fields: [
                                F.string({
                                    name: 'label',
                                    title: 'Button Label',
                                    description: 'Text for the button',
                                    validation: (Rule) => Rule.required(),
                                }),
                                F.string({
                                    name: 'href',
                                    title: 'Button URL',
                                    description: 'Link URL for the button',
                                    validation: (Rule) => Rule.required(),
                                }),
                                F.dropdown(['_self', '_blank'], {
                                    name: 'target',
                                    title: 'Link Target',
                                    initialValue: '_self',
                                }),
                            ],
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            media: 'image',
                        },
                        prepare({ title, media }) {
                            return {
                                title: title || 'Untitled Card',
                                media: media,
                            }
                        },
                    },
                }),
            ],
            validation: (Rule) => Rule.min(1).max(10),
        }),
    ],
    icon,
    name: 'carruselWithArrows',
    preview: {
        select: {
            title: 'heading',
            subtitle: 'label',
            cards: 'cards',
        },
        prepare({ title, subtitle, cards }) {
            const cardCount = cards?.length || 0
            return {
                title: title || 'Untitled Carousel',
                subtitle: subtitle ? `${subtitle} • ${cardCount} cards` : `${cardCount} cards`,
                media: icon,
            }
        },
    },
    title: 'Carousel with Arrows',
})
