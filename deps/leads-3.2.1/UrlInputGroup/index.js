'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./UrlInputGroup.production.min.js');
} else {
  module.exports = require('./UrlInputGroup.development.js');
}
      