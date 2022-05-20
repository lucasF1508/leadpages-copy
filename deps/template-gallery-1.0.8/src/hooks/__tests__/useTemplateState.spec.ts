import { renderHook, act } from '@testing-library/react-hooks';

import { makeTaxonsResponse } from '../../__fixtures__/taxon';
import { makeTemplatesResponse } from '../../__fixtures__/template';

import useTemplateState, { UseTemplateProps } from '../useTemplateState';
import {
  FilterProps,
  FilterOperators,
  SortFields,
  TemplateKind,
  TaxonCollection,
} from '../../types/mandrel';
import { Tracker } from '../../types/tracker';
import MandrelApi from '../../lib/mandrel-api';

jest.mock('../../lib/mandrel-api');

describe('useTemplateState', () => {
  const templatesResponse = makeTemplatesResponse(24);
  const taxonsResponse = makeTaxonsResponse(10);
  const props: UseTemplateProps = {
    kind: TemplateKind.Leadpage,
    baseUrl: 'https://my-template-url.com',
  };

  beforeEach(() => {
    props.tracker = {
      onUpdateOrderBy: jest.fn(),
      onUpdateSearch: jest.fn(),
      onUpdateFilter: jest.fn(),
      onToggleSidebar: jest.fn(),
    };
    props.queryString = undefined;
    jest.spyOn(MandrelApi.prototype, 'getLeadpageTemplates').mockResolvedValue(templatesResponse);
    jest.spyOn(MandrelApi.prototype, 'getTaxons').mockResolvedValue(taxonsResponse);
  });

  afterEach(() => {
    (MandrelApi.prototype.getLeadpageTemplates as jest.Mock).mockClear();
    (MandrelApi.prototype.getTaxons as jest.Mock).mockClear();
  });

  describe('init', () => {
    it('should fetch initial data and set hasLoaded to true', async () => {
      const { result, waitFor } = renderHook(() => useTemplateState(props));

      const [, actions] = result.current;

      await act(async () => {
        await actions.init();
      });

      await waitFor(() => expect(MandrelApi.prototype.getTaxons).toHaveBeenCalledTimes(1));
      await waitFor(() =>
        expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledTimes(1),
      );

      expect(result.current[0].taxons).toEqual(taxonsResponse.taxons);
      expect(result.current[0].ui).toEqual({
        count: 24,
        cursor: '24',
        hasLoaded: true,
        isLoading: false,
        total: 24,
        selectedTaxon: null,
        sidebarOpen: true,
      });
    });

    it('should parse query string if one is provivded', async () => {
      props.queryString = 'categories=about&order_by=-conversion_rate';
      const { result, waitFor } = renderHook(() => useTemplateState(props));

      const [, actions] = result.current;

      await act(async () => {
        await actions.init();
      });

      await waitFor(() => expect(MandrelApi.prototype.getTaxons).toHaveBeenCalledTimes(1));
      await waitFor(() =>
        expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledTimes(1),
      );

      expect(result.current[0].taxons).toEqual(taxonsResponse.taxons);
      expect(result.current[0].ui).toEqual({
        count: 24,
        cursor: '24',
        hasLoaded: true,
        isLoading: false,
        total: 24,
        selectedTaxon: taxonsResponse.taxons[0],
        sidebarOpen: true,
      });
      expect(result.current[0].filters).toEqual({
        categories: 'about',
        order_by: '-conversion_rate',
        tags: '',
      });
    });

    it('should replace placeholder templates in state', async () => {
      const { result, waitFor } = renderHook(() => useTemplateState(props));

      expect(result.current[0].templates).toHaveLength(24);
      const [, actions] = result.current;

      await act(async () => {
        await actions.init();
      });

      await waitFor(() =>
        expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledTimes(1),
      );

      result.current[0].templates.forEach((template, idx) => {
        expect(template.template).toEqual(templatesResponse._items[idx].template);
        expect(template._meta).toEqual(templatesResponse._items[idx]._meta);
        expect(template.ui.isPlaceholder).toBe(false);
      });
    });
  });

  describe('onUpdateSearchInput', () => {
    it('should update the name in search after a timeout', async () => {
      jest.useFakeTimers();
      const { result, waitForNextUpdate } = renderHook(() => useTemplateState(props));

      const [state, actions] = result.current;
      state.searchInputRef.current = { value: 'Hello' } as HTMLInputElement;

      act(() => {
        actions.onUpdateSearchInput();
        jest.advanceTimersByTime(200);
      });

      await waitForNextUpdate();

      expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledWith({
        [FilterProps.name]: { operator: FilterOperators.icontains, value: 'hello' },
        [FilterProps.order_by]: { operator: '', value: SortFields.New },
      });
      expect((props.tracker as Tracker).onUpdateSearch).toHaveBeenCalledWith({
        value: 'Hello',
      });
    });
  });

  describe('onUpdateCategory', () => {
    it('should update the category filter in state and search', async () => {
      // Given I have a category with a label
      taxonsResponse.taxons[0].label = 'Free Guide';
      taxonsResponse.taxons[0].value = 'free-guide';
      taxonsResponse.taxons[0].type = TaxonCollection.categories;

      const { result, waitForNextUpdate, waitFor } = renderHook(() => useTemplateState(props));
      const [, actions] = result.current;

      // Load initial state to configure taxons
      await act(async () => {
        await actions.init();
        await waitFor(() => expect(MandrelApi.prototype.getTaxons).toHaveBeenCalledTimes(1));
      });

      act(() => {
        result.current[1].onUpdateCategory(taxonsResponse.taxons[0]);
      });

      await waitForNextUpdate();
      expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledWith({
        [FilterProps.categories]: { operator: FilterOperators.contains, value: 'free-guide' },
        [FilterProps.order_by]: { operator: '', value: SortFields.New },
      });
      expect(result.current[0].filters[FilterProps.categories]).toEqual('free-guide');
      expect(result.current[0].ui.selectedTaxon).toEqual(taxonsResponse.taxons[0]);
      expect((props.tracker as Tracker).onUpdateFilter).toHaveBeenCalledWith({
        value: 'Free Guide',
        kind: taxonsResponse.taxons[0].section,
      });
    });
  });

  describe('onUpdateTag', () => {
    it('should update the tag filter in state and search', async () => {
      // Given I have a tag with a label
      taxonsResponse.taxons[0].label = 'Purple';
      taxonsResponse.taxons[0].value = 'purple';
      taxonsResponse.taxons[0].type = TaxonCollection.tags;

      const { result, waitForNextUpdate, waitFor } = renderHook(() => useTemplateState(props));
      const [, actions] = result.current;

      // Load initial state to configure taxons
      await act(async () => {
        await actions.init();
        await waitFor(() => expect(MandrelApi.prototype.getTaxons).toHaveBeenCalledTimes(1));
      });

      act(() => {
        result.current[1].onUpdateTag(taxonsResponse.taxons[0]);
      });

      await waitForNextUpdate();
      expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledWith({
        [FilterProps.tags]: { operator: FilterOperators.contains, value: 'purple' },
        [FilterProps.order_by]: { operator: '', value: SortFields.New },
      });

      expect(result.current[0].filters[FilterProps.tags]).toEqual('purple');
      expect(result.current[0].ui.selectedTaxon).toEqual(taxonsResponse.taxons[0]);
      expect((props.tracker as Tracker).onUpdateFilter).toHaveBeenCalledWith({
        value: 'Purple',
        kind: taxonsResponse.taxons[0].section,
      });
    });
  });

  describe('onUpdateOrderBy', () => {
    it('should update the order_by filter in state and search', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useTemplateState(props));

      const [, actions] = result.current;

      act(() => {
        actions.onUpdateOrderBy({ value: SortFields.Conversion, label: 'Conversion Rate' });
      });

      await waitForNextUpdate();

      expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledWith({
        [FilterProps.order_by]: { operator: '', value: SortFields.Conversion },
      });
      expect(result.current[0].filters[FilterProps.order_by]).toEqual(SortFields.Conversion);
      expect((props.tracker as Tracker).onUpdateOrderBy).toHaveBeenCalledWith({
        value: 'Conversion Rate',
      });
    });
  });

  describe('onLoadNextPage', () => {
    it('should load the next page using the cursor in state', async () => {
      const { result, waitForNextUpdate, waitFor } = renderHook(() => useTemplateState(props));

      const [, actions] = result.current;

      // Load initial state to configure cursor
      await act(async () => {
        await actions.init();
      });
      await waitFor(() =>
        expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledTimes(1),
      );

      (MandrelApi.prototype.getLeadpageTemplates as jest.Mock).mockClear();

      act(() => {
        result.current[1].onLoadNextPage();
      });

      await waitForNextUpdate();
      expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledWith({
        [FilterProps.order_by]: { operator: '', value: SortFields.New },
        [FilterProps.cursor]: { operator: '', value: '24' },
      });
    });
  });

  describe('onClearFilters', () => {
    it('should clear filters and preserve the search', async () => {
      const { result, waitForNextUpdate, waitFor } = renderHook(() => useTemplateState(props));

      const [state, actions] = result.current;

      await act(async () => {
        await actions.init();
        actions.onUpdateCategory(taxonsResponse.taxons[0]);
      });

      state.searchInputRef.current = { value: 'fitness' } as HTMLInputElement;

      await waitFor(() =>
        expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledTimes(2),
      );
      (MandrelApi.prototype.getLeadpageTemplates as jest.Mock).mockClear();

      // Clear filters
      act(() => {
        actions.onClearFilters();
      });

      await waitForNextUpdate();

      expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledWith({
        [FilterProps.order_by]: { operator: '', value: SortFields.New },
        [FilterProps.name]: { operator: FilterOperators.icontains, value: 'fitness' },
      });

      expect(result.current[0].filters).toEqual({
        [FilterProps.categories]: '',
        [FilterProps.tags]: '',
        [FilterProps.order_by]: SortFields.New,
      });
    });
  });

  describe('onResetSearch', () => {
    it('should clear all filters and reset input value', async () => {
      const { result, waitForNextUpdate, waitFor } = renderHook(() => useTemplateState(props));

      const [state, actions] = result.current;

      state.searchInputRef.current = { value: 'fitness' } as HTMLInputElement;

      await act(async () => {
        await actions.init();
        actions.onUpdateCategory(taxonsResponse.taxons[0]);
        actions.onUpdateOrderBy({ value: SortFields.Conversion, label: 'Conversion Rate' });
      });

      await waitFor(() =>
        expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledTimes(3),
      );

      (MandrelApi.prototype.getLeadpageTemplates as jest.Mock).mockClear();

      // Clear filters
      act(() => {
        actions.onResetSearch();
      });

      await waitForNextUpdate();

      expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledWith({
        [FilterProps.order_by]: { operator: '', value: SortFields.New },
      });
      expect(state.searchInputRef.current.value).toEqual('');

      expect(result.current[0].filters).toEqual({
        [FilterProps.categories]: '',
        [FilterProps.tags]: '',
        [FilterProps.order_by]: SortFields.New,
      });
    });
  });

  describe('onClearSearchInput', () => {
    it('should reset the input value', async () => {
      const { result, waitFor, waitForNextUpdate } = renderHook(() => useTemplateState(props));

      const [state, actions] = result.current;

      state.searchInputRef.current = { value: 'fitness' } as HTMLInputElement;

      await act(async () => {
        await actions.init();
      });

      await waitFor(() =>
        expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledTimes(1),
      );

      (MandrelApi.prototype.getLeadpageTemplates as jest.Mock).mockClear();

      // Clear input
      act(() => {
        actions.onClearSearchInput();
      });

      await waitForNextUpdate();
      expect(state.searchInputRef.current.value).toEqual('');
    });
  });

  describe('onToggleSidebar', () => {
    it('should toggle sidebar visibility state', async () => {
      const { result } = renderHook(() => useTemplateState(props));
      const [, actions] = result.current;

      expect(result.current[0].ui.sidebarOpen).toEqual(true);

      act(() => {
        actions.onToggleSidebar();
      });
      expect((props.tracker as Tracker).onToggleSidebar).toHaveBeenCalledWith({
        isOpen: false,
      });
      expect(result.current[0].ui.sidebarOpen).toBe(false);

      act(() => {
        result.current[1].onToggleSidebar();
      });
      expect((props.tracker as Tracker).onToggleSidebar).toHaveBeenCalledWith({
        isOpen: true,
      });
      expect(result.current[0].ui.sidebarOpen).toBe(true);
    });
  });

  describe('scrollAndSetTemplates', () => {
    it('should call window.scrollTo if window.pageYOffset is below gallery top', async () => {
      const { result, waitFor } = renderHook(() => useTemplateState(props));

      const [state, actions] = result.current;

      await act(async () => {
        await actions.init();
      });

      await waitFor(() =>
        expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledTimes(1),
      );

      state.getScrollTopRef.current = () => -400;
      window.scrollTo = jest.fn();

      await act(async () => {
        await result.current[1].onUpdateCategory(taxonsResponse.taxons[0]);
      });

      expect(window.scrollTo).toHaveBeenCalledWith({ top: -400, behavior: 'smooth' });
    });

    it('should not call window.scrollTo if window.pageYOffset is above gallery top', async () => {
      const { result, waitFor } = renderHook(() => useTemplateState(props));

      const [state, actions] = result.current;

      await act(async () => {
        await actions.init();
      });

      await waitFor(() =>
        expect(MandrelApi.prototype.getLeadpageTemplates).toHaveBeenCalledTimes(1),
      );

      state.getScrollTopRef.current = () => 300;
      window.scrollTo = jest.fn();

      await act(async () => {
        await result.current[1].onUpdateCategory(taxonsResponse.taxons[0]);
      });

      expect(window.scrollTo).not.toHaveBeenCalled();
    });
  });
});
