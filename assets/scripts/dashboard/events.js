'use strict';

const store = require('../store');
const displayNewSessionDash = require('../templates/session/new-session-home.handlebars');
const apiStudents = require('../students/api');
const uiDashBoard = require('./ui');
const displaySessionCreateForm = require('../templates/session/new-session-form.handlebars');
const displayTutorial = require('../templates/tutorial/tutorial.handlebars');

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

const onShowDeleteConfirmation = function(event) {
  event.preventDefault();
  $(".delete-confirmation-row").slideDown(300);
  $(".show-record-delete").hide(0);
};

const onHideDeleteConfirmation = function() {
  event.preventDefault();
  $(".delete-confirmation-row").slideUp(300);
  $(".show-record-delete").delay(300).show(0);
};

const onTutorial = function(event) {
  event.preventDefault();

  let currentTutorialDisplay = $(".tutorial-index-container").children().length;

  if (currentTutorialDisplay === 0) {
    $("#tutorial-btn").removeClass("btn-success");
    $("#tutorial-btn").addClass("btn-warning");
    $("#tutorial-btn").text("Close Tutorial");
    $('.content').hide();
    let showTutorial = displayTutorial();
    $('.tutorial-index-container').append(showTutorial);
    $('.sign-up-welcome').hide();
  } else {
    $("#tutorial-btn").removeClass("btn-warning");
    $("#tutorial-btn").addClass("btn-success");
    $("#tutorial-btn").text("Show Tutorial");
    $('.content').show();
    $('.tutorial-index-container').children().remove();
  }
};

const addHandlers = () => {
  $('.content').on('click', '#dashboard-new-session-btn', onShowCreateDash);
  $('.content').on('click', '#new-session-existing-student', onExistingStudent);
  $('.content').on('click', '.session-delete-cancel', onHideDeleteConfirmation);
  $('.content').on('click', '.show-record-delete', onShowDeleteConfirmation);
  $('.tutorial-btn').on('click', onTutorial);
  $('.tutorial-index-container').on('click', '.tutorial-btn', onTutorial);
};

module.exports = {
  addHandlers,
};
