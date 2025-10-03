const shapeAccordionWithSidebar = (accordionWithSidebar: Record<string, any>): Record<string, any> => ({
    _type: 'accordionWithSidebar',
    categories: accordionWithSidebar.categories?.map((category: any) => ({
        _key: category._key,
        description: category.description || '',
        icon: category.icon,
        sidebarTitle: category.sidebarTitle || '',
        subsections: category.subsections?.map((subsection: any) => ({
            _key: subsection._key,
            content: subsection.content || [],
            title: subsection.title || '',
        })) || [],
        title: category.title || '',
    })) || [],
    heading: accordionWithSidebar.heading || '',
})

export default shapeAccordionWithSidebar
