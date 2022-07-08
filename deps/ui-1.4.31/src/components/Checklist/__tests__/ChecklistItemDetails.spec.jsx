import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { ProductThemeProvider } from '../../../index';
import ChecklistItemDetails from '../ChecklistItemDetails';
import { LIST_ITEM_STATUS } from '../ChecklistItem';

const renderChecklistItemDetails = props => {
  render(
    <ProductThemeProvider>
      <ChecklistItemDetails {...props} />
    </ProductThemeProvider>,
  );
};

describe('ChecklistItemDetails', () => {
  let props;

  beforeEach(() => {
    props = {
      itemName: 'getToKnow',
      itemStatus: LIST_ITEM_STATUS.INCOMPLETE,
      children: <div>Checklist item details test</div>,
      onStatusChange: jest.fn(),
      onOpenNextItem: jest.fn(),
    };
  });

  afterEach(cleanup);

  it('should display item details', () => {
    renderChecklistItemDetails(props);

    expect(screen.getByText('Checklist item details test')).toBeInTheDocument();
  });

  it('should allow customization of the next button label', () => {
    props.nextButtonLabel = 'Test';
    renderChecklistItemDetails(props);

    expect(screen.getByRole('button', { name: 'Test' })).toBeInTheDocument();
  });

  it('should trigger a status update and open next item when the Next button is clicked ', () => {
    renderChecklistItemDetails(props);

    userEvent.click(screen.getByRole('button', { name: 'Next' }));

    expect(props.onStatusChange).toHaveBeenCalledWith('getToKnow', LIST_ITEM_STATUS.COMPLETE);
    expect(props.onOpenNextItem).toHaveBeenCalledWith('getToKnow');
  });

  it('should not trigger a status update if the item is already completed', () => {
    props = {
      ...props,
      itemStatus: LIST_ITEM_STATUS.COMPLETE,
    };
    renderChecklistItemDetails(props);

    userEvent.click(screen.getByRole('button', { name: 'Next' }));

    expect(props.onStatusChange).not.toHaveBeenCalled();
    expect(props.onOpenNextItem).toHaveBeenCalledWith('getToKnow');
  });
});
