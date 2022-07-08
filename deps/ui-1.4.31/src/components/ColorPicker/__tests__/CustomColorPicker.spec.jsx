import React from 'react';
import tinycolor from 'tinycolor2';
import colorHelpers from 'react-color/lib/helpers/color';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CustomColorPicker from '../CustomColorPicker';

describe('CustomColorPicker', () => {
  let props;

  beforeEach(() => {
    props = {
      onClose: jest.fn(),
      onChange: jest.fn(),
      selectedColor: colorHelpers.toState({ hex: tinycolor('111111').toHex().toUpperCase() }, 0),
    };
  });

  afterEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    const { getByTestId, getByLabelText } = render(<CustomColorPicker {...props} />);
    expect(getByTestId('custom-color-picker-back')).toBeDefined();
    expect(getByLabelText('Color Code')).toBeDefined();
    expect(getByLabelText('Opacity')).toBeDefined();
  });

  it('back button closes the custom picker', () => {
    const { getByTestId } = render(<CustomColorPicker {...props} />);
    const backButton = getByTestId('custom-color-picker-back');
    fireEvent.click(backButton);
    expect(props.onClose).toHaveBeenCalled();
  });
});
