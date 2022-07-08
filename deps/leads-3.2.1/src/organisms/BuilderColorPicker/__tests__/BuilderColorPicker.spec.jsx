import React from 'react';
import { shallow } from 'enzyme';
import { Sketch as BuilderColorPicker } from '../BuilderColorPicker';

describe('BuilderColorPicker', () => {
  let builderColorPicker;
  let instance;
  let onChange;
  beforeEach(() => {
    onChange = jest.fn();
    builderColorPicker = shallow(
      <BuilderColorPicker
        color="rgb(17, 17, 17)"
        onChange={onChange}
        presetColors={[
          'rgb(15, 234, 126)',
          'rgb(19, 15, 234)',
          'rgb(234, 15, 15)'
        ]}
      />
    );
    instance = builderColorPicker.instance();
  });

  it('should render correctly', () => {
    expect(builderColorPicker).toBeDefined();
  });

  describe('sanitizePresetColors', () => {
    let presetColors;
    let customColor;

    beforeEach(() => {
      customColor = null;
      presetColors = [
        'rgb(222, 222, 222)', // #dedede
        'rgb(111, 111, 111)' // #6f6f6f
      ];
    });

    it('should add the custom color to the presets', () => {
      customColor = '#ffffff';
      expect(instance.sanitizePresetColors(presetColors, customColor)).toEqual([
        'rgb(255, 255, 255)',
        'rgb(222, 222, 222)',
        'rgb(111, 111, 111)'
      ]);
    });

    it('should not have duplicate colors in the array', () => {
      customColor = '#dedede';
      expect(instance.sanitizePresetColors(presetColors, customColor)).toEqual([
        'rgb(222, 222, 222)',
        'rgb(111, 111, 111)'
      ]);
    });

    it('should handle no custom color', () => {
      expect(instance.sanitizePresetColors(presetColors, customColor)).toEqual([
        'rgb(222, 222, 222)',
        'rgb(111, 111, 111)'
      ]);
    });
  });

  describe('Opening and closing the modal', () => {
    it('should open the modal when handleOpen is called', () => {
      instance.handleOpen();
      expect(instance.state.isCustomColorPickerOpen).toBe(true);
    });

    it('should close the modal when handleClose is called', () => {
      instance.handleClose();
      expect(instance.state.isCustomColorPickerOpen).toBe(false);
    });

    it('should handle an null value for custom color', () => {
      builderColorPicker.setState({ presetColors: [], customColor: null });
      instance.handleClose();
      expect(instance.state.presetColors).toEqual([]);
    });

    it('should add the custom color to the presets list', () => {
      builderColorPicker.setState({ presetColors: [], customColor: '#ffffff' });
      instance.handleClose();
      expect(instance.state.presetColors).toEqual(['rgb(255, 255, 255)']);
    });

    it('should not add duplicate colors to the presets list', () => {
      builderColorPicker.setState({
        presetColors: ['#ffffff'],
        customColor: '#ffffff'
      });
      instance.handleClose();
      expect(instance.state.presetColors).toEqual(['rgb(255, 255, 255)']);
    });
  });

  describe('Adding a page color', () => {
    it('should update state with the updated color in hex format', () => {
      builderColorPicker.instance().handleOnCustomChange('red');
      builderColorPicker.update();
      expect(builderColorPicker.instance().state.customColor).toEqual(
        'rgb(255, 0, 0)'
      );
      expect(onChange).toBeCalledWith('red');
    });
  });

  describe('componentWillUnmount', () => {
    it('calls the custom color choice handler if custom color menu is open', () => {
      const mockHandleOnCustomColorChoice = jest.fn();
      builderColorPicker.instance().handleOnCustomColorChoice = mockHandleOnCustomColorChoice;
      builderColorPicker.setState({ isCustomColorPickerOpen: true });
      builderColorPicker.update();
      builderColorPicker.instance().componentWillUnmount();
      expect(mockHandleOnCustomColorChoice).toHaveBeenCalled();
    });

    it('does not call the custom color choice handler if custom color menu is closed', () => {
      const mockHandleOnCustomColorChoice = jest.fn();
      builderColorPicker.instance().handleOnCustomColorChoice = mockHandleOnCustomColorChoice;
      builderColorPicker.setState({ isCustomColorPickerOpen: false });
      builderColorPicker.update();
      builderColorPicker.instance().componentWillUnmount();
      expect(mockHandleOnCustomColorChoice).not.toHaveBeenCalled();
    });
  });

  describe('handleOnCustomColorChoice', () => {
    it('calls onCustomColorChoice prop if onCustomColorChoice prop exists and is given a color', () => {
      const mockOnCustomColorChoice = jest.fn();
      builderColorPicker.setProps({
        onCustomColorChoice: mockOnCustomColorChoice
      });

      builderColorPicker.instance().handleOnCustomColorChoice('rgb(1, 2, 3)');

      expect(mockOnCustomColorChoice).toHaveBeenCalled();
    });

    it('does not calls onCustomColorChoice prop if not given a color', () => {
      const mockOnCustomColorChoice = jest.fn();
      builderColorPicker.setProps({
        onCustomColorChoice: mockOnCustomColorChoice
      });

      builderColorPicker.instance().handleOnCustomColorChoice(null);

      expect(mockOnCustomColorChoice).not.toHaveBeenCalled();
    });
  });
});
