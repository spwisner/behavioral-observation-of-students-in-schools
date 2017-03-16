'use strict';

const config = require('../config');
const store = require('../store');

// Observations API

const getObservations = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/1' + '/sessions/' + store.currentSessionIdStr + '/observations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

// const getObservations = function() {
//   return $.ajax({
//     url: config.apiOrigin + '/students/' + document.getElementById("get-obs-stud-id").value + '/sessions/' + document.getElementById("get-obs-session-id").value + '/observations',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token,
//     },
//   });
// };

// Modified for testing

// const getObservationsCreate = function() {
//   return $.ajax({
//     url: config.apiOrigin + '/students/1' + '/sessions/' + store.currentSessionId + '/observations',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token,
//     },
//   });
// };

const showObservation = function() {
  return $.ajax({
    url: config.apiOrigin + '/observations/' + document.getElementById("show-obs-session-id").value,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

// const createObservation = function(data) {
//   return $.ajax({
//     url: config.apiOrigin + '/students/' + document.getElementById("create-observation-stud-id").value + '/sessions/' + document.getElementById("create-observation-session-id").value + '/observations',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token,
//     },
//     data,
//   });
// };

const createObservation = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/students/1' + '/sessions/' + store.currentSessionIdStr + '/observations',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

// const preCreateObservation = function(data) {
//   return $.ajax({
//     url: config.apiOrigin + '/students/' + store.createSessionId + '/sessions/' + document.getElementById("create-observation-session-id").value + '/observations',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token,
//     },
//     data,
//   });
// };

const deleteObservation = function() {
  return $.ajax({
    url: config.apiOrigin + '/observations/' + document.getElementById("delete-observation-obs-id").value,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
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
  createObservation,
  getObservations,
  showObservation,
  updateObservation,
  deleteObservation,
  // preCreateObservation,
  // getObservationsCreate,
};
