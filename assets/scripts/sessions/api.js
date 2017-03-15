'use strict';

const config = require('../config');
const store = require('../store');

// Sessions API

const getSessions = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("get-session-stud-id").value + '/sessions',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const showSession = function() {
  return $.ajax({
    url: config.apiOrigin + '/sessions/' + document.getElementById("show-session-session-id").value,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const createSession = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("create-session-stud-id").value + '/sessions',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

const deleteSession = function() {
  return $.ajax({
    url: config.apiOrigin + '/sessions/' + document.getElementById("delete-session-session-id").value,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const updateSession = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/sessions/' + document.getElementById("update-session-session-id").value,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

module.exports = {
  createSession,
  getSessions,
  showSession,
  updateSession,
  deleteSession,
};
