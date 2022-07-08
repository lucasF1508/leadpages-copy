'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Theme.production.min.js');
} else {
  module.exports = require('./Theme.development.js');
}
      