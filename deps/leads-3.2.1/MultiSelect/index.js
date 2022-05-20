'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./MultiSelect.production.min.js');
} else {
  module.exports = require('./MultiSelect.development.js');
}
      