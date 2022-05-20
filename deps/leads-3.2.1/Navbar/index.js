'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Navbar.production.min.js');
} else {
  module.exports = require('./Navbar.development.js');
}
      