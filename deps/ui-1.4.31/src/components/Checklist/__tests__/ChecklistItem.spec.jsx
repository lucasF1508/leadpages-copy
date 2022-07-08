import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { ProductThemeProvider } from '../../../index';
import ChecklistItem, { LIST_ITEM_STATUS } from '../ChecklistItem';

const renderChecklistItem = props => {
  render(
    <ProductThemeProvider>
      <ChecklistItem {...props} />
    </ProductThemeProvider>,
  );
};

describe('ChecklistItem', () => {
  let props;

  beforeEach(() => {
    props = {
      open: false,
      name: 'getToKnow',
      label: 'Get to Know',
      order: 1,
      status: LIST_ITEM_STATUS.COMPLETE,
      DetailsComponent: jest.fn(() => <div>list item details</div>),
      onOpen: jest.fn(),
      onAccordionChange: jest.fn(),
      onStatusChange: jest.fn(),
      onOpenNextItem: jest.fn(),
    };
  });

  afterEach(cleanup);

  it('should display item summary/accordion-button, label, and a completed check mark', () => {
    renderChecklistItem(props);

    expect(screen.getByRole('heading', { name: 'Get to Know' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Get to Know' })).toBeVisible();
    expect(screen.getByTestId('item-1-checked')).toBeVisible();
  });

  it('should display list item number for incomplete status', () => {
    props = {
      ...props,
      status: LIST_ITEM_STATUS.INCOMPLETE,
    };
    renderChecklistItem(props);

    expect(screen.getByTestId('item-1')).toBeVisible();
  });

  it('should trigger an accordion change when accordion button is clicked', () => {
    renderChecklistItem(props);

    userEvent.click(screen.getByRole('button', { name: 'Get to Know' }));
    expect(props.onAccordionChange).toHaveBeenCalledWith(props.name);
    expect(props.onOpen).toHaveBeenCalledWith(props.name);
  });

  it('should display item details when the accordion is open', () => {
    props = {
      ...props,
      open: true,
    };
    renderChecklistItem(props);

    expect(screen.getByText('list item details')).toBeVisible();
  });
});
