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

  // $(".student-summary-table").remove();
  $(".content").children().remove();
  let studentDashboard = displayStudentDashboard({
    students: data.students
  });
  // $('.student-dashboard-container').append(studentDashboard);
  $('.content').append(studentDashboard);

  let numberOfStudents = data.students.length;

  if (numberOfStudents === 0) {
    $(".student-list-row").remove();
    $("#dashboard-new-session-btn").remove();
  } else {
    $(".empty-student-table").remove();
  }
  // $('.content').append(dashboardHomeBtn);
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
  // $("#create-session-stud-id").attr("value", store.currentStudentId);
  // $(".current").attr("data-current-student-id", store.currentStudentId);
  // let dashboardHomeBtn = displayDashboard();
  // $('.content').append(dashboardHomeBtn);
};

const createStudentFailure = () => {
  $(".notification-container").children().text("");
  $(".form-error").text("");

  let fnRequired = $(".fn-required").val().trim();
  let fnIsBlank = (fnRequired === "");
  let lnRequired = $(".ln-required").val().trim();
  let lnIsBlank = (lnRequired === "");

  $(".submit-btn-container").children("p").remove();

  if (fnIsBlank && lnIsBlank) {
    $(".submit-btn-container").prepend('<p class="highlight-red">Error: Student not created.  The first name and last name fields are currently empty.  Please complete these required fields before continuing.</p>');
    $(".fn-field-container input").addClass("border-highlight");
    $(".ln-field-container input").addClass("border-highlight");
  } else if (fnIsBlank) {
    $(".ln-field-container input").removeClass("border-highlight");
    $(".fn-field-container input").addClass("border-highlight");
    $(".submit-btn-container").prepend('<p class="highlight-red"> Error: Student not created.  The first name field is currently empty.  Please complete this required field before continuing.</p>');
  } else if (lnIsBlank) {
    $(".fn-field-container input").removeClass("border-highlight");
    $(".ln-field-container input").addClass("border-highlight");
    $(".submit-btn-container").prepend('<p class="highlight-red">Error: Student not created.  The last name field is currently empty.  Please complete this required field before continuing.</p>');
  } else {
    $(".submit-btn-container").prepend('<p class="highlight-red">An error has occured.  Please try again.</p>');
  }

  // $("#create-student-error").text("Error: Student not created.  Please ensure all required fields have values");
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
  // let studentDetails = displayStudentDetails({
  //   student: data.student
  // });
  // $('.student-details-container').append(studentDetails);
  // $('.content').append(studentDetails);
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

  $(".submit-btn-container").children("p").remove();

  if (fnIsBlank && lnIsBlank) {
    $(".submit-btn-container").prepend('<p class="highlight-red">Error: Student not created.  The first name and last name fields are currently empty.  Please complete these required fields before continuing.</p>');
    // $(".fn-field-container input").removeClass("border-highlight");
    // $(".ln-field-container input").removeClass("border-highlight");
    $(".fn-field-container input").addClass("border-highlight");
    $(".ln-field-container input").addClass("border-highlight");
  } else if (fnIsBlank) {
    $(".ln-field-container input").removeClass("border-highlight");
    $(".fn-field-container input").addClass("border-highlight");
    $(".submit-btn-container").prepend('<p class="highlight-red"> Error: Student not created.  The first name field is currently empty.  Please complete this required field before continuing.</p>');
  } else if (lnIsBlank) {
    $(".fn-field-container input").removeClass("border-highlight");
    $(".ln-field-container input").addClass("border-highlight");
    $(".submit-btn-container").prepend('<p class="highlight-red">Error: Student not created.  The last name field is currently empty.  Please complete this required field before continuing.</p>');
  } else {
    $(".submit-btn-container").prepend('<p class="highlight-red">An error has occured.  Please try again.</p>');
  }


  $("#update-student-error").text("Error: Student not updated.  Please ensure all required fields have values");
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
