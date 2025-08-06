export type FreeTrialKeyType = 'proAnnual' | 'proMonthly' | 'standardAnnual' | 'standardMonthly';

export const getFreeTrialCheckoutUrl = (planKey: FreeTrialKeyType) => ({
  proAnnual: 'https://my.leadpages.com/signup/PRO-TR-A-14D/',
  proMonthly: 'https://my.leadpages.com/signup/PRO-TR-M-14D/',
  standardAnnual: 'https://my.leadpages.com/signup/STD-TR-A-14D/',
  standardMonthly: 'https://my.leadpages.com/signup/STD-TR-M-14D/',
}[planKey])