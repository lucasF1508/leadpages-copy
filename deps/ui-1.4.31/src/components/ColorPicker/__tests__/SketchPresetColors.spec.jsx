import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import SketchPresetColors from '../SketchPresetColors';
import tinycolor from 'tinycolor2';
import { getColorSwatchTitle } from '../ColorPickerSwatch';

describe('SketchPresetColors', () => {
  let onClick;
  let labelAction;
  let label;
  let labelActionText;
  let colors;
  let getByText;
  let getByTitle;
  let colorSwatchTitles;

  beforeEach(() => {
    onClick = jest.fn();
    labelAction = jest.fn();
    label = 'Brand Colors';
    labelActionText = 'EDIT';

    colors = ['000000', 'aaaaaa', 'ffffff', 'rgba(0,0,0,.25)'];

    colorSwatchTitles = colors.map(c => {
      return getColorSwatchTitle(tinycolor(c));
    });

    ({ getByText, getByTitle } = render(
      <SketchPresetColors
        colors={colors}
        label={label}
        onClick={onClick}
        labelAction={labelAction}
        labelActionText={labelActionText}
      />,
    ));
  });

  afterEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    expect(getByText(label)).toBeDefined();
    expect(getByText(labelActionText)).toBeDefined();

    colorSwatchTitles.forEach(title => {
      expect(getByTitle(title)).toBeDefined();
    });
  });

  it('should fire the label event when you click on the label', () => {
    fireEvent.click(getByText(labelActionText));
    expect(labelAction).toHaveBeenCalled();
  });

  it('should fire the onClick event when you click on a color', () => {
    fireEvent.click(getByTitle(colorSwatchTitles[0]));
    expect(onClick.mock.calls[0][0]).toBe(colors[0]);
  });
});
