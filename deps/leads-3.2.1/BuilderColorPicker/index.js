'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./BuilderColorPicker.production.min.js');
} else {
  module.exports = require('./BuilderColorPicker.development.js');
}
      