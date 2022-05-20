import React from 'react';
import { Taxon, SortBy } from '../types/mandrel';
declare type FilterOptions = SortBy | Taxon;
export declare type FilterSectionListProps = {
    taxons: FilterOptions[];
    currentValue: string;
    onSelect(option: any): void;
    isOpen: boolean;
    listItemClass: string;
    section?: string;
    onTransitionStart?: () => void;
    onTransitionEnd?: () => void;
};
export declare const FilterSectionList: React.FC<FilterSectionListProps>;
export default FilterSectionList;
