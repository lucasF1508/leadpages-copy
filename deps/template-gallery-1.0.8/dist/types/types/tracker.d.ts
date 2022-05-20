import { UiTemplate } from '../lib/template-ui-helpers';
declare type TrackValueFn = ({ value }: {
    value: string;
}) => null;
export interface ButtonEvents {
    onUpdateOrderBy: TrackValueFn;
    onUpdateSearch: TrackValueFn;
    onUpdateFilter: ({ value, kind }: {
        value: string;
        kind: string;
    }) => null;
    onToggleSidebar: ({ isOpen }: {
        isOpen: boolean;
    }) => null;
    onOpenFilters: ({ kind }: {
        kind: string;
    }) => null;
}
export interface LinkEvents {
    watchSelectTemplateLink: (selector: string, template: UiTemplate) => void;
    watchPreviewTemplateLink: (selector: string, template: UiTemplate) => void;
    watchLegacyLink: (selector: string) => void;
}
export declare type Tracker = Partial<ButtonEvents & LinkEvents>;
export {};
