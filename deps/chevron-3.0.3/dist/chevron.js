'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AUTH_KEYS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _es6Promise = require('es6-promise');

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

var _assign = require('./assign');

var _assign2 = _interopRequireDefault(_assign);

var _parser = require('./parser');

var _localStorageClient = require('./local-storage-client');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AUTH_KEYS = exports.AUTH_KEYS = ['securityToken', 'sessionId', 'accessId', 'accessKey'];

var CHEVRON_SERVICE = null;

var Chevron = function () {
  /**
   * @param  {Object} options Requires the authentication url as authUrl
   */
  function Chevron() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Chevron);

    (0, _assign2.default)(this, (0, _config.getConfig)(options));

    this.attributes = {};
    var StorageClient = options.storageClient || _client2.default;
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


  _createClass(Chevron, [{
    key: 'login',
    value: function login() {
      var _this = this;

      return this.postBasicAuth.apply(this, arguments).then(function (payload) {
        return _this.setAuthCache(payload);
      });
    }
  }, {
    key: 'postGoogleAuth',
    value: function postGoogleAuth(openIdToken) {
      var _this2 = this;

      return this.postOauth(openIdToken, 'google_openid_connect_').then(function (payload) {
        return _this2.setAuthCache(payload);
      });
    }
  }, {
    key: 'postBasicAuth',
    value: function postBasicAuth(username, password) {
      return this.postAuth((0, _parser.encodeBasicAuth)(username, password));
    }
  }, {
    key: 'postOauth',
    value: function postOauth(token) {
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      return this.postAuth('Bearer ' + prefix + token);
    }
  }, {
    key: 'postAuth',
    value: function postAuth(authHeader) {
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

  }, {
    key: 'logout',
    value: function logout() {
      var _this3 = this;

      return this.http({
        method: 'DELETE',
        url: this.sessionUrl
      }).catch(function () {}).then(function () {
        return _this3.clearAuthCache();
      });
    }
  }, {
    key: 'http',
    value: function http() {
      var _this4 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      options.headers = options.headers || {};
      return this.buildAuthHeaders(options.headers).then(function (headers) {
        (0, _assign2.default)(options.headers, headers);
        return _this4.request(options);
      });
    }

    /**
     * Uses either the security token, or the aid and key to make the headers
     * for an authenticated request
     *
     * @return {Object} Object representation of the headers for an auth request
     */

  }, {
    key: 'buildAuthHeaders',
    value: function buildAuthHeaders() {
      var _this5 = this;

      var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.get(['securityToken', 'accessId', 'accessKey']).catch(function (err) {
        console.error(err);
      }).then(function () {
        var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        (0, _assign2.default)(results, _this5.attributes);
        if (results.securityToken || _this5.securityToken) {
          headers['LP-Security-Token'] = results.securityToken;
        } else if (results.accessId && results.accessKey) {
          headers.Authorization = (0, _parser.compileAuthorizationHeader)(results.accessId, results.accessKey);
        }
        return headers;
      });
    }

    /**
     * SSO compliant validation method, acts as a wrapper around the
     *  regular chevron validation, but returns a promise to make ChevronSSO
     *  API more consistent and reliable
     */

  }, {
    key: 'validate',
    value: function validate(securityToken) {
      var _this6 = this;

      if (securityToken) {
        return _es6Promise.Promise.resolve((0, _parser.validateToken)(securityToken));
      }
      return this.get('securityToken').then(function (token) {
        return (0, _parser.validateToken)(token || _this6.securityToken);
      });
    }

    /**
     * Synchronous validate function
     */

  }, {
    key: 'validateSync',
    value: function validateSync(securityToken) {
      if (!securityToken) return false;
      return (0, _parser.validateToken)(securityToken);
    }

    /**
     * Validates credentials against authUrl to ensure session is still
     *  active.
     */

  }, {
    key: 'validateSession',
    value: function validateSession() {
      var _this7 = this;

      return this.get('securityToken').then(function (token) {
        token = token || _this7.securityToken;
        var result = null;
        if ((0, _parser.validateToken)(token)) {
          _this7.securityToken = token;
          result = _this7.getCurrentSession();
        }
        return result;
      }).then(function (payload) {
        if (payload) {
          return _this7.setAuthCache(payload);
        } else {
          return _this7.clearAuthCache();
        }
      });
    }
  }, {
    key: 'getCurrentSession',
    value: function getCurrentSession() {
      return this.http({
        url: this.sessionUrl,
        method: 'GET'
      }).catch(function () {
        return null;
      });
    }

    /**
     * Retrives a value from localstorage
     * Falls back to instance property if localStorage doesnt exist
     * @method  _getItem
     * @param  {String} key the key to lookup
     * @return {Any}     Whatever is stored at key
     */

  }, {
    key: '_getItem',
    value: function _getItem(key) {
      return this.attributes[key] || (0, _localStorageClient.getLocalStorageItem)(key);
    }

    /**
     * interfaces with localStorage to persist instance
     * @method  _setItem
     * @param {String} key   the key to store
     * @param {value} value the value to be associated with key
     */

  }, {
    key: '_setItem',
    value: function _setItem(key, value) {
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

  }, {
    key: 'get',
    value: function get() {
      var _remoteStorage;

      return (_remoteStorage = this.remoteStorage).get.apply(_remoteStorage, arguments);
    }
  }, {
    key: 'set',
    value: function set() {
      var _remoteStorage2;

      return (_remoteStorage2 = this.remoteStorage).set.apply(_remoteStorage2, arguments);
    }
  }, {
    key: 'setAuthCache',
    value: function setAuthCache(payload) {
      var creds = (0, _parser.parseAuth)(payload);
      (0, _assign2.default)(this, creds);
      if (creds.securityToken) {
        _jsCookie2.default.set('securityToken', creds.securityToken, { sameSite: 'none', secure: true });
      }
      // Only return creds after `this.set` completes to ensure that
      // a race condition cannot occur
      return this.set(creds).then(function () {
        return payload;
      });
    }
  }, {
    key: 'clearAuthCache',
    value: function clearAuthCache() {
      var _this8 = this;

      AUTH_KEYS.forEach(function (key) {
        delete _this8.attributes[key];
        _jsCookie2.default.remove(key);
        localStorage.removeItem(key);
      });
      return this.remoteStorage.remove(AUTH_KEYS).then(function () {
        return null;
      });
    }
  }, {
    key: 'securityToken',
    get: function get() {
      return this._getItem('securityToken');
    },
    set: function set(securityToken) {
      return this._setItem('securityToken', securityToken);
    }
  }, {
    key: 'sessionId',
    get: function get() {
      return this._getItem('sessionId');
    },
    set: function set(sessionId) {
      return this._setItem('sessionId', sessionId);
    }
  }, {
    key: 'accessId',
    get: function get() {
      return this._getItem('accessId');
    },
    set: function set(accessId) {
      return this._setItem('accessId', accessId);
    }
  }, {
    key: 'accessKey',
    get: function get() {
      return this._getItem('accessKey');
    },
    set: function set(accessKey) {
      return this._setItem('accessKey', accessKey);
    }
  }]);

  return Chevron;
}();

Chevron.prototype.request = _request2.default;

Chevron.getInstance = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!CHEVRON_SERVICE) {
    return new Chevron(opts);
  }
  return CHEVRON_SERVICE;
};

Chevron.clearInstance = function () {
  return CHEVRON_SERVICE = null;
};

exports.default = Chevron;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZXZyb24uanMiXSwibmFtZXMiOlsiQVVUSF9LRVlTIiwiQ0hFVlJPTl9TRVJWSUNFIiwiQ2hldnJvbiIsIm9wdGlvbnMiLCJhdHRyaWJ1dGVzIiwiU3RvcmFnZUNsaWVudCIsInN0b3JhZ2VDbGllbnQiLCJyZW1vdGVTdG9yYWdlIiwic3RvcmFnZVVybCIsImNvbnNvbGUiLCJ3YXJuIiwicG9zdEJhc2ljQXV0aCIsInRoZW4iLCJwYXlsb2FkIiwic2V0QXV0aENhY2hlIiwib3BlbklkVG9rZW4iLCJwb3N0T2F1dGgiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicG9zdEF1dGgiLCJ0b2tlbiIsInByZWZpeCIsImF1dGhIZWFkZXIiLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiYXV0aFVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiaHR0cCIsInNlc3Npb25VcmwiLCJjYXRjaCIsImNsZWFyQXV0aENhY2hlIiwiYnVpbGRBdXRoSGVhZGVycyIsImdldCIsImVyciIsImVycm9yIiwicmVzdWx0cyIsInNlY3VyaXR5VG9rZW4iLCJhY2Nlc3NJZCIsImFjY2Vzc0tleSIsInJlc29sdmUiLCJyZXN1bHQiLCJnZXRDdXJyZW50U2Vzc2lvbiIsImtleSIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJlIiwic2V0IiwiY3JlZHMiLCJzYW1lU2l0ZSIsInNlY3VyZSIsImZvckVhY2giLCJyZW1vdmUiLCJfZ2V0SXRlbSIsIl9zZXRJdGVtIiwic2Vzc2lvbklkIiwicHJvdG90eXBlIiwiZ2V0SW5zdGFuY2UiLCJvcHRzIiwiY2xlYXJJbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFNQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsZ0NBQVksQ0FBQyxlQUFELEVBQWtCLFdBQWxCLEVBQStCLFVBQS9CLEVBQTJDLFdBQTNDLENBQWxC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a0JwQyxPQUFsQjs7QUFFQXJCLFFBQVEwRCxXQUFSLEdBQXNCLFlBQWtCO0FBQUEsTUFBVEMsSUFBUyx1RUFBSixFQUFJOztBQUN0QyxNQUFJLENBQUM1RCxlQUFMLEVBQXNCO0FBQ3BCLFdBQU8sSUFBSUMsT0FBSixDQUFZMkQsSUFBWixDQUFQO0FBQ0Q7QUFDRCxTQUFPNUQsZUFBUDtBQUNELENBTEQ7O0FBT0FDLFFBQVE0RCxhQUFSLEdBQXdCLFlBQVc7QUFDakMsU0FBTzdELGtCQUFrQixJQUF6QjtBQUNELENBRkQ7O2tCQUllQyxPIiwiZmlsZSI6ImNoZXZyb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QnO1xuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJ2VzNi1wcm9taXNlJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgQ2xpZW50IGZyb20gJy4vY2xpZW50JztcbmltcG9ydCBhc3NpZ24gZnJvbSAnLi9hc3NpZ24nO1xuaW1wb3J0IHtcbiAgdmFsaWRhdGVUb2tlbixcbiAgZW5jb2RlQmFzaWNBdXRoLFxuICBjb21waWxlQXV0aG9yaXphdGlvbkhlYWRlcixcbiAgcGFyc2VBdXRoXG59IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZUl0ZW0gfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UtY2xpZW50JztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEFVVEhfS0VZUyA9IFsnc2VjdXJpdHlUb2tlbicsICdzZXNzaW9uSWQnLCAnYWNjZXNzSWQnLCAnYWNjZXNzS2V5J107XG5cbmxldCBDSEVWUk9OX1NFUlZJQ0UgPSBudWxsO1xuXG5jbGFzcyBDaGV2cm9uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyBSZXF1aXJlcyB0aGUgYXV0aGVudGljYXRpb24gdXJsIGFzIGF1dGhVcmxcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM9e30pIHtcbiAgICBhc3NpZ24odGhpcywgZ2V0Q29uZmlnKG9wdGlvbnMpKTtcblxuICAgIHRoaXMuYXR0cmlidXRlcyA9IHt9O1xuICAgIHZhciBTdG9yYWdlQ2xpZW50ID0gb3B0aW9ucy5zdG9yYWdlQ2xpZW50IHx8IENsaWVudDtcbiAgICB0aGlzLnJlbW90ZVN0b3JhZ2UgPSBuZXcgU3RvcmFnZUNsaWVudCh0aGlzLnN0b3JhZ2VVcmwpO1xuICAgIGlmICghQ0hFVlJPTl9TRVJWSUNFKSB7XG4gICAgICBDSEVWUk9OX1NFUlZJQ0UgPSB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJVc2luZyAnbmV3IENoZXZyb24oKScgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHJldHJpZXZlIGNoZXZyb24gdGhyb3VnaCAnQ2hldnJvbi5nZXRJbnN0YW5jZSgpJyB0byBhdm9pZCBjcmVhdGluZyBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgY2hldnJvblwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHN0YW5kYXJkIGxvZ2luIGFuZCBzZXQgdGhlIHRva2VuXG4gICAqIGluIGxvY2Fsc3RvcmFnZSBvbiB0aGUgc3NvIGh1YlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVzZXJuYW1lIFRoZSB1c2VybmFtZSB0byBhdXRoZW50aWNhdGUgd2l0aFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZCB0byBhdXRoZW50aWNhdGUgd2l0aFxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICAgIHJlc29sdmVzIHdpdGggdGhlIGNoZXZyb24gaW5zdGFuY2UuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBsb2dpbiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdEJhc2ljQXV0aCguLi5hcmdzKS50aGVuKChwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRBdXRoQ2FjaGUocGF5bG9hZCk7XG4gICAgfSk7XG4gIH1cblxuICBwb3N0R29vZ2xlQXV0aChvcGVuSWRUb2tlbikge1xuICAgIHJldHVybiB0aGlzLnBvc3RPYXV0aChvcGVuSWRUb2tlbiwgJ2dvb2dsZV9vcGVuaWRfY29ubmVjdF8nKS50aGVuKChwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRBdXRoQ2FjaGUocGF5bG9hZCk7XG4gICAgfSk7XG4gIH1cblxuICBwb3N0QmFzaWNBdXRoKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3RBdXRoKGVuY29kZUJhc2ljQXV0aCh1c2VybmFtZSwgcGFzc3dvcmQpKTtcbiAgfVxuXG4gIHBvc3RPYXV0aCh0b2tlbiwgcHJlZml4PScnKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdEF1dGgoYEJlYXJlciAke3ByZWZpeH0ke3Rva2VufWApO1xuICB9XG5cbiAgcG9zdEF1dGgoYXV0aEhlYWRlcikge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6IHRoaXMuYXV0aFVybCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYXV0aEhlYWRlclxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgc2Vzc2lvbiBvbiBzZXJ2ZXJcbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmVxdWVzdCBwcm9taXNlXG4gICAqL1xuICBsb2dvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cCh7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgdXJsOiB0aGlzLnNlc3Npb25VcmxcbiAgICB9KS5jYXRjaCgoKSA9PiB7fSkudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jbGVhckF1dGhDYWNoZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgaHR0cChvcHRpb25zPXt9KSB7XG4gICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgIHJldHVybiB0aGlzLmJ1aWxkQXV0aEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKS50aGVuKChoZWFkZXJzKSA9PiB7XG4gICAgICBhc3NpZ24ob3B0aW9ucy5oZWFkZXJzLCBoZWFkZXJzKTtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlcyBlaXRoZXIgdGhlIHNlY3VyaXR5IHRva2VuLCBvciB0aGUgYWlkIGFuZCBrZXkgdG8gbWFrZSB0aGUgaGVhZGVyc1xuICAgKiBmb3IgYW4gYXV0aGVudGljYXRlZCByZXF1ZXN0XG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH0gT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBoZWFkZXJzIGZvciBhbiBhdXRoIHJlcXVlc3RcbiAgICovXG4gIGJ1aWxkQXV0aEhlYWRlcnMoaGVhZGVycz17fSkge1xuICAgIHJldHVybiB0aGlzLmdldChbJ3NlY3VyaXR5VG9rZW4nLCAnYWNjZXNzSWQnLCAnYWNjZXNzS2V5J10pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9KS50aGVuKChyZXN1bHRzPXt9KSA9PiB7XG4gICAgICBhc3NpZ24ocmVzdWx0cywgdGhpcy5hdHRyaWJ1dGVzKTtcbiAgICAgIGlmIChyZXN1bHRzLnNlY3VyaXR5VG9rZW4gfHwgdGhpcy5zZWN1cml0eVRva2VuKSB7XG4gICAgICAgIGhlYWRlcnNbJ0xQLVNlY3VyaXR5LVRva2VuJ10gPSByZXN1bHRzLnNlY3VyaXR5VG9rZW47XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdHMuYWNjZXNzSWQgJiYgcmVzdWx0cy5hY2Nlc3NLZXkpIHtcbiAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gY29tcGlsZUF1dGhvcml6YXRpb25IZWFkZXIocmVzdWx0cy5hY2Nlc3NJZCwgcmVzdWx0cy5hY2Nlc3NLZXkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU1NPIGNvbXBsaWFudCB2YWxpZGF0aW9uIG1ldGhvZCwgYWN0cyBhcyBhIHdyYXBwZXIgYXJvdW5kIHRoZVxuICAgKiAgcmVndWxhciBjaGV2cm9uIHZhbGlkYXRpb24sIGJ1dCByZXR1cm5zIGEgcHJvbWlzZSB0byBtYWtlIENoZXZyb25TU09cbiAgICogIEFQSSBtb3JlIGNvbnNpc3RlbnQgYW5kIHJlbGlhYmxlXG4gICAqL1xuICB2YWxpZGF0ZShzZWN1cml0eVRva2VuKSB7XG4gICAgaWYgKHNlY3VyaXR5VG9rZW4pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGVUb2tlbihzZWN1cml0eVRva2VuKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldCgnc2VjdXJpdHlUb2tlbicpLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICByZXR1cm4gdmFsaWRhdGVUb2tlbih0b2tlbiB8fCB0aGlzLnNlY3VyaXR5VG9rZW4pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bmNocm9ub3VzIHZhbGlkYXRlIGZ1bmN0aW9uXG4gICAqL1xuICB2YWxpZGF0ZVN5bmMoc2VjdXJpdHlUb2tlbikge1xuICAgIGlmICghc2VjdXJpdHlUb2tlbikgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB2YWxpZGF0ZVRva2VuKHNlY3VyaXR5VG9rZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBjcmVkZW50aWFscyBhZ2FpbnN0IGF1dGhVcmwgdG8gZW5zdXJlIHNlc3Npb24gaXMgc3RpbGxcbiAgICogIGFjdGl2ZS5cbiAgICovXG4gIHZhbGlkYXRlU2Vzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJ3NlY3VyaXR5VG9rZW4nKVxuICAgICAgLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgIHRva2VuID0gdG9rZW4gfHwgdGhpcy5zZWN1cml0eVRva2VuO1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKHZhbGlkYXRlVG9rZW4odG9rZW4pKSB7XG4gICAgICAgICAgdGhpcy5zZWN1cml0eVRva2VuID0gdG9rZW47XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRDdXJyZW50U2Vzc2lvbigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KS50aGVuKChwYXlsb2FkKSA9PiB7XG4gICAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2V0QXV0aENhY2hlKHBheWxvYWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNsZWFyQXV0aENhY2hlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0Q3VycmVudFNlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cCh7XG4gICAgICB1cmw6IHRoaXMuc2Vzc2lvblVybCxcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KS5jYXRjaCgoKSA9PiBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaXZlcyBhIHZhbHVlIGZyb20gbG9jYWxzdG9yYWdlXG4gICAqIEZhbGxzIGJhY2sgdG8gaW5zdGFuY2UgcHJvcGVydHkgaWYgbG9jYWxTdG9yYWdlIGRvZXNudCBleGlzdFxuICAgKiBAbWV0aG9kICBfZ2V0SXRlbVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSB0aGUga2V5IHRvIGxvb2t1cFxuICAgKiBAcmV0dXJuIHtBbnl9ICAgICBXaGF0ZXZlciBpcyBzdG9yZWQgYXQga2V5XG4gICAqL1xuICBfZ2V0SXRlbShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW2tleV0gfHwgZ2V0TG9jYWxTdG9yYWdlSXRlbShrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGludGVyZmFjZXMgd2l0aCBsb2NhbFN0b3JhZ2UgdG8gcGVyc2lzdCBpbnN0YW5jZVxuICAgKiBAbWV0aG9kICBfc2V0SXRlbVxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5ICAgdGhlIGtleSB0byBzdG9yZVxuICAgKiBAcGFyYW0ge3ZhbHVlfSB2YWx1ZSB0aGUgdmFsdWUgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIGtleVxuICAgKi9cbiAgX3NldEl0ZW0oa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuYXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIEV4cGVjdGVkIGZhaWx1cmUgaW4gc2FmYXJpIHByaXZhdGUgbW9kZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXJzIGFuZCBzZXR0ZXJzIHRoYXQgcHJveHkgdGhlIHJlbW90ZVN0b3JhZ2UgZm9yIGFwaSBjb252ZW5pZW5jZVxuICAgKi9cbiAgZ2V0KC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdGVTdG9yYWdlLmdldCguLi5hcmdzKTtcbiAgfVxuICBzZXQoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLnJlbW90ZVN0b3JhZ2Uuc2V0KC4uLmFyZ3MpO1xuICB9XG5cbiAgc2V0QXV0aENhY2hlKHBheWxvYWQpIHtcbiAgICBsZXQgY3JlZHMgPSBwYXJzZUF1dGgocGF5bG9hZCk7XG4gICAgYXNzaWduKHRoaXMsIGNyZWRzKTtcbiAgICBpZiAoY3JlZHMuc2VjdXJpdHlUb2tlbikge1xuICAgICAgQ29va2llcy5zZXQoJ3NlY3VyaXR5VG9rZW4nLCBjcmVkcy5zZWN1cml0eVRva2VuLCB7c2FtZVNpdGU6J25vbmUnLCBzZWN1cmU6IHRydWV9KTtcbiAgICB9XG4gICAgLy8gT25seSByZXR1cm4gY3JlZHMgYWZ0ZXIgYHRoaXMuc2V0YCBjb21wbGV0ZXMgdG8gZW5zdXJlIHRoYXRcbiAgICAvLyBhIHJhY2UgY29uZGl0aW9uIGNhbm5vdCBvY2N1clxuICAgIHJldHVybiB0aGlzLnNldChjcmVkcykudGhlbigoKSA9PiBwYXlsb2FkKTtcbiAgfVxuXG4gIGNsZWFyQXV0aENhY2hlKCkge1xuICAgIEFVVEhfS0VZUy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzLmF0dHJpYnV0ZXNba2V5XTtcbiAgICAgIENvb2tpZXMucmVtb3ZlKGtleSk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJlbW90ZVN0b3JhZ2UucmVtb3ZlKEFVVEhfS0VZUykudGhlbigoKSA9PiBudWxsKTtcbiAgfVxuXG4gIGdldCBzZWN1cml0eVRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRJdGVtKCdzZWN1cml0eVRva2VuJyk7XG4gIH1cbiAgc2V0IHNlY3VyaXR5VG9rZW4oc2VjdXJpdHlUb2tlbikge1xuICAgIHJldHVybiB0aGlzLl9zZXRJdGVtKCdzZWN1cml0eVRva2VuJywgc2VjdXJpdHlUb2tlbik7XG4gIH1cblxuICBnZXQgc2Vzc2lvbklkKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRJdGVtKCdzZXNzaW9uSWQnKTtcbiAgfVxuICBzZXQgc2Vzc2lvbklkKHNlc3Npb25JZCkge1xuICAgIHJldHVybiB0aGlzLl9zZXRJdGVtKCdzZXNzaW9uSWQnLCBzZXNzaW9uSWQpO1xuICB9XG5cbiAgZ2V0IGFjY2Vzc0lkKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRJdGVtKCdhY2Nlc3NJZCcpO1xuICB9XG4gIHNldCBhY2Nlc3NJZChhY2Nlc3NJZCkge1xuICAgIHJldHVybiB0aGlzLl9zZXRJdGVtKCdhY2Nlc3NJZCcsIGFjY2Vzc0lkKTtcbiAgfVxuXG4gIGdldCBhY2Nlc3NLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEl0ZW0oJ2FjY2Vzc0tleScpO1xuICB9XG4gIHNldCBhY2Nlc3NLZXkoYWNjZXNzS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEl0ZW0oJ2FjY2Vzc0tleScsIGFjY2Vzc0tleSk7XG4gIH1cbn1cblxuQ2hldnJvbi5wcm90b3R5cGUucmVxdWVzdCA9IHJlcXVlc3Q7XG5cbkNoZXZyb24uZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbihvcHRzPXt9KSB7XG4gIGlmICghQ0hFVlJPTl9TRVJWSUNFKSB7XG4gICAgcmV0dXJuIG5ldyBDaGV2cm9uKG9wdHMpO1xuICB9XG4gIHJldHVybiBDSEVWUk9OX1NFUlZJQ0U7XG59O1xuXG5DaGV2cm9uLmNsZWFySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIENIRVZST05fU0VSVklDRSA9IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGV2cm9uO1xuIl19