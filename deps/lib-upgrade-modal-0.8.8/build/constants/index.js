"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "VERBIAGE", {
  enumerable: true,
  get: function get() {
    return _verbiage.VERBIAGE;
  }
});
exports.PLANS = exports.UPSELLS = exports.TEST_DATA = exports.ALTERNATE_FEATURES = exports.FEATURES = exports.ALL_PLANS = exports.TWO_COL_MAX_WIDTH = exports.BREAKPOINTS = exports.COLORS = exports.FLOWS = exports.MOST_POPULAR = exports.PLAN_NAMES = exports.SHORT_CYCLE_LABEL = exports.PLAN_PERIOD_LABELS = exports.PLAN_PERIODS = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _verbiage = require("./verbiage");

var _PLAN_PERIOD_LABELS, _SHORT_CYCLE_LABEL, _plans, _plans2, _ALL_PLANS, _plans3, _plans4, _plans5, _plans6, _plans7, _plans8, _plans9, _STANDARD, _plans10, _plans11, _plans12, _plans13, _plans14, _plans15, _plans16;

var MONTHLY = 'month';
var ANNUAL = 'year';
var PLAN_PERIODS = {
  MONTHLY: MONTHLY,
  ANNUAL: ANNUAL
};
exports.PLAN_PERIODS = PLAN_PERIODS;
var PLAN_PERIOD_LABELS = (_PLAN_PERIOD_LABELS = {}, (0, _defineProperty2.default)(_PLAN_PERIOD_LABELS, MONTHLY, 'monthly'), (0, _defineProperty2.default)(_PLAN_PERIOD_LABELS, ANNUAL, 'annual'), _PLAN_PERIOD_LABELS);
exports.PLAN_PERIOD_LABELS = PLAN_PERIOD_LABELS;
var SHORT_CYCLE_LABEL = (_SHORT_CYCLE_LABEL = {}, (0, _defineProperty2.default)(_SHORT_CYCLE_LABEL, MONTHLY, 'monthly'), (0, _defineProperty2.default)(_SHORT_CYCLE_LABEL, ANNUAL, 'annually'), _SHORT_CYCLE_LABEL);
exports.SHORT_CYCLE_LABEL = SHORT_CYCLE_LABEL;
var PRO = 'pro';
var STANDARD = 'standard';
var ADVANCED = 'advanced';
var PLAN_NAMES = {
  PRO: PRO,
  STANDARD: STANDARD,
  ADVANCED: ADVANCED
};
exports.PLAN_NAMES = PLAN_NAMES;
var MOST_POPULAR = PLAN_NAMES.PRO;
exports.MOST_POPULAR = MOST_POPULAR;
var FLOWS = {
  SIGNUP: 'signup',
  REACTIVATION: 'reactivation',
  UPGRADE: 'upgrade'
};
exports.FLOWS = FLOWS;
var COLORS = {
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
exports.COLORS = COLORS;
var BREAKPOINTS = {
  SMALL: 767
};
exports.BREAKPOINTS = BREAKPOINTS;
var TWO_COL_MAX_WIDTH = 863;
exports.TWO_COL_MAX_WIDTH = TWO_COL_MAX_WIDTH;
var ALL_PLANS = (_ALL_PLANS = {}, (0, _defineProperty2.default)(_ALL_PLANS, MONTHLY, {
  key: MONTHLY,
  label: 'Monthly',
  plans: (_plans = {}, (0, _defineProperty2.default)(_plans, STANDARD, {
    id: 'fvnp9stiiuvf',
    price: 49
  }), (0, _defineProperty2.default)(_plans, PRO, {
    id: 'rv7qq6f68tvr',
    price: 99
  }), (0, _defineProperty2.default)(_plans, ADVANCED, {
    id: 'j953ounurp9j',
    price: 399
  }), _plans)
}), (0, _defineProperty2.default)(_ALL_PLANS, ANNUAL, {
  label: 'Annual',
  key: ANNUAL,
  plans: (_plans2 = {}, (0, _defineProperty2.default)(_plans2, STANDARD, {
    id: 'lamghdv4qral',
    price: 37
  }), (0, _defineProperty2.default)(_plans2, PRO, {
    id: 'jh4rs6oedhhj',
    price: 74
  }), (0, _defineProperty2.default)(_plans2, ADVANCED, {
    id: 'bj86ssxw3hjb',
    price: 299
  }), _plans2)
}), _ALL_PLANS);
exports.ALL_PLANS = ALL_PLANS;
var FEATURES = [{
  label: 'Site Builder',
  tooltip: 'Host your site on a (free) Leadpages domain or publish your site to a domain you already own. The number of available domain connections varies by plan type.',
  plans: (_plans3 = {}, (0, _defineProperty2.default)(_plans3, STANDARD, {
    included: true,
    label: '1 Site'
  }), (0, _defineProperty2.default)(_plans3, PRO, {
    included: true,
    label: '3 Sites'
  }), (0, _defineProperty2.default)(_plans3, ADVANCED, {
    included: true,
    label: 'Up to 50 Sites'
  }), _plans3)
}, {
  label: 'Landing Pages, Pop-Ups, Alert Bars',
  tooltip: 'Create and publish unlimited landing pages, pop-ups, and alert bars that you can publish anywhere.',
  plans: (_plans4 = {}, (0, _defineProperty2.default)(_plans4, STANDARD, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans4, PRO, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans4, ADVANCED, {
    included: true,
    label: ''
  }), _plans4)
}, {
  label: 'Unlimited Traffic & Leads',
  tooltip: "Don't pay more as you grow: we don't put limits on page views, web traffic, or lead collection.",
  plans: (_plans5 = {}, (0, _defineProperty2.default)(_plans5, STANDARD, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans5, PRO, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans5, ADVANCED, {
    included: true,
    label: ''
  }), _plans5)
}, {
  label: 'Free Custom Domain*',
  subLabel: 'with annual purchase',
  tooltip: 'All annual Leadpages subscriptions include one (1) year of free domain registration, fulfilled by Hover.',
  plans: (_plans6 = {}, (0, _defineProperty2.default)(_plans6, STANDARD, {
    included: true,
    label: '',
    annualOnly: true
  }), (0, _defineProperty2.default)(_plans6, PRO, {
    included: true,
    label: '',
    annualOnly: true
  }), (0, _defineProperty2.default)(_plans6, ADVANCED, {
    included: true,
    label: '',
    annualOnly: true
  }), _plans6),
  newAccountOnly: true
}, {
  label: 'Free Hosting',
  tooltip: 'Securely host your pages on a free Leadpages domain, secured with SSL encryption and hosted on an HTTPS address.',
  plans: (_plans7 = {}, (0, _defineProperty2.default)(_plans7, STANDARD, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans7, PRO, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans7, ADVANCED, {
    included: true,
    label: ''
  }), _plans7)
}, {
  label: 'Mobile-Responsive Site Templates',
  tooltip: 'Choose a professionally-designed, conversion-optimized template and customize it to fit your needs.',
  plans: (_plans8 = {}, (0, _defineProperty2.default)(_plans8, STANDARD, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans8, PRO, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans8, ADVANCED, {
    included: true,
    label: ''
  }), _plans8)
}, {
  label: 'Lead Notifications',
  tooltip: 'Receive automated notifications every time a new lead is collected or form submission is received.',
  plans: (_plans9 = {}, (0, _defineProperty2.default)(_plans9, STANDARD, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans9, PRO, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans9, ADVANCED, {
    included: true,
    label: ''
  }), _plans9)
}, {
  label: 'Tech Support',
  tooltip: 'Our (real human) technical support specialists are there to help you every step of the way.',
  plans: (_plans10 = {}, (0, _defineProperty2.default)(_plans10, STANDARD, (_STANDARD = {}, (0, _defineProperty2.default)(_STANDARD, PLAN_PERIODS.MONTHLY, {
    included: true,
    label: 'Tech Support',
    detail: '(Email)'
  }), (0, _defineProperty2.default)(_STANDARD, PLAN_PERIODS.ANNUAL, {
    included: true,
    label: 'Tech Support',
    detail: '(Chat, Email)'
  }), _STANDARD)), (0, _defineProperty2.default)(_plans10, PRO, {
    included: true,
    label: 'Priority Tech Support',
    detail: '(Phone, Chat, Email)'
  }), (0, _defineProperty2.default)(_plans10, ADVANCED, {
    included: true,
    label: 'Priority Tech Support',
    detail: '(Phone, Chat, Email)'
  }), _plans10)
}, {
  label: '40+ Standard Integrations',
  tooltip: 'Easily connect your favorite marketing and sales tools and send your leads to your ESP, CRM, webinar app, and more!',
  plans: (_plans11 = {}, (0, _defineProperty2.default)(_plans11, STANDARD, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans11, PRO, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans11, ADVANCED, {
    included: true,
    label: ''
  }), _plans11)
}, {
  label: '1-on-1 Quick Start Call',
  tooltip: 'Jumpstart your Leadpages experience by scheduling an exclusive 1-on-1 onboarding session with a member of our Customer Success Team.',
  plans: (_plans12 = {}, (0, _defineProperty2.default)(_plans12, STANDARD, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans12, PRO, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans12, ADVANCED, {
    included: true,
    label: ''
  }), _plans12)
}, {
  label: 'Online Sales & Payments',
  tooltip: 'Make sales, accept recurring payments, and deliver digital products from any webpage, landing page, or pop-up with Leadpages Checkouts powered by Stripe.',
  plans: (_plans13 = {}, (0, _defineProperty2.default)(_plans13, STANDARD, {
    included: false,
    label: ''
  }), (0, _defineProperty2.default)(_plans13, PRO, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans13, ADVANCED, {
    included: true,
    label: ''
  }), _plans13)
}, {
  label: 'Unlimited A/B Split Testing',
  tooltip: 'Optimize your pages for conversions by running A/B split tests on any landing page.',
  plans: (_plans14 = {}, (0, _defineProperty2.default)(_plans14, STANDARD, {
    included: false,
    label: ''
  }), (0, _defineProperty2.default)(_plans14, PRO, {
    included: true,
    label: ''
  }), (0, _defineProperty2.default)(_plans14, ADVANCED, {
    included: true,
    label: ''
  }), _plans14)
}, {
  label: 'Advanced Integrations',
  tooltip: 'Send your leads straight to advanced integrations including Hubspot, Marketo, and Salesforce/Pardot. ',
  plans: (_plans15 = {}, (0, _defineProperty2.default)(_plans15, STANDARD, {
    included: false,
    label: ''
  }), (0, _defineProperty2.default)(_plans15, PRO, {
    included: false,
    label: ''
  }), (0, _defineProperty2.default)(_plans15, ADVANCED, {
    included: true,
    label: ''
  }), _plans15)
}, {
  label: 'Includes 5 Pro Sub Accounts',
  tooltip: 'Stay organized and share access with your team or clients by setting up sub accounts linked to your main account.',
  plans: (_plans16 = {}, (0, _defineProperty2.default)(_plans16, STANDARD, {
    included: false,
    label: ''
  }), (0, _defineProperty2.default)(_plans16, PRO, {
    included: false,
    label: ''
  }), (0, _defineProperty2.default)(_plans16, ADVANCED, {
    included: true,
    label: ''
  }), _plans16)
}]; // For split-test use only. To be deleted when test ends.

exports.FEATURES = FEATURES;
var ALTERNATE_FEATURES = FEATURES.filter(function (feature) {
  return (// Exclude Advanced-only features
    !(feature.plans[ADVANCED].included && !feature.plans[PRO].included)
  );
});
exports.ALTERNATE_FEATURES = ALTERNATE_FEATURES;
var TEST_DATA = {
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
exports.TEST_DATA = TEST_DATA;
var UPSELLS = {
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
exports.UPSELLS = UPSELLS;
var PLANS = {
  'Standard Annual': TEST_DATA[PLAN_PERIODS.ANNUAL][PLAN_NAMES.STANDARD].id,
  'Standard Monthly': TEST_DATA[PLAN_PERIODS.MONTHLY][PLAN_NAMES.STANDARD].id,
  'Pro Annual': TEST_DATA[PLAN_PERIODS.ANNUAL][PLAN_NAMES.PRO].id,
  'Pro Monthly': TEST_DATA[PLAN_PERIODS.MONTHLY][PLAN_NAMES.PRO].id,
  'Advanced Annual': TEST_DATA[PLAN_PERIODS.ANNUAL][PLAN_NAMES.ADVANCED].id,
  'Advanced Monthly': TEST_DATA[PLAN_PERIODS.MONTHLY][PLAN_NAMES.ADVANCED].id
};
exports.PLANS = PLANS;