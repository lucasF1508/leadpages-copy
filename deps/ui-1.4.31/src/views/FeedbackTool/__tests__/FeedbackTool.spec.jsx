import React from 'react';
import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ProductThemeProvider } from '../../../index';
import FeedbackTool from '../FeedbackTool';
import '@testing-library/jest-dom/extend-expect';

describe('FeedbackTool', () => {
  let props;
  beforeEach(() => {
    props = {
      closeModal: jest.fn(),
      hasRequestedFeedback: false,
      kind: 'Page',
      onSubmit: jest.fn(),
      open: true,
      setRequestedFeedback: jest.fn(),
    };
    render(
      <ProductThemeProvider>
        <FeedbackTool {...props} />
      </ProductThemeProvider>,
    );
  });

  afterEach(cleanup);

  it('should render the feedback tool', () => {
    const cancelButton = screen.getByText('Cancel');
    const submitButton = screen.getByText('Submit');
    const textarea = screen.getByRole('textbox');
    const title = screen.getByText('Get Feedback on Your Page');
    expect(cancelButton).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it('should call onSubmit when you click the submit button if there is text in the question field', async () => {
    const submitButton = screen.getByText('Submit');
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'Is my page good?' } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(props.onSubmit).toHaveBeenCalled());
    expect(props.setRequestedFeedback).toHaveBeenCalled();
    expect(screen.getByText('Your page has been submitted for feedback.')).toBeInTheDocument();
  });

  it('should not call onSubmit if there is no text in the question field', () => {
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    expect(props.onSubmit).not.toHaveBeenCalled();
  });

  it('should call closeModal when you click cancel', () => {
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(props.closeModal).toHaveBeenCalled();
  });

  it('should call closeModal when you click the close button', () => {
    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);
    expect(props.closeModal).toHaveBeenCalled();
  });

  it('should show a success modal if hasRequestedFeedback is true', () => {
    props.hasRequestedFeedback = true;
    render(
      <ProductThemeProvider>
        <FeedbackTool {...props} />
      </ProductThemeProvider>,
    );
    expect(
      screen.getByText('Your request for feedback has been successfully submitted.'),
    ).toBeInTheDocument();
  });
});
