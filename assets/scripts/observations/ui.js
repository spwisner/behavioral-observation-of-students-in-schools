'use strict';

// const store = require('../store');
// const eventsObservations = require('./events');
// const apiObservations = require('./api');
const displayObservationsTemplate = require('../templates/get-obs.handlebars');

// Observation UI

const getObservationSuccess = (data) => {
  console.log('get observation success');
  console.log(data);
  let showObservations = displayObservationsTemplate({
    observations: data.observations
  });
  $('.display-observation-container').empty().append(showObservations);
};

const getObservationFailure = (data) => {
  console.log('get observation failure');
  console.log(data);
};

const showObservationSuccess = (data) => {
  console.log('show observation success');
  console.log(data);
};

const showObservationFailure = (data) => {
  console.log('show observation failure');
  console.log(data);
};

const getPastObsNumSuccess = function() {
  console.log("onGetPastObsNumSuccess Success");
  // events.onCreateObservation();
};

const getPastObsNumFailure = function() {
  console.log("getPastObsNumFailure Failure");
};

const createObservationSuccess = (data) => {
  console.log('create observation success');
  console.log(data);
   $("#new-observation-form .field-checkbox").prop("checked", false);
   $("#create-obs-comment").val('');
   $("#interval-submitted-successfully").fadeIn(500).delay(1000).fadeOut(500);
};

const createObservationFailure = (data) => {
  console.log('create observation failure');
  console.log(data);
};

const onCreateObservationNumsFailure = function() {
  console.log('onCreateObservationNumsFailure failure');
};

const deleteObservationSuccess = (data) => {
  console.log('delete observation success');
  console.log(data);
};

const deleteObservationFailure = (data) => {
  console.log('delete observation failure');
  console.log(data);
};

const updateObservationSuccess = (data) => {
  console.log('update observation success');
  console.log(data);
};

const updateObservationFailure = (data) => {
  console.log('update observation failure');
  console.log(data);
};

module.exports = {
  createObservationFailure,
  getObservationSuccess,
  getObservationFailure,
  showObservationSuccess,
  showObservationFailure,
  updateObservationSuccess,
  updateObservationFailure,
  deleteObservationSuccess,
  deleteObservationFailure,
  onCreateObservationNumsFailure,
  getPastObsNumSuccess,
  getPastObsNumFailure,
  createObservationSuccess,
};
