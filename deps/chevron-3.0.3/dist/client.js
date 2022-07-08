'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _es6Promise = require('es6-promise');

var _uniqueId = require('./unique-id');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _parseUri = require('./parse-uri');

var _parseUri2 = _interopRequireDefault(_parseUri);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Cross Domain IFrame Client
*
* @class Client
* @constructor
*/

var timeout = 10000;

var Client = function () {
  /**
   * @param  {String} origin The domain the iframe should load
   * @param  {String} path The path the iframe should load
   * The path should contain all the slashes
   */
  function Client(url) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Client);

    this._timeout = opts.timeout || timeout;
    this._iframeLoaded = false;
    url = (0, _parseUri2.default)(url);
    if (url.authority) {
      this.origin = (url.protocol || 'http') + '://' + url.authority;
    } else {
      this.origin = window.location.protocol + "//" + window.location.host;
    }
    this.path = url.path || "/";
    this._tasks = {};
    this._unhandledMessages = [];

    window.addEventListener('message', this._receiveMessage.bind(this));
    this._createIframe();
  }

  /**
   * Creates a new Iframe element and adds it to the DOM
   * ensures that the iframe is not visible
   * @method _createIframe
   */


  _createClass(Client, [{
    key: '_createIframe',
    value: function _createIframe() {
      var existing_iframe = document.getElementById('RemoteStorageServerIframe');
      if (existing_iframe) {
        this._iframe = existing_iframe;
        if (this._iframe.dataset.loaded) {
          this._iframeLoaded = true;
        }
        return;
      }
      this._iframe = document.createElement('iframe');
      this._iframe.id = 'RemoteStorageServerIframe';
      this._iframe.style.cssText = 'display:none;';
      this._iframe.src = this.origin + this.path;
      document.body.appendChild(this._iframe);
    }

    /**
     * Once the iframe is loaded, start processing requests
     * @method _processTasks
     */

  }, {
    key: '_processTasks',
    value: function _processTasks() {
      for (var id in this._tasks) {
        this._tasks[id].timeout = this._sendRequest(this._tasks[id].payload);
      }
    }

    /**
     * @param  {Object} payload
     * @method _sendRequest
     */

  }, {
    key: '_sendRequest',
    value: function _sendRequest(payload) {
      var _this = this;

      var err = '';
      try {
        this._iframe.contentWindow.postMessage(JSON.stringify(payload), this.origin);
      } catch (e) {
        err = e.message;
      }
      return setTimeout(function () {
        if (_this._tasks[payload.id]) {
          var message = !err ? 'unhandled request after ' + _this._timeout + 'ms with id: ' + payload.id : err;
          _this._resolveTask({
            id: payload.id,
            data: {
              error: {
                message: message,
                payload: payload
              }
            }
          });
        }
      }, this._timeout);
    }
  }, {
    key: '_receiveMessage',
    value: function _receiveMessage(e) {
      var eventData = {};
      if (_typeof(e.data) === 'object') {
        eventData = e.data;
      } else {
        try {
          eventData = JSON.parse(e.data);
        } catch (e) {
          eventData = {};
        }
      }
      if (eventData.loaded) {
        this._iframeLoaded = true;
        this._iframe.dataset.loaded = true;
        return this._processTasks();
      } else {
        return this._resolveTask(eventData);
      }
    }
  }, {
    key: '_resolveTask',
    value: function _resolveTask(eventData) {
      if (this._tasks[eventData.id]) {
        if (eventData.data && eventData.data.error) {
          this._tasks[eventData.id].reject(eventData.data);
        } else {
          this._tasks[eventData.id].resolve(eventData.data);
        }
        clearTimeout(this._tasks[eventData.id].timeout);
        delete this._tasks[eventData.id];
      } else {
        this._unhandledMessages.push(eventData);
        if (this._unhandledMessages.length > 20) {
          this._unhandledMessages.shift();
        }
      }
    }

    /**
     * @param  {String} method enums: get, set, remove
     * @param  {String} data
     *  get/remove - the search query
     *  set - key:value pair to set in the database
     * @return {Promise}
     * @method request
     * @example
     * client.request('get', 'foo')
     * .then((res) => {
     *      console.log(res);
     *      // => 'bar'
     * });
     */

  }, {
    key: 'request',
    value: function request(method, data, force) {
      var _this2 = this;

      return new _es6Promise.Promise(function (resolve, reject) {
        var task = {
          resolve: resolve,
          reject: reject,
          payload: {
            id: (0, _uniqueId2.default)(),
            method: method,
            data: data
          }
        };
        _this2._tasks[task.payload.id] = task;
        if (_this2._iframeLoaded || !!force) {
          _this2._sendRequest(task.payload);
        }
      });
    }
  }, {
    key: 'get',
    value: function get() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.request.apply(this, ['get'].concat(args));
    }
  }, {
    key: 'set',
    value: function set() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.request.apply(this, ['set'].concat(args));
    }
  }, {
    key: 'remove',
    value: function remove() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.request.apply(this, ['remove'].concat(args));
    }
  }]);

  return Client;
}();

exports.default = Client;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC5qcyJdLCJuYW1lcyI6WyJ0aW1lb3V0IiwiQ2xpZW50IiwidXJsIiwib3B0cyIsIl90aW1lb3V0IiwiX2lmcmFtZUxvYWRlZCIsImF1dGhvcml0eSIsIm9yaWdpbiIsInByb3RvY29sIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0IiwicGF0aCIsIl90YXNrcyIsIl91bmhhbmRsZWRNZXNzYWdlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVjZWl2ZU1lc3NhZ2UiLCJiaW5kIiwiX2NyZWF0ZUlmcmFtZSIsImV4aXN0aW5nX2lmcmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfaWZyYW1lIiwiZGF0YXNldCIsImxvYWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInN0eWxlIiwiY3NzVGV4dCIsInNyYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIl9zZW5kUmVxdWVzdCIsInBheWxvYWQiLCJlcnIiLCJjb250ZW50V2luZG93IiwicG9zdE1lc3NhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsIm1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwiX3Jlc29sdmVUYXNrIiwiZGF0YSIsImVycm9yIiwiZXZlbnREYXRhIiwicGFyc2UiLCJfcHJvY2Vzc1Rhc2tzIiwicmVqZWN0IiwicmVzb2x2ZSIsImNsZWFyVGltZW91dCIsInB1c2giLCJsZW5ndGgiLCJzaGlmdCIsIm1ldGhvZCIsImZvcmNlIiwidGFzayIsImFyZ3MiLCJyZXF1ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7OztBQU9BLElBQU1BLFVBQVUsS0FBaEI7O0lBRXFCQyxNO0FBQ25COzs7OztBQUtBLGtCQUFZQyxHQUFaLEVBQTBCO0FBQUEsUUFBVEMsSUFBUyx1RUFBSixFQUFJOztBQUFBOztBQUN4QixTQUFLQyxRQUFMLEdBQWdCRCxLQUFLSCxPQUFMLElBQWdCQSxPQUFoQztBQUNBLFNBQUtLLGFBQUwsR0FB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LHdCQUFZLFVBQUNOLE9BQUQsRUFBVUQsTUFBVixFQUFxQjtBQUN0QyxZQUFJUSxPQUFPO0FBQ1RQLDBCQURTO0FBRVRELHdCQUZTO0FBR1RmLG1CQUFTO0FBQ1BQLGdCQUFJLHlCQURHO0FBRVA0QiwwQkFGTztBQUdQWDtBQUhPO0FBSEEsU0FBWDtBQVNBLGVBQUs5QixNQUFMLENBQVkyQyxLQUFLdkIsT0FBTCxDQUFhUCxFQUF6QixJQUErQjhCLElBQS9CO0FBQ0EsWUFBSSxPQUFLbkQsYUFBTCxJQUFzQixDQUFDLENBQUNrRCxLQUE1QixFQUFtQztBQUNqQyxpQkFBS3ZCLFlBQUwsQ0FBa0J3QixLQUFLdkIsT0FBdkI7QUFDRDtBQUNGLE9BZE0sQ0FBUDtBQWVEOzs7MEJBRVk7QUFBQSx3Q0FBTndCLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNYLGFBQU8sS0FBS0MsT0FBTCxjQUFhLEtBQWIsU0FBdUJELElBQXZCLEVBQVA7QUFDRDs7OzBCQUNZO0FBQUEseUNBQU5BLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNYLGFBQU8sS0FBS0MsT0FBTCxjQUFhLEtBQWIsU0FBdUJELElBQXZCLEVBQVA7QUFDRDs7OzZCQUNlO0FBQUEseUNBQU5BLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNkLGFBQU8sS0FBS0MsT0FBTCxjQUFhLFFBQWIsU0FBMEJELElBQTFCLEVBQVA7QUFDRDs7Ozs7O2tCQWhLa0J4RCxNIiwiZmlsZSI6ImNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb21pc2UgfSBmcm9tICdlczYtcHJvbWlzZSc7XG5pbXBvcnQgdW5pcXVlSUQgZnJvbSAnLi91bmlxdWUtaWQnO1xuaW1wb3J0IHBhcnNlVXJpIGZyb20gJy4vcGFyc2UtdXJpJztcblxuLyoqXG4qIENyb3NzIERvbWFpbiBJRnJhbWUgQ2xpZW50XG4qXG4qIEBjbGFzcyBDbGllbnRcbiogQGNvbnN0cnVjdG9yXG4qL1xuXG5jb25zdCB0aW1lb3V0ID0gMTAwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG9yaWdpbiBUaGUgZG9tYWluIHRoZSBpZnJhbWUgc2hvdWxkIGxvYWRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRoZSBpZnJhbWUgc2hvdWxkIGxvYWRcbiAgICogVGhlIHBhdGggc2hvdWxkIGNvbnRhaW4gYWxsIHRoZSBzbGFzaGVzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih1cmwsIG9wdHM9e30pIHtcbiAgICB0aGlzLl90aW1lb3V0ID0gb3B0cy50aW1lb3V0IHx8IHRpbWVvdXQ7XG4gICAgdGhpcy5faWZyYW1lTG9hZGVkID0gZmFsc2U7XG4gICAgdXJsID0gcGFyc2VVcmkodXJsKTtcbiAgICBpZiAodXJsLmF1dGhvcml0eSkge1xuICAgICAgdGhpcy5vcmlnaW4gPSBgJHt1cmwucHJvdG9jb2wgfHwgJ2h0dHAnfTovLyR7dXJsLmF1dGhvcml0eX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xuICAgIH1cbiAgICB0aGlzLnBhdGggPSB1cmwucGF0aCB8fCBcIi9cIjtcbiAgICB0aGlzLl90YXNrcyA9ICB7fTtcbiAgICB0aGlzLl91bmhhbmRsZWRNZXNzYWdlcyA9IFtdO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9yZWNlaXZlTWVzc2FnZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl9jcmVhdGVJZnJhbWUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IElmcmFtZSBlbGVtZW50IGFuZCBhZGRzIGl0IHRvIHRoZSBET01cbiAgICogZW5zdXJlcyB0aGF0IHRoZSBpZnJhbWUgaXMgbm90IHZpc2libGVcbiAgICogQG1ldGhvZCBfY3JlYXRlSWZyYW1lXG4gICAqL1xuICBfY3JlYXRlSWZyYW1lKCkge1xuICAgIHZhciBleGlzdGluZ19pZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVtb3RlU3RvcmFnZVNlcnZlcklmcmFtZScpO1xuICAgIGlmIChleGlzdGluZ19pZnJhbWUpIHtcbiAgICAgIHRoaXMuX2lmcmFtZSA9IGV4aXN0aW5nX2lmcmFtZTtcbiAgICAgIGlmICh0aGlzLl9pZnJhbWUuZGF0YXNldC5sb2FkZWQpIHtcbiAgICAgICAgdGhpcy5faWZyYW1lTG9hZGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgdGhpcy5faWZyYW1lLmlkID0gJ1JlbW90ZVN0b3JhZ2VTZXJ2ZXJJZnJhbWUnO1xuICAgIHRoaXMuX2lmcmFtZS5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6bm9uZTsnO1xuICAgIHRoaXMuX2lmcmFtZS5zcmMgPSB0aGlzLm9yaWdpbiArIHRoaXMucGF0aDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2lmcmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogT25jZSB0aGUgaWZyYW1lIGlzIGxvYWRlZCwgc3RhcnQgcHJvY2Vzc2luZyByZXF1ZXN0c1xuICAgKiBAbWV0aG9kIF9wcm9jZXNzVGFza3NcbiAgICovXG4gIF9wcm9jZXNzVGFza3MoKSB7XG4gICAgZm9yIChsZXQgaWQgaW4gdGhpcy5fdGFza3MpIHtcbiAgICAgIHRoaXMuX3Rhc2tzW2lkXS50aW1lb3V0ID0gdGhpcy5fc2VuZFJlcXVlc3QodGhpcy5fdGFza3NbaWRdLnBheWxvYWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHBheWxvYWRcbiAgICogQG1ldGhvZCBfc2VuZFJlcXVlc3RcbiAgICovXG4gIF9zZW5kUmVxdWVzdChwYXlsb2FkKSB7XG4gICAgdmFyIGVyciA9ICcnO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9pZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeShwYXlsb2FkKSwgdGhpcy5vcmlnaW4pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVyciA9IGUubWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3Rhc2tzW3BheWxvYWQuaWRdKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gIWVyciA/XG4gICAgICAgICAgYHVuaGFuZGxlZCByZXF1ZXN0IGFmdGVyICR7dGhpcy5fdGltZW91dH1tcyB3aXRoIGlkOiAke3BheWxvYWQuaWR9YCA6XG4gICAgICAgICAgZXJyO1xuICAgICAgICB0aGlzLl9yZXNvbHZlVGFzayh7XG4gICAgICAgICAgaWQ6IHBheWxvYWQuaWQsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgdGhpcy5fdGltZW91dCk7XG4gIH1cblxuICBfcmVjZWl2ZU1lc3NhZ2UoZSkge1xuICAgIHZhciBldmVudERhdGEgPSB7fTtcbiAgICBpZiAodHlwZW9mIGUuZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGV2ZW50RGF0YSA9IGUuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZXZlbnREYXRhID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBldmVudERhdGEgPSB7fTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50RGF0YS5sb2FkZWQpIHtcbiAgICAgIHRoaXMuX2lmcmFtZUxvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLl9pZnJhbWUuZGF0YXNldC5sb2FkZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NUYXNrcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZVRhc2soZXZlbnREYXRhKTtcbiAgICB9XG4gIH1cblxuICBfcmVzb2x2ZVRhc2soZXZlbnREYXRhKSB7XG4gICAgaWYgKHRoaXMuX3Rhc2tzW2V2ZW50RGF0YS5pZF0pIHtcbiAgICAgIGlmIChldmVudERhdGEuZGF0YSAmJiBldmVudERhdGEuZGF0YS5lcnJvcikge1xuICAgICAgICB0aGlzLl90YXNrc1tldmVudERhdGEuaWRdLnJlamVjdChldmVudERhdGEuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90YXNrc1tldmVudERhdGEuaWRdLnJlc29sdmUoZXZlbnREYXRhLmRhdGEpO1xuICAgICAgfVxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Rhc2tzW2V2ZW50RGF0YS5pZF0udGltZW91dCk7XG4gICAgICBkZWxldGUgdGhpcy5fdGFza3NbZXZlbnREYXRhLmlkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdW5oYW5kbGVkTWVzc2FnZXMucHVzaChldmVudERhdGEpO1xuICAgICAgaWYgKHRoaXMuX3VuaGFuZGxlZE1lc3NhZ2VzLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgIHRoaXMuX3VuaGFuZGxlZE1lc3NhZ2VzLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbWV0aG9kIGVudW1zOiBnZXQsIHNldCwgcmVtb3ZlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZGF0YVxuICAgKiAgZ2V0L3JlbW92ZSAtIHRoZSBzZWFyY2ggcXVlcnlcbiAgICogIHNldCAtIGtleTp2YWx1ZSBwYWlyIHRvIHNldCBpbiB0aGUgZGF0YWJhc2VcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICogQG1ldGhvZCByZXF1ZXN0XG4gICAqIEBleGFtcGxlXG4gICAqIGNsaWVudC5yZXF1ZXN0KCdnZXQnLCAnZm9vJylcbiAgICogLnRoZW4oKHJlcykgPT4ge1xuICAgKiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAqICAgICAgLy8gPT4gJ2JhcidcbiAgICogfSk7XG4gICAqL1xuICByZXF1ZXN0KG1ldGhvZCwgZGF0YSwgZm9yY2UpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdmFyIHRhc2sgPSB7XG4gICAgICAgIHJlc29sdmUsXG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGlkOiB1bmlxdWVJRCgpLFxuICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICBkYXRhXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLl90YXNrc1t0YXNrLnBheWxvYWQuaWRdID0gdGFzaztcbiAgICAgIGlmICh0aGlzLl9pZnJhbWVMb2FkZWQgfHwgISFmb3JjZSkge1xuICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdCh0YXNrLnBheWxvYWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0KC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdnZXQnLCAuLi5hcmdzKTtcbiAgfVxuICBzZXQoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ3NldCcsIC4uLmFyZ3MpO1xuICB9XG4gIHJlbW92ZSguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgncmVtb3ZlJywgLi4uYXJncyk7XG4gIH1cbn1cbiJdfQ==