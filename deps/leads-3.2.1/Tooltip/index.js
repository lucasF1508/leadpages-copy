'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Tooltip.production.min.js');
} else {
  module.exports = require('./Tooltip.development.js');
}
      