"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _PlanHeader = _interopRequireDefault(require("../PlanHeader"));

var selectors = {
  container: {
    'data-qa-selector': 'container'
  },
  title: {
    'data-qa-selector': 'plan-title'
  },
  label: {
    'data-qa-selector': 'plan-label'
  },
  payLabel: {
    'data-qa-selector': 'pay-label'
  },
  price: {
    'data-qa-selector': 'plan-price'
  },
  ctaButton: {
    'data-qa-selector': 'upgrade-button-container'
  }
};

var makeWrapper = function makeWrapper(props) {
  return (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_PlanHeader.default, props));
};

describe('PlanHeader', function () {
  var planHeader;
  var elem;
  var props = {
    title: 'Pro',
    price: '48',
    ctaAction: jest.fn()
  };
  it('should render the title', function () {
    planHeader = makeWrapper(props);
    elem = planHeader.find(selectors.title);
    expect(elem.text()).toEqual(props.title);
  });
  it('should render the price', function () {
    planHeader = makeWrapper(props);
    elem = planHeader.find(selectors.price);
    expect(elem.text()).toEqual("$".concat(props.price));
  });
  it('should render the pay label', function () {
    var payLabel = 'Pay Label';
    planHeader = makeWrapper((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      payLabel: payLabel
    }));
    elem = planHeader.find(selectors.payLabel);
    expect(elem.text()).toEqual(payLabel);
  });
  it('should render the plan label', function () {
    var planLabel = 'Plan Label';
    planHeader = makeWrapper((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      planLabel: planLabel
    }));
    elem = planHeader.find(selectors.label);
    expect(elem.text()).toEqual(planLabel);
  });
  it('should hide buttons by default', function () {
    planHeader = makeWrapper(props);
    elem = planHeader.find(selectors.ctaButton);
    expect(elem.length).toBe(0);
  });
  it('should render CtaButton with showButton', function () {
    planHeader = makeWrapper((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      showButton: true
    }));
    elem = planHeader.find(selectors.ctaButton);
    expect(elem.length).toBe(1);
  });
  it('should not render CtaButton with showButton but not button label', function () {
    props.buttonLabel = '';
    planHeader = makeWrapper((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      showButton: true
    }));
    elem = planHeader.find(selectors.ctaButton);
    expect(elem.length).toBe(0);
  });
  it('should add highlighted class with isHighlighted', function () {
    planHeader = makeWrapper((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      isHighlighted: true
    }));
    elem = planHeader.find(selectors.container);
    expect(elem.hasClass('highlighted')).toBe(true);
  });
});