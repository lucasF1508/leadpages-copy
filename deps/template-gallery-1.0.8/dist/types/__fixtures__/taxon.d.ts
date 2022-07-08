import { GroupedTaxons } from '../hooks/useTemplateState';
import { Taxon, GetTaxonsResponse } from '../types/mandrel';
export declare const makeTaxon: () => Taxon;
export declare const makeTaxonsResponse: (num: number) => GetTaxonsResponse;
export declare const mockTaxons: Taxon[];
export declare const mockGroupedTaxons: GroupedTaxons[];
