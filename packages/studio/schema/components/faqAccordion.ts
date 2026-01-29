import { BsQuestionCircle as icon } from 'react-icons/bs'
import { F } from '@/schema/tool'

export const faqAccordion = F.object({
    fields: [
        F.string({
            name: 'heading',
            title: 'Heading',
            description: 'Main heading for the FAQ section',
            validation: (Rule) => Rule.required(),
        }),
        F.string({
            name: 'description',
            title: 'Description',
            description: 'Description text for the FAQ section',
        }),
        F.string({
            name: 'ctaUrl',
            title: 'CTA URL',
            description: 'URL for the call-to-action button',
        }),
        F.string({
            name: 'ctaText',
            title: 'CTA Text',
            description: 'Text for the call-to-action button',
        }),
        F.string({
            name: 'variant',
            title: 'Variant',
            options: {
                list: [
                    { title: 'Default', value: 'default' },
                    { title: 'Dark', value: 'dark' },
                    { title: 'Light', value: 'light' },
                ],
            },
            initialValue: 'default',
        }),
        F.array({
            name: 'questions',
            title: 'Questions',
            description: 'FAQ questions (for dark/light variants)',
            of: [
                F.object({
                    name: 'question',
                    title: 'Question',
                    fields: [
                        F.string({
                            name: 'title',
                            title: 'Question Title',
                            description: 'The question text',
                            validation: (Rule) => Rule.required(),
                        }),
                        F.field('blockContent', {
                            name: 'content',
                            title: 'Answer',
                            description: 'The answer content with rich text formatting',
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'title',
                        },
                        prepare({ title }) {
                            return {
                                title: title || 'Untitled Question',
                            }
                        },
                    },
                }),
            ],
        }),
        F.array({
            name: 'categories',
            title: 'Categories',
            description: 'FAQ categories with questions',
            of: [
                F.object({
                    name: 'category',
                    title: 'Category',
                    fields: [
                        F.string({
                            name: 'title',
                            title: 'Category Title',
                            description: 'Name of the FAQ category',
                            validation: (Rule) => Rule.required(),
                        }),
                        F.image({
                            name: 'icon',
                            title: 'Category Icon',
                            description: 'Icon image for the category',
                            validation: (Rule) => Rule.required(),
                        }),
                        F.array({
                            name: 'questions',
                            title: 'Questions',
                            description: 'Questions in this category',
                            of: [
                                F.object({
                                    name: 'question',
                                    title: 'Question',
                                    fields: [
                                        F.string({
                                            name: 'title',
                                            title: 'Question Title',
                                            description: 'The question text',
                                            validation: (Rule) => Rule.required(),
                                        }),
                                        F.field('blockContent', {
                                            name: 'content',
                                            title: 'Answer',
                                            description: 'The answer content with rich text formatting',
                                            validation: (Rule) => Rule.required(),
                                        }),
                                    ],
                                    preview: {
                                        select: {
                                            title: 'title',
                                        },
                                        prepare({ title }) {
                                            return {
                                                title: title || 'Untitled Question',
                                            }
                                        },
                                    },
                                }),
                            ],
                            validation: (Rule) => Rule.min(1),
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            questions: 'questions',
                        },
                        prepare({ title, questions }) {
                            const questionCount = questions?.length || 0
                            return {
                                title: title || 'Untitled Category',
                                subtitle: `${questionCount} questions`,
                            }
                        },
                    },
                }),
            ],
            validation: (Rule) => Rule.min(1),
        }),
    ],
    icon,
    name: 'faqAccordion',
    preview: {
        select: {
            title: 'heading',
            categories: 'categories',
        },
        prepare({ title, categories }) {
            const categoryCount = categories?.length || 0
            return {
                title: title || 'Untitled FAQ Accordion',
                subtitle: `${categoryCount} categories`,
                media: icon,
            }
        },
    },
    title: 'FAQ Accordion',
})
