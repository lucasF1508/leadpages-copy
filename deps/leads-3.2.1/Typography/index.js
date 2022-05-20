'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Typography.production.min.js');
} else {
  module.exports = require('./Typography.development.js');
}
      