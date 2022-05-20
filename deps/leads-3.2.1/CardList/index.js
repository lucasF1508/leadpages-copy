'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./CardList.production.min.js');
} else {
  module.exports = require('./CardList.development.js');
}
      