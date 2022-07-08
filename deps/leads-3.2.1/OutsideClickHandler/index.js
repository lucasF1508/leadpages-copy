'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./OutsideClickHandler.production.min.js');
} else {
  module.exports = require('./OutsideClickHandler.development.js');
}
      