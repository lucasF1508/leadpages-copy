import React from 'react';
import { shallow } from 'enzyme';
import color from 'react-color/lib/helpers/color';
import CustomColorPicker from '../CustomColorPicker';

describe('CustomColorPicker', () => {
  let customColorPicker;
  let instance;
  let onClose;
  let onChange;

  beforeEach(() => {
    onClose = jest.fn();
    onChange = jest.fn();
    customColorPicker = shallow(
      <CustomColorPicker
        onClose={onClose}
        isOpen
        color={'111111'}
        onChange={onChange}
      />
    );
    instance = customColorPicker.instance();
  });

  it('should render correctly', () => {
    expect(customColorPicker).toBeDefined();
  });

  describe('componentDidUpdate', () => {
    beforeEach(() => {
      jest.spyOn(instance, 'setState');
    });

    it('should not update the color values in state if the color prop is unchanged', () => {
      instance.componentDidUpdate({ color: '111111' });
      expect(instance.setState).not.toHaveBeenCalled();
    });

    it('should update the color values in state if the color prop changes', () => {
      instance.componentDidUpdate({ color: 'FFFFFF' });
      expect(instance.setState).toHaveBeenCalled();
      customColorPicker.update();
      expect(instance.state).toEqual({ ...color.toState('111111', 0) });
    });
  });

  describe('Closing the custom picker', () => {
    it('should be closed by the back button', () => {
      customColorPicker
        .find('Link')
        .at(0)
        .props()
        .onClick();
      expect(onClose).toBeCalled();
    });
  });

  describe('Changing colors', () => {
    it('should update state with the updated color', () => {
      customColorPicker.instance().handleOnChange({ hex: '663399' });
      customColorPicker.update();
      expect(customColorPicker.state().hex).toBe('#663399');
    });
  });
});
