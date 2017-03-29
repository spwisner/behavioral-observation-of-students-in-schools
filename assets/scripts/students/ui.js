'use strict';

const store = require('../store');
const displayEditStudent = require('../templates/student/edit-student.handlebars');
const displayStudentDashboard = require('../templates/student/get-students.handlebars');
const displayStudentDetails = require('../templates/student/show-student-record.handlebars');

// Student UI

const viewStudentRecordSuccess = (data) => {
  $(".student-record-table").remove();
  let studentDetails = displayStudentDetails({
    student: data.student
  });
  $('.student-details-container').append(studentDetails);
};

const viewStudentRecordFailure = (data) => {
  console.log("view student record failure");
}

const getStudentSuccess = (data) => {
  console.log('get student dashboard success');
  $(".student-summary-table").remove();
  let studentDashboard = displayStudentDashboard({
    students: data.students
  });
  $('.student-dashboard-container').append(studentDashboard);
};

const editStudentSuccess = (data) => {
  console.log('edit student success');
  console.log(data);
  $("#update-student-form").remove();
  let editStudent = displayEditStudent({
    student: data.student
  });
  $('.update-student-container').append(editStudent);
};

const editStudentFailure = (data) => {
  console.log('edit student failure');
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
  editStudentSuccess,
  editStudentFailure,
  viewStudentRecordSuccess,
  viewStudentRecordFailure,
};
