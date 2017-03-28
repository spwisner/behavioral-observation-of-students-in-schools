'use strict';

const config = require('../config');
const store = require('../store');

// Sessions API

const getChartData = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.chartStudentId + '/sessions/' + store.chartSessionId + '/observations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const getObservationTable = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/students/1' + '/sessions/' + id + '/observations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const getStudentSummary = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("show-student-stud-id").value,
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
