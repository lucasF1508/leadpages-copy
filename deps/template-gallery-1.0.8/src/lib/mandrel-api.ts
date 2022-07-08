import Chevron from '@lp/chevron';
import {
  GetTemplatesResponse,
  GetTaxonsResponse,
  GetTemplateByIdResponse,
  FilterOperators,
  FilterProps,
  TemplateFilters,
  TemplateKind,
} from '../types/mandrel';

import { serializeFilters, serializeClientFilters } from './query-helpers';

export const TEMPLATE_PATH = 'templates';
export const LEADPAGES_PATH = 'leadpages';
export const SITES_PATH = 'sites';
export const TAXONOMY_PATH = 'taxonomy';
export const REQUEST_HEADERS = { 'Content-Type': 'application/json' };
export const LIMIT = 24;

type MandrelProps = {
  kind: TemplateKind;
  baseUrl?: string;
  baseFilters?: TemplateFilters;
  onUpdateQueryString?(str: string): void;
  authRequest?: boolean;
};

export class MandrelApi {
  public baseUrl: string;

  public baseFilters: TemplateFilters;

  public taxonQuery: string;

  private chevron: typeof Chevron;

  onUpdateQueryString?: (str: string) => void;

  private authRequest: boolean;

  static getInstance: (props: MandrelProps) => MandrelApi;

  constructor({ kind, baseUrl, baseFilters, authRequest, onUpdateQueryString }: MandrelProps) {
    this.baseUrl = baseUrl || 'https://api.leadpages.io/template/v2/';

    this.baseFilters = baseFilters || {
      [FilterProps.categories]: {
        operator: FilterOperators['!contains'],
        value: 'incentive',
      },
      [FilterProps.limit]: {
        operator: FilterOperators.empty,
        value: LIMIT,
      },
    };

    const taxonFilters = this.baseFilters
      ? {
          ...this.baseFilters,
          [FilterProps.kind]: {
            operator: FilterOperators.contains,
            value: kind,
          },
          [FilterProps.limit]: {},
          [FilterProps.order_by]: {},
        }
      : {};

    this.taxonQuery = this.getQueryString(taxonFilters);

    this.chevron = authRequest ? Chevron.getInstance() : undefined;

    this.authRequest = authRequest || false;

    this.onUpdateQueryString = onUpdateQueryString;
  }

  async request<T>(url: string): Promise<T> {
    if (this.authRequest) {
      const response = await this.chevron.http({
        url,
        method: 'GET',
        headers: REQUEST_HEADERS,
      });

      if (response?._status?.code !== 200) throw new Error();
      return response;
    }
    const response = await fetch(url, { headers: REQUEST_HEADERS });

    if (response.status !== 200) throw new Error();
    const json = await response.json();

    return json;
  }

  updateClientUrl(filters: TemplateFilters): void {
    if (this.onUpdateQueryString) {
      try {
        this.onUpdateQueryString(serializeClientFilters(filters));
      } catch (e) {
        // swallow
      }
    }
  }

  appendToQuery(query: string, templateFilters: TemplateFilters, prop: string): string {
    let string = query;
    // If a tag or category is explicitly excluded via base filter, extend our query to include the filter unless explicitly searching for that tag/categoryq
    if (
      templateFilters[prop] &&
      this.baseFilters[prop] &&
      this.baseFilters[prop]?.operator !== templateFilters[prop]?.operator &&
      this.baseFilters[prop]?.value !== templateFilters[prop]?.value
    ) {
      string = `${string}&${serializeFilters({ [prop]: this.baseFilters[prop] })}`;
    }

    return string;
  }

  getQueryString(templateFilters: TemplateFilters): string {
    let categoryFilters = {};

    // Exclude blank category unless a search result is occurring
    // and the blank category has not been explicity excluded.
    if (
      !Object.keys(templateFilters).includes(FilterProps.name) &&
      !this.baseFilters.categories?.value.split(',').includes('blank')
    ) {
      categoryFilters = {
        [FilterProps.categories]: {
          operator: FilterOperators['!intersects'],
          value: `${this.baseFilters.categories?.value},blank`,
        },
      };
    }

    const combined: TemplateFilters = {
      ...this.baseFilters,
      ...categoryFilters,
      ...templateFilters,
    };

    let serialized = serializeFilters(combined);
    serialized = this.appendToQuery(serialized, templateFilters, FilterProps.categories);
    serialized = this.appendToQuery(serialized, templateFilters, FilterProps.tags);
    return serialized;
  }

  getLeadpageTemplates(templateFilters?: TemplateFilters): Promise<GetTemplatesResponse> {
    this.updateClientUrl(templateFilters || {});
    const url = `${this.baseUrl}${LEADPAGES_PATH}?${this.getQueryString(templateFilters || {})}`;
    return this.request(url);
  }

  getSiteTemplates(templateFilters?: TemplateFilters): Promise<GetTemplatesResponse> {
    this.updateClientUrl(templateFilters || {});
    const url = `${this.baseUrl}${SITES_PATH}?${this.getQueryString(templateFilters || {})}`;
    return this.request(url);
  }

  getTemplateById(id: string): Promise<GetTemplateByIdResponse> {
    const url = `${this.baseUrl}${TEMPLATE_PATH}/${id}`;
    return this.request(url);
  }

  getTaxons(): Promise<GetTaxonsResponse> {
    const url = `${this.baseUrl}${TAXONOMY_PATH}?${this.taxonQuery}`;
    return this.request(url);
  }
}

let instance: MandrelApi | null = null;

function getInstance(props: MandrelProps) {
  if (!instance) {
    instance = new MandrelApi(props);
  }
  return instance;
}

MandrelApi.getInstance = getInstance;

export default MandrelApi;
