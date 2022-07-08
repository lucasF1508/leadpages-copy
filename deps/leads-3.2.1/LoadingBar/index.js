'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./LoadingBar.production.min.js');
} else {
  module.exports = require('./LoadingBar.development.js');
}
      