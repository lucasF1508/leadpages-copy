import { useMemo } from 'react';
import { Config } from './config';

/**
 * Grabs a single, or list of, values from "@lp/config"
 *
 * @param keys string|Array<string>
 * @returns null|any|Array<any> The values for the key specified
 */
export default function useConfig(keys: string | string[]): any {
  return useMemo(
    () => {
      const config = Config.getInstance();
      const configKeys = Array.isArray(keys) ? keys : [keys];
      const configValues = configKeys.map(key => config.get(key));

      if (configKeys.length === 1) {
        return configValues[0];
      }

      return configValues;
    },

    // Note: this is a bit dangerous as our linter can't tell if
    // we are using the correct dependencies.  This is vital to reduce
    // rerenders with list config values.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Array.isArray(keys) ? keys : [keys],
  );
}
