'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Typeahead.production.min.js');
} else {
  module.exports = require('./Typeahead.development.js');
}
      