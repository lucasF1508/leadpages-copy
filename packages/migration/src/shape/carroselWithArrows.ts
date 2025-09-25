const shapeCarruselWithArrows = (carousel: Record<string, any>): Record<string, any> => ({
    _type: 'carruselWithArrows',
    cards: carousel.cards?.map((card: any) => ({
        _key: card._key,
        button: {
            href: card.button?.href || '',
            label: card.button?.label || '',
            target: card.button?.target || '_self',
        },
        description: card.description || '',
        image: card.image,
        title: card.title || '',
    })) || [],
    heading: carousel.heading || '',
    label: carousel.label || '',
})

export default shapeCarruselWithArrows
