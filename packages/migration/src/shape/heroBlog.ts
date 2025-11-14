const shapeHeroBlog = (hero: Record<string, any>): Record<string, any> => ({
    _type: 'heroBlog',
    authorName: hero.authorName || '',
    authorTitle: hero.authorTitle || '',
    biography: hero.biography || '',
    label: hero.label || '',
    profileImage: hero.profileImage,
    profileImageAlt: hero.profileImageAlt || '',
})

export default shapeHeroBlog
