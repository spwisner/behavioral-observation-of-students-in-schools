'use strict';

const store = require('../store');

// Session UI

const getSessionSuccess = (data) => {
  console.log('get session success');
  console.log(data);
};

const getSessionFailure = (data) => {
  console.log('get session failure');
  console.log(data);
};

const showSessionSuccess = (data) => {
  console.log('show session success');
  console.log(data);
};

const showSessionFailure = (data) => {
  console.log('show session failure');
  console.log(data);
};

const createSessionSuccess = (data) => {
  console.log('create session success');
  console.log(data);
  store.observationIdNum = 0;
  // $("#new-session-form").hide();
  $("#new-observation-form").show();
  $("#interval-total").text(store.currentNumofIntervals);
  // $("#interval-count").text(store.currentObsNum);
  $("#student-observed").html('<span id="target-student">Target Student</span>');

  $(".current").attr("data-current-session-id", store.currentSessionId);
  $(".current").attr("data-current-student-id", store.currentStudentId);
};

const createSessionFailure = (data) => {
  console.log('create session failure');
  console.log(data);
};

const deleteSessionSuccess = (data) => {
  console.log('delete session success');
  console.log(data);
};

const deleteSessionFailure = (data) => {
  console.log('delete session failure');
  console.log(data);
};

const updateSessionSuccess = (data) => {
  console.log('update session success');
  console.log(data);
};

const updateSessionFailure = (data) => {
  console.log('update session failure');
  console.log(data);
};

module.exports = {
  getSessionSuccess,
  getSessionFailure,
  showSessionSuccess,
  showSessionFailure,
  createSessionSuccess,
  createSessionFailure,
  updateSessionSuccess,
  updateSessionFailure,
  deleteSessionSuccess,
  deleteSessionFailure,
};
