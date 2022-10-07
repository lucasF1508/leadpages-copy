import PropTypes from 'prop-types'

export const baseFilters = {
  categories: {
    operator: '[!intersects]',
    value: 'incentive,blank,build-with-me',
  },
  limit: {
    operator: '',
    value: 24,
  },
}

export const TemplateKind = {
  LandingPage: 'LeadpageTemplate',
  Site: 'SiteTemplate',
}

export const DeviceKind = {
  Mobile: 'mobile',
  Desktop: 'desktop',
}

export const templatesBaseUrl = `${process.env.STARGATE_API_HOST}/template/v2/`

export const TemplateShape = PropTypes.shape({
  template: PropTypes.shape({
    uses: PropTypes.number,
    releaseDate: PropTypes.string,
    sortKey: PropTypes.number,
    enabled: PropTypes.bool,
    currentEdition: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    conversionRate: PropTypes.number,
    previewUrl: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    legacyId: PropTypes.string,
    thumbnailAspect: PropTypes.number,
    categories: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
  }),
  kind: PropTypes.string.isRequired,
  _meta: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
})

export const TaxonShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  count: PropTypes.number,
})

export const TemplateState = PropTypes.shape({
  ui: PropTypes.shape({
    selectedTaxonLabel: PropTypes.string,
    hasLoaded: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool,
  }).isRequired,
  templates: PropTypes.arrayOf(TemplateShape).isRequired,
  taxons: PropTypes.arrayOf(TaxonShape).isRequired,
  searchInputRef: PropTypes.shape({ current: PropTypes.shape({}) }),
  filters: PropTypes.shape({
    categories: PropTypes.string,
    tags: PropTypes.string,
    order_by: PropTypes.string,
  }).isRequired,
  getScrollTopRef: PropTypes.shape({ current: PropTypes.func }),
})

export const TemplateActions = PropTypes.shape({
  onResetSearch: PropTypes.func.isRequired,
  onUpdateSearchInput: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired,
  onClearSearchInput: PropTypes.func.isRequired,
  onUpdateOrderBy: PropTypes.func.isRequired,
  onUpdateCategory: PropTypes.func.isRequired,
  onUpdateTag: PropTypes.func.isRequired,
  init: PropTypes.func.isRequired,
})
