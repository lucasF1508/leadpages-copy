'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./LoadingState.production.min.js');
} else {
  module.exports = require('./LoadingState.development.js');
}
      