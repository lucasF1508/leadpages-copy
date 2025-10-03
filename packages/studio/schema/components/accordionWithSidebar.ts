import { BsListUl as icon } from 'react-icons/bs'
import { F } from '@/schema/tool'

export const accordionWithSidebar = F.object({
    fields: [
        F.string({
            name: 'heading',
            title: 'Heading',
            description: 'Main heading for the accordion section (optional)',
        }),
        F.array({
            name: 'categories',
            title: 'Categories',
            description: 'Accordion categories with subsections',
            of: [
                F.object({
                    name: 'category',
                    title: 'Category',
                    fields: [
                        F.string({
                            name: 'title',
                            title: 'Category Title',
                            description: 'Name of the category',
                            validation: (Rule) => Rule.required(),
                        }),
                        F.string({
                            name: 'sidebarTitle',
                            title: 'Sidebar Title',
                            description: 'Title to display in the sidebar (optional - if empty, uses category title)',
                        }),
                        F.string({
                            name: 'description',
                            title: 'Category Description',
                            description: 'Description of the category (appears below the title)',
                            validation: (Rule) => Rule.required(),
                        }),
                        F.image({
                            name: 'icon',
                            title: 'Category Icon',
                            description: 'Icon image for the category (optional)',
                        }),
                        F.array({
                            name: 'subsections',
                            title: 'Subsections',
                            description: 'Subsections in this category',
                            of: [
                                F.object({
                                    name: 'subsection',
                                    title: 'Subsection',
                                    fields: [
                                        F.string({
                                            name: 'title',
                                            title: 'Subsection Title',
                                            description: 'The subsection title',
                                            validation: (Rule) => Rule.required(),
                                        }),
                                        F.field('blockContent', {
                                            name: 'content',
                                            title: 'Subsection Description',
                                            description: 'The subsection description with rich text formatting',
                                            validation: (Rule) => Rule.required(),
                                        }),
                                    ],
                                    preview: {
                                        select: {
                                            title: 'title',
                                        },
                                        prepare({ title }) {
                                            return {
                                                title: title || 'Untitled Subsection',
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
                            sidebarTitle: 'sidebarTitle',
                            subsections: 'subsections',
                        },
                        prepare({ title, sidebarTitle, subsections }) {
                            const subsectionCount = subsections?.length || 0
                            return {
                                title: title || 'Untitled Category',
                                subtitle: `${sidebarTitle || title} - ${subsectionCount} subsections`,
                            }
                        },
                    },
                }),
            ],
            validation: (Rule) => Rule.min(1),
        }),
    ],
    icon,
    name: 'accordionWithSidebar',
    preview: {
        select: {
            title: 'heading',
            categories: 'categories',
        },
        prepare({ title, categories }) {
            const categoryCount = categories?.length || 0
            return {
                title: title || 'Untitled Accordion with Sidebar',
                subtitle: `${categoryCount} categories`,
                media: icon,
            }
        },
    },
    title: 'Accordion with Sidebar',
})
