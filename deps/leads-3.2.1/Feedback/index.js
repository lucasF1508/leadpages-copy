'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Feedback.production.min.js');
} else {
  module.exports = require('./Feedback.development.js');
}
      