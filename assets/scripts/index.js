'use strict';

require('./example');
require('./observations/mychart.js');

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events.js');
const observationEvents = require('./observations/events.js');
const sessionEvents = require('./sessions/events.js');
const studentsEvents = require('./students/events.js');


$(() => {
  authEvents.addHandlers();
  observationEvents.addHandlers();
  sessionEvents.addHandlers();
  studentsEvents.addHandlers();
});

$(() => {
  setAPIOrigin(location, config);
});
