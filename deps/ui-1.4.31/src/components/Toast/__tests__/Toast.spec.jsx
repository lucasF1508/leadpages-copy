import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ProductThemeProvider } from '../../../index';
import Toast from '../Toast';

jest.useFakeTimers();

const getComponent = props => (
  <ProductThemeProvider>
    <Toast {...props} />
  </ProductThemeProvider>
);

describe('Toast', () => {
  let props;
  let queryByText;
  let getByLabelText;
  let rerender;

  beforeEach(() => {
    props = {
      open: true,
      onClose: jest.fn(),
      message: 'Hey! You have a toast',
      detail: 'Hopefully nothing went wrong',
    };

    ({ queryByText, getByLabelText, rerender } = render(getComponent(props)));
  });

  afterEach(cleanup);

  it('should render a toast with just a message for the default layout', () => {
    expect(queryByText(props.message)).toBeInTheDocument();
    expect(queryByText(props.detail)).not.toBeInTheDocument();
  });

  it('should render a toast with a message and detail for the alert layout', () => {
    props.layout = 'alert';
    rerender(getComponent(props));
    expect(queryByText(props.message)).toBeInTheDocument();
    expect(queryByText(props.detail)).toBeInTheDocument();
  });

  it('should call the onClose function when you click the close button', () => {
    const closeButton = queryByText('Close');
    fireEvent.click(closeButton);
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should call the onClose function when you click the icon close button', () => {
    props.hasIconCloseButton = true;
    rerender(getComponent(props));
    const closeButton = getByLabelText('close');
    fireEvent.click(closeButton);
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should call onClose after 6 seconds by default', () => {
    jest.advanceTimersByTime(6000);
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should calls onClose after number of seconds specified in "autoHideDuration" prop', () => {
    props.autoHideDuration = 8000;
    rerender(getComponent(props));

    jest.advanceTimersByTime(8000);
    expect(props.onClose).toHaveBeenCalled();
  });
});
