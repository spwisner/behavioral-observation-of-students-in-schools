'use strict';

const store = require('../store');

// Student UI
const getStudentSuccess = (data) => {
  console.log('get student success');
  console.log(data);
};

const getStudentFailure = (data) => {
  console.log('get student failure');
  console.log(data);
};

const showStudentSuccess = (data) => {
  console.log('show student success');
  console.log(data);
};

const showStudentFailure = (data) => {
  console.log('show student failure');
  console.log(data);
};

const createStudentSuccess = (data) => {
  console.log('create student success');
  console.log(data);
  // $("#new-student-form").hide();
  // $("#new-session-form").show();
  $("#create-session-stud-id").attr("value", store.currentStudentId);
  $(".current").attr("data-current-student-id", store.currentStudentId);
};

const createStudentFailure = (data) => {
  console.log('create student failure');
  console.log(data);
};

const deleteStudentSuccess = (data) => {
  console.log('delete student success');
  console.log(data);
};

const deleteStudentFailure = (data) => {
  console.log('delete student failure');
  console.log(data);
};

const updateStudentSuccess = (data) => {
  console.log('update student success');
  console.log(data);
};

const updateStudentFailure = (data) => {
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
};
