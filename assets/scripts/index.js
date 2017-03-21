'use strict';

require('./example');
require('./chart/mychart.js');

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events.js');
const observationEvents = require('./observations/events.js');
const sessionEvents = require('./sessions/events.js');
const studentsEvents = require('./students/events.js');
const chartEvents = require('./chart/events.js');


$(() => {
  authEvents.addHandlers();
  observationEvents.addHandlers();
  sessionEvents.addHandlers();
  studentsEvents.addHandlers();
  chartEvents.addHandlers();
});

$(() => {
  setAPIOrigin(location, config);
});
