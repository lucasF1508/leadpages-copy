import utf8 from 'utf8';
import { atob, btoa } from 'abab';

/**
 * Parses the security token from the request.
 * @return {Object|false} The parsed security token or false if
 * the token cannot be parsed.
 */
export function parseToken(securityToken) {
  try {
    securityToken = securityToken.split('.');
    securityToken.pop();
    return securityToken.map((part) => {
      return utf8.decode(atob(part));
    }).map(JSON.parse);
  } catch (e) {
    return false;
  }
}

/**
 * Validate the given security token against leadpages criteria
 * @param  {String} securityToken the securityToken to test in
 *                  string/encoded form
 * @return {Boolean}
 */
export function validateToken(securityToken) {
  if (!securityToken) { return false; }
  try {
    var payload = parseToken(securityToken)[1];
    if (payload.exp < 1000000000000) { payload.exp *= 1000; }
  } catch (e) {
    return false;
  }

  if (!payload.exp || new Date(payload.exp) < Date.now()) {
    return false;
  }
  if (payload.iss !== 'api.leadpages.io') {
    return false;
  }
  if (payload.aud !== 'leadpages.net') {
    return false;
  }
  if (!payload.iat) {
    return false;
  }

  return true;
}

/**
 * Private method to properly encode the authorization credentials
 */
export function encodeBasicAuth(username, password) {
  var encoded;
  try {
    encoded = `Basic ${btoa(utf8.encode(`${username.toLowerCase()}:${password}`))}`;
  } catch (err) {
    encoded = '';
  }
  return encoded;
}

export function compileAuthorizationHeader(accessId, accessKey) {
  return `LP ${accessId}:${accessKey}`;
}

export function parseAuth(payload={}) {
  return {
    accessId: payload.accessId || '',
    accessKey: payload.accessKey || '',
    securityToken: payload.securityToken || '',
    sessionId: (payload._meta && payload._meta.id) || ''
  };
}
