'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./PublishModal.production.min.js');
} else {
  module.exports = require('./PublishModal.development.js');
}
      