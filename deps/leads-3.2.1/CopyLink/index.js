'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./CopyLink.production.min.js');
} else {
  module.exports = require('./CopyLink.development.js');
}
      