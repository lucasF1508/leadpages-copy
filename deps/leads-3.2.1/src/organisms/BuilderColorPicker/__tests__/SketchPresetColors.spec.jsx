import React from 'react';
import { shallow } from 'enzyme';
import SketchPresetColors from '../SketchPresetColors';

describe('SketchPresetColors', () => {
  let sketchPresetColors;
  let onClick;
  let labelAction;
  beforeEach(() => {
    onClick = jest.fn();
    labelAction = jest.fn();
    sketchPresetColors = shallow(
      <SketchPresetColors
        colors={['000000', 'aaaaaa', 'ffffff']}
        label={'Brand Colors'}
        onClick={onClick}
        labelAction={labelAction}
        labelActionText={'EDIT'}
        qaSelector="brand-colors-edit"
        onSwatchHover
      />
    );
  });

  it('should render correctly', () => {
    expect(sketchPresetColors).toBeDefined();

    const labelText = sketchPresetColors
      .find('label')
      .at(0)
      .text();
    expect(labelText).toBe('Brand Colors');

    const linkText = sketchPresetColors
      .find('Link')
      .at(0)
      .props().children;
    expect(linkText).toBe('EDIT');

    const linkAction = sketchPresetColors
      .find('Link')
      .at(0)
      .props().onClick;
    expect(linkAction).toBe(labelAction);

    const color1 = sketchPresetColors
      .find('Focus')
      .at(0)
      .props().color;
    expect(color1).toBe('000000');

    const color2 = sketchPresetColors
      .find('Focus')
      .at(1)
      .props().color;
    expect(color2).toBe('aaaaaa');

    const color3 = sketchPresetColors
      .find('Focus')
      .at(2)
      .props().color;
    expect(color3).toBe('ffffff');
  });
});
