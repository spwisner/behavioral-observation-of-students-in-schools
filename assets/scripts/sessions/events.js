'use strict';
const sessionsApi = require('./api');
const sessionsUi = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
const apiStudents = require('../students/api');
const uiStudents = require('../students/ui');
// const logic = require('./logic');

// SETTING EVENTS

const onGetSessions = function(event) {
  event.preventDefault();
  store.currentStudentId = $(this).attr("data-current-student-id");
  sessionsApi.getSessions()
    .done(sessionsUi.getSessionSuccess)
    .fail(sessionsUi.getSessionFailure);
};

const onShowSession = function(event) {
  event.preventDefault();
  store.currentStudentId = $(this).attr("data-current-student-id");
  store.currentSessionId = $(this).attr("data-current-session-id");
  // store.currentStudentFn = $(".student-name-tr").attr("data-current-student-fn");
  // store.currentStudentLn = $(".student-name-tr").attr("data-current-student-ln");
  sessionsApi.showSession()
    .done(sessionsUi.showSessionSuccess)
    .fail(sessionsUi.showSessionFailure);
};

const onCreateSession = function(event) {
  event.preventDefault();

  let isIntervalANum = sessionsUi.isFieldANum("intervals-required");
  let isLengthANum = sessionsUi.isFieldANum("length-required");

  let data = getFormFields(event.target);

  if (isIntervalANum && isLengthANum) {
    sessionsApi.createSession(data)
      .then((response) => {
        store.currentSessionId = response.session.id;
        store.currentNumofIntervals = response.session.int_num;
        // console.log(store.currentNumofIntervals);
        store.currentObsIntervalTime = response.session.obs_time;
        // store.currentObsNum = 1;
        // return store.currentSession;
      })
      .done(sessionsUi.createSessionSuccess)
      .fail(sessionsUi.createSessionFailure);
  } else {
    sessionsUi.createSessionFailure();
  }
};

const onDeleteSession = function(event) {
  event.preventDefault();
  store.currentSessionId = $("#session-record-delete").attr("data-current-session-id");
  store.currentStudentId = $("#session-record-delete").attr("data-current-student-id");
  sessionsApi.deleteSession()
    .done(sessionsUi.deleteSessionSuccess)
    .fail(sessionsUi.deleteSessionFailure);
};

const onUpdateSession = function(event) {
  event.preventDefault();
  store.currentSessionId = parseInt($("#update-session-submit").attr("data-current-session-id"));
  store.currentStudentId = parseInt($("#update-session-submit").attr("data-current-student-id"));
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
  $(".number-of-intervals-entry").text(numberOfIntervalsEntry);
  $(".length-of-intervals-entry").text(intervalLengthEntry);
  totalTime(numberOfIntervalsEntry, intervalLengthEntry);
};

const onGenerateCreateForm = function(event) {
  event.preventDefault();
  store.currentStudentId = $(this).attr("data-current-student-id");
  sessionsUi.generateCreateForm();
};

const onEditSession = function(event) {
  event.preventDefault();
  store.currentStudentId = $(this).attr("data-current-student-id");
  store.currentSessionId = $(this).attr("data-current-session-id");
  sessionsApi.showSession()
    .done(sessionsUi.generateUpdateForm)
    .fail(sessionsUi.generateUpdateFormFailure);
};

const onCancelSessionForm = function(event) {
  event.preventDefault();

  let currentStudentId = parseInt($(".session-cancel-btn").attr("data-current-student-id"));
  let currentSessionId = parseInt($(".session-cancel-btn").attr("data-current-session-id"));

  if (currentSessionId === 0) {
    store.currentStudentId = currentStudentId;
    apiStudents.showStudent()
      .done(uiStudents.viewStudentRecordSuccess)
      .fail(uiStudents.viewStudentRecordFailure);
  } else {
    store.currentStudentId = currentStudentId;
    store.currentSessionId = currentSessionId;
    sessionsApi.showSession()
      .done(sessionsUi.showSessionSuccess)
      .fail(sessionsUi.showSessionFailure);
  }
};

const addHandlers = () => {
  $('#delete-session-form').on('submit', onDeleteSession);
  $('#get-sessions-form').on('submit', onGetSessions);
  $('#show-session-form').on('submit', onShowSession);
  $('#new-session-form').on('submit', onCreateSession);
  $('#update-session-form').on('submit', onUpdateSession);
  $('.content').on('keyup', '#interval-number-entry', totalTimeCalculator);
  $('.content').on('keyup', '#interval-length-entry', totalTimeCalculator);
  $('.content').on('click', '#student-record-create-session', onGenerateCreateForm);
  $('.content').on('submit', '#new-session-form', onCreateSession);
  $('.content').on('click', '#student-record-view-sessions', onGetSessions);
  $('.content').on('click', '#view-session-details-btn', onShowSession);
  $('.content').on('click', '#session-record-btn-edit', onEditSession);
  $('.content').on('submit', '#update-session-form', onUpdateSession);
  $('.content').on('click', '#session-record-delete', onDeleteSession);
  $('.content').on('click', '#create-session-student-btn', onGenerateCreateForm);
  $('.content').on('click', '.dashboard-existing-create-btn', onGenerateCreateForm);
  $('.content').on('click', '.session-cancel-btn', onCancelSessionForm);

};

module.exports = {
  addHandlers,
};
