'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./CollapseWrapper.production.min.js');
} else {
  module.exports = require('./CollapseWrapper.development.js');
}
      