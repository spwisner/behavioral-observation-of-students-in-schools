'use strict';

const store = require('../store');
const displayEditStudent = require('../templates/student/edit-student.handlebars');
const displayStudentDashboard = require('../templates/student/get-students.handlebars');
const displayStudentDetails = require('../templates/student/show-student-record.handlebars');
const displayStudentCreateForm = require('../templates/student/create-student.handlebars');
const displaySessionsTable = require('../templates/session/get-sessions.handlebars');
// const displayDashboard = require('../templates/dashboard/dashboard-btn.handlebars');
const apiStudents = require('./api');
const sessionsApi = require('../sessions/api');

// Student UI

const getSessionSuccess = (data) => {
  $(".notification-container").children().text("");

  let sessionDashboard = displaySessionsTable({
    sessions: data.sessions
  });

  $('.content').append(sessionDashboard);

  let numberOfSessions = data.sessions.length;

  if (numberOfSessions === 0) {
    $(".session-list-row").remove();
  } else {
    $(".empty-session-table").remove();
  }

  $(".current-student-fn").text(store.currentStudentFn);
  $(".current-student-ln").text(store.currentStudentLn);
  $("#create-session-student-btn").attr("data-current-student-id", store.currentStudentId);
};

const getSessionFailure = () => {
  $(".notification-container").children().text("");
};

const viewStudentRecordSuccess = (data) => {
  $(".notification-container").children().text("");
  $(".delete-confirmation-row").hide();
  $("#student-record-show-delete").show();
  $(".content").children().remove();
  // $(".student-record-table").remove();
  let studentDetails = displayStudentDetails({
    student: data.student
  });
  // $('.student-details-container').append(studentDetails);
  $('.content').append(studentDetails);
  store.currentStudentFn = $(".student-name-header").attr("data-current-student-fn");
  store.currentStudentLn = $(".student-name-header").attr("data-current-student-ln");
  sessionsApi.getSessions()
    .done(getSessionSuccess)
    .fail(getSessionFailure);
};

const viewStudentRecordFailure = () => {
  $(".notification-container").children().text("");
};

const showStudentCreateForm = () => {
  $(".notification-container").children().text("");
  $(".content").children().remove();
  let showCreateForm = displayStudentCreateForm();
  $('.content').append(showCreateForm);
};

const getStudentSuccess = (data) => {
  $(".notification-container").children().text("");
  store.currentStudentId = 0;
  store.currentSessionId = 0;

  $(".content").children().remove();
  let studentDashboard = displayStudentDashboard({
    students: data.students
  });

  $('.content').append(studentDashboard);

  let numberOfStudents = data.students.length;

  if (numberOfStudents === 0) {
    $(".student-list-row").remove();
    $("#dashboard-new-session-btn").remove();
  } else {
    $(".empty-student-table").remove();
  }

};

const editStudentSuccess = (data) => {
  $(".notification-container").children().text("");
  $(".content").children().remove();

  let editStudent = displayEditStudent({
    student: data.student
  });
  $('.content').append(editStudent);
};

const editStudentFailure = () => {
  $(".notification-container").children().text("");
};

const getStudentFailure = () => {
  $(".notification-container").children().text("");
};

const showStudentSuccess = () => {
  $(".notification-container").children().text("");
};

const showStudentFailure = () => {
  $(".notification-container").children().text("");
};

const createStudentSuccess = () => {
  $(".form-error").text("");
  $(".notification-container").children().text("");
  $(".content").children().remove();
  $(".success-alert").text("Student Has Been Successfully Created");
  // let studentDetails = displayStudentDetails({
  //   student: data.student
  // });
  //
  // $(".content").append(studentDetails);
  apiStudents.showStudent()
    .done(viewStudentRecordSuccess)
    .fail(viewStudentRecordFailure);
};

const removeErrorFormatting = function() {
  $(".submit-btn-container").children("p").remove();
  $("#create-student-error").children("p").remove();
  $(".fn-field-notification").children().remove();
  $(".ln-field-notification").children().remove();
  $("#update-student-error").children("p").remove();
  $("input").removeClass("border-highlight");
};

const createStudentFailure = () => {
  $(".notification-container").children().text("");
  $(".form-error").text("");

  let fnRequired = $(".fn-required").val().trim();
  let fnIsBlank = (fnRequired === "");
  let lnRequired = $(".ln-required").val().trim();
  let lnIsBlank = (lnRequired === "");

  removeErrorFormatting();

  if (fnIsBlank) {
    $(".fn-field-notification").prepend('<p class="highlight-red">Error: The first name of the student is a required field and must be completed before continuing.</p>');
    $(".fn-field-container input").addClass("border-highlight");
  }

  if (lnIsBlank) {
    $(".ln-field-notification").prepend('<p class="highlight-red">Error: The last name of the student is a required field and must be completed before continuing.</p>');
    $(".ln-field-container input").addClass("border-highlight");
  }

  $("#create-student-error").prepend('<p class="highlight-red">Error creating student. Please check if all required fields are complete.</p>');
  $('.submit-btn-container').prepend('<p class="highlight-red">Error creating student. Please check if all required fields are complete.</p>');

};

const deleteStudentSuccess = () => {
  $(".notification-container").children().text("");
  apiStudents.getStudents()
    .done(getStudentSuccess)
    .fail(getStudentFailure);
};

const deleteStudentFailure = () => {
  $(".notification-container").children().text("");
};

const updateStudentSuccess = (data) => {
  $(".notification-container").children().text("");
  $(".success-alert").text("Student Has Been Successfully Updated");
  store.currentStudentId = data.student.id;
  $(".content").children().remove();

  apiStudents.showStudent()
    .done(viewStudentRecordSuccess)
    .fail(viewStudentRecordFailure);

};

const updateStudentFailure = () => {
  $(".notification-container").children().text("");

  let fnRequired = $(".fn-required").val().trim();
  let fnIsBlank = (fnRequired === "");
  let lnRequired = $(".ln-required").val().trim();
  let lnIsBlank = (lnRequired === "");

  removeErrorFormatting();

  if (fnIsBlank) {
    $(".fn-field-notification").prepend('<p class="highlight-red">Error: The first name of the student is a required field and must be completed before continuing.</p>');
    $(".fn-field-container input").addClass("border-highlight");
  }

  if (lnIsBlank) {
    $(".ln-field-notification").prepend('<p class="highlight-red">Error: The last name of the student is a required field and must be completed before continuing.</p>');
    $(".ln-field-container input").addClass("border-highlight");
  }

  $("#update-student-error").prepend('<p class="highlight-red">Error creating student. Please check if all required fields are complete.</p>');
  $('.submit-btn-container').prepend('<p class="highlight-red">Error creating student. Please check if all required fields are complete.</p>');

};

module.exports = {
  createStudentSuccess,
  createStudentFailure,
  getStudentSuccess,
  getStudentFailure,
  showStudentSuccess,
  showStudentFailure,
  updateStudentSuccess,
  updateStudentFailure,
  deleteStudentSuccess,
  deleteStudentFailure,
  editStudentSuccess,
  editStudentFailure,
  viewStudentRecordSuccess,
  viewStudentRecordFailure,
  showStudentCreateForm,
};
