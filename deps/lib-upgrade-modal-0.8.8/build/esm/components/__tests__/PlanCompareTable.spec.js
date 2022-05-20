import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import { screen, renderWithTheme, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PlanCompareTable from '../PlanCompareTable';
import { FLOWS, TEST_DATA, PLAN_NAMES, PLAN_PERIODS } from '../../constants';
describe('PlanCompareTable', function () {
  var props;
  beforeEach(function () {
    props = {
      onSelectPlan: jest.fn(),
      plans: TEST_DATA
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
        level: PLAN_NAMES.PRO,
        period: PLAN_PERIODS.ANNUAL
      };
      props.flow = FLOWS.UPGRADE;
      renderWithTheme( /*#__PURE__*/React.createElement(PlanCompareTable, props));

      var _screen$getAllByRole = screen.getAllByRole('tab'),
          _screen$getAllByRole2 = _slicedToArray(_screen$getAllByRole, 3),
          tab1 = _screen$getAllByRole2[0],
          tab2 = _screen$getAllByRole2[1],
          tab3 = _screen$getAllByRole2[2];

      expect(within(tab1).getByText(PLAN_NAMES.ADVANCED)).toBeInTheDocument();
      expect(tab1).toHaveAttribute('aria-selected', 'true');
      expect(within(tab2).getByText(PLAN_NAMES.PRO)).toBeInTheDocument();
      expect(tab2).toHaveAttribute('aria-selected', 'false');
      expect(within(tab3).getByText(PLAN_NAMES.STANDARD)).toBeInTheDocument();
      expect(tab3).toHaveAttribute('aria-selected', 'false');
    });
    it('should select the pro annual plan tab by default for standard upgrades on small screens', function () {
      props.currentPlan = {
        level: PLAN_NAMES.STANDARD,
        period: PLAN_PERIODS.ANNUAL
      };
      props.flow = FLOWS.UPGRADE;
      renderWithTheme( /*#__PURE__*/React.createElement(PlanCompareTable, props));

      var _screen$getAllByRole3 = screen.getAllByRole('tab'),
          _screen$getAllByRole4 = _slicedToArray(_screen$getAllByRole3, 3),
          tab1 = _screen$getAllByRole4[0],
          tab2 = _screen$getAllByRole4[1],
          tab3 = _screen$getAllByRole4[2];

      expect(within(tab1).getByText(PLAN_NAMES.ADVANCED)).toBeInTheDocument();
      expect(tab1).toHaveAttribute('aria-selected', 'false');
      expect(within(tab2).getByText(PLAN_NAMES.PRO)).toBeInTheDocument();
      expect(tab2).toHaveAttribute('aria-selected', 'true');
      expect(within(tab3).getByText(PLAN_NAMES.STANDARD)).toBeInTheDocument();
      expect(tab3).toHaveAttribute('aria-selected', 'false');
    });
  });
  describe('table', function () {
    it('should render a plan column for each of the provided annual plans', function () {
      renderWithTheme( /*#__PURE__*/React.createElement(PlanCompareTable, props));
      var planTable = screen.getByTestId('plan-compare-table');
      expect(within(planTable).getByRole('heading', {
        name: PLAN_NAMES.ADVANCED
      })).toBeInTheDocument();
      expect(within(planTable).getByRole('heading', {
        name: PLAN_NAMES.PRO
      })).toBeInTheDocument();
      expect(within(planTable).getByRole('heading', {
        name: PLAN_NAMES.STANDARD
      })).toBeInTheDocument();
    });
    it('should render a plan column for each of the provided monthly plans', function () {
      renderWithTheme( /*#__PURE__*/React.createElement(PlanCompareTable, props)); // Switch to render monthly plans

      var planFrequencySwitch = screen.getAllByRole('checkbox')[0];
      userEvent.click(planFrequencySwitch);
      var planTable = screen.getByTestId('plan-compare-table');
      expect(within(planTable).getByRole('heading', {
        name: PLAN_NAMES.ADVANCED
      })).toBeInTheDocument();
      expect(within(planTable).getByRole('heading', {
        name: PLAN_NAMES.PRO
      })).toBeInTheDocument();
      expect(within(planTable).getByRole('heading', {
        name: PLAN_NAMES.STANDARD
      })).toBeInTheDocument();
    });
    it('should render the table with a contact us plan CTA', function () {
      props.contactUsPlan = {
        contactLink: 'https://leadpages.com/',
        headline: 'CTA headline',
        subheadline: 'subheadline text goes here'
      };
      renderWithTheme( /*#__PURE__*/React.createElement(PlanCompareTable, props));
      expect(screen.getByRole('heading', {
        name: 'CTA headline'
      })).toBeVisible();
      expect(screen.getByText('subheadline text goes here')).toBeVisible();
      expect(screen.getByRole('link', {
        name: 'Contact Us'
      }).href).toEqual('https://leadpages.com/');
    });
  });
});