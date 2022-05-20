'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./DeleteAssetModal.production.min.js');
} else {
  module.exports = require('./DeleteAssetModal.development.js');
}
      