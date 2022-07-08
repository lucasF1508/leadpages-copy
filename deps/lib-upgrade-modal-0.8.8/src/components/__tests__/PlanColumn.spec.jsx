import React from 'react';
import {
  screen,
  renderWithTheme,
  getByTextWithMarkup,
} from '@testing-library/react';

import PlanColumn from '../PlanColumn';
import { FLOWS, PLAN_NAMES, PLAN_PERIODS, TEST_DATA } from '../../constants';

describe('PlanColumn', () => {
  let props;

  beforeEach(() => {
    props = {
      plan: TEST_DATA.month.standard,
      planLevel: PLAN_NAMES.STANDARD,
      billingFrequency: PLAN_PERIODS.MONTHLY,
      monthlyPrice: TEST_DATA.month.standard.price,
      flow: FLOWS.UPGRADE,
      onSelectPlan: jest.fn(),
      hasAlternateFeatures: false,
    };
  });

  describe('Header', () => {
    it('should not render a header by default', () => {
      renderWithTheme(<PlanColumn {...props} />);

      expect(screen.queryByText('Most Popular')).not.toBeInTheDocument();
    });

    it('should render header if plan is most popular', () => {
      props.isMostPopular = true;
      renderWithTheme(<PlanColumn {...props} />);

      expect(screen.getByText('Most Popular')).toBeInTheDocument();
    });

    it('should render header if plan is previous plan', () => {
      props.previousPlan = TEST_DATA.month.standard.id;
      renderWithTheme(<PlanColumn {...props} />);

      expect(screen.getByText('Previous Plan')).toBeInTheDocument();
    });

    it('should not render most popular header if plan is previous plan', () => {
      props.isMostPopular = true;
      props.previousPlan = TEST_DATA.month.standard.id;
      renderWithTheme(<PlanColumn {...props} />);

      expect(screen.getByText('Previous Plan')).toBeInTheDocument();
      expect(screen.queryByText('Most Popular')).not.toBeInTheDocument();
    });

    it('should render the plan level and monthly price', () => {
      renderWithTheme(<PlanColumn {...props} />);
      expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
        'standard',
      );
      expect(screen.getByTestId('plan-column-price').textContent).toBe('$49');
      expect(screen.getByTestId('plan-column-price-period').textContent).toBe(
        ' / Month',
      );
    });

    it('should display savings over monthly if an annual plan', () => {
      props.savings = 240;
      props.billingFrequency = PLAN_PERIODS.ANNUAL;
      renderWithTheme(<PlanColumn {...props} />);

      expect(screen.getByText('save $240/year')).toBeInTheDocument();
      expect(screen.getByText('billed annually')).toBeInTheDocument();
    });

    it('should display reduced price and savings information if coupon is applied', () => {
      props.savings = 240;
      props.monthlyComparePrice = 27;
      props.billingFrequency = PLAN_PERIODS.ANNUAL;
      renderWithTheme(<PlanColumn {...props} />);

      expect(screen.queryByText('save $240/year')).not.toBeInTheDocument();
      expect(screen.getByText('$27')).toBeInTheDocument();
      expect(screen.getByText('save $240')).toBeInTheDocument();
      expect(screen.getByText('billed annually')).toBeInTheDocument();
    });
  });

  describe('Select Plan Buttons', () => {
    it('should render Select Plan buttons by default', () => {
      renderWithTheme(<PlanColumn {...props} />);

      const selectPlanButtons = screen.getAllByTestId(
        'select-standard-plan-button',
      );
      expect(selectPlanButtons).toHaveLength(2);
      selectPlanButtons.forEach(button => {
        expect(button).toHaveTextContent('Select Plan');
      });
    });

    it('should render Select Plan buttons with custom button text', () => {
      renderWithTheme(
        <PlanColumn {...props} selectPlanButtonText="Start For Free" />,
      );

      const selectPlanButtons = screen.getAllByTestId(
        'select-standard-plan-button',
      );
      expect(selectPlanButtons).toHaveLength(2);
      selectPlanButtons.forEach(button => {
        expect(button).toHaveTextContent('Start For Free');
      });
    });

    it('should render Current Plan disabled button when plan is current plan', () => {
      props.currentPlan = {
        level: PLAN_NAMES.STANDARD,
        period: PLAN_PERIODS.MONTHLY,
      };
      renderWithTheme(<PlanColumn {...props} />);

      const selectPlanButtons = screen.getAllByTestId(
        'select-standard-plan-button',
      );
      expect(selectPlanButtons).toHaveLength(2);
      selectPlanButtons.forEach(button => {
        expect(button).toHaveTextContent('Current Plan');
      });
    });

    it('should render the select plan buttons as disabled', () => {
      props.disableSelection = true;
      renderWithTheme(<PlanColumn {...props} />);

      const selectPlanButtons = screen.getAllByTestId(
        'select-standard-plan-button',
      );
      expect(selectPlanButtons).toHaveLength(2);

      selectPlanButtons.forEach(button => {
        expect(button).toBeDisabled();
      });
    });
  });

  describe('Bundle', () => {
    beforeEach(() => {
      props.bundle = {
        enabled: true,
        details: {
          size: 5,
          kind: 'Exclusive Templates',
          value: 200,
        },
      };
    });

    it('should render a bundle line item if a bundle is available', () => {
      props.flow = FLOWS.SIGNUP;

      renderWithTheme(<PlanColumn {...props} />);
      expect(
        getByTextWithMarkup(screen.getByText, 'Bonus: 5 Exclusive Templates'),
      ).toBeInTheDocument();
      expect(
        getByTextWithMarkup(screen.getByText, 'Bonus: 5 Exclusive Templates'),
      ).not.toHaveStyle({
        textDecoration: 'line-through',
      });
    });

    it('should render a bundle line item with a strikethrough if not available for this plan', () => {
      props.currentPlan = {
        level: PLAN_NAMES.STANDARD,
        period: PLAN_PERIODS.MONTHLY,
      };
      renderWithTheme(<PlanColumn {...props} />);

      expect(
        getByTextWithMarkup(screen.getByText, 'Bonus: 5 Exclusive Templates'),
      ).toBeInTheDocument();
      expect(
        getByTextWithMarkup(screen.getByText, 'Bonus: 5 Exclusive Templates'),
      ).toHaveStyle({
        textDecoration: 'line-through',
      });
    });

    it('should not render the size of the bundle line item if not set', () => {
      props.bundle.details.size = null;

      renderWithTheme(<PlanColumn {...props} />);
      expect(
        getByTextWithMarkup(screen.getByText, 'Bonus: Exclusive Templates'),
      ).toBeInTheDocument();
    });

    it('should render alternate line item text if set on the bundle', () => {
      props.bundle.details.planCompare = {
        lineItemText: 'Free Converted eCourse',
      };

      renderWithTheme(<PlanColumn {...props} />);
      expect(
        getByTextWithMarkup(screen.getByText, 'Bonus: Free Converted eCourse'),
      ).toBeInTheDocument();
    });
  });
});
