import type { FreeTrialKeyType} from '@/lib/utils/getFreeTrialCheckoutUrl';
import type { TemplateType } from '@/types/template'
import {getFreeTrialCheckoutUrl} from '@/lib/utils/getFreeTrialCheckoutUrl'
import {getKindQueryParam} from '@/lib/utils/getKindSlug'
interface Param {
  key: string;
  value: null | string | undefined;
}

const fetchFunnelyticsParam = (): null | string => {
  if (typeof window === 'undefined') return null;
  const funnelyticsParam = window?.location?.href?.split('?')[0] ?? null;
  return funnelyticsParam;
};

export const buildCheckoutUrl = (
  {
    data,
    planType,
  }: {
    data?: TemplateType;
    planType: FreeTrialKeyType;
  }
) => {
  const checkoutUrl = getFreeTrialCheckoutUrl(planType);

  const funnelyticsParams: Param = {
    key: '_fsRef',
    value: fetchFunnelyticsParam(),
  };

  const templateParams: Param = {
    key: 'lp_template_data',
    value: data?._id ? [getKindQueryParam(data.kind), data._id].join('-') : null,
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

    return [checkoutUrl, urlParams.toString()].join('?');
  }

  return checkoutUrl;
};