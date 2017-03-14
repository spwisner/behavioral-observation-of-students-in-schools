'use strict';

require('./example');
require('./observations/mychart.js');

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events.js');
const observationEvents = require('./observations/events.js');
const settingEvents = require('./settings/events.js');
const studentsEvents = require('./students/events.js');


$(() => {
  authEvents.addHandlers();
  observationEvents.addHandlers();
  settingEvents.addHandlers();
  studentsEvents.addHandlers();
});

$(() => {
  setAPIOrigin(location, config);
});
