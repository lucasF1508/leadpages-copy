import Emitter, { defaultConfig, integrations } from '..';

jest.useFakeTimers();

describe('Emitter', () => {
  let instance;

  beforeEach(() => {
    for (const integrationName of Object.keys(integrations)) {
      const enabled = true;
      integrations[integrationName] = {
        enabled,
        checkEnabled: jest.fn().mockReturnValue(enabled),
        track: jest.fn(),
        identify: jest.fn(),
      };
    }
    // Mixpanel only functions
    integrations.mixpanel.reset = jest.fn();

    instance = new Emitter();
  });

  it('should return an instance of the emitter', () => {
    const currentInstance = Emitter.getInstance();
    expect(currentInstance).toBeInstanceOf(Emitter);
    expect(currentInstance).toStrictEqual(instance);
    expect(currentInstance.integrations).toBeDefined();
  });

  describe('constructor', () => {
    it('should build an index of enabled integrations', () => {
      expect(Object.keys(instance.integrations)).toEqual(['drip', 'mixpanel', 'gtm']);
    });
  });

  describe('setConfig', () => {
    it('should use defaultConfig if none provided', () => {
      instance.setConfig();
      expect(instance.config).toStrictEqual(defaultConfig);
    });

    it('should set a config', () => {
      const config = {
        integrations: {
          drip: {
            includeByDefault: true,
          },
        },
      };
      expect(config).not.toEqual(defaultConfig);
      instance.setConfig(config);
      expect(instance.config).toStrictEqual(config);
    });
  });

  describe('track', () => {
    it('should call the track function for each enabled integration', () => {
      const eventName = 'Page view';
      const properties = { url: 'https://www.leadpages.com' };
      instance.track(eventName, properties);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      jest.runAllTimers();
      expect(integrations.mixpanel.checkEnabled).toHaveBeenCalled();
      expect(integrations.mixpanel.track).toHaveBeenCalledWith(eventName, properties, undefined);
      expect(integrations.drip.track).not.toHaveBeenCalled();
      expect(integrations.gtm.track).not.toHaveBeenCalled();
    });

    it('should call the track function for integrations that are explicitly enabled', () => {
      const eventName = 'Page view';
      const url = 'https://www.leadpages.com';
      // With properties explicitly enabling an integration
      const properties = { url };
      const options = { integrations: { drip: true, gtm: true } };
      // I expect track() to have been called without forwarding the reserved key
      instance.track(eventName, properties, options);
      jest.runAllTimers();
      expect(integrations.mixpanel.track).toHaveBeenCalledWith(eventName, properties, options);
      expect(integrations.drip.track).toHaveBeenCalledWith(eventName, properties, options);
      expect(integrations.gtm.track).toHaveBeenCalledWith(eventName, properties, options);
    });
  });

  describe('identify', () => {
    it('should call the identify function for each enabled integration', () => {
      const userId = 'u1d';
      const properties = {
        email: 'test@leadpages.com',
      };
      instance.identify(userId, properties);
      jest.runAllTimers();
      expect(integrations.mixpanel.identify).toHaveBeenCalledWith(userId, properties, undefined);
      expect(integrations.drip.identify).not.toHaveBeenCalled();
      expect(integrations.gtm.identify).not.toHaveBeenCalled();
    });
  });

  describe('trackLinks', () => {
    it('should call the trackLinks function for each enabled integration where the method exists', () => {
      integrations.mixpanel.trackLinks = jest.fn();

      const selector = '#fake-id';
      const eventName = 'fakeEvent';
      const properties = {
        source: 'test',
      };
      instance.trackLinks(selector, eventName, properties);
      jest.runAllTimers();

      expect(integrations.mixpanel.trackLinks).toHaveBeenCalledWith(
        selector,
        eventName,
        properties,
        undefined,
      );
    });
  });

  describe('reset', () => {
    it('should call the reset function for each enabled integration', () => {
      instance.reset();
      jest.runAllTimers();

      expect(integrations.mixpanel.reset).toHaveBeenCalled();
    });
  });
});
