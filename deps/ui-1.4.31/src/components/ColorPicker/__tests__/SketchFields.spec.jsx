import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import SketchFields, { INPUT_BEHAVIOR } from '../SketchFields';

describe('SketchFields', () => {
  let props;
  let event;

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      selectedColor: '#111111',
      opacity: 100,
      inputBehavior: INPUT_BEHAVIOR.BLUR_ONLY,
    };
    event = { target: { value: '' } };
  });

  afterEach(cleanup);

  it('renders correctly', () => {
    const { getByLabelText } = render(<SketchFields {...props} />);

    const colorInputField = getByLabelText('Color Code');
    const opacityInputField = getByLabelText('Opacity');

    expect(colorInputField).toBeDefined();
    expect(opacityInputField).toBeDefined();
  });

  describe('Color input', () => {
    it('should update the input with the new value', () => {
      const { getByLabelText } = render(<SketchFields {...props} />);

      const colorInputField = getByLabelText('Color Code');

      event.target.value = 'red';
      fireEvent.change(colorInputField, event);
      expect(colorInputField.value).toEqual('red');
    });

    it('should convert values to hex onBlur', () => {
      const { getByLabelText } = render(<SketchFields {...props} />);
      event.target.value = 'red';

      const colorInputField = getByLabelText('Color Code');
      fireEvent.change(colorInputField, event);
      fireEvent.blur(colorInputField, { ...event, type: 'blur' });
      expect(colorInputField.value).toEqual('FF0000');
    });
  });

  describe('Opacity input', () => {
    it('should update the input with the new value', () => {
      const { getByLabelText } = render(<SketchFields {...props} />);
      const opacityInputField = getByLabelText('Opacity');
      event.target.value = 50;
      fireEvent.change(opacityInputField, event);
      expect(opacityInputField.value).toEqual('50');
    });
  });

  describe('on change mode', () => {
    it('changes external color right away, and internal text field on blur', () => {
      props.inputBehavior = INPUT_BEHAVIOR.CHANGE;
      const { getByLabelText } = render(<SketchFields {...props} />);

      event.target.value = 'red';

      const colorInputField = getByLabelText('Color Code');
      fireEvent.change(colorInputField, event);
      expect(props.onChange).toHaveBeenCalledWith({r: 255, g: 0, b: 0, a: 1, source: 'rgb'})

      expect(colorInputField.value).toEqual('red');

      fireEvent.blur(colorInputField, event);

      expect(colorInputField.value).toEqual('FF0000');
    });
  });
});
