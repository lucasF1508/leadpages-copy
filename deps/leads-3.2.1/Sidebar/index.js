'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Sidebar.production.min.js');
} else {
  module.exports = require('./Sidebar.development.js');
}
      