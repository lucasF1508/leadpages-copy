'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./IconButton.production.min.js');
} else {
  module.exports = require('./IconButton.development.js');
}
      