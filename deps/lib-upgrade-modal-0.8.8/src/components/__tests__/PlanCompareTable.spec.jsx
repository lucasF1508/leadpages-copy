import React from 'react';
import { screen, renderWithTheme, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PlanCompareTable from '../PlanCompareTable';
import { FLOWS, TEST_DATA, PLAN_NAMES, PLAN_PERIODS } from '../../constants';

describe('PlanCompareTable', () => {
  let props;

  beforeEach(() => {
    props = {
      onSelectPlan: jest.fn(),
      plans: TEST_DATA,
    };

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: false, // causes isAboveSmall to evaluate to false
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  });

  describe('header', () => {
    it('should select the advanced annual plan tab by default for pro upgrades on small screens', () => {
      props.currentPlan = {
        level: PLAN_NAMES.PRO,
        period: PLAN_PERIODS.ANNUAL,
      };
      props.flow = FLOWS.UPGRADE;
      renderWithTheme(<PlanCompareTable {...props} />);

      const [tab1, tab2, tab3] = screen.getAllByRole('tab');
      expect(within(tab1).getByText(PLAN_NAMES.ADVANCED)).toBeInTheDocument();
      expect(tab1).toHaveAttribute('aria-selected', 'true');

      expect(within(tab2).getByText(PLAN_NAMES.PRO)).toBeInTheDocument();
      expect(tab2).toHaveAttribute('aria-selected', 'false');

      expect(within(tab3).getByText(PLAN_NAMES.STANDARD)).toBeInTheDocument();
      expect(tab3).toHaveAttribute('aria-selected', 'false');
    });

    it('should select the pro annual plan tab by default for standard upgrades on small screens', () => {
      props.currentPlan = {
        level: PLAN_NAMES.STANDARD,
        period: PLAN_PERIODS.ANNUAL,
      };
      props.flow = FLOWS.UPGRADE;
      renderWithTheme(<PlanCompareTable {...props} />);

      const [tab1, tab2, tab3] = screen.getAllByRole('tab');
      expect(within(tab1).getByText(PLAN_NAMES.ADVANCED)).toBeInTheDocument();
      expect(tab1).toHaveAttribute('aria-selected', 'false');

      expect(within(tab2).getByText(PLAN_NAMES.PRO)).toBeInTheDocument();
      expect(tab2).toHaveAttribute('aria-selected', 'true');

      expect(within(tab3).getByText(PLAN_NAMES.STANDARD)).toBeInTheDocument();
      expect(tab3).toHaveAttribute('aria-selected', 'false');
    });
  });

  describe('table', () => {
    it('should render a plan column for each of the provided annual plans', () => {
      renderWithTheme(<PlanCompareTable {...props} />);

      const planTable = screen.getByTestId('plan-compare-table');

      expect(
        within(planTable).getByRole('heading', {
          name: PLAN_NAMES.ADVANCED,
        }),
      ).toBeInTheDocument();
      expect(
        within(planTable).getByRole('heading', {
          name: PLAN_NAMES.PRO,
        }),
      ).toBeInTheDocument();
      expect(
        within(planTable).getByRole('heading', {
          name: PLAN_NAMES.STANDARD,
        }),
      ).toBeInTheDocument();
    });

    it('should render a plan column for each of the provided monthly plans', () => {
      renderWithTheme(<PlanCompareTable {...props} />);

      // Switch to render monthly plans
      const planFrequencySwitch = screen.getAllByRole('checkbox')[0];

      userEvent.click(planFrequencySwitch);

      const planTable = screen.getByTestId('plan-compare-table');

      expect(
        within(planTable).getByRole('heading', {
          name: PLAN_NAMES.ADVANCED,
        }),
      ).toBeInTheDocument();
      expect(
        within(planTable).getByRole('heading', {
          name: PLAN_NAMES.PRO,
        }),
      ).toBeInTheDocument();
      expect(
        within(planTable).getByRole('heading', {
          name: PLAN_NAMES.STANDARD,
        }),
      ).toBeInTheDocument();
    });

    it('should render the table with a contact us plan CTA', () => {
      props.contactUsPlan = {
        contactLink: 'https://leadpages.com/',
        headline: 'CTA headline',
        subheadline: 'subheadline text goes here',
      };

      renderWithTheme(<PlanCompareTable {...props} />);

      expect(
        screen.getByRole('heading', { name: 'CTA headline' }),
      ).toBeVisible();
      expect(screen.getByText('subheadline text goes here')).toBeVisible();
      expect(screen.getByRole('link', { name: 'Contact Us' }).href).toEqual(
        'https://leadpages.com/',
      );
    });
  });
});
