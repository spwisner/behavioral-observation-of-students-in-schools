'use strict';

const store = require('../store');
const sessionsApi = require('./api');
const displaySessionCreateForm = require('../templates/session/new-session-form.handlebars');
const displayObservationLandingPage = require('../templates/observation/obs-landing.handlebars');
const displaySessionsTable = require('../templates/session/get-sessions.handlebars');
const displaySessionDetails = require('../templates/session/show-session.handlebars');
const displaySessionUpdateForm = require('../templates/session/update-session-form.handlebars');
const uiStudents = require('../students/ui');
const apiStudents = require('../students/api');

// Session UI

const getSessionSuccess = (data) => {
  $(".notification-container").children().text("");

  $(".content").children().remove();
  let sessionDashboard = displaySessionsTable({
    sessions: data.sessions
  });
  // $('.student-dashboard-container').append(studentDashboard);
  $('.content').append(sessionDashboard);
  // $("#current-student-fn").text(store.currentStudentFn);
  // $("#current-student-ln").text(store.currentStudentLn);
};

const getSessionFailure = () => {
  $(".notification-container").children().text("");
};

const showSessionSuccess = (data) => {
  $(".notification-container").children().text("");

  $(".content").children().remove();
  let sessionDetails = displaySessionDetails({
    session: data.session
  });
  // $('.student-dashboard-container').append(studentDashboard);
  $('.content').append(sessionDetails);

  $(".current").attr("data-current-student-id", store.currentStudentId);
};

const showSessionFailure = () => {
  $(".notification-container").children().text("");
};

// const generateTodaysDate = function() {
//   let today = new Date();
//   let dd = today.getDate();
//   let mm = today.getMonth()+1;
//   let yyyy = today.getFullYear();
//
//   if (dd < 10) {
//       dd='0'+dd;
//     }
//
//   if(mm<10) {
//       mm='0'+mm;
//   }
//
//   today = yyyy+'/'+mm+'/'+dd;
//   return today;
// };

// Setting required functions

const defaultDate = function() {
  let d = new Date();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  let output = d.getFullYear() + '-' +
    (month < 10 ? '0' : '') + month + '-' +
    (day < 10 ? '0' : '') + day;
  return output;
};

const generateCreateForm = () => {
  $(".content").children().remove();
  let showCreateForm = displaySessionCreateForm();
  $('.content').append(showCreateForm);
  let todaysDate = defaultDate();
  $("#session-date-create-field").val(todaysDate);
  $(".current").attr("data-current-session-id", store.currentSessionId);
  $(".current").attr("data-current-student-id", store.currentStudentId);
};

const generateUpdateForm = (data) => {
  $(".notification-container").children().text("");
  $(".content").children().remove();
  data.session.student_id = store.currentStudentId;
  let generatedUpdateForm = displaySessionUpdateForm({
    session: data.session
  });
  $('.content').append(generatedUpdateForm);
  $(".current").attr("data-current-student-id", store.currentStudentId);
};

const generateUpdateFormFailure = () => {
  $(".notification-container").children().text("");

};

const createLandingPage = function() {
  $(".content").children().remove();
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
  $(".form-error").text("");
  $(".notification-container").children().text("");
  $(".success-alert").text("Session Successfully Created");
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

const createSessionFailure = () => {
  $(".notification-container").children().text("");
  $("#create-session-error").text("Error creating session. Please check if all required fields are entered and number values fall within the listed range.");
};

const deleteSessionSuccess = () => {
  $(".notification-container").children().text("");
  // sessionsApi.getSessions()
  //   .done(getSessionSuccess)
  //   .fail(getSessionFailure);
  apiStudents.showStudent()
    .done(uiStudents.viewStudentRecordSuccess)
    .fail(uiStudents.viewStudentRecordFailure);
};

const deleteSessionFailure = (data) => {
  $(".notification-container").children().text("");
};

const updateSessionSuccess = (data) => {
  $(".notification-container").children().text("");
  store.currentStudentId = data.session.id;
  $(".content").children().remove();
  let sessionDetails = displaySessionDetails({
    session: data.session
  });
  // $('.student-details-container').append(studentDetails);
  $('.content').append(sessionDetails);

};

const updateSessionFailure = (data) => {
  $(".notification-container").children().text("");
  $("#update-session-error").text("Error updating session. Please check if all required fields are entered and number values fall within the listed range.");
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
  generateUpdateForm,
  generateUpdateFormFailure
};
