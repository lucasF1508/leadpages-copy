'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./PublishOptionsModal.production.min.js');
} else {
  module.exports = require('./PublishOptionsModal.development.js');
}
      