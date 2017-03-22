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

module.exports = {
  getChartData,
};
