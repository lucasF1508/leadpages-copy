import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { ProductThemeProvider } from '../../../index';
import Checklist from '../Checklist';
import { LIST_ITEM_STATUS } from '../ChecklistItem';
import ChecklistItemDetails from '../ChecklistItemDetails';

const MockDetailsComponent = props => (
  <ChecklistItemDetails {...props}>
    <p>{props.itemName} checklist item details</p>
  </ChecklistItemDetails>
);

const renderChecklist = props => {
  render(
    <ProductThemeProvider>
      <Checklist {...props} />
    </ProductThemeProvider>,
  );
};

describe('Checklist', () => {
  let props;

  beforeEach(() => {
    props = {
      open: true,
      list: [
        {
          name: 'firstItem',
          label: 'First Item',
          status: LIST_ITEM_STATUS.COMPLETE,
          DetailsComponent: MockDetailsComponent,
        },
        {
          name: 'secondItem',
          label: 'Second Item',
          status: LIST_ITEM_STATUS.INCOMPLETE,
          DetailsComponent: MockDetailsComponent,
        },
        {
          name: 'thirdItem',
          label: 'Third Item',
          status: LIST_ITEM_STATUS.INCOMPLETE,
          DetailsComponent: MockDetailsComponent,
        },
      ],
      onClose: jest.fn(),
      onStatusChange: jest.fn(),
      onItemExpand: jest.fn(),
      onBottomItemExpand: jest.fn(),
    };
  });

  afterEach(cleanup);

  it('should render', () => {
    renderChecklist(props);

    expect(screen.getByRole('heading', { name: 'Help & Getting Started' })).toBeVisible();
  });

  it('should display completion status header, progress bar, and details with correct values', () => {
    renderChecklist(props);

    expect(screen.getByRole('heading', { name: 'First Item' })).toBeVisible();
    expect(screen.getByRole('progressbar', { 'aria-valuenow': 33 }));
    expect(screen.getByText('1/3 Complete')).toBeVisible();
  });

  it('should render an accordion for each list item', () => {
    renderChecklist(props);

    expect(screen.getByRole('button', { name: 'First Item' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Second Item' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Third Item' })).toBeVisible();
  });

  it('should open first item accordion and display list item details', () => {
    renderChecklist(props);

    const accordionButton = screen.getByRole('button', { name: 'First Item' });
    userEvent.click(accordionButton);

    expect(accordionButton.getAttribute('aria-expanded')).toEqual('true');

    expect(screen.getByText('firstItem checklist item details')).toBeVisible();
    expect(props.onItemExpand).toHaveBeenCalledWith('firstItem');
  });

  it('should only allow one accordion to be open at a time', async () => {
    renderChecklist(props);

    // Open first accordion
    const accordionOneButton = screen.getByRole('button', { name: 'First Item' });
    userEvent.click(accordionOneButton);

    await waitFor(() => {
      expect(accordionOneButton.getAttribute('aria-expanded')).toEqual('true');
    });

    // Open second accordion
    const accordionTwoButton = screen.getByRole('button', { name: 'Second Item' });
    userEvent.click(accordionTwoButton);

    // Expect first to be closed, second to be open
    await waitFor(() => {
      expect(accordionOneButton.getAttribute('aria-expanded')).toEqual('false');
      expect(accordionTwoButton.getAttribute('aria-expanded')).toEqual('true');
    });
  });

  it('should display optional bottom accordion with correct label and details', () => {
    props = {
      ...props,
      bottomItemLabel: 'Bottom item label test',
      bottomItemComponent: <div>Bottom item mock component</div>,
    };
    renderChecklist(props);

    expect(screen.getByRole('heading', { name: 'Bottom item label test' })).toBeVisible();

    userEvent.click(screen.getByRole('button', { name: 'Bottom item label test' }));
    expect(screen.getByText('Bottom item mock component')).toBeVisible();
    expect(props.onBottomItemExpand).toHaveBeenCalledWith('Bottom item label test');
  });

  it('should trigger a status update and open next list item when the Next button is clicked', async () => {
    renderChecklist(props);

    // Open first accordion and click "Next" button
    userEvent.click(screen.getByRole('button', { name: 'Second Item' }));
    userEvent.click(screen.getByTestId('secondItem-next-button'));

    // Expect status update to trigger and next item accordion to be open
    expect(props.onStatusChange).toHaveBeenCalledWith('secondItem', LIST_ITEM_STATUS.COMPLETE);
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: 'Third Item' }).getAttribute('aria-expanded'),
      ).toEqual('true');
    });
  });

  it('should display a complete message within the progress bar caption if all items are completed', () => {
    props.list[1].status = LIST_ITEM_STATUS.COMPLETE;
    props.list[2].status = LIST_ITEM_STATUS.COMPLETE;
    renderChecklist(props);

    expect(screen.getByText('Great—ready for visitors!')).toBeVisible();
  });
});
