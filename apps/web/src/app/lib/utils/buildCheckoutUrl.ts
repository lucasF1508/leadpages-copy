interface Param {
  key: string;
  value: string | null | undefined;
}

const fetchFunnelyticsParam = (): string | null => {
  if (typeof window === 'undefined') return null;
  const funnelyticsParam = window?.location?.href?.split('?')[0] ?? null;
  return funnelyticsParam;
};

const fetchPreviewTemplate = (): string | null => {
  if (typeof window === 'undefined') return null;
  const template = window.localStorage?.getItem('lp_template_data') || null;
  return template;
};

export const buildCheckoutUrl = (
  planId = "rv7qq6f68t14",
  trialId = 'd3yy2ARDnfEVTPU7',
) => {
  let checkoutUrl = `${process.env.LEADPAGES_TRIAL_HOST}/order-leadpages/${planId}/t/${trialId}/`;

  const funnelyticsParams: Param = {
    key: '_fsRef',
    value: fetchFunnelyticsParam(),
  };

  const templateParams: Param = {
    key: 'lp_template_data',
    value: fetchPreviewTemplate(),
  };

  const paramsArray: Param[] = [templateParams, funnelyticsParams];
  const filteredParamsArray = paramsArray.filter((el) => !!el.value);

  if (filteredParamsArray.length > 0) {
    const urlParams = new URLSearchParams('');
    filteredParamsArray.forEach((el) => {
      if (el.value) {
        urlParams.append(el.key, el.value);
      }
    });
    return `${checkoutUrl}?${urlParams.toString()}`;
  }

  return checkoutUrl;
};