import React from 'react';
import { renderWithTheme, screen } from '@testing-library/react';
import { TemplateKind } from '../../../constants/templates';
import Templates from '../Templates';

jest.mock('@lp/template-gallery', () => {
  return {
    __esModule: true,
    // eslint-disable-next-line react/prop-types
    Gallery: ({ children }) => <div>{children}</div>,
    SearchAndResults: () => <div>Results</div>,
    TemplateThumbnail: () => <div>Thumbnail</div>,
    FilterSidebar: () => <div>Sidebar</div>,
    NoResults: () => <div>NoResults</div>,
    ResponsiveSidebar: () => <div>Responsive Sidebar</div>,
    useInfiniteScrollRef: jest.fn(),
  };
});

describe('Templates', () => {
  let props;

  beforeEach(() => {
    props = {
      state: {
        ui: {
          selectedTaxon: null,
          hasLoaded: true,
          sidebarOpen: true,
        },
        templates: [
          {
            _meta: { id: 'id-1' },
            template: {},
            ui: { guid: 'ui-guid' },
            kind: TemplateKind.LandingPage,
          },
        ],
        taxons: [],
        searchInputRef: { current: null },
        getScrollTopRef: { current: null },
        filters: {
          categories: '',
          tags: '',
          order_by: '',
        },
      },
      actions: {
        onResetSearch: jest.fn(),
        onUpdateSearchInput: jest.fn(),
        onClearFilters: jest.fn(),
        onClearSearchInput: jest.fn(),
        onUpdateOrderBy: jest.fn(),
        onUpdateCategory: jest.fn(),
        onUpdateTag: jest.fn(),
        init: jest.fn(),
        onToggleSidebar: jest.fn(),
      },
      kind: TemplateKind.LandingPage,
      onPreviewTemplate: jest.fn(),
      isPreviewing: false,
    };
  });

  it('should render the template components', () => {
    renderWithTheme(<Templates {...props} />);

    expect(screen.getByText('Results')).toBeInTheDocument();
    expect(screen.getByText('Thumbnail')).toBeInTheDocument();
  });

  it('should toggle the responsive sidebar closed for smaller viewports', () => {
    window.innerWidth = 1024;
    renderWithTheme(<Templates {...props} />);

    expect(props.actions.onToggleSidebar).toHaveBeenCalled();
  });

  it('should not toggle the responsive sidebar closed for larger viewports', () => {
    window.innerWidth = 1025;
    renderWithTheme(<Templates {...props} />);

    expect(props.actions.onToggleSidebar).not.toHaveBeenCalled();
  });

  it('should render the no results state if templates list is empty', () => {
    props.state.templates = [];
    renderWithTheme(<Templates {...props} />);

    expect(screen.getByText('NoResults')).toBeInTheDocument();
  });
});
