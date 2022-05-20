'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = request;

var _es6Promise = require('es6-promise');

/**
 * Very light weight wrapper to XMLHtppRequest.
 * Uses a promise interface and rejects when things go bad, resolves otherwise
 * Override this function to fit with application needs
 *
 * @function request
 * @param {Object}  options={}
 *  - {String}      url     The url for the request
 *  - {String}      method  GET, POST, PUT, DELETE
 *  - {Object}      headers? key value pairs for the header eg: { Content-Type: 'application/json' }
 *  - {Object}      body?    Data for a PUT or POST request
 *  - {Object}      params? Query paramaters for the request
 * @return {Promise<*|XmlHttpRequest>}    resolve and reject given the xhr instance
 * @example
 * import request from 'request'
 * request({
 *   url: 'foo.com',
 *   method: 'GET'
 * }).then(({ responseString }) => {
 *   console.log(JSON.parse(responseString));
 * });
 */

function request() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new _es6Promise.Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    /* istanbul ignore next */
    xhr.ontimeout = function () {
      reject(xhr);
    };
    xhr.onreadystatechange = function () {
      if (xhr.readyState != 4) {
        return;
      }

      if (xhr.status < 400 && xhr.status > 0) {
        var response;
        try {
          response = JSON.parse(xhr.response, xhr);
        } catch (err) {
          /* istanbul ignore next */
          response = xhr.response;
        }
        return resolve(response, xhr);
      }
      return reject(xhr);
    };
    var url = options.url;
    /* istanbul ignore if */
    if (options.params) {
      url = url + makeParams(options.params);
    }

    xhr.open(options.method, url, true);
    if (options.headers) {
      for (var key in options.headers) {
        xhr.setRequestHeader(key, options.headers[key]);
      }
    }

    /* istanbul ignore else */
    if (typeof options.body !== 'string') {
      /* istanbul ignore else */
      if (!(options.body instanceof FormData)) {
        options.body = JSON.stringify(options.body);
      }
    }
    if (options.body) {
      xhr.send(options.body);
    } else {
      xhr.send();
    }
  });
}

/* istanbul ignore next */
function makeParams(obj) {
  var params = [];
  for (var key in obj) {
    params.push(key + '=' + obj[key]);
  }

  return '?' + params.join('&');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsicmVxdWVzdCIsIm9wdGlvbnMiLCJyZXNvbHZlIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJlcnIiLCJ1cmwiLCJwYXJhbXMiLCJtYWtlUGFyYW1zIiwib3BlbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJrZXkiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiYm9keSIsIkZvcm1EYXRhIiwic3RyaW5naWZ5Iiwic2VuZCIsIm9iaiIsInB1c2giLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7OztrQkF3QndCQSxPOztBQXhCeEI7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJlLFNBQVNBLE9BQVQsR0FBNkI7QUFBQSxNQUFaQyxPQUFZLHVFQUFKLEVBQUk7O0FBQzFDLFNBQU8sd0JBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLFFBQUlDLE1BQU0sSUFBSUMsY0FBSixFQUFWO0FBQ0E7QUFDQUQsUUFBSUUsU0FBSixHQUFnQixZQUFNO0FBQUVILGFBQU9DLEdBQVA7QUFBYyxLQUF0QztBQUNBQSxRQUFJRyxrQkFBSixHQUF5QixZQUFNO0FBQzdCLFVBQUlILElBQUlJLFVBQUosSUFBa0IsQ0FBdEIsRUFBeUI7QUFBRTtBQUFTOztBQUVwQyxVQUFJSixJQUFJSyxNQUFKLEdBQWEsR0FBYixJQUFvQkwsSUFBSUssTUFBSixHQUFhLENBQXJDLEVBQXdDO0FBQ3RDLFlBQUlDLFFBQUo7QUFDQSxZQUFJO0FBQ0ZBLHFCQUFXQyxLQUFLQyxLQUFMLENBQVdSLElBQUlNLFFBQWYsRUFBeUJOLEdBQXpCLENBQVg7QUFDRCxTQUZELENBRUUsT0FBT1MsR0FBUCxFQUFZO0FBQ1o7QUFDQUgscUJBQVdOLElBQUlNLFFBQWY7QUFDRDtBQUNELGVBQU9SLFFBQVFRLFFBQVIsRUFBa0JOLEdBQWxCLENBQVA7QUFDRDtBQUNELGFBQU9ELE9BQU9DLEdBQVAsQ0FBUDtBQUNELEtBZEQ7QUFlQSxRQUFJVSxNQUFNYixRQUFRYSxHQUFsQjtBQUNBO0FBQ0EsUUFBSWIsUUFBUWMsTUFBWixFQUFvQjtBQUNsQkQsWUFBTUEsTUFBTUUsV0FBV2YsUUFBUWMsTUFBbkIsQ0FBWjtBQUNEOztBQUVEWCxRQUFJYSxJQUFKLENBQVNoQixRQUFRaUIsTUFBakIsRUFBeUJKLEdBQXpCLEVBQThCLElBQTlCO0FBQ0EsUUFBSWIsUUFBUWtCLE9BQVosRUFBcUI7QUFDbkIsV0FBSyxJQUFJQyxHQUFULElBQWdCbkIsUUFBUWtCLE9BQXhCLEVBQWlDO0FBQy9CZixZQUFJaUIsZ0JBQUosQ0FBcUJELEdBQXJCLEVBQTBCbkIsUUFBUWtCLE9BQVIsQ0FBZ0JDLEdBQWhCLENBQTFCO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBLFFBQUksT0FBT25CLFFBQVFxQixJQUFmLEtBQXdCLFFBQTVCLEVBQXNDO0FBQ3BDO0FBQ0EsVUFBSSxFQUFFckIsUUFBUXFCLElBQVIsWUFBd0JDLFFBQTFCLENBQUosRUFBeUM7QUFDdkN0QixnQkFBUXFCLElBQVIsR0FBZVgsS0FBS2EsU0FBTCxDQUFldkIsUUFBUXFCLElBQXZCLENBQWY7QUFDRDtBQUNGO0FBQ0QsUUFBSXJCLFFBQVFxQixJQUFaLEVBQWtCO0FBQ2hCbEIsVUFBSXFCLElBQUosQ0FBU3hCLFFBQVFxQixJQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMbEIsVUFBSXFCLElBQUo7QUFDRDtBQUNGLEdBNUNNLENBQVA7QUE2Q0Q7O0FBRUQ7QUFDQSxTQUFTVCxVQUFULENBQW9CVSxHQUFwQixFQUF5QjtBQUN2QixNQUFJWCxTQUFTLEVBQWI7QUFDQSxPQUFLLElBQUlLLEdBQVQsSUFBZ0JNLEdBQWhCLEVBQXFCO0FBQ25CWCxXQUFPWSxJQUFQLENBQWVQLEdBQWYsU0FBc0JNLElBQUlOLEdBQUosQ0FBdEI7QUFDRDs7QUFFRCxlQUFXTCxPQUFPYSxJQUFQLENBQVksR0FBWixDQUFYO0FBQ0QiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb21pc2UgfSBmcm9tICdlczYtcHJvbWlzZSc7XG4vKipcbiAqIFZlcnkgbGlnaHQgd2VpZ2h0IHdyYXBwZXIgdG8gWE1MSHRwcFJlcXVlc3QuXG4gKiBVc2VzIGEgcHJvbWlzZSBpbnRlcmZhY2UgYW5kIHJlamVjdHMgd2hlbiB0aGluZ3MgZ28gYmFkLCByZXNvbHZlcyBvdGhlcndpc2VcbiAqIE92ZXJyaWRlIHRoaXMgZnVuY3Rpb24gdG8gZml0IHdpdGggYXBwbGljYXRpb24gbmVlZHNcbiAqXG4gKiBAZnVuY3Rpb24gcmVxdWVzdFxuICogQHBhcmFtIHtPYmplY3R9ICBvcHRpb25zPXt9XG4gKiAgLSB7U3RyaW5nfSAgICAgIHVybCAgICAgVGhlIHVybCBmb3IgdGhlIHJlcXVlc3RcbiAqICAtIHtTdHJpbmd9ICAgICAgbWV0aG9kICBHRVQsIFBPU1QsIFBVVCwgREVMRVRFXG4gKiAgLSB7T2JqZWN0fSAgICAgIGhlYWRlcnM/IGtleSB2YWx1ZSBwYWlycyBmb3IgdGhlIGhlYWRlciBlZzogeyBDb250ZW50LVR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gKiAgLSB7T2JqZWN0fSAgICAgIGJvZHk/ICAgIERhdGEgZm9yIGEgUFVUIG9yIFBPU1QgcmVxdWVzdFxuICogIC0ge09iamVjdH0gICAgICBwYXJhbXM/IFF1ZXJ5IHBhcmFtYXRlcnMgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJuIHtQcm9taXNlPCp8WG1sSHR0cFJlcXVlc3Q+fSAgICByZXNvbHZlIGFuZCByZWplY3QgZ2l2ZW4gdGhlIHhociBpbnN0YW5jZVxuICogQGV4YW1wbGVcbiAqIGltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QnXG4gKiByZXF1ZXN0KHtcbiAqICAgdXJsOiAnZm9vLmNvbScsXG4gKiAgIG1ldGhvZDogJ0dFVCdcbiAqIH0pLnRoZW4oKHsgcmVzcG9uc2VTdHJpbmcgfSkgPT4ge1xuICogICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHJlc3BvbnNlU3RyaW5nKSk7XG4gKiB9KTtcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnM9e30pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICB4aHIub250aW1lb3V0ID0gKCkgPT4geyByZWplY3QoeGhyKTsgfTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9IDQpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGlmICh4aHIuc3RhdHVzIDwgNDAwICYmIHhoci5zdGF0dXMgPiAwKSB7XG4gICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlLCB4aHIpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlLCB4aHIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlamVjdCh4aHIpO1xuICAgIH07XG4gICAgdmFyIHVybCA9IG9wdGlvbnMudXJsO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgdXJsID0gdXJsICsgbWFrZVBhcmFtcyhvcHRpb25zLnBhcmFtcyk7XG4gICAgfVxuXG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgZm9yIChsZXQga2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5ib2R5ICE9PSAnc3RyaW5nJykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmICghKG9wdGlvbnMuYm9keSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmJvZHkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5ib2R5KSB7XG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB4aHIuc2VuZCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBtYWtlUGFyYW1zKG9iaikge1xuICB2YXIgcGFyYW1zID0gW107XG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICBwYXJhbXMucHVzaChgJHtrZXl9PSR7b2JqW2tleV19YCk7XG4gIH1cblxuICByZXR1cm4gYD8ke3BhcmFtcy5qb2luKCcmJyl9YDtcbn1cbiJdfQ==