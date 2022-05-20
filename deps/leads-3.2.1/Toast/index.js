'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Toast.production.min.js');
} else {
  module.exports = require('./Toast.development.js');
}
      