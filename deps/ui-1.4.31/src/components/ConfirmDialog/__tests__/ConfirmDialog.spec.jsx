import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ConfirmDialog from '../ConfirmDialog';

describe('ConfirmDialog', () => {
  let props;
  let queryByText;
  let queryByTestId;
  let rerender;

  beforeEach(() => {
    props = {
      open: true,
      titleText: 'Dialog Title',
      subtitleText: 'Dialog Subtitle',
      descriptionText: 'Dialog Description',
    };

    ({ queryByText, queryByTestId, rerender } = render(<ConfirmDialog {...props} />));
  });

  afterEach(cleanup);

  it('should render a title', () => {
    expect(queryByText('Dialog Title')).toBeDefined();
  });

  it('should not render a title if not passed', () => {
    props.titleText = null;
    rerender(<ConfirmDialog {...props} />);
    expect(queryByText('Dialog Title')).toBeNull();
  });

  it('should render a subtitle', () => {
    expect(queryByText('Dialog Subtitle')).toBeDefined();
  });

  it('should not render a subtitle if not passed', () => {
    props.subtitleText = null;
    rerender(<ConfirmDialog {...props} />);
    expect(queryByText('Dialog Subtitle')).toBeNull();
  });

  it('should render a description', () => {
    expect(queryByText('Dialog Description')).toBeDefined();
  });

  it('should not render a description if not passed', () => {
    props.descriptionText = null;
    rerender(<ConfirmDialog {...props} />);
    expect(queryByText('Dialog Description')).toBeNull();
  });

  it('should render a confirm and cancel button if type is "confirm"', () => {
    const confirmButton = queryByTestId('confirmation-dialog-confirm-button');
    const cancelButton = queryByTestId('confirmation-dialog-cancel-button');

    expect(confirmButton).toBeDefined();
    expect(confirmButton).toHaveTextContent('Yes');
    expect(cancelButton).toBeDefined();
    expect(cancelButton).toHaveTextContent('No');
  });

  it('should only render a confirm button if type is "alert"', () => {
    props.type = 'alert';
    rerender(<ConfirmDialog {...props} />);

    const confirmButton = queryByTestId('confirmation-dialog-confirm-button');
    const cancelButton = queryByTestId('confirmation-dialog-cancel-button');

    expect(confirmButton).toBeDefined();
    expect(confirmButton).toHaveTextContent('Ok');
    expect(cancelButton).toBeNull();
  });

  it('should render custom confirm and cancel button labels', () => {
    props.confirmButtonText = 'Save';
    props.cancelButtonText = 'Cancel';
    rerender(<ConfirmDialog {...props} />);

    const confirmButton = queryByTestId('confirmation-dialog-confirm-button');
    const cancelButton = queryByTestId('confirmation-dialog-cancel-button');

    expect(confirmButton).toHaveTextContent('Save');
    expect(cancelButton).toHaveTextContent('Cancel');
  });
});
