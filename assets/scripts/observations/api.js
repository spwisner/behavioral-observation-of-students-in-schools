'use strict';

const config = require('../config');
const store = require('../store');

// Observations API

const getObservations = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.currentStudentId + '/sessions/' + store.currentSessionId + '/observations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const showObservation = function() {
  return $.ajax({
    url: config.apiOrigin + '/observations/' + document.getElementById("show-obs-session-id").value,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const showLastObservation = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/observations/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const createObservation = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.currentStudentId + '/sessions/' + store.currentSessionId + '/observations',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

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

const updateLastObservation = function(id, aet, pet, oftm, oftv, oftp, comment) {
  return $.ajax({
    url: config.apiOrigin + '/observations/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: {
      "observation": {
        "aet": aet,
        "pet": pet,
        "oft_m": oftm,
        "oft_v": oftv,
        "oft_p": oftp,
        "obs_comment": comment,
      }
    }
  });
};

module.exports = {
  createObservation,
  getObservations,
  showObservation,
  updateObservation,
  deleteObservation,
  showLastObservation,
  updateLastObservation,
};
