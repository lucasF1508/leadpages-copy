import React from 'react';
import tinycolor from 'tinycolor2';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ColorPicker from '../ColorPicker';
import { getColorSwatchTitle } from '../ColorPickerSwatch';

describe('ColorPicker', () => {
  let colorPicker;
  let recentColorsAdd;
  let onChange;
  let onOpenCustomColorPicker;
  let getByTestId;
  let getByText;
  let getByTitle;
  let getByLabelText;
  let presetColors;
  let brandColors;
  let rerender;

  beforeEach(() => {
    onChange = jest.fn();
    onOpenCustomColorPicker = jest.fn();
    presetColors = ['rgb(15, 234, 126)', 'rgb(19, 15, 234)', 'rgb(234, 15, 15)'];
    brandColors = ['#54DE12', '#A2E3C4', '#21AC3F'];
    ({ getByText, getByTestId, getByTitle, getByLabelText, rerender } = render(
      <ColorPicker
        color="rgb(17, 17, 17)"
        onChange={onChange}
        onOpenCustomColorPicker={onOpenCustomColorPicker}
        presetColors={presetColors}
      />,
    ));
    colorPicker = getByTestId('color-picker');
    recentColorsAdd = getByText('ADD');
  });

  afterEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    expect(colorPicker).toBeDefined();
    presetColors.forEach(color => {
      const presetColorTitle = getColorSwatchTitle(tinycolor(color));
      expect(getByTitle(presetColorTitle)).toBeDefined();
    });
  });

  it('should render brand colors if any are provided', () => {
    rerender(
      <ColorPicker
        color="rgb(17, 17, 17)"
        onChange={onChange}
        presetColors={presetColors}
        brandColors={brandColors}
      />,
    );
    brandColors.forEach(color => {
      const brandColors = getColorSwatchTitle(tinycolor(color));
      expect(getByTitle(brandColors)).toBeDefined();
    });
  });

  it('should open the custom color picker', () => {
    fireEvent.click(recentColorsAdd);
    expect(onOpenCustomColorPicker).toHaveBeenCalled();
    expect(getByTestId('custom-color-picker-back')).toBeDefined();
    expect(getByLabelText('Color Code')).toBeDefined();
    expect(getByLabelText('Opacity')).toBeDefined();
  });

  it('should add custom colors to the recent colors when they are selected', () => {
    fireEvent.click(recentColorsAdd);

    const customColor = '#182d99';
    const customColorTextField = getByLabelText('Color Code');

    fireEvent.change(customColorTextField, { target: { value: customColor } });
    fireEvent.blur(customColorTextField);

    const backButton = getByTestId('custom-color-picker-back');
    fireEvent.click(backButton);

    const colorSwatchTitle = getColorSwatchTitle(tinycolor(customColor));

    expect(getByTitle(colorSwatchTitle)).toBeDefined();
  });
});
