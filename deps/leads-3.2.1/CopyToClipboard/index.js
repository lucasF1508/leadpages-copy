'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./CopyToClipboard.production.min.js');
} else {
  module.exports = require('./CopyToClipboard.development.js');
}
      