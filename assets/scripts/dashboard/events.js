'use strict';

const store = require('../store');
const displayNewSessionDash = require('../templates/session/new-session-home.handlebars');
const apiStudents = require('../students/api');
const uiDashBoard = require('./ui');
const displaySessionCreateForm = require('../templates/session/new-session-form.handlebars');

const onShowCreateDash = function() {
  $(".content").children().remove();
  let showCreateDashHome = displayNewSessionDash();
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
};

module.exports = {
  addHandlers,
};
