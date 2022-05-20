'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./DivOrSpan.production.min.js');
} else {
  module.exports = require('./DivOrSpan.development.js');
}
      