function MixPanel() {
  this.enabled = false;
}

MixPanel.prototype.checkEnabled = function () {
  this.enabled = !!(window && window.mixpanel && window.mixpanel.track);
  return this.enabled;
};

MixPanel.prototype.track = function (eventName, properties) {
  return window.mixpanel.track(eventName, properties);
};

MixPanel.prototype.trackLinks = function (selector, eventName, properties) {
  return window.mixpanel.track_links(selector, eventName, properties);
};

MixPanel.prototype.identify = function (userId) {
  return window.mixpanel.identify(userId);
};

MixPanel.prototype.reset = function () {
  return window.mixpanel.reset();
};

export default MixPanel;
