'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Button.production.min.js');
} else {
  module.exports = require('./Button.development.js');
}
      