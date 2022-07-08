'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./SlideInOutWrapper.production.min.js');
} else {
  module.exports = require('./SlideInOutWrapper.development.js');
}
      