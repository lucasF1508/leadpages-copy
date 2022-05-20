import React from 'react';
export declare type TemplateSearchProps = {
    inputRef: React.MutableRefObject<HTMLInputElement | null>;
    onChange: () => void;
    onClear: () => void;
    disabled: boolean;
};
declare const TemplateSearch: React.FC<TemplateSearchProps>;
export default TemplateSearch;
