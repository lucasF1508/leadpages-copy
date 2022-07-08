"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _RadioButtonGroup = _interopRequireDefault(require("../RadioButtonGroup"));

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
    buttonGroup = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_RadioButtonGroup.default, props));
    inputs = buttonGroup.find('RadioInput');
  });
  it('should render RadioInputs', function () {
    expect(inputs.length).toBe(Object.keys(props.items).length);
  });
  it('should set onChange on input', function () {
    expect(inputs.first().props().onChange).toBe(props.onChange);
  });
  it('should set RadioInput isChecked to true if selectedValue is input value', function () {
    buttonGroup = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_RadioButtonGroup.default, (0, _extends2.default)({}, props, {
      selectedValue: props.items.month.value
    })));
    var input = buttonGroup.find('RadioInput').first();
    expect(input.props().isChecked).toBe(true);
  });
  it('should set RadioInput disabled to true if selectedValue is not in rootPlans', function () {
    buttonGroup = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_RadioButtonGroup.default, (0, _extends2.default)({}, props, {
      selectedValue: props.items.month.value
    })));
    var input = buttonGroup.find('RadioInput').first();
    expect(input.props().disabled).toBe(true);
  });
});