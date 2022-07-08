import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ColorPickerLabel from '../ColorPickerLabel';

describe('ColorPickerLabel', () => {
  let getByText;
  let props;

  beforeEach(() => {
    props = {
      text: 'MY LABEL',
      labelAction: jest.fn(),
      labelActionText: 'EDIT',
    };
    ({ getByText } = render(<ColorPickerLabel {...props} />));
  });

  afterEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    const label = getByText(props.text);
    expect(label).toBeDefined();
  });

  it('should fire the label action function on click', () => {
    const labelActionButton = getByText(props.labelActionText);
    fireEvent.click(labelActionButton);
    expect(props.labelAction).toHaveBeenCalled();
  });
});
