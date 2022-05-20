import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _PLAN_PERIOD_LABELS, _SHORT_CYCLE_LABEL, _plans, _plans2, _ALL_PLANS, _plans3, _plans4, _plans5, _plans6, _plans7, _plans8, _plans9, _STANDARD, _plans10, _plans11, _plans12, _plans13, _plans14, _plans15, _plans16;

export { VERBIAGE } from './verbiage';
var MONTHLY = 'month';
var ANNUAL = 'year';
export var PLAN_PERIODS = {
  MONTHLY: MONTHLY,
  ANNUAL: ANNUAL
};
export var PLAN_PERIOD_LABELS = (_PLAN_PERIOD_LABELS = {}, _defineProperty(_PLAN_PERIOD_LABELS, MONTHLY, 'monthly'), _defineProperty(_PLAN_PERIOD_LABELS, ANNUAL, 'annual'), _PLAN_PERIOD_LABELS);
export var SHORT_CYCLE_LABEL = (_SHORT_CYCLE_LABEL = {}, _defineProperty(_SHORT_CYCLE_LABEL, MONTHLY, 'monthly'), _defineProperty(_SHORT_CYCLE_LABEL, ANNUAL, 'annually'), _SHORT_CYCLE_LABEL);
var PRO = 'pro';
var STANDARD = 'standard';
var ADVANCED = 'advanced';
export var PLAN_NAMES = {
  PRO: PRO,
  STANDARD: STANDARD,
  ADVANCED: ADVANCED
};
export var MOST_POPULAR = PLAN_NAMES.PRO;
export var FLOWS = {
  SIGNUP: 'signup',
  REACTIVATION: 'reactivation',
  UPGRADE: 'upgrade'
};
export var COLORS = {
  lp: '#603eff',
  bg: {
    white: '#f9fbfc',
    lightGray: '#F8FBFC',
    midGrey: '#e7e6e6'
  },
  text: {
    tundora: '#575452',
    lightGrey: '#c3c2c1',
    redGrey: '#0f0c09',
    darkBlue: '#020020'
  },
  border: {
    lightGrey: '#c3c2c1',
    lightPurple: '#d1c6f9',
    midGrey: '#e7e6e6'
  },
  background: {
    black: '#000000',
    darkGray: '#575452',
    gray: '#c2c2c2',
    lightGray: '#f9f9f9',
    lightImage: '#e7f1ff',
    darkImage: '#1a1d23',
    tan: '#f4e3cc',
    lightTan: '#fef9f1',
    lightBlue: '#ddfafa'
  },
  grayscale: {
    black100: '#000000',
    black70: '#4d4d4d',
    black50: '#808080',
    black25: '#bfbfbf',
    black10: '#e6e6e6',
    black4: '#f3f3f3'
  },
  main: {
    primary: '#603eff',
    secondary: '#f7f7f7',
    success: '#4d7523',
    warning: '#e28f44',
    error: '#f65b1c',
    dark: '#0f0c09',
    teal: '#43e0f0',
    pink: '#ffdcee',
    brown: '#6b4e2f'
  },
  alt: {
    primaryBlue: '#0b236d',
    primaryHover: '#4d32cc',
    secondary: '#d1c6f9',
    success: '#759b4e',
    warning: '#dfae78',
    error: '#ff7d5a',
    light: '#ffffff',
    lightTeal: '#8fefef',
    lightPink: '#fcedf5',
    lightBrown: '#b27e52'
  }
};
export var BREAKPOINTS = {
  SMALL: 767
};
export var TWO_COL_MAX_WIDTH = 863;
export var ALL_PLANS = (_ALL_PLANS = {}, _defineProperty(_ALL_PLANS, MONTHLY, {
  key: MONTHLY,
  label: 'Monthly',
  plans: (_plans = {}, _defineProperty(_plans, STANDARD, {
    id: 'fvnp9stiiuvf',
    price: 49
  }), _defineProperty(_plans, PRO, {
    id: 'rv7qq6f68tvr',
    price: 99
  }), _defineProperty(_plans, ADVANCED, {
    id: 'j953ounurp9j',
    price: 399
  }), _plans)
}), _defineProperty(_ALL_PLANS, ANNUAL, {
  label: 'Annual',
  key: ANNUAL,
  plans: (_plans2 = {}, _defineProperty(_plans2, STANDARD, {
    id: 'lamghdv4qral',
    price: 37
  }), _defineProperty(_plans2, PRO, {
    id: 'jh4rs6oedhhj',
    price: 74
  }), _defineProperty(_plans2, ADVANCED, {
    id: 'bj86ssxw3hjb',
    price: 299
  }), _plans2)
}), _ALL_PLANS);
export var FEATURES = [{
  label: 'Site Builder',
  tooltip: 'Host your site on a (free) Leadpages domain or publish your site to a domain you already own. The number of available domain connections varies by plan type.',
  plans: (_plans3 = {}, _defineProperty(_plans3, STANDARD, {
    included: true,
    label: '1 Site'
  }), _defineProperty(_plans3, PRO, {
    included: true,
    label: '3 Sites'
  }), _defineProperty(_plans3, ADVANCED, {
    included: true,
    label: 'Up to 50 Sites'
  }), _plans3)
}, {
  label: 'Landing Pages, Pop-Ups, Alert Bars',
  tooltip: 'Create and publish unlimited landing pages, pop-ups, and alert bars that you can publish anywhere.',
  plans: (_plans4 = {}, _defineProperty(_plans4, STANDARD, {
    included: true,
    label: ''
  }), _defineProperty(_plans4, PRO, {
    included: true,
    label: ''
  }), _defineProperty(_plans4, ADVANCED, {
    included: true,
    label: ''
  }), _plans4)
}, {
  label: 'Unlimited Traffic & Leads',
  tooltip: "Don't pay more as you grow: we don't put limits on page views, web traffic, or lead collection.",
  plans: (_plans5 = {}, _defineProperty(_plans5, STANDARD, {
    included: true,
    label: ''
  }), _defineProperty(_plans5, PRO, {
    included: true,
    label: ''
  }), _defineProperty(_plans5, ADVANCED, {
    included: true,
    label: ''
  }), _plans5)
}, {
  label: 'Free Custom Domain*',
  subLabel: 'with annual purchase',
  tooltip: 'All annual Leadpages subscriptions include one (1) year of free domain registration, fulfilled by Hover.',
  plans: (_plans6 = {}, _defineProperty(_plans6, STANDARD, {
    included: true,
    label: '',
    annualOnly: true
  }), _defineProperty(_plans6, PRO, {
    included: true,
    label: '',
    annualOnly: true
  }), _defineProperty(_plans6, ADVANCED, {
    included: true,
    label: '',
    annualOnly: true
  }), _plans6),
  newAccountOnly: true
}, {
  label: 'Free Hosting',
  tooltip: 'Securely host your pages on a free Leadpages domain, secured with SSL encryption and hosted on an HTTPS address.',
  plans: (_plans7 = {}, _defineProperty(_plans7, STANDARD, {
    included: true,
    label: ''
  }), _defineProperty(_plans7, PRO, {
    included: true,
    label: ''
  }), _defineProperty(_plans7, ADVANCED, {
    included: true,
    label: ''
  }), _plans7)
}, {
  label: 'Mobile-Responsive Site Templates',
  tooltip: 'Choose a professionally-designed, conversion-optimized template and customize it to fit your needs.',
  plans: (_plans8 = {}, _defineProperty(_plans8, STANDARD, {
    included: true,
    label: ''
  }), _defineProperty(_plans8, PRO, {
    included: true,
    label: ''
  }), _defineProperty(_plans8, ADVANCED, {
    included: true,
    label: ''
  }), _plans8)
}, {
  label: 'Lead Notifications',
  tooltip: 'Receive automated notifications every time a new lead is collected or form submission is received.',
  plans: (_plans9 = {}, _defineProperty(_plans9, STANDARD, {
    included: true,
    label: ''
  }), _defineProperty(_plans9, PRO, {
    included: true,
    label: ''
  }), _defineProperty(_plans9, ADVANCED, {
    included: true,
    label: ''
  }), _plans9)
}, {
  label: 'Tech Support',
  tooltip: 'Our (real human) technical support specialists are there to help you every step of the way.',
  plans: (_plans10 = {}, _defineProperty(_plans10, STANDARD, (_STANDARD = {}, _defineProperty(_STANDARD, PLAN_PERIODS.MONTHLY, {
    included: true,
    label: 'Tech Support',
    detail: '(Email)'
  }), _defineProperty(_STANDARD, PLAN_PERIODS.ANNUAL, {
    included: true,
    label: 'Tech Support',
    detail: '(Chat, Email)'
  }), _STANDARD)), _defineProperty(_plans10, PRO, {
    included: true,
    label: 'Priority Tech Support',
    detail: '(Phone, Chat, Email)'
  }), _defineProperty(_plans10, ADVANCED, {
    included: true,
    label: 'Priority Tech Support',
    detail: '(Phone, Chat, Email)'
  }), _plans10)
}, {
  label: '40+ Standard Integrations',
  tooltip: 'Easily connect your favorite marketing and sales tools and send your leads to your ESP, CRM, webinar app, and more!',
  plans: (_plans11 = {}, _defineProperty(_plans11, STANDARD, {
    included: true,
    label: ''
  }), _defineProperty(_plans11, PRO, {
    included: true,
    label: ''
  }), _defineProperty(_plans11, ADVANCED, {
    included: true,
    label: ''
  }), _plans11)
}, {
  label: '1-on-1 Quick Start Call',
  tooltip: 'Jumpstart your Leadpages experience by scheduling an exclusive 1-on-1 onboarding session with a member of our Customer Success Team.',
  plans: (_plans12 = {}, _defineProperty(_plans12, STANDARD, {
    included: true,
    label: ''
  }), _defineProperty(_plans12, PRO, {
    included: true,
    label: ''
  }), _defineProperty(_plans12, ADVANCED, {
    included: true,
    label: ''
  }), _plans12)
}, {
  label: 'Online Sales & Payments',
  tooltip: 'Make sales, accept recurring payments, and deliver digital products from any webpage, landing page, or pop-up with Leadpages Checkouts powered by Stripe.',
  plans: (_plans13 = {}, _defineProperty(_plans13, STANDARD, {
    included: false,
    label: ''
  }), _defineProperty(_plans13, PRO, {
    included: true,
    label: ''
  }), _defineProperty(_plans13, ADVANCED, {
    included: true,
    label: ''
  }), _plans13)
}, {
  label: 'Unlimited A/B Split Testing',
  tooltip: 'Optimize your pages for conversions by running A/B split tests on any landing page.',
  plans: (_plans14 = {}, _defineProperty(_plans14, STANDARD, {
    included: false,
    label: ''
  }), _defineProperty(_plans14, PRO, {
    included: true,
    label: ''
  }), _defineProperty(_plans14, ADVANCED, {
    included: true,
    label: ''
  }), _plans14)
}, {
  label: 'Advanced Integrations',
  tooltip: 'Send your leads straight to advanced integrations including Hubspot, Marketo, and Salesforce/Pardot. ',
  plans: (_plans15 = {}, _defineProperty(_plans15, STANDARD, {
    included: false,
    label: ''
  }), _defineProperty(_plans15, PRO, {
    included: false,
    label: ''
  }), _defineProperty(_plans15, ADVANCED, {
    included: true,
    label: ''
  }), _plans15)
}, {
  label: 'Includes 5 Pro Sub Accounts',
  tooltip: 'Stay organized and share access with your team or clients by setting up sub accounts linked to your main account.',
  plans: (_plans16 = {}, _defineProperty(_plans16, STANDARD, {
    included: false,
    label: ''
  }), _defineProperty(_plans16, PRO, {
    included: false,
    label: ''
  }), _defineProperty(_plans16, ADVANCED, {
    included: true,
    label: ''
  }), _plans16)
}]; // For split-test use only. To be deleted when test ends.

export var ALTERNATE_FEATURES = FEATURES.filter(function (feature) {
  return (// Exclude Advanced-only features
    !(feature.plans[ADVANCED].included && !feature.plans[PRO].included)
  );
});
export var TEST_DATA = {
  month: {
    standard: {
      features: {
        split_testing: false,
        domains_max_default: 1,
        pro_support: false,
        custom_templates: false,
        enterprise_support: false
      },
      heading: 'Standard Monthly',
      id: 'fvnp9stiiu14',
      enabled: true,
      label: 'Leadpages Standard Monthly Subscription TEST',
      planLevel: 'Standard',
      price: 49,
      period: 'month',
      isReactivation: false,
      isCurrentPlan: false,
      isUpgrade: false,
      channelApiDep: false,
      buttonText: 'Upgrade',
      monthlyPrice: 49
    },
    pro: {
      features: {
        split_testing: true,
        domains_max_default: 3,
        pro_support: true,
        custom_templates: true,
        enterprise_support: false
      },
      heading: 'Pro Monthly',
      id: 'rv7qq6f68t14',
      enabled: true,
      label: 'Leadpages Monthly PRO Subscription TEST',
      planLevel: 'Pro',
      price: 99,
      period: 'month',
      isReactivation: false,
      isCurrentPlan: false,
      isUpgrade: true,
      channelApiDep: false,
      buttonText: 'Upgrade',
      monthlyPrice: 99
    },
    advanced: {
      features: {
        split_testing: true,
        domains_max_default: 50,
        pro_support: true,
        custom_templates: true,
        enterprise_support: true
      },
      heading: 'Advanced Monthly',
      id: 'j953ounurp14',
      enabled: true,
      label: 'Leadpages Advanced Monthly Subscription TEST',
      planLevel: 'Advanced',
      price: 399,
      period: 'month',
      isReactivation: false,
      isCurrentPlan: false,
      isUpgrade: true,
      channelApiDep: false,
      buttonText: 'Upgrade',
      monthlyPrice: 399
    }
  },
  year: {
    standard: {
      features: {
        split_testing: false,
        domains_max_default: 1,
        pro_support: false,
        custom_templates: false,
        enterprise_support: false
      },
      heading: 'Standard Annual',
      id: 'lamghdv4qr14',
      enabled: true,
      label: 'Leadpages Standard Annual Subscription TEST',
      planLevel: 'Standard',
      price: 444,
      period: 'year',
      isReactivation: false,
      isCurrentPlan: false,
      isUpgrade: true,
      channelApiDep: false,
      buttonText: 'Upgrade',
      monthlyPrice: 37
    },
    pro: {
      features: {
        split_testing: true,
        domains_max_default: 3,
        pro_support: true,
        custom_templates: true,
        enterprise_support: false
      },
      heading: 'Pro Account - Annual',
      id: 'jh4rs6oedh14',
      enabled: true,
      label: 'Leadpages Annual PRO Subscription TEST',
      planLevel: 'Pro',
      price: 888,
      period: 'year',
      isReactivation: false,
      isCurrentPlan: false,
      isUpgrade: true,
      channelApiDep: false,
      buttonText: 'Upgrade',
      monthlyPrice: 74
    },
    advanced: {
      features: {
        split_testing: true,
        domains_max_default: 50,
        pro_support: true,
        custom_templates: true,
        enterprise_support: true
      },
      heading: 'Advanced Annual',
      id: 'bj86ssxw3h14',
      enabled: true,
      label: 'Leadpages Advanced Annual Subscription TEST',
      planLevel: 'Advanced',
      price: 3588,
      period: 'year',
      isReactivation: false,
      isCurrentPlan: false,
      isUpgrade: true,
      channelApiDep: false,
      buttonText: 'Upgrade',
      monthlyPrice: 299
    }
  }
};
export var UPSELLS = {
  convertedECourse: {
    isBilledNow: true,
    lineItems: [{
      title: 'Converted eCourse',
      price: 97,
      discountedPrice: 77
    }, {
      title: 'Interactive Workbook',
      price: 27,
      discountedPrice: 0
    }],
    finePrint: ['Course link will be delivered via email. Retain lifetime course access whether you keep your Leadpages account or cancel.']
  }
};
export var PLANS = {
  'Standard Annual': TEST_DATA[PLAN_PERIODS.ANNUAL][PLAN_NAMES.STANDARD].id,
  'Standard Monthly': TEST_DATA[PLAN_PERIODS.MONTHLY][PLAN_NAMES.STANDARD].id,
  'Pro Annual': TEST_DATA[PLAN_PERIODS.ANNUAL][PLAN_NAMES.PRO].id,
  'Pro Monthly': TEST_DATA[PLAN_PERIODS.MONTHLY][PLAN_NAMES.PRO].id,
  'Advanced Annual': TEST_DATA[PLAN_PERIODS.ANNUAL][PLAN_NAMES.ADVANCED].id,
  'Advanced Monthly': TEST_DATA[PLAN_PERIODS.MONTHLY][PLAN_NAMES.ADVANCED].id
};