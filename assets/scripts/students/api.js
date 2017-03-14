'use strict';

const config = require('../config');
const store = require('../store');

// Students API

const getStudents = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const showStudent = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("show-student-stud-id").value,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const createStudent = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/students/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

const deleteStudent = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("delete-student-stud-id").value,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const updateStudent = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("update-student-student-id").value,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

module.exports = {
  getStudents,
  createStudent,
  deleteStudent,
  showStudent,
  updateStudent,
};
