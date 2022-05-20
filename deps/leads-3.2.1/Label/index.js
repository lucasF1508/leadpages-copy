'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Label.production.min.js');
} else {
  module.exports = require('./Label.development.js');
}
      