'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./RadioButton.production.min.js');
} else {
  module.exports = require('./RadioButton.development.js');
}
      