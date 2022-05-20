'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ActionMenu.production.min.js');
} else {
  module.exports = require('./ActionMenu.development.js');
}
      