'use strict';

const config = require('../config');
const store = require('../store');

// Sessions API

const getChartData = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.currentStudentId + '/sessions/' + store.currentSessionId + '/observations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const getObservationTable = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.currentStudentId + '/sessions/' + store.currentSessionId + '/observations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const getStudentSummary = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.currentStudentId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

module.exports = {
  getChartData,
  getObservationTable,
  getStudentSummary,
};
