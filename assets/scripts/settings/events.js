'use strict';
const settingsApi = require('./api');
const settingsUi = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
// const logic = require('./logic');

// SETTING EVENTS

const onGetSettings = function(event) {
  event.preventDefault();
  settingsApi.getSettings()
    .done(settingsUi.getSettingSuccess)
    .fail(settingsUi.getSettingFailure);
};

const onShowSetting = function(event) {
  event.preventDefault();
  settingsApi.showSetting()
    .done(settingsUi.showSettingSuccess)
    .fail(settingsUi.showSettingFailure);
};

const onCreateSetting = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  settingsApi.createSetting(data)
    .then((response) => {
      store.currentSettingId = parseInt(response.setting.id);
      store.currentNumofIntervals = parseInt(response.setting.num_of_int);
      store.currentObsIntervalTime = parseInt(response.setting.obs_time);
      console.log("settid id");
      console.log(store.currentSettingId);
      // store.currentObsNum = 1;
      // return store.currentSetting;
    })
    .done(settingsUi.createSettingSuccess)
    .fail(settingsUi.createSettingFailure);
};

const onDeleteSetting = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  settingsApi.deleteSetting(data)
    .done(settingsUi.deleteSettingSuccess)
    .fail(settingsUi.deleteSettingFailure);
};

const onUpdateSetting = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  settingsApi.updateSetting(data)
    .done(settingsUi.updateSettingSuccess)
    .fail(settingsUi.updateSettingFailure);
};

const addHandlers = () => {
  $('#delete-setting-form').on('submit', onDeleteSetting);
  $('#get-settings-form').on('submit', onGetSettings);
  $('#show-setting-form').on('submit', onShowSetting);
  $('#new-setting-form').on('submit', onCreateSetting);
  $('#update-setting-form').on('submit', onUpdateSetting);
};

module.exports = {
  addHandlers,
};
