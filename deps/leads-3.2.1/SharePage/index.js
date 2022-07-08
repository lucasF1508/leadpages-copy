'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./SharePage.production.min.js');
} else {
  module.exports = require('./SharePage.development.js');
}
      