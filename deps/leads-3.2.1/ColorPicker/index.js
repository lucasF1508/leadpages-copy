'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ColorPicker.production.min.js');
} else {
  module.exports = require('./ColorPicker.development.js');
}
      