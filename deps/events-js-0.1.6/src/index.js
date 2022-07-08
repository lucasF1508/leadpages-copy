import Drip from './integrations/drip';
import MixPanel from './integrations/mixpanel';
import Gtm from './integrations/gtm';

const drip = new Drip();
const mixpanel = new MixPanel();
const gtm = new Gtm();

export const integrations = {
  drip,
  mixpanel,
  gtm,
};

export const defaultIntegrationConfig = {
  includeByDefault: true,
};

export const defaultConfig = {
  integrations: {
    drip: {
      includeByDefault: false,
    },
    mixpanel: null, // null to use defaults.
    gtm: {
      includeByDefault: false,
    },
  },
};

let instance;

function Emitter(config) {
  this.setConfig(config);
}

Emitter.prototype.setConfig = function (config) {
  this.config = config || defaultConfig;
  this.integrations = {};
  for (const integrationName of Object.keys(this.config.integrations)) {
    const integration = integrations[integrationName];
    this.integrations[integrationName] = integration;
  }
};

Emitter.prototype.caller = function (method, args, options) {
  const targetIntegrations = this.getTargetIntegrations(options);

  for (const integration of targetIntegrations) {
    setTimeout(() => {
      if (integration.checkEnabled() && integration[method]) {
        try {
          integration[method].apply(integration, args);
        } catch (e) {
          // Bury.
        }
      }
    });
  }
};

Emitter.prototype.getTargetIntegrations = function (options) {
  const eventIntegrations = (options && options.integrations) || {};
  const targetIntegrations = [];
  for (let integrationName of Object.keys(this.integrations)) {
    const integrationConfig = this.config.integrations[integrationName] || defaultIntegrationConfig;
    if (
      integrationConfig.includeByDefault === true ||
      eventIntegrations[integrationName] === true
    ) {
      targetIntegrations.push(this.integrations[integrationName]);
    }
  }
  return targetIntegrations;
};

Emitter.prototype.track = function (eventName, properties, options) {
  return this.caller('track', [eventName, properties, options], options);
};

Emitter.prototype.trackLinks = function (selector, eventName, properties, options) {
  return this.caller('trackLinks', [selector, eventName, properties, options], options);
};

Emitter.prototype.identify = function (userId, traits, options) {
  return this.caller('identify', [userId, traits, options], options);
};

Emitter.prototype.reset = function (options) {
  return this.caller('reset', [], options);
};

Emitter.getInstance = function () {
  if (!instance) {
    instance = new Emitter();
  }
  return instance;
};

export default Emitter;
