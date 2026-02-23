import type { TemplateKind, Tracker, UiTemplate } from '@/types'
import kebabCase from 'lodash/kebabCase'
import { create } from 'zustand'
import { FilterOperators } from '@/types/template-constants'
export interface TemplateGalleryStore {
  baseFilters: any
  filterKindMap: Record<string, string>
  generateQueryStringFromPath: (
    pathname: string,
    searchParams: URLSearchParams
  ) => string
  getKindQueryParam: (kind: TemplateKind) => string
  getKindSlug: (kind: TemplateKind) => string
  getKindSlugSecondary: (kind: TemplateKind) => string
  getKindTitle: (kind: TemplateKind) => string
  getQueryParams: (string: string) => Record<string, string | undefined>
  getTemplatePreviewUrl: (
    kind: TemplateKind,
    slug: string,
    _id: string
  ) => string
  getTemplateUrl: ({
    kind,
    slug,
    template,
    _meta,
  }: {
    kind: TemplateKind
    slug?: string
    template: any
    _meta?: any
  }) => string
  joinQueryParams: (params: Record<string, string | undefined>) => string
  legacyCustomTemplateIds: string[]
  legacyTemplateFilter: (templates: UiTemplate[]) => any[]
  onUpdateQueryString: (urlParams: string) => void
  queryString: string
  setQueryString: (queryString: string) => void
  setTemplateRouteSegment: (segment: 'landing-page-template' | 'landing-page-template-new') => void
  templateRouteSegment: 'landing-page-template' | 'landing-page-template-new'
  tracker: Tracker
  trackerEvents: Record<string, string>
}

export const templateGalleryStore = create<TemplateGalleryStore>(
  (set, get) => ({
    baseFilters: {
      categories: {
        operator: FilterOperators['!intersects'],
        value: 'incentive,blank,build-with-me',
      },
      limit: {
        operator: FilterOperators['empty'],
        value: 24,
      },
    },
    // Preserve original name mapping for GTM events
    filterKindMap: {
      Collections: 'Collection',
      Color: 'Color',
      Industries: 'Industry',
      'Page Types': 'Category',
      Style: 'Style',
    },
    generateQueryStringFromPath: (pathname, searchParams) => {
      const [, , taxon, categorySlug] = pathname.split('/')
      const params = searchParams.toString()
      const category = [taxon ? 'categories' : '', categorySlug].join('=')

      return [category, params].filter(Boolean).join('&')
    },
    getKindQueryParam: (kind) => (kind === 'SiteTemplate' ? 'site' : 'page'),
    getKindSlug: (kind) =>
      kind === 'SiteTemplate' ? 'website-templates' : 'templates',
    getKindSlugSecondary: (kind) =>
      kind === 'SiteTemplate' ? 'website-template' : get().templateRouteSegment,
    getKindTitle: (kind) =>
      kind === 'SiteTemplate' ? 'Website' : 'Landing Page',
    getQueryParams: (queryString) => {
      const parts = queryString.split('&').filter(Boolean)
      return parts.reduce<ReturnType<TemplateGalleryStore['getQueryParams']>>(
        (acc, curr) => {
          const [key, value] = curr.split('=')
          if (!key) return acc
          return {
            ...acc,
            [key]: value,
          }
        },
        {}
      )
    },
    getTemplatePreviewUrl: (kind: TemplateKind, slug: string, _id: string) =>
      `/${get().getKindSlug(kind)}/preview/${slug || _id}`,
    getTemplateUrl: ({ kind, slug: _slug, template, _meta }) => {
      const slug =
        _slug ||
        template?.slug?.current ||
        (typeof template?.slug === 'string' ? template.slug : null) ||
        _meta?.slug ||
        kebabCase(template?.name)

      if (!slug) {
        return ''
      }

      // Check if template doesn't have a valid Mandrel ID
      // If so, use template-inspiration route
      const templateId = _meta?.id || template?.id || ''
      const hasValidMandrelId = templateId && 
        templateId.trim() !== '' &&
        !templateId.includes('example') &&
        !templateId.includes('test') &&
        !templateId.includes('ejemplo') &&
        !templateId.includes('prueba') &&
        templateId.length >= 10

      // For templates without Mandrel ID, use template-inspiration route
      if (!hasValidMandrelId) {
        const templateType = kind === 'SiteTemplate'
          ? 'website-template'
          : 'landing-page-template'
        const url = `/template-inspiration/${templateType}/${slug}`
        return url
      }

      // For templates with valid Mandrel ID, use normal route
      const url = `/${get().getKindSlug(kind)}/${get().getKindSlugSecondary(kind)}/${slug}`
      return url
    },
    joinQueryParams: (params) =>
      Object.entries(params).reduce((acc, [key, value]) => {
        if (!key || !value) return acc
        return [acc, [key, value].join('=')].filter(Boolean).join('&')
      }, ''),
    // Legacy custom template IDs that need to be hidden. Not sure if these are still relevant.
    // https://github.com/gearbox-built/leadpages-rack-pinion/issues/364
    legacyCustomTemplateIds: [
      '7ZSCbCoHdiE49WenWPoCLe',
      'RfijoAZKHWuDFbQDyWZPRo',
      'pvUj4rdpRwWzsXDnWxKytg',
      'Pdpa6sFKmZdekRyqb9sLL3',
    ],
    legacyTemplateFilter: (templates) => {
      const legacyCustomTemplateIds = get().legacyCustomTemplateIds
      return templates.filter(
        (template) => !legacyCustomTemplateIds.includes(template._meta.id!)
      )
    },
    onUpdateQueryString: (urlParams: string) => {
      const basePath = window.location.pathname.split('/category/')[0]
      const params = new URLSearchParams(urlParams)

      const category = params.get('categories')
      params.delete('categories')

      const path = [
        basePath,
        category && `/category/${category}`,
        '?',
        params.toString(),
      ]
        .filter(Boolean)
        .join('')

      window.history.pushState({ ...window.history.state, as: path }, '', path)
    },
    queryString: '',
    setQueryString: (queryString: string) => set({ queryString }),
    setTemplateRouteSegment: (segment) => set({ templateRouteSegment: segment }),
    templateRouteSegment: 'landing-page-template',
    tracker: {
      onUpdateFilter: ({ kind, value }) => {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: get().trackerEvents.templateGalleryFiltered,
          templateFilterKind: get().filterKindMap[kind] || kind,
          templateFilterValue: value,
        })
        return null
      },
      onUpdateSearch: ({ value }) => {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: get().trackerEvents.templateGallerySearched,
          templateSearchQuery: value,
        })
        return null
      },
    },
    trackerEvents: {
      templateGalleryFiltered: 'templateGalleryFiltered',
      templateGallerySearched: 'templateGallerySearched',
      templatePreviewed: 'templatePreviewed',
      useTemplateButtonClicked: 'useTemplateButtonClicked',
    },
  })
)

export default templateGalleryStore
