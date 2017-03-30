'use strict'

const store = require('../store');
const displayExistingStudents = require('../templates/dashboard/existing-student.handlebars');

// Student UI

const getExistingSuccess = (data) => {
  console.log('get existing dashboard success');
  console.log(data);
  store.currentStudentId = 0;
  store.currentSessionId = 0;
  $(".content").children().remove();
  let existingStudents = displayExistingStudents({
    students: data.students
  });
  $('.content').append(existingStudents);
};

const getExistingFailure = (data) => {
  console.log("get existing failure");
  console.log(data);
};

module.exports = {
  getExistingSuccess,
  getExistingFailure,
};
