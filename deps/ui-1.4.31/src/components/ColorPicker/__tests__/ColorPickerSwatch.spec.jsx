import React from 'react';
import tinycolor from 'tinycolor2';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ColorPickerSwatch, { getColorSwatchTitle } from '../ColorPickerSwatch';

describe('ColorPickerLabel', () => {
  let getByTitle;
  let props;
  let labelText;
  let swatch;

  beforeEach(() => {
    props = {
      color: '#3E4B21',
      onClick: jest.fn(),
      onSwatchHover: jest.fn(),
    };
    ({ getByTitle } = render(<ColorPickerSwatch {...props} />));
    labelText = getColorSwatchTitle(tinycolor(props.color));
    swatch = getByTitle(labelText);
  });

  afterEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    expect(swatch).toBeDefined();
  });

  it('should fire the label action function on click', () => {
    fireEvent.click(swatch);
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should fire the hover action function on click', () => {
    fireEvent.mouseOver(swatch);
    expect(props.onSwatchHover).toHaveBeenCalled();
  });
});
