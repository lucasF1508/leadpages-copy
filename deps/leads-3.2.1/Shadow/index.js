'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Shadow.production.min.js');
} else {
  module.exports = require('./Shadow.development.js');
}
      