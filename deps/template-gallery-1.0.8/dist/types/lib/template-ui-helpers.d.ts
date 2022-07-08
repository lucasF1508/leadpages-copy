import { Template, TemplateKind, TemplateModel, Meta } from '../types/mandrel';
export declare type UiTemplate = {
    kind: TemplateKind;
    template: Partial<TemplateModel>;
    _meta: Partial<Meta>;
    ui: {
        guid: string;
        isPlaceholder: boolean;
    };
};
export declare const makePlaceholderTemplates: (kind: TemplateKind, numLoading: number) => UiTemplate[];
export declare const makeUiTemplate: (template: Template) => UiTemplate;
export declare const replacePlaceholderTemplates: (templates: UiTemplate[], nextPageTemplates: Template[]) => UiTemplate[];
