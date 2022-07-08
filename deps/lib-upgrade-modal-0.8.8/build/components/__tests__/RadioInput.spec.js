"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _RadioInput = _interopRequireDefault(require("../RadioInput"));

describe('RadioInput', function () {
  var props;
  var input;
  var elem;
  var label;
  beforeEach(function () {
    props = {
      id: 'id',
      labelText: 'Input Label',
      value: 'value',
      isChecked: false,
      labelClass: 'fakeClassName',
      onChange: jest.fn()
    };
    input = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_RadioInput.default, props));
    elem = input.find('input');
    label = input.find('label');
  });
  it('should render an <input>', function () {
    expect(elem);
  });
  it('should run onChange when toggled', function () {
    elem.simulate('change', {
      target: {
        'checked': true
      }
    });
    expect(props.onChange).toHaveBeenCalled();
  });
  it('should have labelText as the input label', function () {
    expect(label.text()).toEqual(props.labelText);
  });
  it('should have labelClass applied to button', function () {
    expect(label.hasClass(props.labelClass));
  });
  it('should default to unchecked', function () {
    expect(elem.props().checked).toBe(false);
  });
  it('should disable plans that are not there', function () {
    props.disabled = true;
    input = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_RadioInput.default, props));
    elem = input.find('input');
    label = input.find('label');
    expect(elem.props().disabled).toBe(true);
    expect(label.hasClass(props.labelClass)).toBe(true);
  });
});