"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _CtaButton = _interopRequireWildcard(require("../CtaButton"));

describe('CtaButton', function () {
  var props;
  var ctaButton;
  var elem;
  beforeEach(function () {
    props = {
      labelText: 'Button Label',
      isPrimary: false,
      ctaClassName: 'fakeClassName',
      onClick: jest.fn()
    };
    ctaButton = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_CtaButton.default, props));
    elem = ctaButton.find('button');
  });
  it('should render a <button>', function () {
    expect(elem);
  });
  it('should run onClick when clicked', function () {
    elem.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
  it('should have labelText as the button content', function () {
    expect(elem.text()).toEqual(props.labelText);
  });
  it('should have ctaClassName applied to button', function () {
    expect(elem.hasClass(props.ctaClassName));
  });
  it('should have the primary button styles', function () {
    var primaryButton = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_CtaButton.default, (0, _extends2.default)({}, props, {
      isPrimary: true
    })));
    var primaryElem = primaryButton.find('button');
    expect(primaryElem.hasClass(_CtaButton.ctaPrimaryButtonClass));
  });
});