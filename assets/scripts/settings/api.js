'use strict';

const config = require('../config');
const store = require('../store');

// Settings API

const getSettings = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("get-setting-stud-id").value + '/settings',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const showSetting = function() {
  return $.ajax({
    url: config.apiOrigin + '/settings/' + document.getElementById("show-setting-setting-id").value,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const createSetting = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("create-setting-stud-id").value + '/settings',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

const deleteSetting = function() {
  return $.ajax({
    url: config.apiOrigin + '/settings/' + document.getElementById("delete-setting-setting-id").value,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const updateSetting = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/settings/' + document.getElementById("update-setting-setting-id").value,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

module.exports = {
  createSetting,
  getSettings,
  showSetting,
  updateSetting,
  deleteSetting,
};
