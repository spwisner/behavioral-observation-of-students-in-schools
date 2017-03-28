'use strict';
const apiReport = require('./api');
const uiReport = require('./ui');
// const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');

// OBSERVATION EVENTS

const onGetObservationData = function(event) {
  event.preventDefault();
  apiReport.getObservationTable(store.currentSessionIdStr)
    .done(uiReport.onGetObservationTableSuccess)
    .fail(uiReport.onGetObservationTableFailure);
};

const onShowStudentSummary = function(event) {
  event.preventDefault();
  apiReport.getStudentSummary()
    .done(uiReport.showStudentSummarySuccess)
    .fail(uiReport.showStudentSummaryFailure);
};

const addHandlers = () => {
  // $('#get-report-btn').on('click', onGetObservationData);
  $('.get-report-btn-container').on('click', '#get-report-btn', onShowStudentSummary);
};

module.exports = {
  addHandlers,
};
