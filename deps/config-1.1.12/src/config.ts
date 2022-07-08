import _get from "lodash/get";
import _set from "lodash/set";
import _merge from "lodash/merge";

type StringMap = {
  [key: string]: any;
};

declare global {
  interface Window {
    ct: any;
  }
}

let _config: StringMap;

if (typeof window !== "undefined") {
  window.ct = window.ct || {};
  window.ct.config = window.ct.config || {};
  _config = window.ct.config;
} else {
  _config = {};
}

let instance: Config;

/**
 * Singleton used to configure all packages
 * @class
 */
export class Config {
  /**
   * Sets a new property on the _config object
   * @param key   The key to store the value at. Can use a . to lookup nested properties
   * @param value the data to be set at key
   */
  set(key: string, value: any) {
    _set(_config, key, value);
  }

  /**
   * Gets the data at the given key
   * @param key          The key where the data can be found. Can use a . to lookup nested properties
   * @param defaultValue 		 The default value to return in the case that _config[key] === undefined
   * @return The data found at _config[key] or the optional default
   */
  get(key: string, defaultValue = undefined) {
    var value = _get(_config, key);
    return value === void 0 ? defaultValue : value;
  }

  /**
   * Loads in an object to bulk set config
   * @param obj The configuration object
   */
  loadConfig(obj: any) {
    _merge(_config, obj);
  }

  /**
   * Returns an instance of the Config class that was constructed elsewhere
   * @return The Config instance
   */
  static getInstance(): Config {
    if (!instance) {
      instance = new Config();
    }

    return instance;
  }
}

export default Config;
