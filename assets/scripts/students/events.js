'use strict';
const apiStudents = require('./api');
const uiStudents = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
// const logic = require('./logic');

// STUDENT EVENTS

const onGetStudents = function(event) {
  event.preventDefault();
  apiStudents.getStudents()
    .done(uiStudents.getStudentSuccess)
    .fail(uiStudents.getStudentFailure);
};

const onShowStudent = function(event) {
  event.preventDefault();
  apiStudents.showStudent()
    .done(uiStudents.showStudentSuccess)
    .fail(uiStudents.showStudentFailure);
};


const onViewStudentRecord = function(event) {
  event.preventDefault();
  store.currentStudentId = $(this).attr("data-current-student-id");
  apiStudents.showStudent()
    .done(uiStudents.viewStudentRecordSuccess)
    .fail(uiStudents.viewStudentRecordFailure);
};

const onEditStudent = function(event) {
  event.preventDefault();
  store.currentStudentId = $(this).attr("data-current-student-id");
  apiStudents.showStudent()
    .done(uiStudents.editStudentSuccess)
    .fail(uiStudents.edithStudentFailure);
};

const onCreateStudent = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  apiStudents.createStudent(data)
    .then((response) => {
      store.currentStudentId = response.student.id;
      return store.currentStudentId;
    })
    .done(uiStudents.createStudentSuccess)
    .fail(uiStudents.createStudentFailure);
};

const onDeleteStudent = function(event) {
  event.preventDefault();
  store.currentStudentId= $("#student-record-delete").attr("data-current-student-id");
  // let data = getFormFields(event.target);
  apiStudents.deleteStudent(store.currentStudentId)
    .done(uiStudents.deleteStudentSuccess)
    .fail(uiStudents.deleteStudentFailure);
};

const onUpdateStudent = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  apiStudents.updateStudent(data)
    .done(uiStudents.updateStudentSuccess)
    .fail(uiStudents.updateStudentFailure);
};

const onShowStudentCreateForm = function(event) {
  event.preventDefault();
  uiStudents.showStudentCreateForm();
};

const onCancelStudentForm = function(event) {
  event.preventDefault();

  let currentStudentId = parseInt($(".student-cancel-btn").attr("data-current-student-id"));
  console.log(currentStudentId);

  if ( currentStudentId === 0 ) {
    apiStudents.getStudents()
      .done(uiStudents.getStudentSuccess)
      .fail(uiStudents.getStudentFailure);
  } else {
    store.currentStudentId = $(".student-cancel-btn").attr("data-current-student-id");
    apiStudents.showStudent()
      .done(uiStudents.viewStudentRecordSuccess)
      .fail(uiStudents.viewStudentRecordFailure);
  }
};

const addHandlers = () => {
  // $('#dashboard-home-btn').on('click', onGetStudents);
  $('#show-student-form').on('submit', onShowStudent);
  // $('#new-student-form').on('submit', onCreateStudent);
  $('.content').on('submit', '#new-student-form', onCreateStudent);
  $('#delete-student-form').on('submit', onDeleteStudent);
  $('#update-student-form').on('submit', onUpdateStudent);
  $('#update-student-btn').on('click', onEditStudent);
  $('.content').on('submit', '#update-student-form', onUpdateStudent);
  $('.content').on('click', '#student-record-btn-edit', onEditStudent);
  $('.content').on('click', '#new-session-new-student', onShowStudentCreateForm);
  // $('.student-dashboard-container').on('click', '.dashboard-student-record-btn', onViewStudentRecord);
  $('.content').on('click', '.dashboard-student-record-btn', onViewStudentRecord);
  $('.content').on('click', '#dashboard-home-btn', onGetStudents);
  $('.content').on('click', '#student-record-delete', onDeleteStudent);
  $('.content').on('click', '.student-cancel-btn', onCancelStudentForm);

};

module.exports = {
  addHandlers,
};
