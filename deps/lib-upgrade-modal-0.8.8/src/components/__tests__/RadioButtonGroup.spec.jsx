import React from 'react';
import { shallow } from 'enzyme';

import RadioButtonGroup from '../RadioButtonGroup';

describe('RadioButtonGroup', () => {
  let props;
  let buttonGroup;
  let inputs;

  beforeEach(() => {
    props = {
      items: {
        month: {
          id: 'monthly',
          label: 'Input Label',
          value: 'value',
        }
      },
      onChange: jest.fn(),
      selectedValue: '',
      rootPlans: {year: true}
    };

    buttonGroup = shallow(<RadioButtonGroup {...props} />);
    inputs = buttonGroup.find('RadioInput');
  });

  it('should render RadioInputs', () => {
    expect(inputs.length).toBe(Object.keys(props.items).length);
  });

  it('should set onChange on input', () => {
    expect(inputs.first().props().onChange).toBe(props.onChange);
  });

  it('should set RadioInput isChecked to true if selectedValue is input value', () => {
    buttonGroup = shallow(<RadioButtonGroup {...props} selectedValue={props.items.month.value} />);
    const input = buttonGroup.find('RadioInput').first();
    expect(input.props().isChecked).toBe(true);
  });

  it('should set RadioInput disabled to true if selectedValue is not in rootPlans', () => {
    buttonGroup = shallow(<RadioButtonGroup {...props} selectedValue={props.items.month.value} />);
    const input = buttonGroup.find('RadioInput').first();
    expect(input.props().disabled).toBe(true);
  });
});
