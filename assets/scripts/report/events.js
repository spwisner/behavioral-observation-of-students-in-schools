'use strict';
const apiReport = require('./api');
const uiReport = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');

// OBSERVATION EVENTS

const onGetObservationData = function() {
  // event.preventDefault();
  apiReport.getObservationTable()
    .done(uiReport.onGetObservationTableSuccess)
    .fail(uiReport.onGetObservationTableFailure);
};

const onShowStudentSummary = function() {
  // event.preventDefault();
  apiReport.getStudentSummary()
    .done(uiReport.showStudentSummarySuccess)
    .fail(uiReport.showStudentSummaryFailure);
};

const onGenerateReport = function(event) {
  event.preventDefault();
  onShowStudentSummary();
  onGetObservationData();
}

const onCreateWriteup = function(event) {
    event.preventDefault();
    let data = getFormFields(event.target);
    apiReport.createWriteup(data)
    // .catch(uiReport.createWriteupFailure)
    // .then((response) => {
    //   // onGetObservations(store.currentSessionId);
    //   let submittedObsNum = response.observation.obs_num;
    //   store.studentToObserve = submittedObsNum + 1;
    // })
    .done(uiReport.createWriteupSuccess)
    .catch(uiReport.createWriteupFailure);
};

const onGetWriteup = function(event) {
  event.preventDefault();
  apiReport.getWriteup()
    .done(uiReport.getWriteupSuccess)
    .catch(uiReport.getWriteupFailure);
};

const addHandlers = () => {
  // $('#get-report-btn').on('click', onGetObservationData);
  $('.get-report-btn-container').on('click', '#get-report-btn', onGenerateReport);
  $('#report-writeup-form').on('submit', onCreateWriteup);
  $('.get-writeup-btn-container').on('click', '#get-writeup-report-btn', onGetWriteup);
};

module.exports = {
  addHandlers,
};
