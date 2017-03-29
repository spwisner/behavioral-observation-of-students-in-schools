'use strict';
// const apiStudents = require('./api');
// const uiStudents = require('./ui');
// const getFormFields = require('../../../lib/get-form-fields');
// const store = require('../store');

const displayNewSessionDash = require('../templates/session/new-session-home.handlebars');

// Dashboard Events and UI

const onShowCreateDash = function() {
  $(".content").children().remove();
  // $(".student-record-table").remove();
  let showCreateDashHome = displayNewSessionDash({});
  // $('.student-details-container').append(studentDetails);
  $('.content').append(showCreateDashHome);
}

const addHandlers = () => {
  // $('#dashboard-new-session-btn').on('click', onShowCreateDash);
  $('.content').on('click', '#dashboard-new-session-btn', onShowCreateDash);
};

module.exports = {
  addHandlers,
};
