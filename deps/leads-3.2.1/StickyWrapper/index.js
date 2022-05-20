'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./StickyWrapper.production.min.js');
} else {
  module.exports = require('./StickyWrapper.development.js');
}
      