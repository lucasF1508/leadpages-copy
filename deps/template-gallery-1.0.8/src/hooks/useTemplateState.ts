import { useReducer, useRef, useMemo } from 'react';
import {
  Taxon,
  ListingMeta,
  Template,
  TemplateKind,
  TemplateFilters,
  FilterProps,
  FilterOperators,
  SortFields,
  TaxonSection,
  TaxonCollection,
  SortBy,
} from '../types/mandrel';
import { Tracker } from '../types/tracker';
import MandrelApi from '../lib/mandrel-api';
import {
  UiTemplate,
  replacePlaceholderTemplates,
  makeUiTemplate,
  makePlaceholderTemplates,
} from '../lib/template-ui-helpers';
import { parseClientFilters } from '../lib/query-helpers';

export interface UiFilterTypes {
  [FilterProps.categories]: string;
  [FilterProps.tags]: string;
  [FilterProps.order_by]: string;
}

export interface GroupedTaxons {
  label: string;
  kind: TaxonSection;
  collection: TaxonCollection;
  taxons: Taxon[];
}

export interface TemplateState {
  kind: TemplateKind;
  templates: UiTemplate[];
  taxons: Taxon[];
  searchInputRef: React.MutableRefObject<HTMLInputElement | null>;
  getScrollTopRef: React.MutableRefObject<(() => number) | null>;
  filters: UiFilterTypes;
  ui: {
    isLoading: boolean;
    hasLoaded: boolean;
    total: number;
    count: number;
    cursor: string;
    selectedTaxon: Taxon | null;
    sidebarOpen: boolean;
  };
}

enum TemplaceActionTypes {
  LOAD_INITIAL_STATE = 'LOAD_INITIAL_STATE',
  LOAD_TEMPLATES = 'LOAD_TEMPLATES',
  UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT',
  UPDATE_CATEGORY = 'UPDATE_CATEGORY',
  UPDATE_TAG = 'UPDATE_TAG',
  UPDATE_SORT = 'UPDATE_SORT',
  SET_UI_LOADING = 'SET_UI_LOADING',
  RESET_SEARCH = 'RESET_SEARCH',
  CLEAR_FILTERS = 'CLEAR_FILTERS',
  TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR',
  LOAD_NEXT_PAGE = 'LOAD_NEXT_PAGE',
}

type TemplateAction<T, U = undefined> = {
  type: T;
  payload: U;
};

type LoadInitialStateAction = TemplateAction<
  TemplaceActionTypes.LOAD_INITIAL_STATE,
  { taxons: Taxon[]; templates: UiTemplate[]; meta: ListingMeta; selectedTaxon: Taxon | null }
>;

type LoadTemplatesAction = TemplateAction<
  TemplaceActionTypes.LOAD_TEMPLATES,
  { templates: UiTemplate[]; meta: ListingMeta }
>;

type UpdateCategoryAction = TemplateAction<TemplaceActionTypes.UPDATE_CATEGORY, Taxon>;
type UpdateTagAction = TemplateAction<TemplaceActionTypes.UPDATE_TAG, Taxon>;
type UpdateSortAction = TemplateAction<TemplaceActionTypes.UPDATE_SORT, { value: string }>;
type SetUILoadingAction = TemplateAction<TemplaceActionTypes.SET_UI_LOADING>;

type ResetSearchAction = TemplateAction<
  TemplaceActionTypes.RESET_SEARCH,
  { filters: UiFilterTypes }
>;

type ClearFiltersAction = TemplateAction<TemplaceActionTypes.CLEAR_FILTERS>;
type LoadNextPageAction = TemplateAction<
  TemplaceActionTypes.LOAD_NEXT_PAGE,
  { templates: UiTemplate[] }
>;

type ToggleSidebarAction = TemplateAction<TemplaceActionTypes.TOGGLE_SIDEBAR>;

type TemplateActions =
  | LoadTemplatesAction
  | LoadInitialStateAction
  | UpdateCategoryAction
  | UpdateSortAction
  | UpdateTagAction
  | ResetSearchAction
  | ClearFiltersAction
  | SetUILoadingAction
  | LoadNextPageAction
  | ToggleSidebarAction
  | LoadNextPageAction;

function reducer(state: TemplateState, action: TemplateActions): TemplateState {
  switch (action.type) {
    case TemplaceActionTypes.LOAD_INITIAL_STATE:
      return {
        ...state,
        taxons: action.payload.taxons,
        templates: action.payload.templates,
        ui: {
          ...state.ui,
          hasLoaded: true,
          total: action.payload.meta.total,
          count: action.payload.meta.count,
          cursor: action.payload.meta.cursor,
          isLoading: false,
          selectedTaxon: action.payload.selectedTaxon,
        },
      };
    case TemplaceActionTypes.LOAD_TEMPLATES:
      return {
        ...state,
        templates: action.payload.templates,
        ui: {
          ...state.ui,
          total: action.payload.meta.total,
          count: action.payload.meta.count,
          cursor: action.payload.meta.cursor,
          isLoading: false,
        },
      };
    case TemplaceActionTypes.LOAD_NEXT_PAGE:
      return {
        ...state,
        templates: action.payload.templates,
        ui: {
          ...state.ui,
          isLoading: true,
        },
      };
    case TemplaceActionTypes.UPDATE_CATEGORY:
      return {
        ...state,
        filters: {
          ...state.filters,
          [FilterProps.categories]: action.payload.value,
          [FilterProps.tags]: '',
        },
        ui: {
          ...state.ui,
          isLoading: true,
          selectedTaxon: action.payload,
        },
      };
    case TemplaceActionTypes.UPDATE_TAG:
      return {
        ...state,
        filters: {
          ...state.filters,
          [FilterProps.categories]: '',
          [FilterProps.tags]: action.payload.value,
        },
        ui: {
          ...state.ui,
          isLoading: true,
          selectedTaxon: action.payload,
        },
      };
    case TemplaceActionTypes.UPDATE_SORT:
      return {
        ...state,
        filters: {
          ...state.filters,
          [FilterProps.order_by]: action.payload.value,
        },
        ui: {
          ...state.ui,
          isLoading: true,
        },
      };
    case TemplaceActionTypes.SET_UI_LOADING:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoading: true,
        },
      };
    case TemplaceActionTypes.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [FilterProps.categories]: '',
          [FilterProps.tags]: '',
        },
        ui: {
          ...state.ui,
          isLoading: true,
          selectedTaxon: null,
        },
      };
    case TemplaceActionTypes.RESET_SEARCH:
      return {
        ...state,
        filters: action.payload.filters,
        ui: {
          ...state.ui,
          isLoading: true,
          selectedTaxon: null,
        },
      };
    case TemplaceActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        ui: {
          ...state.ui,
          sidebarOpen: !state.ui.sidebarOpen,
        },
      };
    default:
      return state;
  }
}

export const initialState: TemplateState = Object.freeze({
  templates: [],
  taxons: [],
  kind: TemplateKind.Leadpage,
  searchInputRef: { current: null },
  getScrollTopRef: { current: null },
  filters: {
    [FilterProps.categories]: '',
    [FilterProps.tags]: '',
    [FilterProps.order_by]: SortFields.New,
  },
  ui: {
    hasLoaded: false,
    isLoading: false,
    cursor: '',
    total: 0,
    count: 0,
    selectedTaxon: null,
    sidebarOpen: true,
  },
});

export interface TemplateActionCreators {
  init: () => void;
  onUpdateSearchInput: () => void;
  onUpdateCategory: (value: Taxon) => void;
  onUpdateTag: (value: Taxon) => void;
  onUpdateOrderBy: (value: SortBy) => void;
  onLoadNextPage: () => void;
  onResetSearch: () => void;
  onClearSearchInput: () => void;
  onClearFilters: () => void;
  onToggleSidebar: () => void;
}

export type UseTemplateProps = {
  kind: TemplateKind;
  baseUrl?: string;
  baseFilters?: TemplateFilters;
  tracker?: Tracker;
  onUpdateQueryString?(str: string): void;
  queryString?: string;
  authRequest?: boolean;
  hideSidebar?: boolean;
};

const getQueryValue = (prop: FilterProps, queryFilters?: TemplateFilters): string => {
  return queryFilters?.[prop]?.value as string;
};

const makeUiFilters = (orderBy: string, queryFilters?: TemplateFilters) => {
  return {
    [FilterProps.categories]: getQueryValue(FilterProps.categories, queryFilters) || '',
    [FilterProps.tags]: getQueryValue(FilterProps.tags, queryFilters) || '',
    [FilterProps.order_by]: getQueryValue(FilterProps.order_by, queryFilters) || orderBy,
  };
};

export function useTemplateState({
  kind,
  baseUrl,
  baseFilters,
  tracker,
  onUpdateQueryString,
  queryString,
  authRequest,
  hideSidebar,
}: UseTemplateProps): [TemplateState, TemplateActionCreators] {
  const orderBy = baseFilters?.order_by?.value || initialState.filters[FilterProps.order_by];

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    filters: makeUiFilters(orderBy, queryString ? parseClientFilters(queryString) : undefined),
    searchInputRef: useRef<HTMLInputElement>(null),
    getScrollTopRef: useRef<(() => number) | null>(null),
    templates: queryString ? [] : makePlaceholderTemplates(kind, 24),
    ui: {
      ...initialState.ui,
      sidebarOpen: !hideSidebar,
    },
  });

  const mandrelApi = useMemo(
    () =>
      new MandrelApi({
        kind,
        baseUrl,
        baseFilters,
        onUpdateQueryString,
        authRequest,
      }),
    [kind, baseUrl, baseFilters, onUpdateQueryString, authRequest],
  );
  const searchFn =
    kind === TemplateKind.Leadpage
      ? mandrelApi.getLeadpageTemplates.bind(mandrelApi)
      : mandrelApi.getSiteTemplates.bind(mandrelApi);

  const searchTimeout = useRef<number>();

  const getSearchFilters = (uiFilters: UiFilterTypes, cursor?: string) => {
    const searchVal = state.searchInputRef.current?.value || '';
    const filters: TemplateFilters = {};

    if (searchVal) {
      filters[FilterProps.name] = {
        operator: FilterOperators.icontains,
        value: searchVal.toLowerCase(), // Todo, determine other filters to add when typing in search input
      };
    }

    const category = uiFilters[FilterProps.categories];
    const tags = uiFilters[FilterProps.tags];
    const orderBy = uiFilters[FilterProps.order_by];

    if (category) {
      filters[FilterProps.categories] = {
        operator: FilterOperators.contains,
        value: category,
      };
    }

    if (tags) {
      filters[FilterProps.tags] = {
        operator: FilterOperators.contains,
        value: tags,
      };
    }

    if (orderBy) {
      filters[FilterProps.order_by] = {
        operator: FilterOperators.empty,
        value: orderBy,
      };
    }

    if (cursor) {
      filters[FilterProps.cursor] = {
        operator: FilterOperators.empty,
        value: cursor,
      };
    }

    return filters;
  };

  const scrollAndSetTemplates = (cb: () => void) => {
    if (state.getScrollTopRef.current) {
      const galleryTop = state.getScrollTopRef.current();
      const scrollEl = document.getElementById('templates-scrolling-element');

      let scrollTop = scrollEl?.scrollTop || window.pageYOffset;
      const top = scrollTop + galleryTop;

      if (galleryTop >= scrollTop) {
        cb();
      } else {
        (scrollEl || window).scrollTo({
          top,
          behavior: 'smooth',
        });

        let tries = 0;
        const checkScroll = setInterval(() => {
          scrollTop = scrollEl?.scrollTop || window.pageYOffset;
          // Check to see that we're finished scrolling before setting new template state
          // Use threshold so that we load the new templates just prior to them entering in view
          if (scrollTop <= top + window.innerHeight || tries === 20) {
            cb();
            clearInterval(checkScroll);
          }
          tries += 1;
        }, 50);
      }
    } else {
      cb();
    }
  };

  const setUiLoading = () => {
    dispatch({
      type: TemplaceActionTypes.SET_UI_LOADING,
      payload: undefined,
    });
  };

  // Maintain the same ui guids for existing templates that would change position after a query for better rendering
  const loadNewTemplates = (oldTemplates: UiTemplate[], newTemplates: Template[]): UiTemplate[] => {
    return newTemplates.map(
      (t) => oldTemplates.find((old) => old._meta.id === t._meta.id) || makeUiTemplate(t),
    );
  };

  const init = async () => {
    try {
      const taxonsResponse = await mandrelApi.getTaxons();
      const templatesResponse = await searchFn(getSearchFilters(state.filters));
      const selectedTaxonValue = state.filters.tags || state.filters.categories;
      const selectedTaxon =
        taxonsResponse.taxons.find((t) => t.value === selectedTaxonValue) || null;

      // Do not show placeholder templates if there is a query string
      const uiTemplates =
        state.templates.length > 0
          ? replacePlaceholderTemplates(state.templates, templatesResponse._items)
          : loadNewTemplates(state.templates, templatesResponse._items);

      dispatch({
        type: TemplaceActionTypes.LOAD_INITIAL_STATE,
        payload: {
          taxons: taxonsResponse.taxons,
          templates: uiTemplates,
          meta: templatesResponse._meta,
          selectedTaxon,
        },
      });
    } catch (e) {
      throw new Error('Error fetching templates');
    }
  };

  const doTemplateSearch = async (
    opts: UiFilterTypes,
    templates: UiTemplate[],
    cursor?: string,
  ) => {
    const filters = getSearchFilters(opts, cursor);

    try {
      const templatesResponse = await searchFn(filters);

      const isPaginating = !!cursor;
      const uiTemplates = isPaginating
        ? replacePlaceholderTemplates(templates, templatesResponse._items)
        : loadNewTemplates(templates, templatesResponse._items);

      const loadResponse = () => {
        dispatch({
          type: TemplaceActionTypes.LOAD_TEMPLATES,
          payload: { templates: uiTemplates, meta: templatesResponse._meta },
        });
      };

      if (isPaginating) {
        loadResponse();
      } else {
        scrollAndSetTemplates(loadResponse);
      }
    } catch (e) {
      // Todo: Add error handling
    }
  };

  const querySearch = (filters: UiFilterTypes) => {
    setUiLoading();
    doTemplateSearch(filters, state.templates);
  };

  const onUpdateSearchInput = () => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = window.setTimeout(async () => {
      const value = state.searchInputRef.current?.value || '';
      if (value && tracker?.onUpdateSearch) {
        tracker.onUpdateSearch({ value: state.searchInputRef.current?.value as string });
      }
      querySearch(state.filters);
    }, 200);
  };

  const onUpdateCategory = (taxon: Taxon) => {
    if (state.searchInputRef.current) state.searchInputRef.current.value = '';
    if (tracker?.onUpdateFilter) {
      tracker.onUpdateFilter({ value: taxon.label, kind: taxon.section });
    }
    dispatch({
      type: TemplaceActionTypes.UPDATE_CATEGORY,
      payload: taxon,
    });
    doTemplateSearch(
      {
        ...state.filters,
        [FilterProps.categories]: taxon.value,
        [FilterProps.tags]: '',
      },
      state.templates,
    );
  };

  const onUpdateTag = (taxon: Taxon) => {
    if (state.searchInputRef.current) state.searchInputRef.current.value = '';
    if (tracker?.onUpdateFilter) {
      tracker.onUpdateFilter({ value: taxon.label, kind: taxon.section });
    }
    dispatch({
      type: TemplaceActionTypes.UPDATE_TAG,
      payload: taxon,
    });
    doTemplateSearch(
      {
        ...state.filters,
        [FilterProps.categories]: '',
        [FilterProps.tags]: taxon.value,
      },
      state.templates,
    );
  };

  const onUpdateOrderBy = (sort: SortBy) => {
    const { value, label } = sort;
    if (tracker?.onUpdateOrderBy) {
      tracker.onUpdateOrderBy({ value: label });
    }
    dispatch({
      type: TemplaceActionTypes.UPDATE_SORT,
      payload: { value },
    });
    doTemplateSearch({ ...state.filters, [FilterProps.order_by]: value }, state.templates);
  };

  const onLoadNextPage = () => {
    const numLoading = Math.min(24, state.ui.total - parseInt(state.ui.cursor, 10));
    const newTemplates = state.templates.concat(makePlaceholderTemplates(kind, numLoading));

    dispatch({
      type: TemplaceActionTypes.LOAD_NEXT_PAGE,
      payload: { templates: newTemplates },
    });
    doTemplateSearch(state.filters, newTemplates, state.ui.cursor);
  };

  const onResetSearch = () => {
    dispatch({
      type: TemplaceActionTypes.RESET_SEARCH,
      payload: {
        filters: {
          [FilterProps.categories]: '',
          [FilterProps.tags]: '',
          [FilterProps.order_by]: state.filters.order_by,
        },
      },
    });

    if (state.searchInputRef.current) state.searchInputRef.current.value = '';

    doTemplateSearch(
      {
        [FilterProps.categories]: '',
        [FilterProps.tags]: '',
        [FilterProps.order_by]: orderBy,
      },
      state.templates,
    );
  };

  const onClearSearchInput = () => {
    if (state.searchInputRef.current) {
      state.searchInputRef.current.value = '';
    }
    querySearch(state.filters);
  };

  const onClearFilters = () => {
    dispatch({
      type: TemplaceActionTypes.CLEAR_FILTERS,
      payload: undefined,
    });
    doTemplateSearch(
      { ...state.filters, [FilterProps.tags]: '', [FilterProps.categories]: '' },
      state.templates,
    );
  };

  const onToggleSidebar = () => {
    if (tracker?.onToggleSidebar) {
      tracker.onToggleSidebar({ isOpen: !state.ui.sidebarOpen });
    }
    dispatch({
      type: TemplaceActionTypes.TOGGLE_SIDEBAR,
      payload: undefined,
    });
  };

  return [
    state,
    {
      init,
      onUpdateSearchInput,
      onUpdateCategory,
      onUpdateTag,
      onUpdateOrderBy,
      onLoadNextPage,
      onResetSearch,
      onClearSearchInput,
      onClearFilters,
      onToggleSidebar,
    },
  ];
}

export default useTemplateState;
