export interface Meta {
  uri?: string;
  id: string;
  created: string;
  updated: string;
}

export interface ListingMeta {
  count: number;
  cursor: string;
  limit: number;
  total: number;
}

export interface ApiResponse {
  _status: {
    code: number;
    errors?: { message: string | null; severity: string }[];
  };
}

export enum TemplateKind {
  'Leadpage' = 'LeadpageTemplate',
  'Site' = 'SiteTemplate',
}

export enum TaxonCollection {
  categories = 'categories',
  tags = 'tags',
  id = 'id',
}

export enum TaxonSection {
  Collections = 'Collections',
  Content = 'Content',
  Industries = 'Industries',
  Layouts = 'Layouts',
  'Page Elements' = 'Page Elements',
  'Page Types' = 'Page Types',
  Templates = 'Templates',
  Style = 'Style',
  Color = 'Color',
  Promotion = 'Promotion',
}

export interface TemplateModel {
  uses: number;
  releaseDate: string;
  sortKey: number;
  enabled: boolean;
  currentEdition: string;
  tags: string[];
  conversionRate: number;
  previewUrl: string;
  thumbnailUrl: string;
  thumbnailUrlWebp: string;
  legacyId: string;
  thumbnailAspect: number | null;
  categories: string[];
  name: string;
}

export interface Template {
  _meta: Meta;
  kind: TemplateKind;
  template: TemplateModel;
}

export interface Taxon {
  label: string;
  value: string;
  type: TaxonCollection;
  section: TaxonSection;
  count: number;
}

export enum FilterOperators {
  '!intersects' = '[!intersects]',
  intersects = '[intersects]',
  '!superset' = '[!superset]',
  superset = '[superset]',
  '!contains' = '[!contains]',
  contains = '[contains]',
  icontains = '[icontains]',
  in = '[in]',
  eq = '[eq]',
  ne = '[ne]',
  lt = '[lt]',
  gt = '[gt]',
  lte = '[lte]',
  gte = '[gte]',
  empty = '',
}

export enum SortFields {
  New = '-release_date',
  Conversion = '-conversion_rate',
  Popular = '-pages',
}

export type SortBy = {
  value: SortFields;
  label: string;
};

export enum FilterProps {
  limit = 'limit',
  cursor = 'cursor',
  id = 'id',
  name = 'name',
  kind = 'kind',
  legacy_id = 'legacy_id',
  deleted = 'deleted',
  release_date = 'release_date',
  conversion_rate = 'conversion_rate',
  categories = 'categories',
  tags = 'tags',
  order_by = 'order_by',
}

export type Filter<T> = {
  operator: FilterOperators;
  value: T;
};

export type AllTemplateFilters = {
  [FilterProps.limit]: Filter<number>;
  [FilterProps.cursor]: Filter<string>;
  [FilterProps.id]: Filter<string>;
  [FilterProps.name]: Filter<string>;
  [FilterProps.kind]: Filter<string>;
  [FilterProps.legacy_id]: Filter<string>;
  [FilterProps.deleted]: Filter<boolean>;
  [FilterProps.release_date]: Filter<string>;
  [FilterProps.conversion_rate]: Filter<string>;
  [FilterProps.categories]: Filter<string>;
  [FilterProps.tags]: Filter<string>;
  [FilterProps.order_by]: Filter<string>;

  [key: string]: Filter<string | number | boolean>;
};

export type TemplateFilters = Partial<AllTemplateFilters>;

export type GetTemplatesResponse = ApiResponse & {
  _meta: ListingMeta;
  _items: Template[];
};

export type GetTaxonsResponse = ApiResponse & {
  taxons: Taxon[];
};

export type GetTemplateByIdResponse = ApiResponse & Template;
