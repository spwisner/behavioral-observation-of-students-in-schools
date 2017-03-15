'use strict';

const store = require('../store');

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
  // $("#create-observation-number").attr("value", store.currentObsNum);
  console.log("store.currentObsNum");
  console.log(store.currentObsNum)
  $("#interval-total").text(store.currentObsNum);
  // $("#interval-count").text(store.currentObsNum);
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

module.exports = {
  getSettingSuccess,
  getSettingFailure,
  showSettingSuccess,
  showSettingFailure,
  createSettingSuccess,
  createSettingFailure,
  updateSettingSuccess,
  updateSettingFailure,
  deleteSettingSuccess,
  deleteSettingFailure,
};
