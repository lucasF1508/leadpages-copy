'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./CardListItem.production.min.js');
} else {
  module.exports = require('./CardListItem.development.js');
}
      