'use strict';

// const store = require('../store');
// const eventsObservations = require('./events');
// const apiObservations = require('./api');
const displayObservationsTemplate = require('../templates/get-obs.handlebars');
const displayLastSubmit = require('../templates/last-submission.handlebars');
const store = require('../store');
const chart = require('../chart/mychart');
const apiObservations = require('./api');
// Observation UI

const getObservationSuccess = (data) => {
  // console.log('get observation success');
  chart.getColumnSums(data);
  // console.log(store.chartData);
  $(".obs-summary-table").remove();
  let showObservations = displayObservationsTemplate({
    observations: data.observations
  });
  $('.display-observation-container').append(showObservations);
};

const getLastObservationFailure = (data) => {
  console.log("update last entry failure");
  console.log(data);
};


const getObservationFailure = (data) => {
  console.log('get observation failure');
  console.log(data);
};

const isDataSubmissionBlank = function(dataValue) {
  if (dataValue === false) {
    return true;
  } else {
    return false;
  }
};

const showObservationSuccess = (data) => {

  $('.last-submission-table').remove();
  let showLastSubmission = displayLastSubmit({
    observation: data.observation
  });
  $('.last-submission-container').append(showLastSubmission);

  // Testing for Blank and False Values

  let aetValue = isDataSubmissionBlank(data.observation.aet);
  let petValue = isDataSubmissionBlank(data.observation.pet);
  let oftvValue = isDataSubmissionBlank(data.observation.oft_v);
  let oftmValue = isDataSubmissionBlank(data.observation.oft_m);
  let oftpValue = isDataSubmissionBlank(data.observation.oft_p);

  if ( aetValue && petValue && oftvValue && oftmValue && oftpValue) {
    $(".no-submission-warning").text("Warning: Empty Submission");
    $(".last-submission-table").addClass("warning");
  } else {
    $(".no-submission-warning").text("");
    $(".last-submission-table").removeClass("warning");
  }
};

const showObservationFailure = (data) => {
  console.log('show observation failure');
  console.log(data);
};

const getLastObservationSuccess = (data) => {
  console.log("successfully updated last entry");
  console.log(data);
  console.log(data.observation.id);
  let obsId = data.observation.id;
  alert();
  apiObservations.showLastObservation(obsId)
    .done(showObservationSuccess)
    .fail(showObservationFailure);
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
  getLastObservationSuccess,
  getLastObservationFailure,
};
