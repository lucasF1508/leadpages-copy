"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _PlanCta = _interopRequireDefault(require("../PlanCta"));

describe('PlanCta', function () {
  var props;
  var elem;
  var button;
  beforeEach(function () {
    props = {
      planKey: 'standard',
      planId: 'std',
      label: 'label',
      tableItemClass: 'item-class',
      tableColumnClass: 'col-class',
      onClick: jest.fn(),
      buttonText: 'Upgrade',
      isCurrentPlan: false
    };
    elem = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_PlanCta.default, props));
    button = elem.find('button');
  });
  it('should render PlanCta', function () {
    expect(elem).toBeDefined();
  });
  it('should render a button with button label', function () {
    expect(button).toHaveLength(1);
    expect(button.text()).toEqual(props.buttonText);
  });
  it('should call onClick when button is clicked', function () {
    button.simulate('click', {
      preventDefault: function preventDefault() {}
    });
    expect(props.onClick).toHaveBeenCalledWith(props.planId);
  });
  it('should render a label', function () {
    expect(elem.find('[data-qa-selector="cta-label"]').text()).toEqual(props.label);
  });
  it('should not render a button if it is the current plan', function () {
    props.isCurrentPlan = true;
    elem = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_PlanCta.default, props));
    expect(elem.find('button')).toHaveLength(0);
  });
  it('should set most-popular class on button if plan is pro', function () {
    props.planKey = 'pro';
    elem = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_PlanCta.default, props));
    expect(elem.find('button').hasClass('most-popular'));
  });
});