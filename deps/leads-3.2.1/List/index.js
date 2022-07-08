'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./List.production.min.js');
} else {
  module.exports = require('./List.development.js');
}
      