'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Icon.production.min.js');
} else {
  module.exports = require('./Icon.development.js');
}
      