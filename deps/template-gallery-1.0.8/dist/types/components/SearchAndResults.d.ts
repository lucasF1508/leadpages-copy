import React from 'react';
export declare type SearchAndResultsProps = {
    inputRef: React.MutableRefObject<HTMLInputElement | null>;
    onChange: () => void;
    onClearInput: () => void;
    onClearFilters: () => void;
    filter?: string;
    numTemplates: number;
    className?: string;
    disableSearch: boolean;
    onToggleSidebar?: () => void;
};
declare const SearchAndResults: React.FC<SearchAndResultsProps>;
export default SearchAndResults;
