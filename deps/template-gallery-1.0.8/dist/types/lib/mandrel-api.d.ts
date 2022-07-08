import { GetTemplatesResponse, GetTaxonsResponse, GetTemplateByIdResponse, TemplateFilters, TemplateKind } from '../types/mandrel';
export declare const TEMPLATE_PATH = "templates";
export declare const LEADPAGES_PATH = "leadpages";
export declare const SITES_PATH = "sites";
export declare const TAXONOMY_PATH = "taxonomy";
export declare const REQUEST_HEADERS: {
    'Content-Type': string;
};
export declare const LIMIT = 24;
declare type MandrelProps = {
    kind: TemplateKind;
    baseUrl?: string;
    baseFilters?: TemplateFilters;
    onUpdateQueryString?(str: string): void;
    authRequest?: boolean;
};
export declare class MandrelApi {
    baseUrl: string;
    baseFilters: TemplateFilters;
    taxonQuery: string;
    private chevron;
    onUpdateQueryString?: (str: string) => void;
    private authRequest;
    static getInstance: (props: MandrelProps) => MandrelApi;
    constructor({ kind, baseUrl, baseFilters, authRequest, onUpdateQueryString }: MandrelProps);
    request<T>(url: string): Promise<T>;
    updateClientUrl(filters: TemplateFilters): void;
    appendToQuery(query: string, templateFilters: TemplateFilters, prop: string): string;
    getQueryString(templateFilters: TemplateFilters): string;
    getLeadpageTemplates(templateFilters?: TemplateFilters): Promise<GetTemplatesResponse>;
    getSiteTemplates(templateFilters?: TemplateFilters): Promise<GetTemplatesResponse>;
    getTemplateById(id: string): Promise<GetTemplateByIdResponse>;
    getTaxons(): Promise<GetTaxonsResponse>;
}
export default MandrelApi;
