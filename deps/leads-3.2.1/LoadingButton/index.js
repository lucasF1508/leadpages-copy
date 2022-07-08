'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./LoadingButton.production.min.js');
} else {
  module.exports = require('./LoadingButton.development.js');
}
      