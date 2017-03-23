'use strict';
const apiObservations = require('./api');
const uiObservations = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
const logicObservations = require('./logic');
const audio = require('./audio');

// OBSERVATION EVENTS

const onGetObservations = function(id) {
  apiObservations.getObservations(id)
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
    .catch(uiObservations.createObservationFailure)
    .then((response) => {
      onGetObservations(store.currentSessionIdStr);
    })
    .done(uiObservations.createObservationSuccess);
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
  // Countup stopwatch for gradients

  // Define Countup
  let countUp = 0;
  $("#new-observation-form").addClass("obs-stg-one");
  let totalIntervalLength = store.currentObsIntervalTime;
  // Define gradient intervals
  let stageOneTime = 0;
  let stageTwoTime = logicObservations.gradientLogic(1, totalIntervalLength) + stageOneTime;
  console.log("stageTwoTime");
  console.log(stageTwoTime);
  let stageThreeTime = logicObservations.gradientLogic(2, totalIntervalLength) + stageTwoTime;
  console.log("stageThreeTime");
  console.log(stageThreeTime);
  let stageFourTime = logicObservations.gradientLogic(3, totalIntervalLength) + stageThreeTime;
  console.log("stageFourTime");
  console.log(stageFourTime);
  let stageFiveTime = logicObservations.gradientLogic(4, totalIntervalLength) + stageFourTime;
  console.log("stageFiveTime");
  console.log(stageFiveTime);

  // Countdown Timer
  let x = parseInt(store.currentObsIntervalTime);
  let max = parseInt(store.currentObsIntervalTime);
  let y = document.getElementById("interval-timer");
  // Display count down for 20 seconds

  let intervalCount = 0;
  let intervalPrint = 1;
  const runTimer = setInterval(function() {
    let endInterval = parseInt(store.currentNumofIntervals);

    if (x <= max && x >= 0) {
      x--;
      countUp++;
      logicObservations.changeGradientClass(stageOneTime, stageTwoTime, stageThreeTime, stageFourTime, stageFiveTime, countUp);
      y.innerHTML = '' + x + '';

      if (x > 0 && x <= 3) {
        audio.playAudio();
      }

      if (x === 0) {
        audio.submitAudio();
        intervalCount = intervalCount + 1;
        intervalPrint = intervalPrint + 1;

        $("#interval-count").text(intervalPrint);
        x = max;
        if (intervalCount <= endInterval) {
          store.observationIdNum = store.observationIdNum + 1;

          if (store.observationIdNum % 5 === 0) {
            $("#student-observed").text("Random Peer");
            $("#student-observed").addClass("random-peer");
          } else {
            $("#student-observed").text("Target Student");
            $("#student-observed").addClass("target-student");
          }

          $("#create-observation-number").val(store.observationIdNum);
          $("#new-observation-form").submit();
          countUp = 0;
          $("#new-observation-form").removeClass("obs-stg-five");
          $("#new-observation-form").addClass("obs-stg-one");
          if (intervalCount === endInterval) {
            $("#new-observation-form").removeClass("obs-stg-five");
            $("#new-observation-form").addClass("obs-stg-done");
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
  onGetObservations,
};
