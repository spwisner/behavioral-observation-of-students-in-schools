'use strict'

const store = require('../store');
const displayExistingStudents = require('../templates/dashboard/existing-student.handlebars');

// Student UI

const getExistingSuccess = (data) => {
  $(".notification-container").children().text("");
  store.currentStudentId = 0;
  store.currentSessionId = 0;
  $(".content").children().remove();
  let existingStudents = displayExistingStudents({
    students: data.students
  });
  $('.content').append(existingStudents);
};

const getExistingFailure = () => {
  $(".notification-container").children().text("");
};

module.exports = {
  getExistingSuccess,
  getExistingFailure,
};
