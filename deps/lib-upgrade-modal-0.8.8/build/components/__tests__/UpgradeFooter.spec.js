"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _UpgradeFooter = _interopRequireDefault(require("../UpgradeFooter"));

describe('UpgradeFooter', function () {
  var props;
  var elem;
  beforeEach(function () {
    props = {
      plans: {
        standard: {
          id: 'std',
          price: '99',
          buttonText: 'Upgrade',
          isCurrentPlan: false
        }
      },
      activePlanLevels: ['standard'],
      tableRowClass: 'row-class',
      tableItemClass: 'item-class',
      tableColumnClass: 'col-class',
      onSelectPlan: jest.fn()
    };
    elem = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_UpgradeFooter.default, props));
  });
  it('should render UpgradeFooter', function () {
    expect(elem).toBeDefined();
  });
  it('should render PlanCta per plans item ', function () {
    expect(elem.find('PlanCta')).toHaveLength(1);
  });
  it('should have tableRowClass on the container', function () {
    expect(elem.find(props.tableColumnClass)).toBeDefined();
  });
});