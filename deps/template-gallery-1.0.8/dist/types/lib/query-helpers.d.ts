import { TemplateFilters } from '../types/mandrel';
export declare function serializeFilters(filters: TemplateFilters): string;
export declare function serializeClientFilters(filters: TemplateFilters): string;
export declare function parseClientFilters(str: string): TemplateFilters;
