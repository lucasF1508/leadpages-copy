declare global {
    interface Window {
        ct: any;
    }
}
/**
 * Singleton used to configure all packages
 * @class
 */
export declare class Config {
    /**
     * Sets a new property on the _config object
     * @param key   The key to store the value at. Can use a . to lookup nested properties
     * @param value the data to be set at key
     */
    set(key: string, value: any): void;
    /**
     * Gets the data at the given key
     * @param key          The key where the data can be found. Can use a . to lookup nested properties
     * @param defaultValue 		 The default value to return in the case that _config[key] === undefined
     * @return The data found at _config[key] or the optional default
     */
    get(key: string, defaultValue?: undefined): any;
    /**
     * Loads in an object to bulk set config
     * @param obj The configuration object
     */
    loadConfig(obj: any): void;
    /**
     * Returns an instance of the Config class that was constructed elsewhere
     * @return The Config instance
     */
    static getInstance(): Config;
}
export default Config;
