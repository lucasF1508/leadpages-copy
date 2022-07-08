import React from 'react';
import { mount } from 'enzyme';
import SketchFields from '../SketchFields';

describe('SketchFields', () => {
  let sketchFields;
  let instance;
  let onChange;
  let event;

  beforeEach(() => {
    event = { target: { value: '' } };
    onChange = jest.fn();
    sketchFields = mount(<SketchFields hex={'#111111'} onChange={onChange} />);
    instance = sketchFields.instance();
  });

  it('renders correctly', () => {
    expect(sketchFields).toBeDefined();
  });
  describe('handleChange', () => {
    beforeEach(() => {
      jest.spyOn(instance, 'handleSubmit');
    });

    it('should update state with the new value', () => {
      event.target.value = 'red';
      instance.handleChange(event);
      sketchFields.update();
      expect(instance.state.hex).toEqual('red');
    });
    it('should not call submit with the new value if the value is undefined', () => {
      event.target.value = '';
      instance.handleChange(event);
      expect(instance.handleSubmit).not.toHaveBeenCalled();
    });
    it('should not call submit with the new value if the value is not six characters', () => {
      event.target.value = 'FFF';
      instance.handleChange(event);
      expect(instance.handleSubmit).not.toHaveBeenCalled();
    });
    it('should not call submit with the new value if the value is not in a hex format', () => {
      event.target.value = 'purple';
      instance.handleChange(event);
      expect(instance.handleSubmit).not.toHaveBeenCalled();
    });
    it('should call submit with the new value if the value is a valid six character hex', () => {
      event.target.value = 'FFFFFF';
      instance.handleChange(event);
      expect(instance.handleSubmit).toHaveBeenCalled();
    });
  });
  describe('handleSubmit', () => {
    it('should handle a hex change', () => {
      sketchFields.setState({ hex: '111111' });
      sketchFields.update();
      sketchFields.instance().handleSubmit(event);
      expect(onChange).toBeCalledWith(
        {
          r: 17,
          g: 17,
          b: 17,
          a: 1,
          source: 'rgb'
        },
        event
      );
    });
    it('should handle a rgb(a) change', () => {
      sketchFields.setState({ hex: '123,123,123' });
      sketchFields.update();
      sketchFields.instance().handleSubmit(event);
      expect(onChange).toBeCalledWith(
        {
          r: 123,
          g: 123,
          b: 123,
          a: 1,
          source: 'rgb'
        },
        event
      );
    });
    it('should handle a alpha(a) change', () => {
      sketchFields.setState({ hex: '123,123,123,0.5' });
      sketchFields.update();
      sketchFields.instance().handleSubmit(event);
      expect(onChange).toBeCalledWith(
        {
          r: 123,
          g: 123,
          b: 123,
          a: 0.5,
          source: 'rgb'
        },
        event
      );
    });
  });
  describe('handlePaste', () => {
    it('should handle a paste change', () => {
      const preventDefault = jest.fn();
      const getData = jest.fn(() => '123,123,123,0.5');
      sketchFields.instance().handlePaste({
        preventDefault,
        clipboardData: {
          getData
        }
      });
      sketchFields.update();
      expect(preventDefault).toBeCalled();
      expect(getData).toBeCalledWith('text');
      expect(onChange).toBeCalledWith(
        {
          r: 123,
          g: 123,
          b: 123,
          a: 0.5,
          source: 'rgb'
        },
        undefined
      );
    });
  });
});
