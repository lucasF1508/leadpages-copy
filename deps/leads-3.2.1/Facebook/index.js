'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Facebook.production.min.js');
} else {
  module.exports = require('./Facebook.development.js');
}
      