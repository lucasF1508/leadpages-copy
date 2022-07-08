'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Indicator.production.min.js');
} else {
  module.exports = require('./Indicator.development.js');
}
      