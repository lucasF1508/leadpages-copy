import { Config } from '@lp/config';

export const SSO_PATH = '/sso';
export const AUTH_PATH = '/account/v1/sessions';
export const SESSION_PATH = '/account/v1/sessions/current';

export const PROD_API_HOST = 'https://account-dot-lead-pages.appspot.com';
export const PROD_SSO_HOST = 'https://my.leadpages.net';

export const DEV_API_HOST = 'https://account-dot-leadpage-test.appspot.com';
export const DEV_SSO_HOST = 'https://my.leadpagestest.com';

export const LOCAL_API_HOST = 'http://local.dev:82';
export const LOCAL_SSO_HOST = 'http://local.dev';

export const DOCKER_API_HOST = 'https://account.docker';
export const DOCKER_SSO_HOST = 'https://leadpages.docker';

export const ENV_URLS = {
  'PRODUCTION': {
    sessionUrl: `${PROD_API_HOST}${SESSION_PATH}`,
    authUrl: `${PROD_API_HOST}${AUTH_PATH}`,
    storageUrl: `${PROD_SSO_HOST}${SSO_PATH}`
  },
  'DEVELOPMENT': {
    sessionUrl: `${DEV_API_HOST}${SESSION_PATH}`,
    authUrl: `${DEV_API_HOST}${AUTH_PATH}`,
    storageUrl: `${DEV_SSO_HOST}${SSO_PATH}`
  },
  'LOCAL': {
    sessionUrl: `${LOCAL_API_HOST}${SESSION_PATH}`,
    authUrl: `${LOCAL_API_HOST}${AUTH_PATH}`,
    storageUrl: `${LOCAL_SSO_HOST}${SSO_PATH}`
  },
  'DOCKER': {
    sessionUrl: `${DOCKER_API_HOST}${SESSION_PATH}`,
    authUrl: `${DOCKER_API_HOST}${AUTH_PATH}`,
    storageUrl: `${DOCKER_SSO_HOST}${SSO_PATH}`
  }
};

export const DEFAULT_ENV = 'PRODUCTION';

export const URL_KEYS = ['sessionUrl', 'authUrl', 'storageUrl'];

export function getConfig(options={}) {
  let config = Config.getInstance();
  let env = options.ENV || config.get('CHEVRON.ENV') || DEFAULT_ENV;

  let urls = ENV_URLS[env] || ENV_URLS[DEFAULT_ENV];
  URL_KEYS.forEach((key) => {
    let value = config.get(`CHEVRON.${key}`);
    if (options[key]) value = options[key];
    if (value) urls[key] = value;
  });
  return urls;
}
