'use strict';

const config = require('../config');
const store = require('../store');

// Login Api

const signUp = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data,
  });
};

const signIn = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data,
  });
};

const signOut = function() {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const changePassword = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: data,
  });
};

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

// Settings API

const getSettings = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("get-setting-stud-id").value + '/settings',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const showSetting = function() {
  return $.ajax({
    url: config.apiOrigin + '/settings/' + document.getElementById("show-setting-setting-id").value,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const createSetting = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("create-setting-stud-id").value + '/settings',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

const updateSetting = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/settings/' + document.getElementById("update-setting-setting-id").value,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

// Observations API

const getObservations = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("get-obs-stud-id").value + '/settings/' + document.getElementById("get-obs-setting-id").value + '/observations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const showObservation = function() {
  return $.ajax({
    url: config.apiOrigin + '/observations/' + document.getElementById("show-obs-setting-id").value,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const createObservation = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("create-observation-stud-id").value + '/settings/' + document.getElementById("create-observation-setting-id").value + '/observations',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

const updateObservation = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/observations/' + document.getElementById("update-observation-obs-id").value,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

module.exports = {
  getStudents,
  signUp,
  signIn,
  signOut,
  changePassword,
  createStudent,
  createSetting,
  createObservation,
  showStudent,
  getSettings,
  showSetting,
  getObservations,
  showObservation,
  updateSetting,
  updateStudent,
  updateObservation,
};
