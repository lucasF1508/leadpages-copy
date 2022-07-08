import Chevron from '@lp/chevron';
import { Config } from '@lp/config';

const request = async (method, path, body, params) => {
  // Chevron.getInstance can not be on the module scope since this
  // is used in SSR with the marketing site.
  const chevron = Chevron.getInstance();
  const config = Config.getInstance();
  return await chevron.http({
    method,
    url: `${config.get('LP_HOST')}${path}`,
    body,
    params,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const getPlanChangeData = async params => {
  return await request('GET', '/api/v1/billing/change-plan', null, params);
};

export default {
  getPlanChangeData,
};
