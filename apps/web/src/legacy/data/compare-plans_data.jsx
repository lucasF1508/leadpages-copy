import { PLAN_PERIODS } from '@lp/lib-upgrade-modal';

/* eslint-disable import/prefer-default-export */
export const planFeaturesData = [
  {
    label: 'Site Builder',
    tooltip:
      'Host your site on a (free) Leadpages domain or publish your site to a domain you already own. The number of available domain connections varies by plan type.',
    plans: {
      standard: { included: true, label: '1 Site' },
      pro: { included: true, label: '3 Sites' },
      advanced: { included: true, label: 'Up to 50 Sites' },
    },
  },
  {
    label: 'Landing Pages, Pop-Ups, Alert Bars',
    tooltip:
      'Create unlimited landing pages, pop-ups (Leadboxes®), and alert bars, then publish them anywhere.',
    plans: {
      standard: { included: true, label: '' },
      pro: { included: true, label: '' },
      advanced: { included: true, label: '' },
    },
  },
  {
    label: 'Unlimited Traffic & Leads',
    tooltip: `Don't pay more as you grow: we don't put limits on page views, web traffic, or lead collection.`,
    plans: {
      standard: { included: true, label: '' },
      pro: { included: true, label: '' },
      advanced: { included: true, label: '' },
    },
  },
  {
    label: 'Free Custom Domain*',
    subLabel: 'with annual purchase',
    tooltip:
      'All annual Leadpages subscriptions include one (1) year of free domain registration, fulfilled by Hover.',
    plans: {
      standard: { included: true, label: '', annualOnly: true },
      pro: { included: true, label: '', annualOnly: true },
      advanced: { included: true, label: '', annualOnly: true },
    },
  },
  {
    label: 'Free Hosting',
    tooltip:
      'Securely host your pages on a free Leadpages domain, secured with SSL encryption and hosted on an HTTPS address.',
    plans: {
      standard: { included: true, label: '' },
      pro: { included: true, label: '' },
      advanced: { included: true, label: '' },
    },
  },
  {
    label: 'Mobile-Responsive Site Templates',
    tooltip:
      'Choose a professionally-designed, conversion-optimized template and customize it to fit your needs.',
    plans: {
      standard: { included: true, label: '' },
      pro: { included: true, label: '' },
      advanced: { included: true, label: '' },
    },
  },
  {
    label: 'Lead Notifications',
    tooltip:
      'Receive automated notifications every time a new lead is collected or form submission is received.',
    plans: {
      standard: { included: true, label: '' },
      pro: { included: true, label: '' },
      advanced: { included: true, label: '' },
    },
  },
  {
    label: 'Tech Support',
    tooltip:
      'Our (real human) technical support specialists are there to help you every step of the way.',
    plans: {
      standard: {
        [PLAN_PERIODS.MONTHLY]: {
          included: true,
          label: 'Tech Support',
          detail: '(via Email)',
        },
        [PLAN_PERIODS.ANNUAL]: {
          included: true,
          label: 'Tech Support',
          detail: '(via Chat + Email)',
        },
      },
      pro: {
        included: true,
        label: 'Tech Support',
        detail: '(via Phone + Chat + Email)',
      },
      advanced: { included: true, label: 'Priority Phone Tech Support' },
    },
  },
  {
    label: '40+ Standard Integrations',
    tooltip:
      'Easily connect your favorite marketing and sales tools and send your leads to your ESP, CRM, webinar app, and more!',
    plans: {
      standard: { included: true, label: '' },
      pro: { included: true, label: '' },
      advanced: { included: true, label: '' },
    },
  },
  {
    label: '1-on-1 Quick Start Call',
    tooltip:
      'Jumpstart your Leadpages experience by scheduling an exclusive 1-on-1 onboarding session with a member of our Customer Success Team.',
    plans: {
      standard: { included: true, label: '' },
      pro: { included: true, label: '' },
      advanced: { included: true, label: '' },
    },
  },
  {
    label: 'Online Sales & Payments',
    tooltip:
      'Make sales and deliver digital products from any webpage, landing page, or pop-up with Leadpages Checkouts powered by Stripe.',
    plans: {
      standard: { included: false, label: '' },
      pro: { included: true, label: '' },
      advanced: { included: true, label: '' },
    },
  },
  {
    label: 'Unlimited A/B Split Testing',
    tooltip: 'Optimize your pages for conversions by running A/B split tests on any landing page.',
    plans: {
      standard: { included: false, label: '' },
      pro: { included: true, label: '' },
      advanced: { included: true, label: '' },
    },
  },
];
