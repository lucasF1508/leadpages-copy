import request from './request';
import { Promise } from 'es6-promise';
import Cookies from 'js-cookie';
import Client from './client';
import assign from './assign';
import {
  validateToken,
  encodeBasicAuth,
  compileAuthorizationHeader,
  parseAuth
} from './parser';
import { getLocalStorageItem } from './local-storage-client';
import { getConfig } from './config';

export const AUTH_KEYS = ['securityToken', 'sessionId', 'accessId', 'accessKey'];

let CHEVRON_SERVICE = null;

class Chevron {
  /**
   * @param  {Object} options Requires the authentication url as authUrl
   */
  constructor(options={}) {
    assign(this, getConfig(options));

    this.attributes = {};
    var StorageClient = options.storageClient || Client;
    this.remoteStorage = new StorageClient(this.storageUrl);
    if (!CHEVRON_SERVICE) {
      CHEVRON_SERVICE = this;
    } else {
      console.warn("Using 'new Chevron()' is deprecated, please retrieve chevron through 'Chevron.getInstance()' to avoid creating multiple instances of chevron");
    }
    return this;
  }

  /**
   * Perform a standard login and set the token
   * in localstorage on the sso hub
   * @param  {String} username The username to authenticate with
   * @param  {String} password The password to authenticate with
   * @return {Promise}         resolves with the chevron instance.
   *                           rejects with an error
   */
  login(...args) {
    return this.postBasicAuth(...args).then((payload) => {
      return this.setAuthCache(payload);
    });
  }

  postGoogleAuth(openIdToken) {
    return this.postOauth(openIdToken, 'google_openid_connect_').then((payload) => {
      return this.setAuthCache(payload);
    });
  }

  postBasicAuth(username, password) {
    return this.postAuth(encodeBasicAuth(username, password));
  }

  postOauth(token, prefix='') {
    return this.postAuth(`Bearer ${prefix}${token}`);
  }

  postAuth(authHeader) {
    return this.request({
      method: 'POST',
      url: this.authUrl,
      headers: {
        Authorization: authHeader
      }
    });
  }

  /**
   * Deletes session on server
   * @return {Promise} Request promise
   */
  logout() {
    return this.http({
      method: 'DELETE',
      url: this.sessionUrl
    }).catch(() => {}).then(() => {
      return this.clearAuthCache();
    });
  }

  http(options={}) {
    options.headers = options.headers || {};
    return this.buildAuthHeaders(options.headers).then((headers) => {
      assign(options.headers, headers);
      return this.request(options);
    });
  }

  /**
   * Uses either the security token, or the aid and key to make the headers
   * for an authenticated request
   *
   * @return {Object} Object representation of the headers for an auth request
   */
  buildAuthHeaders(headers={}) {
    return this.get(['securityToken', 'accessId', 'accessKey']).catch((err) => {
      console.error(err);
    }).then((results={}) => {
      assign(results, this.attributes);
      if (results.securityToken || this.securityToken) {
        headers['LP-Security-Token'] = results.securityToken;
      } else if (results.accessId && results.accessKey) {
        headers.Authorization = compileAuthorizationHeader(results.accessId, results.accessKey);
      }
      return headers;
    });
  }

  /**
   * SSO compliant validation method, acts as a wrapper around the
   *  regular chevron validation, but returns a promise to make ChevronSSO
   *  API more consistent and reliable
   */
  validate(securityToken) {
    if (securityToken) {
      return Promise.resolve(validateToken(securityToken));
    }
    return this.get('securityToken').then((token) => {
      return validateToken(token || this.securityToken);
    });
  }

  /**
   * Synchronous validate function
   */
  validateSync(securityToken) {
    if (!securityToken) return false;
    return validateToken(securityToken);
  }

  /**
   * Validates credentials against authUrl to ensure session is still
   *  active.
   */
  validateSession() {
    return this.get('securityToken')
      .then((token) => {
        token = token || this.securityToken;
        let result = null;
        if (validateToken(token)) {
          this.securityToken = token;
          result = this.getCurrentSession();
        }
        return result;
      }).then((payload) => {
        if (payload) {
          return this.setAuthCache(payload);
        } else {
          return this.clearAuthCache();
        }
      });
  }

  getCurrentSession() {
    return this.http({
      url: this.sessionUrl,
      method: 'GET'
    }).catch(() => null);
  }

  /**
   * Retrives a value from localstorage
   * Falls back to instance property if localStorage doesnt exist
   * @method  _getItem
   * @param  {String} key the key to lookup
   * @return {Any}     Whatever is stored at key
   */
  _getItem(key) {
    return this.attributes[key] || getLocalStorageItem(key);
  }

  /**
   * interfaces with localStorage to persist instance
   * @method  _setItem
   * @param {String} key   the key to store
   * @param {value} value the value to be associated with key
   */
  _setItem(key, value) {
    this.attributes[key] = value;
    try {
      if (!value) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      // Expected failure in safari private mode
    }
  }

  /**
   * Getters and setters that proxy the remoteStorage for api convenience
   */
  get(...args) {
    return this.remoteStorage.get(...args);
  }
  set(...args) {
    return this.remoteStorage.set(...args);
  }

  setAuthCache(payload) {
    let creds = parseAuth(payload);
    assign(this, creds);
    if (creds.securityToken) {
      Cookies.set('securityToken', creds.securityToken, {sameSite:'none', secure: true});
    }
    // Only return creds after `this.set` completes to ensure that
    // a race condition cannot occur
    return this.set(creds).then(() => payload);
  }

  clearAuthCache() {
    AUTH_KEYS.forEach((key) => {
      delete this.attributes[key];
      Cookies.remove(key);
      localStorage.removeItem(key);
    });
    return this.remoteStorage.remove(AUTH_KEYS).then(() => null);
  }

  get securityToken() {
    return this._getItem('securityToken');
  }
  set securityToken(securityToken) {
    return this._setItem('securityToken', securityToken);
  }

  get sessionId() {
    return this._getItem('sessionId');
  }
  set sessionId(sessionId) {
    return this._setItem('sessionId', sessionId);
  }

  get accessId() {
    return this._getItem('accessId');
  }
  set accessId(accessId) {
    return this._setItem('accessId', accessId);
  }

  get accessKey() {
    return this._getItem('accessKey');
  }
  set accessKey(accessKey) {
    return this._setItem('accessKey', accessKey);
  }
}

Chevron.prototype.request = request;

Chevron.getInstance = function(opts={}) {
  if (!CHEVRON_SERVICE) {
    return new Chevron(opts);
  }
  return CHEVRON_SERVICE;
};

Chevron.clearInstance = function() {
  return CHEVRON_SERVICE = null;
};

export default Chevron;
