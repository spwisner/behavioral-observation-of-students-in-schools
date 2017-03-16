'use strict';

const store = require('../store');
const logic = require('./logic');

// Observation UI

const getObservationSuccess = (data) => {
  console.log('update observation success');
  console.log(data);
};

const getObservationFailure = (data) => {
  console.log('update observation failure');
  console.log(data);
};

const showObservationSuccess = (data) => {
  console.log('show observation success');
  console.log(data);
};

const showObservationFailure = (data) => {
  console.log('show observation failure');
  console.log(data);
};

const getPastObsNumSuccess = function() {
  console.log("onGetPastObsNumSuccess Success");
  // events.onCreateObservation();
};

const getPastObsNumFailure = function() {
  console.log("getPastObsNumFailure Failure");
};

const createObservationSuccess = function() {
  console.log('create observation success');
   $("#new-observation-form .field-checkbox").prop("checked", false);
};

const createObservationFailure = (data) => {
  console.log('create observation failure');
  console.log(data);
};

const onCreateObservationNumsFailure = function() {
  console.log('onCreateObservationNumsFailure failure');
};

const deleteObservationSuccess = (data) => {
  console.log('delete observation success');
  console.log(data);
};

const deleteObservationFailure = (data) => {
  console.log('delete observation failure');
  console.log(data);
};

const updateObservationSuccess = (data) => {
  console.log('update observation success');
  console.log(data);
};

const updateObservationFailure = (data) => {
  console.log('update observation failure');
  console.log(data);
};

module.exports = {
  createObservationFailure,
  getObservationSuccess,
  getObservationFailure,
  showObservationSuccess,
  showObservationFailure,
  updateObservationSuccess,
  updateObservationFailure,
  deleteObservationSuccess,
  deleteObservationFailure,
  onCreateObservationNumsFailure,
  getPastObsNumSuccess,
  getPastObsNumFailure,
  createObservationSuccess,
};
