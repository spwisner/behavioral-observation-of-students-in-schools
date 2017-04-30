'use strict';

const store = require('../store');
const displaySessionCreateForm = require('../templates/session/new-session-form.handlebars');
const displayObservationLandingPage = require('../templates/observation/obs-landing.handlebars');
const displaySessionsTable = require('../templates/session/get-sessions.handlebars');
const displaySessionDetails = require('../templates/session/show-session.handlebars');
const displaySessionUpdateForm = require('../templates/session/update-session-form.handlebars');
const uiStudents = require('../students/ui');
const apiStudents = require('../students/api');

// Session UI

const isFieldANum = function(className) {
  let classNumjQuery = "." + className;
  let classVal = $(classNumjQuery).val().trim();
  let classValArr = classVal.split("");

  for (let i = 0; i < classValArr.length; i++) {
    let currentVal = classValArr[i];

    let isANum = (parseInt(currentVal) >= 0);

    if (isANum === false) {

      return false;
    }
  }

  return true;
};

const removeErrorFormatting = function() {
  $(".submit-btn-container").children("p").remove();
  $("#create-session-error").children("p").remove();
  $(".task-field-notification").children().remove();
  $(".intervals-field-notification").children().remove();
  $(".length-field-notification").children().remove();
  $(".setting-field-notification").children().remove();
  $("input").removeClass("border-highlight");
  $("#update-session-error").children("p").remove();
};

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

const createSessionSuccess = () => {
  $(".form-error").text("");
  $(".notification-container").children().text("");
  $(".success-alert").text("Session Successfully Created");
  createLandingPage();
};

const createSessionFailure = () => {
  $(".notification-container").children().text("");

    let settingRequired = $(".setting-required").val().trim();
    let settingIsBlank = (settingRequired === "");
    let taskRequired = $(".task-required").val().trim();
    let taskIsBlank = (taskRequired === "");

    let intervalsRequired = $(".intervals-required").val().trim();
    let intervalsIsBlank = (intervalsRequired === "");

    let intervalIsNumber = isFieldANum("intervals-required");

    let lengthRequired = $(".length-required").val().trim();
    let lengthIsBlank = (lengthRequired === "");
    let lengthIsNumber = isFieldANum("length-required");

    // $(".submit-btn-container").children("p").remove();
    // $("#create-session-error").children("p").remove();

    removeErrorFormatting();

    if (settingIsBlank) {
      $(".setting-field-notification").prepend('<p class="highlight-red">Error: The session setting is a required field and must be completed before continuing.</p>');
      $(".setting-field-container input").addClass("border-highlight");
    }

    if (taskIsBlank) {
      $(".task-field-notification").prepend('<p class="highlight-red">Error: The session task is a required field and must be completed before continuing.</p>');
      $(".task-field-container input").addClass("border-highlight");
    }

    if (intervalsIsBlank || !intervalIsNumber) {
      $(".intervals-field-notification").prepend('<p class="highlight-red">Error: The number of intervals is a required field and must a number between 1 and 60. No text is permitted in this form field.</p>');
      $(".intervals-field-container input").addClass("border-highlight");
    }

    if (lengthIsBlank || !lengthIsNumber) {
      $(".length-field-notification").prepend('<p class="highlight-red">Error: The interval length is a required field and must a number between 5 and 30. No text is permitted in this form field.</p>');
      $(".length-field-container input").addClass("border-highlight");
    }

  $("#create-session-error").prepend('<p class="highlight-red">Error creating session. Please check if all required fields are entered and number values fall within the listed range.</p>');
  $('.submit-btn-container').prepend('<p class="highlight-red">Error creating session. Please check if all required fields are entered and number values fall within the listed range.</p>');
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

const deleteSessionFailure = () => {
  $(".notification-container").children().text("");
};

const updateSessionSuccess = (data) => {
  $(".notification-container").children().text("");
  console.log(store.currentStudentId);
  store.currentSessionId = data.session.id;
  $(".content").children().remove();
  let sessionDetails = displaySessionDetails({
    session: data.session
  });
  // $('.student-details-container').append(studentDetails);
  $('.content').append(sessionDetails);
  $(".dashboard-student-record-btn").attr("data-current-student-id", store.currentStudentId);
};

const updateSessionFailure = () => {
  $(".notification-container").children().text("");

    let settingRequired = $(".setting-required").val().trim();
    let settingIsBlank = (settingRequired === "");
    let taskRequired = $(".task-required").val().trim();
    let taskIsBlank = (taskRequired === "");

    $(".submit-btn-container").children("p").remove();
    $("#update-session-error").children("p").remove();

    removeErrorFormatting();

    if (settingIsBlank) {
      $(".setting-field-notification").prepend('<p class="highlight-red">Error: The session setting is a required field and must be completed before continuing.</p>');
      $(".setting-field-container input").addClass("border-highlight");
    }

    if (taskIsBlank) {
      $(".task-field-notification").prepend('<p class="highlight-red">Error: The session task is a required field and must be completed before continuing.</p>');
      $(".task-field-container input").addClass("border-highlight");
    }

  $("#update-session-error").prepend('<p class="highlight-red">Error creating session. Please check if all required fields are entered and number values fall within the listed range.</p>');
  $('.submit-btn-container').prepend('<p class="highlight-red">Error creating session. Please check if all required fields are entered and number values fall within the listed range.</p>');
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
  generateUpdateFormFailure,
  isFieldANum,
};
