import type { GroupedTaxons, Taxon } from '@/types'
import {
  SortFields,
  TaxonCollection,
  TaxonSection,
} from '@/types/template-constants'

export const FEATURED_OPTION = 'holiday'

export const taxonColorHexValue: Record<string, string> = Object.freeze({
  black: '#000000',
  blue: '#1B5BF8',
  'blue-green': '#15A2B2',
  gray: '#7B7B7B',
  green: '#1CA671',
  orange: '#F67503',
  pink: '#ffc0cb',
  purple: '#3F2CC5',
  red: '#FE2910',
  white: '#FFFFFF',
  yellow: '#FFC51A',
})

export const excludedSections = [
  TaxonSection['Page Types'],
  TaxonSection.Collections,
]

export const orderByList = [
  { label: 'Newest', value: SortFields.New },
  { label: 'Highest Converting', value: SortFields.Conversion },
  { label: 'Most Popular', value: SortFields.Popular },
]

export const standardTaxonSections = [
  {
    collection: TaxonCollection.categories,
    kind: TaxonSection.Collections,
    label: 'Collections',
    taxons: [],
  },
  {
    collection: TaxonCollection.categories,
    kind: TaxonSection['Page Types'],
    label: 'Page Type',
    taxons: [],
  },
  {
    collection: TaxonCollection.categories,
    kind: TaxonSection.Industries,
    label: 'Industry',
    taxons: [],
  },
  {
    collection: TaxonCollection.tags,
    kind: TaxonSection.Style,
    label: 'Style',
    taxons: [],
  },
  {
    collection: TaxonCollection.tags,
    kind: TaxonSection.Color,
    label: 'Color',
    taxons: [],
  },
]

export const promotionTaxonSections = [
  {
    collection: TaxonCollection.categories,
    kind: TaxonSection.Promotion,
    label: 'Promotion',
    taxons: [],
  },
]

const colorOrder = Object.freeze([
  'purple',
  'blue',
  'blue-green',
  'green',
  'yellow',
  'orange',
  'red',
  'gray',
  'pink',
  'black',
  'white',
])

function sortLabelAlphabetically(a: Taxon, b: Taxon): number {
  const labelA = a.label.toUpperCase()
  const labelB = b.label.toUpperCase()
  if (labelA < labelB) return -1
  if (labelA > labelB) return 1
  return 0
}

function sortTaxonColors(a: Taxon, b: Taxon) {
  const indexA = colorOrder.indexOf(a.value)
  const indexB = colorOrder.indexOf(b.value)
  if (indexA > indexB) return 1
  return indexB > indexA ? -1 : 0
}

function sortSectionTaxons(section: TaxonSection, taxons: Taxon[]): Taxon[] {
  if (section === TaxonSection.Color) {
    return taxons.sort(sortTaxonColors)
  }

  return taxons.sort(sortLabelAlphabetically)
}

export const createGroupedTaxons = (
  taxons: Taxon[],
  sectionsToCreate: GroupedTaxons[],
  excludedSections?: TaxonSection[]
): GroupedTaxons[] => {
  const groupedTaxons: Record<string, Taxon[]> = {}

  // Filter out any excluded sections
  const sections =
    excludedSections && excludedSections.length >= 1
      ? sectionsToCreate.filter(
          (section) => !excludedSections.includes(section.kind)
        )
      : sectionsToCreate
  sections.forEach((sectionInfo) => {
    if (sectionInfo?.kind) groupedTaxons[sectionInfo?.kind] = []
  })

  if (taxons && taxons.length >= 1) {
    taxons.forEach((taxon) => {
      const taxonType = taxon.section
      if (groupedTaxons[taxonType]) {
        groupedTaxons[taxonType].push(taxon)
      }
    })
  }
  return sections.map(({ collection, kind, label }: GroupedTaxons) => ({
    collection,
    kind,
    label,
    taxons: sortSectionTaxons(kind, groupedTaxons[kind] as Taxon[]),
  }))
}
