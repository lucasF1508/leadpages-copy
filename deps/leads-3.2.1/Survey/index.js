'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Survey.production.min.js');
} else {
  module.exports = require('./Survey.development.js');
}
      