'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./RatioCard.production.min.js');
} else {
  module.exports = require('./RatioCard.development.js');
}
      