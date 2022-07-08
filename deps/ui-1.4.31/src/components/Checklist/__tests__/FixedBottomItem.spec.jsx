import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { ProductThemeProvider } from '../../../index';
import FixedBottomItem from '../FixedBottomItem';

const renderFixedBottomItem = props => {
  render(
    <ProductThemeProvider>
      <FixedBottomItem {...props} />
    </ProductThemeProvider>,
  );
};

describe('FixedBottomItem', () => {
  let props;

  beforeEach(() => {
    props = {
      open: false,
      name: 'bottomItemTest',
      label: 'Bottom item label test',
      DetailsComponent: <div>Bottom list item details</div>,
      onAccordionChange: jest.fn(),
    };
  });

  afterEach(cleanup);

  it('should display item summary/accordion-button and label', () => {
    renderFixedBottomItem(props);

    expect(screen.getByRole('heading', { name: 'Bottom item label test' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Bottom item label test' })).toBeVisible();
  });

  it('should trigger an accordion change when accordion button is clicked', () => {
    renderFixedBottomItem(props);

    userEvent.click(screen.getByRole('button', { name: 'Bottom item label test' }));
    expect(props.onAccordionChange).toHaveBeenCalled();
  });

  it('should display item details when the accordion is open', () => {
    props = {
      ...props,
      open: true,
    };
    renderFixedBottomItem(props);

    expect(screen.getByText('Bottom list item details')).toBeVisible();
  });
});
