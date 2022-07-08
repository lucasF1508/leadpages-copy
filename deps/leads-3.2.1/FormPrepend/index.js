'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./FormPrepend.production.min.js');
} else {
  module.exports = require('./FormPrepend.development.js');
}
      