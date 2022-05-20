'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Drawer.production.min.js');
} else {
  module.exports = require('./Drawer.development.js');
}
      