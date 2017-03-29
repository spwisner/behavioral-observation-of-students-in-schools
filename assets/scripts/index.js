'use strict';

require('./example');
require('./report/mychart.js');

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events.js');
const observationEvents = require('./observations/events.js');
const sessionEvents = require('./sessions/events.js');
const studentsEvents = require('./students/events.js');
const chartEvents = require('./report/events.js');
const dashboardEvents = require('./dashboard/events.js');
// const audio = require('./observations/audio.js');


$(() => {
  authEvents.addHandlers();
  observationEvents.addHandlers();
  sessionEvents.addHandlers();
  studentsEvents.addHandlers();
  chartEvents.addHandlers();
  dashboardEvents.addHandlers();
  // audio.playAudio();
  // audio.pauseAudio();
});

$(() => {
  setAPIOrigin(location, config);
});
