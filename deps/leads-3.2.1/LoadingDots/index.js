'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./LoadingDots.production.min.js');
} else {
  module.exports = require('./LoadingDots.development.js');
}
      