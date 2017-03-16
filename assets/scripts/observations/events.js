'use strict';
const apiObservations = require('./api');
const uiObservations = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
// const logic = require('./logic');

// OBSERVATION EVENTS

const onGetObservations = function(event) {
  event.preventDefault();
  apiObservations.getObservations()
    .done(uiObservations.getObservationSuccess)
    .fail(uiObservations.getObservationFailure);
};

const onShowObservation = function(event) {
  event.preventDefault();
  apiObservations.showObservation()
    .done(uiObservations.showObservationSuccess)
    .fail(uiObservations.showObservationFailure);
};

const onCreateObservation = function(event) {
    event.preventDefault();
    let data = getFormFields(event.target);
    apiObservations.createObservation(data)
    .then((response) => {
      console.log(response);
    })
    .done(uiObservations.createObservationSuccess)
    .fail(uiObservations.createObservationFailure);
};

const onDeleteObservation = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  apiObservations.deleteObservation(data)
    .done(uiObservations.deleteObservationSuccess)
    .fail(uiObservations.deleteObservationFailure);
};

const onUpdateObservation = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  apiObservations.updateObservation(data)
    .done(uiObservations.updateObservationSuccess)
    .fail(uiObservations.updateObservationFailure);
};

const startSession = function() {
  $("#new-student-form").show();
};

const endObservationTimer = function(runTimer) {
  clearInterval(runTimer);
  console.log("interval done");
};

const observationTimer = function() {
  let x = parseInt(store.currentObsIntervalTime);
  let max = parseInt(store.currentObsIntervalTime) + 1;
  let y = document.getElementById("interval-timer");
  // Display count down for 20 seconds

  let intervalCount = 0;
  let intervalPrint = 1;
  const runTimer = setInterval(function() {
    let endInterval = parseInt(store.currentNumofIntervals);

    if (x <= max && x >= 1) {
      x--;
      y.innerHTML = '' + x + '';
      if (x === 1) {
        intervalCount = intervalCount + 1;
        intervalPrint = intervalPrint + 1;
        $("#interval-count").text(intervalPrint);
        x = max;
        if (intervalCount <= endInterval) {
          store.observationIdNum = store.observationIdNum + 1;
          $("#create-observation-number").val(store.observationIdNum);
          $("#new-observation-form").submit();
          if (intervalCount === endInterval) {
            endObservationTimer(runTimer);
            $("#interval-count").text(endInterval);
            return;
          }
          }
      }
    }
  }, 1000);
};

// Test Button for Webpage Testing
const testButton = function() {
  $("#test-sign-in").click();
};

const addHandlers = () => {
  $('#get-observations-form').on('submit', onGetObservations);
  $('#show-observation-form').on('submit', onShowObservation);
  $('#new-observation-form').on('submit', onCreateObservation);
  $('#delete-observation-form').on('submit', onDeleteObservation);
  $('#update-observation-form').on('submit', onUpdateObservation);
  $('#new-session-btn').on('click', startSession);
  $('#begin-session-btn').on('click', observationTimer);
  $('#test-button-submit').on('click', testButton);
};

module.exports = {
  addHandlers,
};
