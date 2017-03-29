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

const onEditStudent = function(event) {
  event.preventDefault();
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
  let data = getFormFields(event.target);
  apiStudents.deleteStudent(data)
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

const addHandlers = () => {
  $('#get-students-form').on('submit', onGetStudents);
  $('#show-student-form').on('submit', onShowStudent);
  $('#new-student-form').on('submit', onCreateStudent);
  $('#delete-student-form').on('submit', onDeleteStudent);
  $('#update-student-form').on('submit', onUpdateStudent);
  $('#update-student-btn').on('click', onEditStudent);
  $('.update-student-container').on('submit', '#update-student-form', onUpdateStudent);
};

module.exports = {
  addHandlers,
};
