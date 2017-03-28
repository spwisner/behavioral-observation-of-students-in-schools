'use strict';
const sessionsApi = require('./api');
const sessionsUi = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
// const logic = require('./logic');

// SETTING EVENTS

const onGetSessions = function(event) {
  event.preventDefault();
  sessionsApi.getSessions()
    .done(sessionsUi.getSessionSuccess)
    .fail(sessionsUi.getSessionFailure);
};

const onShowSession = function(event) {
  event.preventDefault();
  sessionsApi.showSession()
    .done(sessionsUi.showSessionSuccess)
    .fail(sessionsUi.showSessionFailure);
};

const onCreateSession = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  sessionsApi.createSession(data)
    .then((response) => {
      store.currentSessionId = response.session.id;
      store.currentNumofIntervals = response.session.int_num;
      alert(store.currentNumofIntervals);
      // console.log(store.currentNumofIntervals);
      store.currentObsIntervalTime = response.session.obs_time;
      // store.currentObsNum = 1;
      // return store.currentSession;
    })
    .done(sessionsUi.createSessionSuccess)
    .fail(sessionsUi.createSessionFailure);
};

const onDeleteSession = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  sessionsApi.deleteSession(data)
    .done(sessionsUi.deleteSessionSuccess)
    .fail(sessionsUi.deleteSessionFailure);
};

const onUpdateSession = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  sessionsApi.updateSession(data)
    .done(sessionsUi.updateSessionSuccess)
    .fail(sessionsUi.updateSessionFailure);
};

// Calculates total time of session

const totalTime = function(numberOfIntervalsEntry, intervalLengthEntry) {
  let totalTimeinSeconds = numberOfIntervalsEntry * intervalLengthEntry;
  let totalTimeinMins = totalTimeinSeconds / 60;

  if (totalTimeinSeconds % 60 === 0) {
    $("#total-session-time-m").text(totalTimeinMins);
    $("#total-session-time-s").text("0");
  } else {
    let totalMinsFloor = Math.floor(totalTimeinMins);
    $("#total-session-time-m").text(totalMinsFloor);
    let secondsRemainder = totalTimeinSeconds % 60;
    $("#total-session-time-s").text(secondsRemainder);
  }
};

const totalTimeCalculator = function() {
  let numberOfIntervalsEntry = $("#interval-number-entry").val();
  let intervalLengthEntry = $("#interval-length-entry").val();
  // alert(intervalLengthEntry);
  $(".number-of-intervals-entry").text(numberOfIntervalsEntry);
  $(".length-of-intervals-entry").text(intervalLengthEntry);
  totalTime(numberOfIntervalsEntry, intervalLengthEntry);
};

const addHandlers = () => {
  $('#delete-session-form').on('submit', onDeleteSession);
  $('#get-sessions-form').on('submit', onGetSessions);
  $('#show-session-form').on('submit', onShowSession);
  $('#new-session-form').on('submit', onCreateSession);
  $('#update-session-form').on('submit', onUpdateSession);
  $('#interval-number-entry').on('keyup', totalTimeCalculator);
  $('#interval-length-entry').on('keyup', totalTimeCalculator);
};

module.exports = {
  addHandlers,
};
