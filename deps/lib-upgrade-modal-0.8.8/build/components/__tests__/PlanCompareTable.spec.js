"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _PlanCompareTable = _interopRequireDefault(require("../PlanCompareTable"));

var _constants = require("../../constants");

describe('PlanCompareTable', function () {
  var props;
  beforeEach(function () {
    props = {
      onSelectPlan: jest.fn(),
      plans: _constants.TEST_DATA
    };
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(function () {
        return {
          matches: false,
          // causes isAboveSmall to evaluate to false
          addListener: jest.fn(),
          removeListener: jest.fn()
        };
      })
    });
  });
  describe('header', function () {
    it('should select the advanced annual plan tab by default for pro upgrades on small screens', function () {
      props.currentPlan = {
        level: _constants.PLAN_NAMES.PRO,
        period: _constants.PLAN_PERIODS.ANNUAL
      };
      props.flow = _constants.FLOWS.UPGRADE;
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanCompareTable.default, props));

      var _screen$getAllByRole = _react2.screen.getAllByRole('tab'),
          _screen$getAllByRole2 = (0, _slicedToArray2.default)(_screen$getAllByRole, 3),
          tab1 = _screen$getAllByRole2[0],
          tab2 = _screen$getAllByRole2[1],
          tab3 = _screen$getAllByRole2[2];

      expect((0, _react2.within)(tab1).getByText(_constants.PLAN_NAMES.ADVANCED)).toBeInTheDocument();
      expect(tab1).toHaveAttribute('aria-selected', 'true');
      expect((0, _react2.within)(tab2).getByText(_constants.PLAN_NAMES.PRO)).toBeInTheDocument();
      expect(tab2).toHaveAttribute('aria-selected', 'false');
      expect((0, _react2.within)(tab3).getByText(_constants.PLAN_NAMES.STANDARD)).toBeInTheDocument();
      expect(tab3).toHaveAttribute('aria-selected', 'false');
    });
    it('should select the pro annual plan tab by default for standard upgrades on small screens', function () {
      props.currentPlan = {
        level: _constants.PLAN_NAMES.STANDARD,
        period: _constants.PLAN_PERIODS.ANNUAL
      };
      props.flow = _constants.FLOWS.UPGRADE;
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanCompareTable.default, props));

      var _screen$getAllByRole3 = _react2.screen.getAllByRole('tab'),
          _screen$getAllByRole4 = (0, _slicedToArray2.default)(_screen$getAllByRole3, 3),
          tab1 = _screen$getAllByRole4[0],
          tab2 = _screen$getAllByRole4[1],
          tab3 = _screen$getAllByRole4[2];

      expect((0, _react2.within)(tab1).getByText(_constants.PLAN_NAMES.ADVANCED)).toBeInTheDocument();
      expect(tab1).toHaveAttribute('aria-selected', 'false');
      expect((0, _react2.within)(tab2).getByText(_constants.PLAN_NAMES.PRO)).toBeInTheDocument();
      expect(tab2).toHaveAttribute('aria-selected', 'true');
      expect((0, _react2.within)(tab3).getByText(_constants.PLAN_NAMES.STANDARD)).toBeInTheDocument();
      expect(tab3).toHaveAttribute('aria-selected', 'false');
    });
  });
  describe('table', function () {
    it('should render a plan column for each of the provided annual plans', function () {
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanCompareTable.default, props));

      var planTable = _react2.screen.getByTestId('plan-compare-table');

      expect((0, _react2.within)(planTable).getByRole('heading', {
        name: _constants.PLAN_NAMES.ADVANCED
      })).toBeInTheDocument();
      expect((0, _react2.within)(planTable).getByRole('heading', {
        name: _constants.PLAN_NAMES.PRO
      })).toBeInTheDocument();
      expect((0, _react2.within)(planTable).getByRole('heading', {
        name: _constants.PLAN_NAMES.STANDARD
      })).toBeInTheDocument();
    });
    it('should render a plan column for each of the provided monthly plans', function () {
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanCompareTable.default, props)); // Switch to render monthly plans

      var planFrequencySwitch = _react2.screen.getAllByRole('checkbox')[0];

      _userEvent.default.click(planFrequencySwitch);

      var planTable = _react2.screen.getByTestId('plan-compare-table');

      expect((0, _react2.within)(planTable).getByRole('heading', {
        name: _constants.PLAN_NAMES.ADVANCED
      })).toBeInTheDocument();
      expect((0, _react2.within)(planTable).getByRole('heading', {
        name: _constants.PLAN_NAMES.PRO
      })).toBeInTheDocument();
      expect((0, _react2.within)(planTable).getByRole('heading', {
        name: _constants.PLAN_NAMES.STANDARD
      })).toBeInTheDocument();
    });
    it('should render the table with a contact us plan CTA', function () {
      props.contactUsPlan = {
        contactLink: 'https://leadpages.com/',
        headline: 'CTA headline',
        subheadline: 'subheadline text goes here'
      };
      (0, _react2.renderWithTheme)( /*#__PURE__*/_react.default.createElement(_PlanCompareTable.default, props));
      expect(_react2.screen.getByRole('heading', {
        name: 'CTA headline'
      })).toBeVisible();
      expect(_react2.screen.getByText('subheadline text goes here')).toBeVisible();
      expect(_react2.screen.getByRole('link', {
        name: 'Contact Us'
      }).href).toEqual('https://leadpages.com/');
    });
  });
});