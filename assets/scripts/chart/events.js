'use strict';
const apiChart = require('./api');
const uiChart = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');

// OBSERVATION EVENTS

const onGetChartData = function(event) {
  event.preventDefault();
  console.log('in');
  apiChart.getChartData()
    .done(uiChart.getObservationSuccess)
    .fail(uiChart.getObservationFailure);
};

const addHandlers = () => {
  $('#get-report-btn').on('submit', onGetChartData);
};

module.exports = {
  addHandlers,
};
