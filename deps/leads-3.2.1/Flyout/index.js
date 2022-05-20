'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Flyout.production.min.js');
} else {
  module.exports = require('./Flyout.development.js');
}
      