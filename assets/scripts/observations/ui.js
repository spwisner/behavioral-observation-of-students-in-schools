'use strict';

// const store = require('../store');
// const eventsObservations = require('./events');
// const apiObservations = require('./api');
// const displayObservationsTemplate = require('../templates/get-obs.handlebars');
// const displayLastSubmit = require('../templates/observation/last-submission.handlebars');
const displayLastSubmit = require('../templates/observation/revised-last-submission.handlebars');
const store = require('../store');
const chart = require('../report/mychart');
const apiObservations = require('./api');
// const displayObsForm = require('../templates/observation/new-obs-form.handlebars');
const displayObsForm = require('../templates/observation/revised-new-obs-form.handlebars');
// Observation UI

const getObservationSuccess = (data) => {
  $(".notification-container").children().text("");
  console.log('get observation success');
  console.log(data);
  // chart.getColumnSums(data);
  // $(".obs-summary-table").remove();
  // let showObservations = displayObservationsTemplate({
  //   observations: data.observations
  // });
  // $('.display-observation-container').append(showObservations);
};

const getLastObservationFailure = (data) => {
  $(".notification-container").children().text("");
  console.log("update last entry failure");
  console.log(data);
};


const getObservationFailure = (data) => {
  $(".notification-container").children().text("");
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
  $(".notification-container").children().text("");
  data.observation.current_student_id = store.currentStudentId;
  data.observation.current_session_id = store.currentSessionId;
  $('.last-submission-table').remove();
  let showLastSubmission = displayLastSubmit({
    observation: data.observation
  });
  $('.last-submission-container').append(showLastSubmission);

  // Testing for Blank and False Values

  $(".cancel-last-submission-edit").hide();
  $("#submit-last-edit-btn").hide();
  $(".edit-last-submission").show();

  let aetValue = isDataSubmissionBlank(data.observation.aet);
  let petValue = isDataSubmissionBlank(data.observation.pet);
  let oftvValue = isDataSubmissionBlank(data.observation.oft_v);
  let oftmValue = isDataSubmissionBlank(data.observation.oft_m);
  let oftpValue = isDataSubmissionBlank(data.observation.oft_p);

  if ( aetValue && petValue && oftvValue && oftmValue && oftpValue) {
    $(".no-submission-warning").text("Warning: Empty Submission");
    $(".last-submission-row").addClass("redbc");
  } else {
    $(".no-submission-warning").text("");
    $(".last-submission-row").removeClass("redbc");
  }
};

const showObservationFailure = (data) => {
  $(".notification-container").children().text("");
  console.log('show observation failure');
  console.log(data);
};

const getLastObservationSuccess = (data) => {
  $(".notification-container").children().text("");
  console.log("successfully updated last entry");
  console.log(data);
  console.log(data.observation.id);
  let obsId = data.observation.id;
  apiObservations.showLastObservation(obsId)
    .done(showObservationSuccess)
    .fail(showObservationFailure);
};

const getPastObsNumSuccess = function() {
  $(".notification-container").children().text("");
  console.log("onGetPastObsNumSuccess Success");
  // events.onCreateObservation();
};

const getPastObsNumFailure = function() {
  $(".notification-container").children().text("");
  console.log("getPastObsNumFailure Failure");
};

const createObservationSuccess = (response) => {
  $(".notification-container").children().text("");
   console.log(response);
   console.log('create observation success');
   $("#new-observation-form .field-checkbox").prop("checked", false);
   $("#create-obs-comment").val('');
   $("#interval-submitted-successfully").fadeIn(500).delay(1000).fadeOut(500);

   if (store.studentToObserve % 5 === 0) {
     $("#student-observed").text("Random Peer");
     $("#student-observed").addClass("random-peer");
   } else {
     $("#student-observed").text("Target Student");
     $("#student-observed").addClass("target-student");
   }

};

const createObservationFailure = (data) => {
  $(".notification-container").children().text("");
  $(".failure-alert").text("Error: Observation Not Created.")
  console.log('create observation failure');
  console.log(data);
};

const onCreateObservationNumsFailure = function() {
  $(".notification-container").children().text("");
  console.log('onCreateObservationNumsFailure failure');
};

const deleteObservationSuccess = (data) => {
  $(".notification-container").children().text("");
  console.log('delete observation success');
  console.log(data);
};

const deleteObservationFailure = (data) => {
  $(".notification-container").children().text("");
  console.log('delete observation failure');
  console.log(data);
};

const updateObservationSuccess = (data) => {
  $(".notification-container").children().text("");
  console.log('update observation success');
  $(".cancel-last-submission-edit").hide();
  $("#submit-last-edit-btn").hide();
  $(".edit-last-submission").show();
  console.log(data);
};

const updateObservationFailure = (data) => {
  $(".notification-container").children().text("");
  console.log('update observation failure');
  console.log(data);
};

const generateObservationForm = () => {
  $(".notification-container").children().text("");
  $(".content").children().remove();
  let generateObsForm = displayObsForm();
  $(".content").append(generateObsForm);
  store.observationIdNum = 0;
  $("#new-observation-form").show();
  $("#interval-total").text(store.currentNumofIntervals);
  $("#student-observed").html('<span id="target-student">Target Student</span>');
  $(".current").attr("data-current-session-id", store.currentSessionId);
  $(".current").attr("data-current-student-id", store.currentStudentId);
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
  generateObservationForm,
};
