'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Option.production.min.js');
} else {
  module.exports = require('./Option.development.js');
}
      