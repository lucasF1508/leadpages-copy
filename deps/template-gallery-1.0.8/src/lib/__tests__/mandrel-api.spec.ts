import fetchMock from 'jest-fetch-mock';
import Chevron from '@lp/chevron';
import {
  FilterOperators,
  FilterProps,
  TemplateFilters,
  SortFields,
  TemplateKind,
} from '../../types/mandrel';

import MandrelApi, { REQUEST_HEADERS } from '../mandrel-api';

const REQUEST_INFO = {
  headers: REQUEST_HEADERS,
};
const baseRequest = {
  method: 'GET',
  ...REQUEST_INFO,
};

describe('mandrelApi', () => {
  let mandrelApi: MandrelApi;
  let chevronMock: typeof Chevron;
  let opts: {
    kind: TemplateKind;
    baseUrl?: string;
    baseFilters?: TemplateFilters;
    authRequest?: boolean;
  };

  beforeEach(() => {
    opts = {
      kind: TemplateKind.Leadpage,
      baseUrl: 'https://template-uri.com/',
      baseFilters: {
        [FilterProps.order_by]: {
          operator: FilterOperators.empty,
          value: SortFields.Conversion,
        },
        [FilterProps.categories]: {
          operator: FilterOperators['!contains'],
          value: 'incentive',
        },
      },
    };

    mandrelApi = new MandrelApi(opts);
  });

  describe('constructor', () => {
    it('sets the baseUrl and baseFilters on the api when provided', () => {
      expect(mandrelApi.baseUrl).toEqual(opts.baseUrl);
      expect(mandrelApi.baseFilters).toEqual(opts.baseFilters);
    });
  });

  describe('fetch', () => {
    beforeEach(() => {
      // Fetch mock
      fetchMock.mockResponse(JSON.stringify({}), { status: 200 });
    });
    describe('getLeadpagesTemplates', () => {
      it('should fetch leadpages templates with a default query string', async () => {
        await mandrelApi.getLeadpageTemplates();

        expect(fetch).toHaveBeenCalledWith(
          'https://template-uri.com/leadpages?order_by=-conversion_rate&categories[!intersects]=incentive,blank',
          REQUEST_INFO,
        );
      });

      it('should override filter defaults', async () => {
        await mandrelApi.getLeadpageTemplates({
          [FilterProps.order_by]: {
            operator: FilterOperators.empty,
            value: SortFields.New,
          },
        });

        expect(fetch).toHaveBeenCalledWith(
          'https://template-uri.com/leadpages?order_by=-release_date&categories[!intersects]=incentive,blank',
          REQUEST_INFO,
        );
      });

      it('should append additional params', async () => {
        await mandrelApi.getLeadpageTemplates({
          [FilterProps.name]: {
            operator: FilterOperators.icontains,
            value: 'Real Estate',
          },
        });

        expect(fetch).toHaveBeenCalledWith(
          'https://template-uri.com/leadpages?order_by=-conversion_rate&categories[!contains]=incentive&name[icontains]=Real%20Estate',
          REQUEST_INFO,
        );
      });

      it('should throw an error if the response status is not 200', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

        await expect(mandrelApi.getSiteTemplates()).rejects.toEqual(new Error());
      });

      it('should include divergent operators when searching for a category specified in baseFilters', async () => {
        await mandrelApi.getSiteTemplates({
          [FilterProps.categories]: {
            operator: FilterOperators.contains,
            value: 'other',
          },
        });

        expect(fetch).toHaveBeenCalledWith(
          'https://template-uri.com/sites?order_by=-conversion_rate&categories[contains]=other&categories[!contains]=incentive',
          REQUEST_INFO,
        );
      });

      it('should override the category if the operator matches as the base filter', async () => {
        await mandrelApi.getSiteTemplates({
          [FilterProps.categories]: {
            operator: FilterOperators['!contains'],
            value: 'other',
          },
        });

        expect(fetch).toHaveBeenCalledWith(
          'https://template-uri.com/sites?order_by=-conversion_rate&categories[!contains]=other',
          REQUEST_INFO,
        );
      });
    });

    describe('getSiteTemplates', () => {
      it('should fetch site templates with a default query string', async () => {
        await mandrelApi.getSiteTemplates();

        expect(fetch).toHaveBeenCalledWith(
          'https://template-uri.com/sites?order_by=-conversion_rate&categories[!intersects]=incentive,blank',
          REQUEST_INFO,
        );
      });

      it('should override filter defaults', async () => {
        await mandrelApi.getSiteTemplates({
          [FilterProps.order_by]: {
            operator: FilterOperators.empty,
            value: SortFields.New,
          },
        });

        expect(fetch).toHaveBeenCalledWith(
          'https://template-uri.com/sites?order_by=-release_date&categories[!intersects]=incentive,blank',
          REQUEST_INFO,
        );
      });

      it('should append additional params', async () => {
        await mandrelApi.getSiteTemplates({
          [FilterProps.name]: {
            operator: FilterOperators.icontains,
            value: 'Real Estate',
          },
        });

        expect(fetch).toHaveBeenCalledWith(
          'https://template-uri.com/sites?order_by=-conversion_rate&categories[!contains]=incentive&name[icontains]=Real%20Estate',
          REQUEST_INFO,
        );
      });

      it('should throw an error if the response status is not 200', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

        await expect(mandrelApi.getSiteTemplates()).rejects.toEqual(new Error());
      });
    });

    describe('getTemplateById', () => {
      it('should fetch a template by id', async () => {
        await mandrelApi.getTemplateById('id-1');

        expect(fetch).toHaveBeenCalledWith('https://template-uri.com/templates/id-1', REQUEST_INFO);
      });

      it('should throw an error if the response status is not 200', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

        await expect(mandrelApi.getTemplateById('id-1')).rejects.toEqual(new Error());
      });
    });

    describe('getTaxons', () => {
      it('should fetch taxons with base filters and template kind', async () => {
        await mandrelApi.getTaxons();

        expect(fetch).toHaveBeenCalledWith(
          'https://template-uri.com/taxonomy?categories[!contains]=incentive&kind[contains]=LeadpageTemplate',
          REQUEST_INFO,
        );
      });

      it('should throw an error if the response status is not 200', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

        await expect(mandrelApi.getTaxons()).rejects.toEqual(new Error());
      });
    });
  });

  describe('Chevron', () => {
    beforeEach(() => {
      opts = {
        kind: TemplateKind.Leadpage,
        baseUrl: 'https://template-uri.com/',
        baseFilters: {
          [FilterProps.order_by]: {
            operator: FilterOperators.empty,
            value: SortFields.Conversion,
          },
          [FilterProps.categories]: {
            operator: FilterOperators['!contains'],
            value: 'incentive',
          },
        },
        authRequest: true,
      };

      mandrelApi = new MandrelApi(opts);

      // Chevron mock
      chevronMock = Chevron.getInstance();
      chevronMock.http = jest.fn().mockResolvedValue({
        _status: {
          code: 200,
        },
      });
    });

    describe('getLeadpagesTemplates', () => {
      it('should fetch leadpages templates with a default query string', async () => {
        await mandrelApi.getLeadpageTemplates();

        expect(chevronMock.http).toHaveBeenCalledWith({
          url:
            'https://template-uri.com/leadpages?order_by=-conversion_rate&categories[!intersects]=incentive,blank',
          ...baseRequest,
        });
      });

      it('should override filter defaults', async () => {
        await mandrelApi.getLeadpageTemplates({
          [FilterProps.order_by]: {
            operator: FilterOperators.empty,
            value: SortFields.New,
          },
        });

        expect(chevronMock.http).toHaveBeenCalledWith({
          url:
            'https://template-uri.com/leadpages?order_by=-release_date&categories[!intersects]=incentive,blank',
          ...baseRequest,
        });
      });

      it('should append additional params', async () => {
        await mandrelApi.getLeadpageTemplates({
          [FilterProps.name]: {
            operator: FilterOperators.icontains,
            value: 'Real Estate',
          },
        });

        expect(chevronMock.http).toHaveBeenCalledWith({
          url:
            'https://template-uri.com/leadpages?order_by=-conversion_rate&categories[!contains]=incentive&name[icontains]=Real%20Estate',
          ...baseRequest,
        });
      });

      it('should throw an error if the response status is not 200', async () => {
        chevronMock.http = jest.fn().mockResolvedValue({
          _status: {
            code: 500,
          },
        });

        await expect(mandrelApi.getSiteTemplates()).rejects.toEqual(new Error());
      });

      it('should call onUpdateQueryString if the prop is provided', async () => {
        const onUpdateQueryString = jest.fn();
        mandrelApi.onUpdateQueryString = onUpdateQueryString;

        await mandrelApi.getSiteTemplates({
          [FilterProps.tags]: {
            operator: FilterOperators.contains,
            value: 'hotpink',
          },
        });

        expect(onUpdateQueryString).toHaveBeenCalledWith('tags=hotpink');
      });
    });

    describe('chevron getSiteTemplates', () => {
      it('should fetch site templates with a default query string', async () => {
        await mandrelApi.getSiteTemplates();

        expect(chevronMock.http).toHaveBeenCalledWith({
          url:
            'https://template-uri.com/sites?order_by=-conversion_rate&categories[!intersects]=incentive,blank',
          ...baseRequest,
        });
      });

      it('should override filter defaults', async () => {
        await mandrelApi.getSiteTemplates({
          [FilterProps.order_by]: {
            operator: FilterOperators.empty,
            value: SortFields.New,
          },
        });

        expect(chevronMock.http).toHaveBeenCalledWith({
          url:
            'https://template-uri.com/sites?order_by=-release_date&categories[!intersects]=incentive,blank',
          ...baseRequest,
        });
      });

      it('should append additional params', async () => {
        await mandrelApi.getSiteTemplates({
          [FilterProps.name]: {
            operator: FilterOperators.icontains,
            value: 'Real Estate',
          },
        });

        expect(chevronMock.http).toHaveBeenCalledWith({
          url:
            'https://template-uri.com/sites?order_by=-conversion_rate&categories[!contains]=incentive&name[icontains]=Real%20Estate',
          ...baseRequest,
        });
      });

      it('should throw an error if the response status is not 200', async () => {
        chevronMock.http = jest.fn().mockResolvedValue({
          _status: {
            code: 500,
          },
        });

        await expect(mandrelApi.getSiteTemplates()).rejects.toEqual(new Error());
      });

      it('should call onUpdateQueryString if the prop is provided', async () => {
        const onUpdateQueryString = jest.fn();
        mandrelApi.onUpdateQueryString = onUpdateQueryString;

        await mandrelApi.getSiteTemplates({
          [FilterProps.tags]: {
            operator: FilterOperators.contains,
            value: 'hotpink',
          },
        });

        expect(onUpdateQueryString).toHaveBeenCalledWith('tags=hotpink');
      });
    });

    describe('chevron getTemplateById', () => {
      it('should fetch a template by id', async () => {
        await mandrelApi.getTemplateById('id-1');

        expect(chevronMock.http).toHaveBeenCalledWith({
          url: 'https://template-uri.com/templates/id-1',
          ...baseRequest,
        });
      });

      it('should throw an error if the response status is not 200', async () => {
        chevronMock.http = jest.fn().mockResolvedValue({
          _status: {
            code: 500,
          },
        });

        await expect(mandrelApi.getTemplateById('id-1')).rejects.toEqual(new Error());
      });
    });

    describe('chevron getTaxons', () => {
      it('should fetch taxons with base filters and template kind', async () => {
        await mandrelApi.getTaxons();

        expect(chevronMock.http).toHaveBeenCalledWith({
          url:
            'https://template-uri.com/taxonomy?categories[!contains]=incentive&kind[contains]=LeadpageTemplate',
          ...baseRequest,
        });
      });

      it('should throw an error if the response status is not 200', async () => {
        chevronMock.http = jest.fn().mockResolvedValue({
          _status: {
            code: 500,
          },
        });

        await expect(mandrelApi.getTaxons()).rejects.toEqual(new Error());
      });
    });
  });
});
