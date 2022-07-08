import React from 'react';
import { Config } from '../config';
import { render } from '@testing-library/react';

import useConfig from '../useConfig';

// Boiler plate to test a react hook... where
// should this belong?

describe('Hooks :: useConfig', () => {
  const config = Config.getInstance();
  let value: any;
  let key: string | string[];
  let configGetSpy: jest.SpyInstance;
  let testConfig: (key: string | string[]) => void;
  let rerenderHook: (props: any) => void;

  beforeEach(() => {
    configGetSpy = jest.spyOn(config, 'get');

    const TestHook = ({ keys }: {keys: string | string[]}) => {
      value = useConfig(keys);
      return null;
    };

    rerenderHook = () => {
      // eslint-disable-next-line no-console
      console.error('NOT RENDERED FIRST');
    };

    testConfig = keys => {
      const results = render(<TestHook keys={keys} />);
      rerenderHook = props => results.rerender(<TestHook {...props} />);
    };
  });

  afterEach(() => {
    configGetSpy.mockClear();
  });

  it('should get a single value from @lp/config', () => {
    key = 'derp';
    config.set(key, 'hi there');
    testConfig(key);
    expect(value).toEqual('hi there');
  });

  it('should get an array of values from @lp/config', () => {
    key = ['derp', 'merp'];
    config.set(key[0], 'hi there');
    config.set(key[1], 'yo, my man!');
    testConfig(key);
    expect(value).toEqual(['hi there', 'yo, my man!']);
  });

  it('should memoize the results', () => {
    key = 'derp';
    config.set(key, 'hi there');

    testConfig(key);
    expect(configGetSpy.mock.calls.length).toBe(1);

    rerenderHook({ keys: key });
    expect(configGetSpy.mock.calls.length).toBe(1);

    rerenderHook({ keys: 'derp1' });
    expect(configGetSpy.mock.calls.length).toBe(2);
  });

  it('should memoize an array of values if they are the same keys', () => {
    key = ['derp', 'merp'];
    config.set(key[0], 'hi there');
    config.set(key[1], 'yo, my man!');

    testConfig(key);
    expect(configGetSpy.mock.calls.length).toBe(2);

    rerenderHook({ keys: key });
    expect(configGetSpy.mock.calls.length).toBe(2);

    rerenderHook({ keys: ['derp2', 'merp2'] });
    expect(configGetSpy.mock.calls.length).toBe(4);
  });
});
