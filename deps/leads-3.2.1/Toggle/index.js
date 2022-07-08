'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Toggle.production.min.js');
} else {
  module.exports = require('./Toggle.development.js');
}
      