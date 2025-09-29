const shapeFAQAccordion = (faqAccordion: Record<string, any>): Record<string, any> => ({
    _type: 'faqAccordion',
    heading: faqAccordion.heading || '',
    categories: faqAccordion.categories?.map((category: any) => ({
        _key: category._key,
        title: category.title || '',
        icon: category.icon,
        questions: category.questions?.map((question: any) => ({
            _key: question._key,
            title: question.title || '',
            content: question.content || [],
        })) || [],
    })) || [],
})

export default shapeFAQAccordion
