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
    url: config.apiOrigin + '/students/' + store.currentStudentId,
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

const deleteStudent = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/students/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const updateStudent = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.currentStudentId,
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
