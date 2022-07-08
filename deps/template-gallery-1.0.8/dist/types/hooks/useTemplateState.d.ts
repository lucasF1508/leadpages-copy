/// <reference types="react" />
import { Taxon, TemplateKind, TemplateFilters, FilterProps, TaxonSection, TaxonCollection, SortBy } from '../types/mandrel';
import { Tracker } from '../types/tracker';
import { UiTemplate } from '../lib/template-ui-helpers';
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
export declare const initialState: TemplateState;
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
export declare type UseTemplateProps = {
    kind: TemplateKind;
    baseUrl?: string;
    baseFilters?: TemplateFilters;
    tracker?: Tracker;
    onUpdateQueryString?(str: string): void;
    queryString?: string;
    authRequest?: boolean;
    hideSidebar?: boolean;
};
export declare function useTemplateState({ kind, baseUrl, baseFilters, tracker, onUpdateQueryString, queryString, authRequest, hideSidebar, }: UseTemplateProps): [TemplateState, TemplateActionCreators];
export default useTemplateState;
