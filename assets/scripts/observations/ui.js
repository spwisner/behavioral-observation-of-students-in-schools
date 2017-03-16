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
  // console.log("logic.withinObsInterval");
  // console.log(logic.withinObsInterval());
  // let continueWithInterval = logic.withinObsInterval();
//
  // if ( continueWithInterval ) {
  //   $("#create-observation-number").attr("value", store.currentObsNum);
  //   $("#interval-count").text(store.currentObsNum);
  //   logic.studentToObserve(store.currentObsNum);
  //   $(".field-checkbox").prop("checked", false);
  //   console.log('continue');
  // } else {
  //   console.log('done');
  //   // $("#new-observation-form").hide();
  // }
};

// const onCreateObservationNumsSuccess = function() {
//     console.log('onCreateObservationNumsSuccess success archive');
//     // console.log("logic.withinObsInterval");
//     // console.log(logic.withinObsInterval());
//     // let continueWithInterval = logic.withinObsInterval();
//     //
//     // if ( continueWithInterval ) {
//     //   $("#create-observation-number").attr("value", store.currentObsNum);
//     //   $("#interval-count").text(store.currentObsNum);
//     //   logic.studentToObserve(store.currentObsNum);
//     //   $(".field-checkbox").prop("checked", false);
//     //   console.log('continue');
//     // } else {
//     //   console.log('done');
//     //   $("#new-observation-form").hide();
//     // }
// };

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
