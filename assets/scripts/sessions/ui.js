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
  console.log('get session success');

  $(".content").children().remove();
  let sessionDashboard = displaySessionsTable({
    sessions: data.sessions
  });
  // $('.student-dashboard-container').append(studentDashboard);
  $('.content').append(sessionDashboard);
  // $("#current-student-fn").text(store.currentStudentFn);
  // $("#current-student-ln").text(store.currentStudentLn);
};

const getSessionFailure = (data) => {
  $(".notification-container").children().text("");
  console.log('get session failure');
  console.log(data);
};

const showSessionSuccess = (data) => {
  $(".notification-container").children().text("");
  console.log('show session success');
  console.log(data);

  $(".content").children().remove();
  let sessionDetails = displaySessionDetails({
    session: data.session
  });
  // $('.student-dashboard-container').append(studentDashboard);
  $('.content').append(sessionDetails);

  $(".current").attr("data-current-student-id", store.currentStudentId);
};

const showSessionFailure = (data) => {
  $(".notification-container").children().text("");
  console.log('show session failure');
  console.log(data);
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

const generateCreateForm = () => {
  $(".content").children().remove();
  let showCreateForm = displaySessionCreateForm();
  $('.content').append(showCreateForm);
  $(".current").attr("data-current-session-id", store.currentSessionId);
  $(".current").attr("data-current-student-id", store.currentStudentId);
  // let today = generateTodaysDate();

  // let today = moment().format('YYYY-MM-DD');
  // document.getElementById("session-date-create-field").value = today;
};

const generateUpdateForm = (data) => {
  $(".notification-container").children().text("");
  $(".content").children().remove();
  console.log('edit session success');
  data.session.student_id = store.currentStudentId;
  console.log(data);
  let generatedUpdateForm = displaySessionUpdateForm({
    session: data.session
  });
  $('.content').append(generatedUpdateForm);
  $(".current").attr("data-current-student-id", store.currentStudentId);
  // let today = generateTodaysDate();
  // $("#session-date-create-field").val(today);
};

const generateUpdateFormFailure = () => {
  $(".notification-container").children().text("");
  console.log("generate update form failure");
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
  $(".notification-container").children().text("");
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
  $(".notification-container").children().text("");
  console.log('create session failure');
  console.log(data);
};

const deleteSessionSuccess = () => {
  $(".notification-container").children().text("");
  console.log('delete session success');
  // sessionsApi.getSessions()
  //   .done(getSessionSuccess)
  //   .fail(getSessionFailure);
  apiStudents.showStudent()
    .done(uiStudents.viewStudentRecordSuccess)
    .fail(uiStudents.viewStudentRecordFailure);
};

const deleteSessionFailure = (data) => {
  $(".notification-container").children().text("");
  console.log('delete session failure');
  console.log(data);
};

const updateSessionSuccess = (data) => {
  $(".notification-container").children().text("");
  console.log('update session success');
  console.log(data);
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
  generateUpdateForm,
  generateUpdateFormFailure
};
