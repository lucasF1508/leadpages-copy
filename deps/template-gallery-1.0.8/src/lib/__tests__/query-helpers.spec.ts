import { TemplateFilters, FilterProps, FilterOperators, SortFields } from '../../types/mandrel';
import { serializeFilters, serializeClientFilters, parseClientFilters } from '../query-helpers';

describe('serializeFilters', () => {
  it('should build a query string from filters', () => {
    const filters: TemplateFilters = {
      [FilterProps.categories]: {
        operator: FilterOperators.icontains,
        value: 'incentive,blank,build-with-me',
      },
      [FilterProps.limit]: { operator: FilterOperators.empty, value: 24 },
      [FilterProps.order_by]: { operator: FilterOperators.empty, value: SortFields.New },
    };

    expect(serializeFilters(filters)).toEqual(
      'categories[icontains]=incentive,blank,build-with-me&limit=24&order_by=-release_date',
    );
  });
});

describe('serializeClientFilters', () => {
  it('should return urlSearchParams including allowed filters only', () => {
    const filters: TemplateFilters = {
      [FilterProps.tags]: { operator: FilterOperators.contains, value: 'hotpink' },
      [FilterProps.limit]: { operator: FilterOperators.empty, value: 24 },
      [FilterProps.order_by]: { operator: FilterOperators.empty, value: SortFields.Conversion },
    };

    expect(serializeClientFilters(filters)).toEqual('tags=hotpink&order_by=-conversion_rate');
  });
});

describe('parseClientFilters', () => {
  it('should parse allowed filters', () => {
    expect(parseClientFilters('tags=hotpink&limit=24&order_by=-release_date')).toEqual({
      [FilterProps.tags]: { operator: FilterOperators.contains, value: 'hotpink' },
      [FilterProps.order_by]: { operator: FilterOperators.empty, value: SortFields.New },
    });
  });
});
