import React from 'react';
import { shallow } from 'enzyme';

import RadioInput from '../RadioInput';

describe('RadioInput', () => {
  let props;
  let input;
  let elem;
  let label;

  beforeEach(() => {
    props = {
      id: 'id',
      labelText: 'Input Label',
      value: 'value',
      isChecked: false,
      labelClass: 'fakeClassName',
      onChange: jest.fn(),
    };

    input = shallow(<RadioInput {...props} />);
    elem = input.find('input');
    label = input.find('label');
  });

  it('should render an <input>', () => {
    expect(elem);
  });

  it('should run onChange when toggled', () => {
    elem.simulate('change', { target: { 'checked': true }});
    expect(props.onChange).toHaveBeenCalled();
  });

  it('should have labelText as the input label', () => {
    expect(label.text()).toEqual(props.labelText);
  });

  it('should have labelClass applied to button', () => {
    expect(label.hasClass(props.labelClass));
  });

  it('should default to unchecked', () => {
    expect(elem.props().checked).toBe(false);
  });

  it('should disable plans that are not there', () => {
    props.disabled = true;
    input = shallow(<RadioInput {...props} />);
    elem = input.find('input');
    label = input.find('label');
    expect(elem.props().disabled).toBe(true);
    expect(label.hasClass(props.labelClass)).toBe(true);
  });
});
