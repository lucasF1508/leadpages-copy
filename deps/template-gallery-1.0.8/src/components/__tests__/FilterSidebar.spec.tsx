import React from 'react';
import { screen, renderWithTheme } from '@testing-library/react';
import { fireEvent, waitFor } from '@testing-library/dom';
import FilterSidebar, { FilterSidebarProps } from '../FilterSidebar';
import { mockTaxons } from '../../__fixtures__/taxon';
import { SortFields, TaxonSection } from '../../types/mandrel';
import { Tracker } from '../../types/tracker';

const currentFilters = {
  categories: '',
  tags: '',
  order_by: '-release_date',
};

const orderByList = [
  { value: SortFields.New, label: 'Newest' },
  { value: SortFields.Conversion, label: 'Highest Converting' },
  { value: SortFields.Popular, label: 'Most Popular' },
];

describe('SidebarFilters', () => {
  let props: FilterSidebarProps;

  beforeEach(() => {
    props = {
      taxons: mockTaxons,
      currentFilters,
      onUpdateCategory: jest.fn(),
      onUpdateTag: jest.fn(),
      onSortSelect: jest.fn(),
      onClearFilter: jest.fn(),
      orderByList,
      tracker: {
        watchLegacyLink: jest.fn(),
        onOpenFilters: jest.fn(),
      },
      expandedSection: TaxonSection['Page Types'],
    };
  });

  it('should render the sidebar with default sorting and filter dropdown', () => {
    renderWithTheme(<FilterSidebar {...props} />);

    expect(screen.queryByText('Newest')).toHaveClass('Mui-selected');

    expect(screen.queryByText('About & Bio')).toBeVisible();
  });

  it('should render the exclusive template section if exclusive templates are passed', () => {
    renderWithTheme(<FilterSidebar {...props} />);

    expect(screen.queryByText('My Exclusive Templates')).toBeInTheDocument();
  });

  it('should not render the exclusive template section if no exclusive templates are passed', () => {
    const newProps = {
      ...props,
      taxons: mockTaxons.filter((t) => t.value !== 'exclusive-templates'),
    };
    renderWithTheme(<FilterSidebar {...newProps} />);

    expect(screen.queryByText('My Exclusive Templates')).not.toBeInTheDocument();
  });

  it('should select a new sort and fire a sort update', () => {
    renderWithTheme(<FilterSidebar {...props} />);

    fireEvent.click(screen.queryByText('Most Popular'));

    expect(props.onSortSelect).toHaveBeenCalled();
  });

  it('should select a new category filter and fire a category filter update', () => {
    renderWithTheme(<FilterSidebar {...props} />);

    fireEvent.click(screen.queryByText('About & Bio'));

    expect(props.onUpdateCategory).toHaveBeenCalled();
  });

  it('should close and open a new filter section', async () => {
    renderWithTheme(<FilterSidebar {...props} />);

    fireEvent.click(screen.queryByText('Page Type'));
    await waitFor(() => expect(screen.queryByText('About & Bio')).not.toBeVisible());

    fireEvent.click(screen.queryByText('Industry'));
    await waitFor(() => expect(screen.queryByText('Author')).toBeVisible());
    expect((props.tracker as Tracker).onOpenFilters).toHaveBeenCalledWith({ kind: 'Industry' });
  });

  it('should select a style and filter by tag', async () => {
    renderWithTheme(<FilterSidebar {...props} />);

    fireEvent.click(screen.queryByText('Style'));
    await waitFor(() => expect(screen.queryByText('Bold')).toBeVisible());

    fireEvent.click(screen.queryByText('Bold'));

    expect(props.onUpdateTag).toHaveBeenCalled();
  });

  it('should display a clear button and clear a selected filter', () => {
    const newProps = {
      ...props,
      currentFilters: {
        ...props.currentFilters,
        categories: 'about',
      },
      selectedTaxon: mockTaxons[0],
    };
    renderWithTheme(<FilterSidebar {...newProps} />);
    expect(screen.queryByText('About & Bio')).toHaveClass('Mui-selected');

    fireEvent.click(screen.queryByRole('button', { name: 'Clear' }));

    expect(props.onClearFilter).toHaveBeenCalled();
  });

  it('should display drag & drop and legacy selectors', () => {
    const newProps = {
      ...props,
      legacyPageRoute: '/#/test-route',
    };
    renderWithTheme(<FilterSidebar {...newProps} />);

    expect(screen.queryByText('Drag & Drop')).toBeInTheDocument();
    expect(screen.queryByText('Legacy')).toBeInTheDocument();
  });

  it('should watch clicks of the legacy link', () => {
    const newProps = {
      ...props,
      legacyPageRoute: '/#/test-route',
    };
    renderWithTheme(<FilterSidebar {...newProps} />);

    expect((props.tracker as Tracker).watchLegacyLink).toHaveBeenCalledWith(
      '#view-legacy-templates',
    );
  });

  it('should call onTransitionStart and OnTransitionEnd on section collapse', async () => {
    const newProps = {
      ...props,
      onSectionTransitionStart: jest.fn(),
      onSectionTransitionEnd: jest.fn(),
    };
    renderWithTheme(<FilterSidebar {...newProps} />);

    fireEvent.click(screen.queryByText('Page Type'));
    await waitFor(() => expect(screen.queryByText('About & Bio')).not.toBeVisible());

    expect(newProps.onSectionTransitionStart).toHaveBeenCalled();
    expect(newProps.onSectionTransitionEnd).toHaveBeenCalled();
  });

  it('should override default order by options', async () => {
    const newProps = {
      ...props,
      orderByList: [
        { value: SortFields.Conversion, label: 'Order override' },
        { value: SortFields.Popular, label: 'Most Popular' },
      ],
    };
    renderWithTheme(<FilterSidebar {...newProps} />);

    expect(screen.queryByText('Newest')).not.toBeInTheDocument();
    expect(screen.queryByText('Order override')).toBeInTheDocument();
  });

  it('should sort category taxonomy alphabetically by default', () => {
    renderWithTheme(<FilterSidebar {...props} />);

    const categoryList = screen
      .queryByText(TaxonSection.Style)
      .parentNode.nextSibling.querySelector('ul');

    expect(categoryList.children[0]).toHaveTextContent('Bold');
    expect(categoryList.children[1]).toHaveTextContent('Colorful');
    expect(categoryList.children[2]).toHaveTextContent('Dark');
  });

  it('should sort Color category taxonomy by a specified order', () => {
    renderWithTheme(<FilterSidebar {...props} />);

    const categoryList = screen
      .queryByText(TaxonSection.Color)
      .parentNode.nextSibling.querySelector('ul');

    expect(categoryList.children[0]).toHaveTextContent('Purple');
    expect(categoryList.children[1]).toHaveTextContent('Blue');
    expect(categoryList.children[2]).toHaveTextContent('Yellow');
  });

  it('should exclude a section from the sidebar', async () => {
    const newProps = {
      ...props,
      excludedSections: [TaxonSection['Page Types']],
    };
    renderWithTheme(<FilterSidebar {...newProps} />);

    expect(screen.queryByText('Page Types')).not.toBeInTheDocument();
  });

  it('will display the active taxon when one is currently selected', () => {
    const [taxon] = mockTaxons;
    props.selectedTaxon = taxon;
    renderWithTheme(<FilterSidebar {...props} />);

    expect(screen.queryByText(taxon.label)).toBeInTheDocument();
  });
});
