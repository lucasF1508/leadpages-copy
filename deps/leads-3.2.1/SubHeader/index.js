'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./SubHeader.production.min.js');
} else {
  module.exports = require('./SubHeader.development.js');
}
      