"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _constants = require("../constants");

var _UpgradeModal = _interopRequireDefault(require("../UpgradeModal"));

var _components = require("../components");

describe('UpgradeModal', function () {
  var wrapper;
  var props = {
    onSelectPlan: jest.fn(),
    onClose: jest.fn(),
    isOpen: true,
    flow: _constants.FLOWS.UPGRADE
  };
  it('should render a PlanCompareTable', function () {
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_UpgradeModal.default, props));
    expect(wrapper.find(_components.PlanCompareTable).length).toBe(1);
  });
});