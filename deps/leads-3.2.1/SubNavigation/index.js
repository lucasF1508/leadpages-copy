'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./SubNavigation.production.min.js');
} else {
  module.exports = require('./SubNavigation.development.js');
}
      