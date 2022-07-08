"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _PlanColumn = _interopRequireDefault(require("../PlanColumn"));

var _constants = require("../../constants");

describe('PlanColumn', function () {
  var props;
  beforeEach(function () {
    props = {
      plan: _constants.TEST_DATA.month.standard,
      planLevel: _constants.PLAN_NAMES.STANDARD,
      billingFrequency: _constants.PLAN_PERIODS.MONTHLY,
      monthlyPrice: _constants.TEST_DATA.month.standard.price,
      flow: _constants.FLOWS.UPGRADE,
      onSelectPlan: jest.fn(),
      hasAlternateFeatures: false
    };
  });
  describe('Header', function () {
    it('should not render a header by default', function () {
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, props));
      expect(_react2.screen.queryByText('Most Popular')).not.toBeInTheDocument();
    });
    it('should render header if plan is most popular', function () {
      props.isMostPopular = true;
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, props));
      expect(_react2.screen.getByText('Most Popular')).toBeInTheDocument();
    });
    it('should render header if plan is previous plan', function () {
      props.previousPlan = _constants.TEST_DATA.month.standard.id;
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, props));
      expect(_react2.screen.getByText('Previous Plan')).toBeInTheDocument();
    });
    it('should not render most popular header if plan is previous plan', function () {
      props.isMostPopular = true;
      props.previousPlan = _constants.TEST_DATA.month.standard.id;
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, props));
      expect(_react2.screen.getByText('Previous Plan')).toBeInTheDocument();
      expect(_react2.screen.queryByText('Most Popular')).not.toBeInTheDocument();
    });
    it('should render the plan level and monthly price', function () {
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, props));
      expect(_react2.screen.getByRole('heading', {
        level: 4
      })).toHaveTextContent('standard');
      expect(_react2.screen.getByTestId('plan-column-price').textContent).toBe('$49');
      expect(_react2.screen.getByTestId('plan-column-price-period').textContent).toBe(' / Month');
    });
    it('should display savings over monthly if an annual plan', function () {
      props.savings = 240;
      props.billingFrequency = _constants.PLAN_PERIODS.ANNUAL;
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, props));
      expect(_react2.screen.getByText('save $240/year')).toBeInTheDocument();
      expect(_react2.screen.getByText('billed annually')).toBeInTheDocument();
    });
    it('should display reduced price and savings information if coupon is applied', function () {
      props.savings = 240;
      props.monthlyComparePrice = 27;
      props.billingFrequency = _constants.PLAN_PERIODS.ANNUAL;
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, props));
      expect(_react2.screen.queryByText('save $240/year')).not.toBeInTheDocument();
      expect(_react2.screen.getByText('$27')).toBeInTheDocument();
      expect(_react2.screen.getByText('save $240')).toBeInTheDocument();
      expect(_react2.screen.getByText('billed annually')).toBeInTheDocument();
    });
  });
  describe('Select Plan Buttons', function () {
    it('should render Select Plan buttons by default', function () {
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, props));

      var selectPlanButtons = _react2.screen.getAllByTestId('select-standard-plan-button');

      expect(selectPlanButtons).toHaveLength(2);
      selectPlanButtons.forEach(function (button) {
        expect(button).toHaveTextContent('Select Plan');
      });
    });
    it('should render Select Plan buttons with custom button text', function () {
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, (0, _extends2.default)({}, props, {
        selectPlanButtonText: "Start For Free"
      })));

      var selectPlanButtons = _react2.screen.getAllByTestId('select-standard-plan-button');

      expect(selectPlanButtons).toHaveLength(2);
      selectPlanButtons.forEach(function (button) {
        expect(button).toHaveTextContent('Start For Free');
      });
    });
    it('should render Current Plan disabled button when plan is current plan', function () {
      props.currentPlan = {
        level: _constants.PLAN_NAMES.STANDARD,
        period: _constants.PLAN_PERIODS.MONTHLY
      };
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, props));

      var selectPlanButtons = _react2.screen.getAllByTestId('select-standard-plan-button');

      expect(selectPlanButtons).toHaveLength(2);
      selectPlanButtons.forEach(function (button) {
        expect(button).toHaveTextContent('Current Plan');
      });
    });
    it('should render the select plan buttons as disabled', function () {
      props.disableSelection = true;
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, props));

      var selectPlanButtons = _react2.screen.getAllByTestId('select-standard-plan-button');

      expect(selectPlanButtons).toHaveLength(2);
      selectPlanButtons.forEach(function (button) {
        expect(button).toBeDisabled();
      });
    });
  });
  describe('Bundle', function () {
    beforeEach(function () {
      props.bundle = {
        enabled: true,
        details: {
          size: 5,
          kind: 'Exclusive Templates',
          value: 200
        }
      };
    });
    it('should render a bundle line item if a bundle is available', function () {
      props.flow = _constants.FLOWS.SIGNUP;
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, props));
      expect((0, _react2.getByTextWithMarkup)(_react2.screen.getByText, 'Bonus: 5 Exclusive Templates')).toBeInTheDocument();
      expect((0, _react2.getByTextWithMarkup)(_react2.screen.getByText, 'Bonus: 5 Exclusive Templates')).not.toHaveStyle({
        textDecoration: 'line-through'
      });
    });
    it('should render a bundle line item with a strikethrough if not available for this plan', function () {
      props.currentPlan = {
        level: _constants.PLAN_NAMES.STANDARD,
        period: _constants.PLAN_PERIODS.MONTHLY
      };
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, props));
      expect((0, _react2.getByTextWithMarkup)(_react2.screen.getByText, 'Bonus: 5 Exclusive Templates')).toBeInTheDocument();
      expect((0, _react2.getByTextWithMarkup)(_react2.screen.getByText, 'Bonus: 5 Exclusive Templates')).toHaveStyle({
        textDecoration: 'line-through'
      });
    });
    it('should not render the size of the bundle line item if not set', function () {
      props.bundle.details.size = null;
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, props));
      expect((0, _react2.getByTextWithMarkup)(_react2.screen.getByText, 'Bonus: Exclusive Templates')).toBeInTheDocument();
    });
    it('should render alternate line item text if set on the bundle', function () {
      props.bundle.details.planCompare = {
        lineItemText: 'Free Converted eCourse'
      };
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanColumn.default, props));
      expect((0, _react2.getByTextWithMarkup)(_react2.screen.getByText, 'Bonus: Free Converted eCourse')).toBeInTheDocument();
    });
  });
});