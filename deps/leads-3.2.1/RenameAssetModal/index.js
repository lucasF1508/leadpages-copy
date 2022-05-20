'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./RenameAssetModal.production.min.js');
} else {
  module.exports = require('./RenameAssetModal.development.js');
}
      