'use strict';
// const apiStudents = require('./api');
// const uiStudents = require('./ui');
// const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
const displayNewSessionDash = require('../templates/session/new-session-home.handlebars');
const apiStudents = require('../students/api');
const uiDashBoard = require('./ui');
const displaySessionCreateForm = require('../templates/session/new-session-form.handlebars');
// Dashboard Events and UI

const onShowCreateDash = function() {
  $(".content").children().remove();
  // $(".student-record-table").remove();
  let showCreateDashHome = displayNewSessionDash();
  // $('.student-details-container').append(studentDetails);
  $('.content').append(showCreateDashHome);
};

const onExistingStudent = function(event) {
  event.preventDefault();
  apiStudents.getStudents()
    .done(uiDashBoard.getExistingSuccess)
    .fail(uiDashBoard.getExistingFailure);
};

const onCreateFromExisting = function(event) {
  event.preventDefault();
  store.currentStudentId = $(this).attr("data-current-student-id");
  $(".content").children().remove();
  let showCreateForm = displaySessionCreateForm();
  $('.content').append(showCreateForm);
  $(".current").attr("data-current-session-id", store.currentSessionId);
  $(".current").attr("data-current-student-id", store.currentStudentId);
};

const addHandlers = () => {
  // $('#dashboard-new-session-btn').on('click', onShowCreateDash);
  $('.content').on('click', '#dashboard-new-session-btn', onShowCreateDash);
  $('.content').on('click', '#new-session-existing-student', onExistingStudent);
  $('.content').on('click', '.dashboard-existing-create-btn', onCreateFromExisting);
};

module.exports = {
  addHandlers,
};
