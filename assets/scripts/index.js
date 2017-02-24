'use strict';

require('./example');
require('./auth/mychart.js');

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events.js');

$(() => {
  authEvents.addHandlers();
});

$(() => {
  setAPIOrigin(location, config);
});
