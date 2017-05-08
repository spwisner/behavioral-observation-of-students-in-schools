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

const getObservationSuccess = () => {
  $(".notification-container").children().text("");
};

const isMobileWidth = function() {
  const width = $(window).width();

  if (width < 425) {
    return true;
  } else {
    return false;
  }
};

const isBelowXs = function() {
  const width = $(window).width();
  if (width < 768) {
    return true;
  } else {
    return false;
  }
};

const getLastObservationFailure = () => {
  $(".notification-container").children().text("");
};


const getObservationFailure = () => {
  $(".notification-container").children().text("");
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
    $(".show-edit-mobile-container button").removeClass("btn-primary").addClass("btn-danger");
  } else {
    $(".no-submission-warning").text("");
    $(".last-submission-row").removeClass("redbc");
    $(".show-edit-mobile-container button").removeClass("btn-danger").addClass("btn-primary");
  }

  let submissionText = $(".no-submission-warning").text();

  if ( submissionText === "" ) {
    $(".submit-last-warning-tr").remove();
  }
};

const showObservationFailure = () => {
  $(".notification-container").children().text("");
};

const getLastObservationSuccess = (data) => {
  $(".notification-container").children().text("");
  let obsId = data.observation.id;
  apiObservations.showLastObservation(obsId)
    .done(showObservationSuccess)
    .fail(showObservationFailure);
};

const getPastObsNumSuccess = function() {
  $(".notification-container").children().text("");
  // events.onCreateObservation();
};

const getPastObsNumFailure = function() {
  $(".notification-container").children().text("");

};

const createObservationSuccess = () => {
  $(".notification-container").children().text("");
   $(".no-selected").prop("checked", true);
   $(".switch").removeClass("switch-green");
   $(".switch").addClass("switch-red");

   $("#new-observation-form .field-checkbox").prop("checked", false);
   $("#create-obs-comment").val('');
   $("#interval-submitted-successfully").fadeIn(500).delay(1000).fadeOut(500);

   if (store.studentToObserve % 5 === 0) {
     $("#student-observed").text("Random Peer");
     $("#student-observed").removeClass("target-student");
     $("#student-observed").addClass("random-peer");
     $("#new-observation-form").css("background-color", "#ffc04c");
   } else {
     $("#student-observed").text("Target Student");
     $("#student-observed").removeClass("random-peer");
     $("#student-observed").addClass("target-student");
     $("#new-observation-form").css("background-color", "#ffffff");
   }

   let isOver = store.isOver;

   if (isOver === true) {
     $('#end-session-generate-report').click();
     store.isOver = false;
   }

};

const createObservationFailure = () => {
  $(".notification-container").children().text("");
  $(".failure-alert").text("Error: Observation Not Created.");
};

const onCreateObservationNumsFailure = function() {
  $(".notification-container").children().text("");

};

const deleteObservationSuccess = () => {
  $(".notification-container").children().text("");
};

const deleteObservationFailure = () => {
  $(".notification-container").children().text("");
};

const updateObservationSuccess = (data) => {
  $(".notification-container").children().text("");

  $(".cancel-last-submission-edit").hide();
  $("#submit-last-edit-btn").hide();
  $(".edit-last-submission").show();

};

const updateObservationFailure = () => {
  $(".notification-container").children().text("");
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
  $("#cancel-session-btn").attr("data-current-session-id", store.currentSessionId);
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
  isMobileWidth,
  isBelowXs,
};
