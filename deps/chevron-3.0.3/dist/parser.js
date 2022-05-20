'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseToken = parseToken;
exports.validateToken = validateToken;
exports.encodeBasicAuth = encodeBasicAuth;
exports.compileAuthorizationHeader = compileAuthorizationHeader;
exports.parseAuth = parseAuth;

var _utf = require('utf8');

var _utf2 = _interopRequireDefault(_utf);

var _abab = require('abab');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parses the security token from the request.
 * @return {Object|false} The parsed security token or false if
 * the token cannot be parsed.
 */
function parseToken(securityToken) {
  try {
    securityToken = securityToken.split('.');
    securityToken.pop();
    return securityToken.map(function (part) {
      return _utf2.default.decode((0, _abab.atob)(part));
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
function validateToken(securityToken) {
  if (!securityToken) {
    return false;
  }
  try {
    var payload = parseToken(securityToken)[1];
    if (payload.exp < 1000000000000) {
      payload.exp *= 1000;
    }
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
function encodeBasicAuth(username, password) {
  var encoded;
  try {
    encoded = 'Basic ' + (0, _abab.btoa)(_utf2.default.encode(username.toLowerCase() + ':' + password));
  } catch (err) {
    encoded = '';
  }
  return encoded;
}

function compileAuthorizationHeader(accessId, accessKey) {
  return 'LP ' + accessId + ':' + accessKey;
}

function parseAuth() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return {
    accessId: payload.accessId || '',
    accessKey: payload.accessKey || '',
    securityToken: payload.securityToken || '',
    sessionId: payload._meta && payload._meta.id || ''
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJwYXJzZVRva2VuIiwidmFsaWRhdGVUb2tlbiIsImVuY29kZUJhc2ljQXV0aCIsImNvbXBpbGVBdXRob3JpemF0aW9uSGVhZGVyIiwicGFyc2VBdXRoIiwic2VjdXJpdHlUb2tlbiIsInNwbGl0IiwicG9wIiwibWFwIiwicGFydCIsImRlY29kZSIsIkpTT04iLCJwYXJzZSIsImUiLCJwYXlsb2FkIiwiZXhwIiwiRGF0ZSIsIm5vdyIsImlzcyIsImF1ZCIsImlhdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlbmNvZGVkIiwiZW5jb2RlIiwidG9Mb3dlckNhc2UiLCJlcnIiLCJhY2Nlc3NJZCIsImFjY2Vzc0tleSIsInNlc3Npb25JZCIsIl9tZXRhIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBUWdCQSxVLEdBQUFBLFU7UUFrQkFDLGEsR0FBQUEsYTtRQTRCQUMsZSxHQUFBQSxlO1FBVUFDLDBCLEdBQUFBLDBCO1FBSUFDLFMsR0FBQUEsUzs7QUFwRWhCOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7QUFLTyxTQUFTSixVQUFULENBQW9CSyxhQUFwQixFQUFtQztBQUN4QyxNQUFJO0FBQ0ZBLG9CQUFnQkEsY0FBY0MsS0FBZCxDQUFvQixHQUFwQixDQUFoQjtBQUNBRCxrQkFBY0UsR0FBZDtBQUNBLFdBQU9GLGNBQWNHLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pDLGFBQU8sY0FBS0MsTUFBTCxDQUFZLGdCQUFLRCxJQUFMLENBQVosQ0FBUDtBQUNELEtBRk0sRUFFSkQsR0FGSSxDQUVBRyxLQUFLQyxLQUZMLENBQVA7QUFHRCxHQU5ELENBTUUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1YsV0FBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7O0FBTU8sU0FBU1osYUFBVCxDQUF1QkksYUFBdkIsRUFBc0M7QUFDM0MsTUFBSSxDQUFDQSxhQUFMLEVBQW9CO0FBQUUsV0FBTyxLQUFQO0FBQWU7QUFDckMsTUFBSTtBQUNGLFFBQUlTLFVBQVVkLFdBQVdLLGFBQVgsRUFBMEIsQ0FBMUIsQ0FBZDtBQUNBLFFBQUlTLFFBQVFDLEdBQVIsR0FBYyxhQUFsQixFQUFpQztBQUFFRCxjQUFRQyxHQUFSLElBQWUsSUFBZjtBQUFzQjtBQUMxRCxHQUhELENBR0UsT0FBT0YsQ0FBUCxFQUFVO0FBQ1YsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDQyxRQUFRQyxHQUFULElBQWdCLElBQUlDLElBQUosQ0FBU0YsUUFBUUMsR0FBakIsSUFBd0JDLEtBQUtDLEdBQUwsRUFBNUMsRUFBd0Q7QUFDdEQsV0FBTyxLQUFQO0FBQ0Q7QUFDRCxNQUFJSCxRQUFRSSxHQUFSLEtBQWdCLGtCQUFwQixFQUF3QztBQUN0QyxXQUFPLEtBQVA7QUFDRDtBQUNELE1BQUlKLFFBQVFLLEdBQVIsS0FBZ0IsZUFBcEIsRUFBcUM7QUFDbkMsV0FBTyxLQUFQO0FBQ0Q7QUFDRCxNQUFJLENBQUNMLFFBQVFNLEdBQWIsRUFBa0I7QUFDaEIsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7OztBQUdPLFNBQVNsQixlQUFULENBQXlCbUIsUUFBekIsRUFBbUNDLFFBQW5DLEVBQTZDO0FBQ2xELE1BQUlDLE9BQUo7QUFDQSxNQUFJO0FBQ0ZBLHlCQUFtQixnQkFBSyxjQUFLQyxNQUFMLENBQWVILFNBQVNJLFdBQVQsRUFBZixTQUF5Q0gsUUFBekMsQ0FBTCxDQUFuQjtBQUNELEdBRkQsQ0FFRSxPQUFPSSxHQUFQLEVBQVk7QUFDWkgsY0FBVSxFQUFWO0FBQ0Q7QUFDRCxTQUFPQSxPQUFQO0FBQ0Q7O0FBRU0sU0FBU3BCLDBCQUFULENBQW9Dd0IsUUFBcEMsRUFBOENDLFNBQTlDLEVBQXlEO0FBQzlELGlCQUFhRCxRQUFiLFNBQXlCQyxTQUF6QjtBQUNEOztBQUVNLFNBQVN4QixTQUFULEdBQStCO0FBQUEsTUFBWlUsT0FBWSx1RUFBSixFQUFJOztBQUNwQyxTQUFPO0FBQ0xhLGNBQVViLFFBQVFhLFFBQVIsSUFBb0IsRUFEekI7QUFFTEMsZUFBV2QsUUFBUWMsU0FBUixJQUFxQixFQUYzQjtBQUdMdkIsbUJBQWVTLFFBQVFULGFBQVIsSUFBeUIsRUFIbkM7QUFJTHdCLGVBQVlmLFFBQVFnQixLQUFSLElBQWlCaEIsUUFBUWdCLEtBQVIsQ0FBY0MsRUFBaEMsSUFBdUM7QUFKN0MsR0FBUDtBQU1EIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGY4IGZyb20gJ3V0ZjgnO1xuaW1wb3J0IHsgYXRvYiwgYnRvYSB9IGZyb20gJ2FiYWInO1xuXG4vKipcbiAqIFBhcnNlcyB0aGUgc2VjdXJpdHkgdG9rZW4gZnJvbSB0aGUgcmVxdWVzdC5cbiAqIEByZXR1cm4ge09iamVjdHxmYWxzZX0gVGhlIHBhcnNlZCBzZWN1cml0eSB0b2tlbiBvciBmYWxzZSBpZlxuICogdGhlIHRva2VuIGNhbm5vdCBiZSBwYXJzZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRva2VuKHNlY3VyaXR5VG9rZW4pIHtcbiAgdHJ5IHtcbiAgICBzZWN1cml0eVRva2VuID0gc2VjdXJpdHlUb2tlbi5zcGxpdCgnLicpO1xuICAgIHNlY3VyaXR5VG9rZW4ucG9wKCk7XG4gICAgcmV0dXJuIHNlY3VyaXR5VG9rZW4ubWFwKChwYXJ0KSA9PiB7XG4gICAgICByZXR1cm4gdXRmOC5kZWNvZGUoYXRvYihwYXJ0KSk7XG4gICAgfSkubWFwKEpTT04ucGFyc2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogVmFsaWRhdGUgdGhlIGdpdmVuIHNlY3VyaXR5IHRva2VuIGFnYWluc3QgbGVhZHBhZ2VzIGNyaXRlcmlhXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHNlY3VyaXR5VG9rZW4gdGhlIHNlY3VyaXR5VG9rZW4gdG8gdGVzdCBpblxuICogICAgICAgICAgICAgICAgICBzdHJpbmcvZW5jb2RlZCBmb3JtXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVUb2tlbihzZWN1cml0eVRva2VuKSB7XG4gIGlmICghc2VjdXJpdHlUb2tlbikgeyByZXR1cm4gZmFsc2U7IH1cbiAgdHJ5IHtcbiAgICB2YXIgcGF5bG9hZCA9IHBhcnNlVG9rZW4oc2VjdXJpdHlUb2tlbilbMV07XG4gICAgaWYgKHBheWxvYWQuZXhwIDwgMTAwMDAwMDAwMDAwMCkgeyBwYXlsb2FkLmV4cCAqPSAxMDAwOyB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIXBheWxvYWQuZXhwIHx8IG5ldyBEYXRlKHBheWxvYWQuZXhwKSA8IERhdGUubm93KCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHBheWxvYWQuaXNzICE9PSAnYXBpLmxlYWRwYWdlcy5pbycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHBheWxvYWQuYXVkICE9PSAnbGVhZHBhZ2VzLm5ldCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCFwYXlsb2FkLmlhdCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFByaXZhdGUgbWV0aG9kIHRvIHByb3Blcmx5IGVuY29kZSB0aGUgYXV0aG9yaXphdGlvbiBjcmVkZW50aWFsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlQmFzaWNBdXRoKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICB2YXIgZW5jb2RlZDtcbiAgdHJ5IHtcbiAgICBlbmNvZGVkID0gYEJhc2ljICR7YnRvYSh1dGY4LmVuY29kZShgJHt1c2VybmFtZS50b0xvd2VyQ2FzZSgpfToke3Bhc3N3b3JkfWApKX1gO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBlbmNvZGVkID0gJyc7XG4gIH1cbiAgcmV0dXJuIGVuY29kZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlQXV0aG9yaXphdGlvbkhlYWRlcihhY2Nlc3NJZCwgYWNjZXNzS2V5KSB7XG4gIHJldHVybiBgTFAgJHthY2Nlc3NJZH06JHthY2Nlc3NLZXl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXV0aChwYXlsb2FkPXt9KSB7XG4gIHJldHVybiB7XG4gICAgYWNjZXNzSWQ6IHBheWxvYWQuYWNjZXNzSWQgfHwgJycsXG4gICAgYWNjZXNzS2V5OiBwYXlsb2FkLmFjY2Vzc0tleSB8fCAnJyxcbiAgICBzZWN1cml0eVRva2VuOiBwYXlsb2FkLnNlY3VyaXR5VG9rZW4gfHwgJycsXG4gICAgc2Vzc2lvbklkOiAocGF5bG9hZC5fbWV0YSAmJiBwYXlsb2FkLl9tZXRhLmlkKSB8fCAnJ1xuICB9O1xufVxuIl19