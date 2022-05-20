'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Tag.production.min.js');
} else {
  module.exports = require('./Tag.development.js');
}
      