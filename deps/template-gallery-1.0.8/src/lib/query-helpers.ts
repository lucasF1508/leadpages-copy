/* eslint-disable import/prefer-default-export */
import { TemplateFilters, FilterProps, FilterOperators } from '../types/mandrel';

// Requests to mandrel must preserve brackets and commas. Do not use URLSearchParams for this reason
export function serializeFilters(filters: TemplateFilters): string {
  const arr: string[] = [];
  return Object.keys(filters)
    .reduce((acc, filterProp) => {
      const filter = filters[filterProp];

      if (filter?.value) {
        const { value, operator } = filter;
        const prop = `${filterProp}${operator}`;
        // intersect queries must retain commas for value separation
        acc.push(`${prop}=${encodeURIComponent(value).replace(/%2C/g, ',')}`);
      }
      return acc;
    }, arr)
    .join('&');
}

// Do not expose the client to the full range of filter options and operators.
const ALLOWED_FILTER_PROPS = [FilterProps.order_by, FilterProps.categories, FilterProps.tags];

const allowClientParm = (prop: FilterProps) => {
  return ALLOWED_FILTER_PROPS.indexOf(prop) > -1;
};

export function serializeClientFilters(filters: TemplateFilters): string {
  const urlSearchParams = new URLSearchParams();

  Object.keys(filters).forEach((prop) => {
    const filter = filters[prop];

    if (filter?.value && allowClientParm(prop as FilterProps)) {
      urlSearchParams.set(prop, filter?.value.toString());
    }
  });

  return urlSearchParams.toString();
}

export function parseClientFilters(str: string): TemplateFilters {
  const query: TemplateFilters = {};
  const params = new URLSearchParams(str);

  params.forEach((value, prop) => {
    if (allowClientParm(prop as FilterProps)) {
      query[prop] = {
        operator: prop === FilterProps.order_by ? FilterOperators.empty : FilterOperators.contains,
        value,
      };
    }
  });

  return query;
}
