import { omit } from "lodash"

const shapeTabs = (component: Record<string, any>): Record<string, any> => {
  const filteredFields = omit(component, ['align', 'alternateLayout', 'animate', 'autoplay', 'link', 'loop', 'tabWidth'])

  return {
    ...filteredFields,
    _type: 'mediaWithItems',
    items: component.items?.map((item: any) => ({
      ...(omit(item, ['media', 'icon'])),
      _type: 'accordionItems',
    })),
    mediaItems: component.items?.map(({image, media}: any) => ({
      ...media,
      condition: media?.condition || 'image',
      image: {
        ...(media?.image || image || {}),
      },
    })),
  }
}

export default shapeTabs