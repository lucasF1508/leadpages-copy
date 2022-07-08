import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { shallow } from 'enzyme';
import RadioButtonGroup from '../RadioButtonGroup';
describe('RadioButtonGroup', function () {
  var props;
  var buttonGroup;
  var inputs;
  beforeEach(function () {
    props = {
      items: {
        month: {
          id: 'monthly',
          label: 'Input Label',
          value: 'value'
        }
      },
      onChange: jest.fn(),
      selectedValue: '',
      rootPlans: {
        year: true
      }
    };
    buttonGroup = shallow( /*#__PURE__*/React.createElement(RadioButtonGroup, props));
    inputs = buttonGroup.find('RadioInput');
  });
  it('should render RadioInputs', function () {
    expect(inputs.length).toBe(Object.keys(props.items).length);
  });
  it('should set onChange on input', function () {
    expect(inputs.first().props().onChange).toBe(props.onChange);
  });
  it('should set RadioInput isChecked to true if selectedValue is input value', function () {
    buttonGroup = shallow( /*#__PURE__*/React.createElement(RadioButtonGroup, _extends({}, props, {
      selectedValue: props.items.month.value
    })));
    var input = buttonGroup.find('RadioInput').first();
    expect(input.props().isChecked).toBe(true);
  });
  it('should set RadioInput disabled to true if selectedValue is not in rootPlans', function () {
    buttonGroup = shallow( /*#__PURE__*/React.createElement(RadioButtonGroup, _extends({}, props, {
      selectedValue: props.items.month.value
    })));
    var input = buttonGroup.find('RadioInput').first();
    expect(input.props().disabled).toBe(true);
  });
});