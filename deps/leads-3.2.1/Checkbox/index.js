'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Checkbox.production.min.js');
} else {
  module.exports = require('./Checkbox.development.js');
}
      