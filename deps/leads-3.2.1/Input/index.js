'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Input.production.min.js');
} else {
  module.exports = require('./Input.development.js');
}
      