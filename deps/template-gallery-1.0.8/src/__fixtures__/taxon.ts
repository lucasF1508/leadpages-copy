import cloneDeep from 'lodash.clonedeep';
import { GroupedTaxons } from '../hooks/useTemplateState';

import { Taxon, TaxonCollection, TaxonSection, GetTaxonsResponse } from '../types/mandrel';

const mockTaxon: Taxon = {
  label: 'About or Bio',
  value: 'about',
  type: TaxonCollection.categories,
  section: TaxonSection['Page Types'],
  count: 6,
};

export const makeTaxon = (): Taxon => {
  return cloneDeep(mockTaxon);
};

export const makeTaxonsResponse = (num: number): GetTaxonsResponse => {
  return {
    _status: {
      code: 200,
    },
    taxons: Array(num)
      .fill(undefined)
      .map(() => makeTaxon()),
  };
};

export const mockTaxons: Taxon[] = [
  {
    label: 'About & Bio',
    value: 'about',
    type: TaxonCollection.categories,
    section: TaxonSection['Page Types'],
    count: 25,
  },
  {
    label: 'Checkout',
    value: 'checkout',
    type: TaxonCollection.categories,
    section: TaxonSection['Page Types'],
    count: 25,
  },
  {
    label: 'Consultation',
    value: 'consultation',
    type: TaxonCollection.categories,
    section: TaxonSection['Page Types'],
    count: 25,
  },

  {
    label: 'Author',
    value: 'author',
    type: TaxonCollection.categories,
    section: TaxonSection.Industries,
    count: 25,
  },
  {
    label: 'Creative Services',
    value: 'creative-services',
    type: TaxonCollection.categories,
    section: TaxonSection.Industries,
    count: 25,
  },
  {
    label: 'Business & Marketing',
    value: 'business-marketing',
    type: TaxonCollection.categories,
    section: TaxonSection.Industries,
    count: 25,
  },

  {
    label: 'Bold',
    value: 'bold',
    type: TaxonCollection.tags,
    section: TaxonSection.Style,
    count: 25,
  },
  {
    label: 'Dark',
    value: 'dark',
    type: TaxonCollection.tags,
    section: TaxonSection.Style,
    count: 25,
  },
  {
    label: 'Colorful',
    value: 'colorful',
    type: TaxonCollection.tags,
    section: TaxonSection.Style,
    count: 25,
  },

  {
    label: 'Purple',
    section: TaxonSection.Color,
    type: TaxonCollection.tags,
    value: 'purple',
    count: 25,
  },
  {
    label: 'Yellow',
    section: TaxonSection.Color,
    type: TaxonCollection.tags,
    value: 'yellow',
    count: 25,
  },
  {
    label: 'Blue',
    section: TaxonSection.Color,
    type: TaxonCollection.tags,
    value: 'blue',
    count: 25,
  },

  {
    label: 'My Exclusive Templates',
    value: 'exclusive-templates',
    type: TaxonCollection.categories,
    section: TaxonSection.Promotion,
    count: 25,
  },
];

export const mockGroupedTaxons: GroupedTaxons[] = [
  {
    kind: TaxonSection['Page Types'],
    label: 'Page Type',
    collection: TaxonCollection.categories,
    taxons: [
      {
        label: 'About & Bio',
        value: 'about',
        type: TaxonCollection.categories,
        section: TaxonSection['Page Types'],
        count: 25,
      },
      {
        label: 'Checkout',
        value: 'checkout',
        type: TaxonCollection.categories,
        section: TaxonSection['Page Types'],
        count: 25,
      },
      {
        label: 'Consultation',
        value: 'consultation',
        type: TaxonCollection.categories,
        section: TaxonSection['Page Types'],
        count: 25,
      },
    ],
  },
  {
    kind: TaxonSection.Industries,
    label: 'Industry',
    collection: TaxonCollection.categories,
    taxons: [
      {
        label: 'Author',
        value: 'author',
        type: TaxonCollection.categories,
        section: TaxonSection.Industries,
        count: 25,
      },
      {
        label: 'Creative Services',
        value: 'creative-services',
        type: TaxonCollection.categories,
        section: TaxonSection.Industries,
        count: 25,
      },
      {
        label: 'Business & Marketing',
        value: 'business-marketing',
        type: TaxonCollection.categories,
        section: TaxonSection.Industries,
        count: 25,
      },
    ],
  },
  {
    kind: TaxonSection.Style,
    label: 'Style',
    collection: TaxonCollection.tags,
    taxons: [
      {
        label: 'Bold',
        value: 'bold',
        type: TaxonCollection.tags,
        section: TaxonSection.Style,
        count: 25,
      },
      {
        label: 'Colorful',
        value: 'colorful',
        type: TaxonCollection.tags,
        section: TaxonSection.Style,
        count: 25,
      },
      {
        label: 'Dark',
        value: 'dark',
        type: TaxonCollection.tags,
        section: TaxonSection.Style,
        count: 25,
      },
    ],
  },
  {
    label: 'Color',
    kind: TaxonSection.Color,
    collection: TaxonCollection.tags,
    taxons: [
      {
        label: 'Purple',
        section: TaxonSection.Color,
        type: TaxonCollection.tags,
        value: 'purple',
        count: 25,
      },
      {
        label: 'Yellow',
        section: TaxonSection.Color,
        type: TaxonCollection.tags,
        value: 'yellow',
        count: 25,
      },
      {
        label: 'Blue',
        section: TaxonSection.Color,
        type: TaxonCollection.tags,
        value: 'blue',
        count: 25,
      },
    ],
  },
  {
    kind: TaxonSection.Collections,
    label: 'Collections',
    collection: TaxonCollection.categories,
    taxons: [
      {
        label: 'Holiday',
        value: 'holiday',
        type: TaxonCollection.categories,
        section: TaxonSection.Collections,
        count: 1,
      },
      {
        label: 'Trending',
        value: 'trending',
        type: TaxonCollection.categories,
        section: TaxonSection.Collections,
        count: 1,
      },
      {
        label: 'Quick Launch',
        value: 'quick-launch',
        type: TaxonCollection.categories,
        section: TaxonSection.Collections,
        count: 1,
      },
      {
        label: 'Valentines',
        value: 'valentines',
        type: TaxonCollection.categories,
        section: TaxonSection.Collections,
        count: 1,
      },
      {
        label: 'Summer Sale',
        value: 'summer-sale',
        type: TaxonCollection.categories,
        section: TaxonSection.Collections,
        count: 1,
      },
      {
        label: 'Back to School',
        value: 'back-to-school',
        type: TaxonCollection.categories,
        section: TaxonSection.Collections,
        count: 1,
      },
    ],
  },
];
