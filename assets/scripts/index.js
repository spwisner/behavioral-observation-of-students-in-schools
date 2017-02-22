'use strict';

require('./example');


const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

<<<<<<< HEAD
const authEvents = require('./logic/events.js');


$(() => {
  authEvents.addHandlers();
});

=======
const authEvents = require('./auth/events.js');


>>>>>>> feature
$(() => {
  authEvents.addHandlers();
});

$(() => {
  setAPIOrigin(location, config);
});
