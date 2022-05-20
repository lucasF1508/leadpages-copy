'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./SurveyFooter.production.min.js');
} else {
  module.exports = require('./SurveyFooter.development.js');
}
      