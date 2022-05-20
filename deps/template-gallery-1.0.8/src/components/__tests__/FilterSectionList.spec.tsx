import React from 'react';
import { screen, renderWithTheme } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockGroupedTaxons } from '../../__fixtures__/taxon';
import FilterSectionList, { FilterSectionListProps } from '../FilterSectionList';
import { TaxonSection } from '../../types/mandrel';

describe('SidebarFilters', () => {
  let props: FilterSectionListProps;

  beforeEach(() => {
    props = {
      taxons: mockGroupedTaxons[0].taxons,
      currentValue: '',
      onSelect: jest.fn(),
      isOpen: true,
      listItemClass: 'mock-class',
    };
  });

  it('should render the taxon section list', () => {
    renderWithTheme(<FilterSectionList {...props} />);

    expect(screen.queryByText('About & Bio')).toBeInTheDocument();
  });

  it('should not display options when closed', () => {
    const newProps = { ...props, isOpen: false };
    renderWithTheme(<FilterSectionList {...newProps} />);

    expect(screen.getByText('About & Bio')).not.toBeVisible();
  });

  it('should display a selected filter', () => {
    const newProps = {
      ...props,
      currentValue: 'about',
    };
    renderWithTheme(<FilterSectionList {...newProps} />);

    expect(screen.queryByText('About & Bio')).toHaveClass('Mui-selected');
  });

  it('should provide a selectable sort/filter option', () => {
    const newProps = { ...props, isOpen: false };
    renderWithTheme(<FilterSectionList {...newProps} />);

    userEvent.click(screen.queryByText('About & Bio'));
    expect(props.onSelect).toHaveBeenCalled();
  });

  it('should display color swatches for the color section', () => {
    const newProps = {
      ...props,
      taxons: mockGroupedTaxons[3].taxons,
      section: TaxonSection.Color,
    };
    renderWithTheme(<FilterSectionList {...newProps} />);

    const firstChildElement = screen.queryByText('Purple').firstChild;

    expect(firstChildElement).toHaveStyle('background-color: rgb(63, 44, 197);');
  });
});
