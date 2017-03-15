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
      store.currentSessionId = parseInt(response.session.id);
      store.currentNumofIntervals = parseInt(response.session.int_num);
      store.currentObsIntervalTime = parseInt(response.session.obs_time);
      console.log(store.currentNumofIntervals);
      console.log("response");
      console.log(response);
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

const addHandlers = () => {
  $('#delete-session-form').on('submit', onDeleteSession);
  $('#get-sessions-form').on('submit', onGetSessions);
  $('#show-session-form').on('submit', onShowSession);
  $('#new-session-form').on('submit', onCreateSession);
  $('#update-session-form').on('submit', onUpdateSession);
};

module.exports = {
  addHandlers,
};
