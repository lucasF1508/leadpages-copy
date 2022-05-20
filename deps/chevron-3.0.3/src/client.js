import { Promise } from 'es6-promise';
import uniqueID from './unique-id';
import parseUri from './parse-uri';

/**
* Cross Domain IFrame Client
*
* @class Client
* @constructor
*/

const timeout = 10000;

export default class Client {
  /**
   * @param  {String} origin The domain the iframe should load
   * @param  {String} path The path the iframe should load
   * The path should contain all the slashes
   */
  constructor(url, opts={}) {
    this._timeout = opts.timeout || timeout;
    this._iframeLoaded = false;
    url = parseUri(url);
    if (url.authority) {
      this.origin = `${url.protocol || 'http'}://${url.authority}`;
    } else {
      this.origin = window.location.protocol + "//" + window.location.host;
    }
    this.path = url.path || "/";
    this._tasks =  {};
    this._unhandledMessages = [];

    window.addEventListener('message', this._receiveMessage.bind(this));
    this._createIframe();
  }

  /**
   * Creates a new Iframe element and adds it to the DOM
   * ensures that the iframe is not visible
   * @method _createIframe
   */
  _createIframe() {
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
  _processTasks() {
    for (let id in this._tasks) {
      this._tasks[id].timeout = this._sendRequest(this._tasks[id].payload);
    }
  }

  /**
   * @param  {Object} payload
   * @method _sendRequest
   */
  _sendRequest(payload) {
    var err = '';
    try {
      this._iframe.contentWindow.postMessage(JSON.stringify(payload), this.origin);
    } catch (e) {
      err = e.message;
    }
    return setTimeout(() => {
      if (this._tasks[payload.id]) {
        var message = !err ?
          `unhandled request after ${this._timeout}ms with id: ${payload.id}` :
          err;
        this._resolveTask({
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

  _receiveMessage(e) {
    var eventData = {};
    if (typeof e.data === 'object') {
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

  _resolveTask(eventData) {
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
  request(method, data, force) {
    return new Promise((resolve, reject) => {
      var task = {
        resolve,
        reject,
        payload: {
          id: uniqueID(),
          method,
          data
        }
      };
      this._tasks[task.payload.id] = task;
      if (this._iframeLoaded || !!force) {
        this._sendRequest(task.payload);
      }
    });
  }

  get(...args) {
    return this.request('get', ...args);
  }
  set(...args) {
    return this.request('set', ...args);
  }
  remove(...args) {
    return this.request('remove', ...args);
  }
}
