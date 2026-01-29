const shapeFeatureScroll = (featureScroll: Record<string, any>): Record<string, any> => ({
  _type: 'featureScroll',
  heading: featureScroll.heading || '',
  subheading: featureScroll.subheading || '',
  laptopImage: featureScroll.laptopImage || {},
  variant: featureScroll.variant || 'light',
  features: featureScroll.features?.map((feature: any) => ({
    _key: feature._key,
    icon: feature.icon || {},
    title: feature.title || '',
    description: feature.description || '',
  })) || [],
})

export default shapeFeatureScroll

