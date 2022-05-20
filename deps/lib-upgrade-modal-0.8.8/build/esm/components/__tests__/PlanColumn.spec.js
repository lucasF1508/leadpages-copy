import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { screen, renderWithTheme, getByTextWithMarkup } from '@testing-library/react';
import PlanColumn from '../PlanColumn';
import { FLOWS, PLAN_NAMES, PLAN_PERIODS, TEST_DATA } from '../../constants';
describe('PlanColumn', function () {
  var props;
  beforeEach(function () {
    props = {
      plan: TEST_DATA.month.standard,
      planLevel: PLAN_NAMES.STANDARD,
      billingFrequency: PLAN_PERIODS.MONTHLY,
      monthlyPrice: TEST_DATA.month.standard.price,
      flow: FLOWS.UPGRADE,
      onSelectPlan: jest.fn(),
      hasAlternateFeatures: false
    };
  });
  describe('Header', function () {
    it('should not render a header by default', function () {
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, props));
      expect(screen.queryByText('Most Popular')).not.toBeInTheDocument();
    });
    it('should render header if plan is most popular', function () {
      props.isMostPopular = true;
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, props));
      expect(screen.getByText('Most Popular')).toBeInTheDocument();
    });
    it('should render header if plan is previous plan', function () {
      props.previousPlan = TEST_DATA.month.standard.id;
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, props));
      expect(screen.getByText('Previous Plan')).toBeInTheDocument();
    });
    it('should not render most popular header if plan is previous plan', function () {
      props.isMostPopular = true;
      props.previousPlan = TEST_DATA.month.standard.id;
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, props));
      expect(screen.getByText('Previous Plan')).toBeInTheDocument();
      expect(screen.queryByText('Most Popular')).not.toBeInTheDocument();
    });
    it('should render the plan level and monthly price', function () {
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, props));
      expect(screen.getByRole('heading', {
        level: 4
      })).toHaveTextContent('standard');
      expect(screen.getByTestId('plan-column-price').textContent).toBe('$49');
      expect(screen.getByTestId('plan-column-price-period').textContent).toBe(' / Month');
    });
    it('should display savings over monthly if an annual plan', function () {
      props.savings = 240;
      props.billingFrequency = PLAN_PERIODS.ANNUAL;
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, props));
      expect(screen.getByText('save $240/year')).toBeInTheDocument();
      expect(screen.getByText('billed annually')).toBeInTheDocument();
    });
    it('should display reduced price and savings information if coupon is applied', function () {
      props.savings = 240;
      props.monthlyComparePrice = 27;
      props.billingFrequency = PLAN_PERIODS.ANNUAL;
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, props));
      expect(screen.queryByText('save $240/year')).not.toBeInTheDocument();
      expect(screen.getByText('$27')).toBeInTheDocument();
      expect(screen.getByText('save $240')).toBeInTheDocument();
      expect(screen.getByText('billed annually')).toBeInTheDocument();
    });
  });
  describe('Select Plan Buttons', function () {
    it('should render Select Plan buttons by default', function () {
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, props));
      var selectPlanButtons = screen.getAllByTestId('select-standard-plan-button');
      expect(selectPlanButtons).toHaveLength(2);
      selectPlanButtons.forEach(function (button) {
        expect(button).toHaveTextContent('Select Plan');
      });
    });
    it('should render Select Plan buttons with custom button text', function () {
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, _extends({}, props, {
        selectPlanButtonText: "Start For Free"
      })));
      var selectPlanButtons = screen.getAllByTestId('select-standard-plan-button');
      expect(selectPlanButtons).toHaveLength(2);
      selectPlanButtons.forEach(function (button) {
        expect(button).toHaveTextContent('Start For Free');
      });
    });
    it('should render Current Plan disabled button when plan is current plan', function () {
      props.currentPlan = {
        level: PLAN_NAMES.STANDARD,
        period: PLAN_PERIODS.MONTHLY
      };
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, props));
      var selectPlanButtons = screen.getAllByTestId('select-standard-plan-button');
      expect(selectPlanButtons).toHaveLength(2);
      selectPlanButtons.forEach(function (button) {
        expect(button).toHaveTextContent('Current Plan');
      });
    });
    it('should render the select plan buttons as disabled', function () {
      props.disableSelection = true;
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, props));
      var selectPlanButtons = screen.getAllByTestId('select-standard-plan-button');
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
      props.flow = FLOWS.SIGNUP;
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, props));
      expect(getByTextWithMarkup(screen.getByText, 'Bonus: 5 Exclusive Templates')).toBeInTheDocument();
      expect(getByTextWithMarkup(screen.getByText, 'Bonus: 5 Exclusive Templates')).not.toHaveStyle({
        textDecoration: 'line-through'
      });
    });
    it('should render a bundle line item with a strikethrough if not available for this plan', function () {
      props.currentPlan = {
        level: PLAN_NAMES.STANDARD,
        period: PLAN_PERIODS.MONTHLY
      };
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, props));
      expect(getByTextWithMarkup(screen.getByText, 'Bonus: 5 Exclusive Templates')).toBeInTheDocument();
      expect(getByTextWithMarkup(screen.getByText, 'Bonus: 5 Exclusive Templates')).toHaveStyle({
        textDecoration: 'line-through'
      });
    });
    it('should not render the size of the bundle line item if not set', function () {
      props.bundle.details.size = null;
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, props));
      expect(getByTextWithMarkup(screen.getByText, 'Bonus: Exclusive Templates')).toBeInTheDocument();
    });
    it('should render alternate line item text if set on the bundle', function () {
      props.bundle.details.planCompare = {
        lineItemText: 'Free Converted eCourse'
      };
      renderWithTheme( /*#__PURE__*/React.createElement(PlanColumn, props));
      expect(getByTextWithMarkup(screen.getByText, 'Bonus: Free Converted eCourse')).toBeInTheDocument();
    });
  });
});