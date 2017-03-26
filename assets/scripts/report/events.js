'use strict';
const apiReport = require('./api');
const uiReport = require('./ui');
// const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');

// OBSERVATION EVENTS

// const onGetChartData = function() {
//   // event.preventDefault();
//   apiReport.onGetObservations(store.currentSessionIdStr)
//     .done(uiReport.getObservationSuccess)
//     .fail(uiReport.getObservationFailure);
//   // apiChart.getChartData()
//   //   .done(uiChart.getObservationSuccess)
//   //   .fail(uiChart.getObservationFailure);
// };

const onGetObservationData = function(event) {
  event.preventDefault();
  apiReport.getObservationTable(store.currentSessionIdStr)
    .done(uiReport.onGetObservationTableSuccess)
    .fail(uiReport.onGetObservationTableFailure);
};

// const generateReport = function() {
//   onGetObservations(store.currentSessionIdStr);
//   // onGetChartData();
// };

const addHandlers = () => {
  // $('#get-report-btn').on('click', onGetObservationData);
  $('.get-report-btn-container').on('click', '#get-report-btn', onGetObservationData);
};

module.exports = {
  addHandlers,
};
