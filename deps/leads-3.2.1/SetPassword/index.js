'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./SetPassword.production.min.js');
} else {
  module.exports = require('./SetPassword.development.js');
}
      