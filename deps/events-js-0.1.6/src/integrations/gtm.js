function Gtm() {
  this.enabled = false;
}

Gtm.prototype.checkEnabled = function () {
  this.enabled = !!(window && window.dataLayer);
  return this.enabled;
};

Gtm.prototype.push = function (obj) {
  return window.dataLayer.push(obj);
};

Gtm.prototype.track = function (eventName, properties) {
  properties = properties || {};
  const propertiesClone = {};
  for (const key in properties) {
    propertiesClone[key] = properties[key];
  }
  propertiesClone.event = eventName;
  this.push(propertiesClone);
};

export default Gtm;
