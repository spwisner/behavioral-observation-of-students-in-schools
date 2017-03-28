'use strict';

const config = require('../config');
const store = require('../store');

// Sessions API

const getSessions = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.currentStudentId + '/sessions',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const showSession = function() {
  return $.ajax({
    url: config.apiOrigin + '/sessions/' + store.currentSessionId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const createSession = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.currentStudentId + '/sessions',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

const deleteSession = function() {
  return $.ajax({
    url: config.apiOrigin + '/sessions/' + store.currentSessionId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const updateSession = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/sessions/' + store.currentSessionId,
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
