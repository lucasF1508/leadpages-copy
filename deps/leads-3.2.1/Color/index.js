'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Color.production.min.js');
} else {
  module.exports = require('./Color.development.js');
}
      