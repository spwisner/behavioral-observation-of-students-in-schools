'use strict';

const store = require('../store');
const displaySessionCreateForm = require('../templates/session/new-session-form.handlebars');
const displayObservationLandingPage = require('../templates/observation/obs-landing.handlebars');

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

const generateCreateForm = () => {
  $(".content").children().remove();
  let showCreateForm = displaySessionCreateForm();
  $('.content').append(showCreateForm);
  $(".current").attr("data-current-session-id", store.currentSessionId);
  $(".current").attr("data-current-student-id", store.currentStudentId);
};

const createLandingPage = function() {
  $(".content").children().remove();
  console.log('landing-page success');
  let landingPage = displayObservationLandingPage();
  $('.content').append(landingPage);
  $(".current").attr("data-current-session-id", store.currentSessionId);
  $(".current").attr("data-current-student-id", store.currentStudentId);
};

// const beginObservations = (data) => {
//   console.log(data);
//   store.observationIdNum = 0;
//   $("#new-observation-form").show();
//   $("#interval-total").text(store.currentNumofIntervals);
//   $("#student-observed").html('<span id="target-student">Target Student</span>');
//   $(".current").attr("data-current-session-id", store.currentSessionId);
//   $(".current").attr("data-current-student-id", store.currentStudentId);
// }

const createSessionSuccess = () => {
  console.log('create session success');
  createLandingPage();

  // store.observationIdNum = 0;
  // $("#new-session-form").hide();
  // $("#new-observation-form").show();
  // $("#interval-total").text(store.currentNumofIntervals);
  // // $(".interval-count").text(store.currentObsNum);
  // $("#student-observed").html('<span id="target-student">Target Student</span>');
  //
  // $(".current").attr("data-current-session-id", store.currentSessionId);
  // $(".current").attr("data-current-student-id", store.currentStudentId);
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
  generateCreateForm,
};
