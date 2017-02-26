'use strict';

const store = require('../store');
const logic = require('./logic');

const success = (data) => {
  console.log('success completed');
  console.log(data);
};

const failure = (error) => {
  console.error(error);
  console.log('error');
};

const signInSuccess = function() {
  $("#sign-in").hide();
  $("#sign-out").show();
};

// Student UI
const getStudentSuccess = (data) => {
  console.log('get student success');
  console.log(data);
};

const getStudentFailure = (data) => {
  console.log('get student failure');
  console.log(data);
};

const showStudentSuccess = (data) => {
  console.log('show student success');
  console.log(data);
};

const showStudentFailure = (data) => {
  console.log('show student failure');
  console.log(data);
};

const createStudentSuccess = (data) => {
  console.log('create student success');
  console.log(data);
  $("#new-student-form").hide();
  $("#new-setting-form").show();
  $("#create-setting-stud-id").attr("value", store.currentStudentId);
};

const createStudentFailure = (data) => {
  console.log('create student failure');
  console.log(data);
};

const deleteStudentSuccess = (data) => {
  console.log('delete student success');
  console.log(data);
};

const deleteStudentFailure = (data) => {
  console.log('delete student failure');
  console.log(data);
};

const updateStudentSuccess = (data) => {
  console.log('update student success');
  console.log(data);
};

const updateStudentFailure = (data) => {
  console.log('update student failure');
  console.log(data);
};

// Setting UI

const getSettingSuccess = (data) => {
  console.log('get setting success');
  console.log(data);
};

const getSettingFailure = (data) => {
  console.log('get setting failure');
  console.log(data);
};

const showSettingSuccess = (data) => {
  console.log('show setting success');
  console.log(data);
};

const showSettingFailure = (data) => {
  console.log('show setting failure');
  console.log(data);
};

const createSettingSuccess = (data) => {
  console.log('create setting success');
  console.log(data);
  $("#new-setting-form").hide();
  $("#new-observation-form").show();
  $("#create-observation-stud-id").attr("value", store.currentStudentId);
  $("#create-observation-setting-id").attr("value", store.currentSettingId);
  $("#create-observation-number").attr("value", store.currentObsNum);
  $("#interval-total").text(store.currentNumofIntervals);
  $("#interval-count").text(store.currentObsNum);
  $("#student-observed").html('<span id="target-student">Target Student</span>');
};

const createSettingFailure = (data) => {
  console.log('create setting failure');
  console.log(data);
};

const deleteSettingSuccess = (data) => {
  console.log('delete setting success');
  console.log(data);
};

const deleteSettingFailure = (data) => {
  console.log('delete setting failure');
  console.log(data);
};

const updateSettingSuccess = (data) => {
  console.log('update setting success');
  console.log(data);
};

const updateSettingFailure = (data) => {
  console.log('update setting failure');
  console.log(data);
};

// Observation UI

const getObservationSuccess = (data) => {
  console.log('update observation success');
  console.log(data);
};

const getObservationNumsSuccess = function() {
    console.log('get next obs number success');
    // console.log("logic.withinObsInterval");
    // console.log(logic.withinObsInterval());
    let continueWithInterval = logic.withinObsInterval();

    if ( continueWithInterval ) {
      $("#create-observation-number").attr("value", store.currentObsNum);
      $("#interval-count").text(store.currentObsNum);
      logic.studentToObserve(store.currentObsNum);
      $(".field-checkbox").prop("checked", false);
      console.log('continue');
    } else {
      console.log('done');
      $("#new-observation-form").hide();
    }
};

const getObservationNumsFailure = function() {
  console.log('get next obs number failure');
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

const createObservationSuccess = function() {
  console.log('create observation success');
    //
    // console.log("logic.withinObsInterval");
    // console.log(logic.withinObsInterval());
    // let continueWithInterval = logic.withinObsInterval();
    //
    // if ( continueWithInterval ) {
    //   store.currentObsNum += 1;
    //   $("#create-observation-number").attr("value", store.currentObsNum);
    //   $(".field-checkbox").prop("checked", false);
    // } else {
    //   $("#new-observation-form").hide();
    // }
};

const createObservationFailure = (data) => {
  console.log('create observation failure');
  console.log(data);
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
  success,
  failure,
  createStudentSuccess,
  createStudentFailure,
  getSettingSuccess,
  getSettingFailure,
  showSettingSuccess,
  showSettingFailure,
  createSettingSuccess,
  createSettingFailure,
  updateSettingSuccess,
  updateSettingFailure,
  createObservationSuccess,
  createObservationFailure,
  getStudentSuccess,
  getStudentFailure,
  showStudentSuccess,
  showStudentFailure,
  getObservationSuccess,
  getObservationFailure,
  showObservationSuccess,
  showObservationFailure,
  updateStudentSuccess,
  updateStudentFailure,
  updateObservationSuccess,
  updateObservationFailure,
  deleteStudentSuccess,
  deleteStudentFailure,
  deleteSettingSuccess,
  deleteSettingFailure,
  deleteObservationSuccess,
  deleteObservationFailure,
  signInSuccess,
  getObservationNumsSuccess,
  getObservationNumsFailure,
};
