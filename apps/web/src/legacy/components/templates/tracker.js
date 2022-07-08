export const Events = {
  templateGallerySearched: 'templateGallerySearched',
  templateGalleryFiltered: 'templateGalleryFiltered',
  templatePreviewed: 'templatePreviewed',
  useTemplateButtonClicked: 'useTemplateButtonClicked',
};

// Preserve original name mapping for GTM events
const filterKindMap = {
  Collections: 'Collection',
  'Page Types': 'Category',
  Industries: 'Industry',
  Style: 'Style',
  Color: 'Color',
};

const tracker = {
  onUpdateFilter: ({ value, kind }) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: Events.templateGalleryFiltered,
      templateFilterKind: filterKindMap[kind] || kind,
      templateFilterValue: value,
    });
  },
  onUpdateSearch: ({ value }) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: Events.templateGallerySearched,
      templateSearchQuery: value,
    });
  },
};

export default tracker;
