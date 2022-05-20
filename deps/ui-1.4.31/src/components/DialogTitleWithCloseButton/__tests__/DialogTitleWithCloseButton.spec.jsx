import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DialogTitleWithCloseButton from '../DialogTitleWithCloseButton';

describe('DialogTitleWithCloseButton', () => {
  let props;
  let getByText;
  let getByLabelText;

  beforeEach(() => {
    props = {
      onClose: jest.fn(),
    };

    ({ getByText, getByLabelText } = render(
      <DialogTitleWithCloseButton {...props}>Dialog Title</DialogTitleWithCloseButton>,
    ));
  });

  afterEach(cleanup);

  it('should render a title', () => {
    expect(getByText('Dialog Title')).toBeDefined();
  });

  it('should render a close button', () => {
    expect(getByLabelText('close')).toBeInTheDocument();
  });

  it('should trigger onClose when close button is clicked', () => {
    const closeButton = getByLabelText('close');
    fireEvent.click(closeButton);

    expect(props.onClose).toHaveBeenCalled();
  });
});
