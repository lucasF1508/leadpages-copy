import { Promise } from 'es6-promise';
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

export default function request(options={}) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    /* istanbul ignore next */
    xhr.ontimeout = () => { reject(xhr); };
    xhr.onreadystatechange = () => {
      if (xhr.readyState != 4) { return; }

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
      for (let key in options.headers) {
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
  for (let key in obj) {
    params.push(`${key}=${obj[key]}`);
  }

  return `?${params.join('&')}`;
}
