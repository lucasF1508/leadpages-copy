import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { ProductThemeProvider } from '../../../index';
import ChecklistCelebrationModal from '../ChecklistCelebrationModal';

const renderChecklistCelebrationModal = props => {
  render(
    <ProductThemeProvider>
      <ChecklistCelebrationModal {...props} />
    </ProductThemeProvider>,
  );
};

describe('Checklist', () => {
  let props;

  beforeEach(() => {
    props = {
      open: true,
      imgSrc: 'fake-img-source',
      imgAlt: 'this is a fake image',
      onClose: jest.fn(),
    };
  });

  afterEach(cleanup);

  it('should render the celebration modal', () => {
    renderChecklistCelebrationModal(props);

    expect(screen.getByRole('heading', { name: 'Way to go!' })).toBeVisible();
  });

  it('should close modal when dialog close button is clicked', () => {
    renderChecklistCelebrationModal(props);

    userEvent.click(screen.getByRole('button', { name: 'close' }));
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should close modal when content button is clicked', () => {
    renderChecklistCelebrationModal(props);

    userEvent.click(screen.getByRole('button', { name: 'close celebration' }));
    expect(props.onClose).toHaveBeenCalled();
  });
});
