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
  // $('.student-dashboard-container').append(studentDashboard);
  $('.content').append(sessionDashboard);
  $(".current-student-fn").text(store.currentStudentFn);
  $(".current-student-ln").text(store.currentStudentLn);
  $("#create-session-student-btn").attr("data-current-student-id", store.currentStudentId);
};

const getSessionFailure = () => {
  $(".notification-container").children().text("");
  console.log('could not retrive sessions table');
};

const viewStudentRecordSuccess = (data) => {
  $(".notification-container").children().text("");
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
  console.log("view student record failure");
};

const showStudentCreateForm = () => {
  $(".notification-container").children().text("");
  $(".content").children().remove();
  let showCreateForm = displayStudentCreateForm();
  $('.content').append(showCreateForm);
};

const getStudentSuccess = (data) => {
  $(".notification-container").children().text("");
  console.log('get student dashboard success');
  store.currentStudentId = 0;
  store.currentSessionId = 0;

  // $(".student-summary-table").remove();
  $(".content").children().remove();
  let studentDashboard = displayStudentDashboard({
    students: data.students
  });
  // $('.student-dashboard-container').append(studentDashboard);
  $('.content').append(studentDashboard);
  // $('.content').append(dashboardHomeBtn);
};

const editStudentSuccess = (data) => {
  $(".notification-container").children().text("");
  $(".content").children().remove();
  console.log('edit student success');
  console.log(data);

  let editStudent = displayEditStudent({
    student: data.student
  });
  $('.content').append(editStudent);
};

const editStudentFailure = (data) => {
  $(".notification-container").children().text("");
  console.log('edit student failure');
  console.log(data);
};

const getStudentFailure = (data) => {
  $(".notification-container").children().text("");
  console.log('get student failure');
  console.log(data);
};

const showStudentSuccess = (data) => {
  $(".notification-container").children().text("");
  console.log('show student success');
  console.log(data);
};

const showStudentFailure = (data) => {
  $(".notification-container").children().text("");
  console.log('show student failure');
  console.log(data);
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

const createStudentFailure = (data) => {
  $(".notification-container").children().text("");
  $(".form-error").text("");
  $("#create-student-error").text("Error: Student not created.  Please ensure all required fields have values");
  console.log('create student failure');
  console.log(data);
};

const deleteStudentSuccess = () => {
  $(".notification-container").children().text("");
  console.log('delete student success');
  apiStudents.getStudents()
    .done(getStudentSuccess)
    .fail(getStudentFailure);
};

const deleteStudentFailure = (data) => {
  $(".notification-container").children().text("");
  console.log('delete student failure');
  console.log(data);
};

const updateStudentSuccess = (data) => {
  $(".notification-container").children().text("");
  $(".success-alert").text("Student Has Been Successfully Updated");
  console.log('update student success');
  console.log(data);
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

const updateStudentFailure = (data) => {
  $(".notification-container").children().text("");
  $("#update-student-error").text("Error: Student not updated.  Please ensure all required fields have values");
  console.log('update student failure');
  console.log(data);
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
