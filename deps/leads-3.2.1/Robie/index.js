'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Robie.production.min.js');
} else {
  module.exports = require('./Robie.development.js');
}
      