'use strict';
const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
const logic = require('./logic');

// LOGIN EVENTS

const onSignIn = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .then((response) => {
      store.user = response.user;
      return store.user;
    })
    .done(ui.signInSuccess)
    .catch(ui.onSignInFailure);
};

const onSignUp = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.success)
    .catch(ui.failure);
};

const onSignOut = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onChangePassword = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.success)
    .fail(ui.failure);
};

// STUDENT EVENTS

const onGetStudents = function(event) {
  event.preventDefault();
  api.getStudents()
    .done(ui.getStudentSuccess)
    .fail(ui.getStudentFailure);
};

const onShowStudent = function(event) {
  event.preventDefault();
  api.showStudent()
    .done(ui.showStudentSuccess)
    .fail(ui.showStudentFailure);
};

const onCreateStudent = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createStudent(data)
    .then((response) => {
      store.currentStudentId = response.student.id;
      return store.currentStudentId;
    })
    .done(ui.createStudentSuccess)
    .fail(ui.createStudentFailure);
};

const onDeleteStudent = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deleteStudent(data)
    .done(ui.deleteStudentSuccess)
    .fail(ui.deleteStudentFailure);
};

const onUpdateStudent = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateStudent(data)
    .done(ui.updateStudentSuccess)
    .fail(ui.updateStudentFailure);
};

// SETTING EVENTS

const onGetSettings = function(event) {
  event.preventDefault();
  api.getSettings()
    .done(ui.getSettingSuccess)
    .fail(ui.getSettingFailure);
};

const onShowSetting = function(event) {
  event.preventDefault();
  api.showSetting()
    .done(ui.showSettingSuccess)
    .fail(ui.showSettingFailure);
};

const onCreateSetting = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createSetting(data)
    .then((response) => {
      store.currentSettingId = response.setting.id;
      store.currentNumofIntervals = response.setting.num_of_int;
      store.currentObsIntervalTime = response.setting.obs_time;
      console.log("currentObsIntervalTime");
      console.log(store.currentObsIntervalTime);
      store.currentObsNum = 1;
      // return store.currentSetting;
    })
    .done(ui.createSettingSuccess)
    .fail(ui.createSettingFailure);
};

const onDeleteSetting = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deleteSetting(data)
    .done(ui.deleteSettingSuccess)
    .fail(ui.deleteSettingFailure);
};

const onUpdateSetting = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateSetting(data)
    .done(ui.updateSettingSuccess)
    .fail(ui.updateSettingFailure);
};

// OBSERVATION EVENTS

const onGetObservations = function(event) {
  event.preventDefault();
  api.getObservations()
    .done(ui.getObservationSuccess)
    .fail(ui.getObservationFailure);
};

const onShowObservation = function(event) {
  event.preventDefault();
  api.showObservation()
    .done(ui.showObservationSuccess)
    .fail(ui.showObservationFailure);
};

const onCreateObservationNums = function() {
  api.getObservationsCreate()
    .then((response) => {
      store.currentObsNum = response.observations.length + 1;
      return store.currentObsNum;
    })
    .done(ui.onCreateObservationNumsSuccess)
    .fail(ui.onCreateObservationNumsFailure);
};

const onCreateObservation = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createObservation(data)
    .then(() => {
      // store.currentObsNum = response.observation.obs_num;
      onCreateObservationNums();
      // return store.currentSetting;
    })
    .done(ui.createObservationSuccess)
    .fail(ui.createObservationFailure);
};

const onDeleteObservation = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deleteObservation(data)
    .done(ui.deleteObservationSuccess)
    .fail(ui.deleteObservationFailure);
};

const onUpdateObservation = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateObservation(data)
    .done(ui.updateObservationSuccess)
    .fail(ui.updateObservationFailure);
};

const startSession = function() {
  $("#new-student-form").show();
};

//////////////////
//////////////////

const defineTimerInterval = function() {
  console.log('running');
  debugger;
  const convertTimeToJquery = parseInt(store.currentObsIntervalTime) * 1000;
  setInterval(logic.observationTimer, convertTimeToJquery);
};


// const defineObsSubmitInterval = function(interval) {
//   setInterval(autoSubmitObs, interval);
// }

// const beginObsSession = function() {
//   let continueToNext = logic.withinObsInterval();
//   if (continueToNext) {
//     const convertTimeToJquery = store.currentObsIntervalTime;
//     logic.observationTimer();
//     setInterval(function() {
//       $("#new-observation-form").submit();
//     }, convertTimeToJquery);
//   } else {
//     return;
//   }
// };

// const timerStart = function() {
//   logic.observationTimer(2);
// };


const addHandlers = () => {
  $('#get-students-form').on('submit', onGetStudents);
  $('#show-student-form').on('submit', onShowStudent);
  $('#new-student-form').on('submit', onCreateStudent);
  $('#delete-student-form').on('submit', onDeleteStudent);
  $('#delete-setting-form').on('submit', onDeleteSetting);
  $('#update-student-form').on('submit', onUpdateStudent);
  $('#get-settings-form').on('submit', onGetSettings);
  $('#show-setting-form').on('submit', onShowSetting);
  $('#new-setting-form').on('submit', onCreateSetting);
  $('#update-setting-form').on('submit', onUpdateSetting);
  $('#get-observations-form').on('submit', onGetObservations);
  $('#show-observation-form').on('submit', onShowObservation);
  $('#new-observation-form').on('submit', onCreateObservation);
  $('#delete-observation-form').on('submit', onDeleteObservation);
  $('#update-observation-form').on('submit', onUpdateObservation);
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#new-session-btn').on('click', startSession);
  $('#begin-session-btn').on('click', defineTimerInterval);

  // $("#begin-session-btn").on("click", beginObsSession);
};

module.exports = {
  addHandlers,
};
