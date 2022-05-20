const fetchPreviewTemplate = windowObj => {
  let template;
  try {
    template = windowObj.localStorage.getItem('lp_template_data') || null;
  } catch (e) {
    /* swallow */
  }
  return template;
};

export const buildCheckoutUrl = (planId, trialId, couponData, bundleData, flow, windowObj) => {
  let checkoutUrl =
    flow === 'reactivation'
      ? `${process.env.LEADPAGES_REACTIVATION_HOST}/my-account/re-activate/`
      : `${process.env.LEADPAGES_TRIAL_HOST}/order-leadpages/${planId}/t/${trialId}/`;

  const planIdParams = { key: 'planId', value: flow === 'reactivation' ? planId : null };

  // get promotion- & template-related params, if available
  let couponValue = null;
  if (couponData?.validPlans && couponData?.code) {
    const couponAvailableForPlan =
      couponData.appliesToAllPlans || couponData.validPlans.indexOf(planId) !== -1;
    couponValue = couponAvailableForPlan ? couponData.code : null;
  }
  const couponParams = { key: 'coupon', value: couponValue };
  const bundleParams = { key: 'bundle', value: bundleData?._meta?.id || null };
  const templateParams = { key: 'lp_template_data', value: fetchPreviewTemplate(windowObj) };

  // push params to an array
  const paramsArray = [];
  paramsArray.push(planIdParams, couponParams, bundleParams, templateParams);
  // remove falsy params, then add to url
  const filteredParamsArray = paramsArray.filter(el => !!el.value);
  if (filteredParamsArray.length > 0) {
    const urlParams = new URLSearchParams('');
    filteredParamsArray.forEach(el => {
      urlParams.append(el.key, el.value);
    });
    checkoutUrl += `?${urlParams.toString()}`;
  }
  return checkoutUrl;
};

export const planRouter = (planId, trialId, couponData, bundleData, flow, windowObj) => {
  if (typeof windowObj !== 'undefined') {
    const appCheckoutUrl = buildCheckoutUrl(
      planId,
      trialId,
      couponData,
      bundleData,
      flow,
      windowObj,
    );
    // wait 500ms to give the cache processing a chance to fire
    setTimeout(() => {
      // route user to in-app checkout flow
      windowObj.location.assign(appCheckoutUrl);
    }, 500);
  }
};
