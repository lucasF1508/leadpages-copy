import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { shallow } from 'enzyme';
import CtaButton, { ctaPrimaryButtonClass } from '../CtaButton';
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
    ctaButton = shallow( /*#__PURE__*/React.createElement(CtaButton, props));
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
    var primaryButton = shallow( /*#__PURE__*/React.createElement(CtaButton, _extends({}, props, {
      isPrimary: true
    })));
    var primaryElem = primaryButton.find('button');
    expect(primaryElem.hasClass(ctaPrimaryButtonClass));
  });
});