"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkPlanIsUpgrade = void 0;

var _constants = require("../constants");

var checkPlanIsUpgrade = function checkPlanIsUpgrade(plan, flow) {
  if (flow && flow === _constants.FLOWS.UPGRADE && !plan.isUpgrade) {
    return false;
  }

  return true;
};

exports.checkPlanIsUpgrade = checkPlanIsUpgrade;