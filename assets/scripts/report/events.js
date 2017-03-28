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

const addHandlers = () => {
  // $('#get-report-btn').on('click', onGetObservationData);
  $('.get-report-btn-container').on('click', '#get-report-btn', onGetObservationData);
};

module.exports = {
  addHandlers,
};
