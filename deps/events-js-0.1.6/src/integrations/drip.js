function Drip() {
  this.enabled = false;
}

Drip.prototype.checkEnabled = function () {
  this.enabled = !!(window && window._dcq && window._dcq.push);
  return this.enabled;
};

Drip.prototype.push = function (arr) {
  return window._dcq.push(arr);
};

Drip.prototype.track = function (eventName, properties) {
  this.push(['track', eventName, formatObject(properties)]);
};

Drip.prototype.identify = function (userId, traits, options) {
  traits = traits || {};
  // Email is required for Drip's identify.
  if (!traits.email) {
    return;
  }

  if (options) {
    if (options.campaignId) {
      this.push([
        'subscribe',
        {
          campaign_id: options.campaignId,
          fields: traits,
        },
      ]);
    }
  }

  this.push([
    'identify',
    {
      email: traits.email,
      user_id: userId,
    },
  ]);
};

function formatObject(obj) {
  if (!obj) {
    return;
  }
  const kv = {};
  for (const key of Object.keys(obj)) {
    const formattedKey = key.replace(/\s/g, '_');
    kv[formattedKey] = obj[key];
  }
  return kv;
}

export default Drip;
