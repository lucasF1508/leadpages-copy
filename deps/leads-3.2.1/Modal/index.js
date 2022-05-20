'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Modal.production.min.js');
} else {
  module.exports = require('./Modal.development.js');
}
      