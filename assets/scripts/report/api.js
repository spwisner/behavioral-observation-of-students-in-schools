'use strict';

const config = require('../config');
const store = require('../store');

// Sessions API

const createReportManually = function(pi, cba, ss, aet, pet, oftm, oftv, oftp, find, cfone, cftwo, cfthree, rec, cn, cftone, cfttwo, cftthree) {
    return $.ajax({
      url: config.apiOrigin + '/students/' + store.currentStudentId + '/sessions/' + store.currentSessionId + '/reports',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
      data: {
        "report": {
          "presenting_issue": pi,
          "class_behav_assess": cba,
          "r_setting": ss,
          "r_aet": aet,
          "r_pet": pet,
          "r_oftm": oftm,
          "r_oftv": oftv,
          "r_oftp": oftp,
          "r_finding": find,
          "r_customone": cfone,
          "r_customtwo": cftwo,
          "r_customthree": cfthree,
          "r_recommendation": rec,
          "counselor_name": cn,
          "custom_one_title": cftone,
          "custom_two_title": cfttwo,
          "custom_three_title": cftthree
        }
      }
    });
  };

const updateWriteup = function(id, pi, cba, ss, aet, pet, oftm, oftv, oftp, find, cfone, cftwo, cfthree, rec, cn, cftone, cfttwo, cftthree) {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.currentStudentId + '/sessions/' + store.currentSessionId + '/reports',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: {
      "report": {
        "presenting_issue": pi,
        "class_behav_assess": cba,
        "r_setting": ss,
        "r_aet": aet,
        "r_pet": pet,
        "r_oftm": oftm,
        "r_oftv": oftv,
        "r_oftp": oftp,
        "r_finding": find,
        "r_customone": cfone,
        "r_customtwo": cftwo,
        "r_customthree": cfthree,
        "r_recommendation": rec,
        "counselor_name": cn,
        "custom_one_title": cftone,
        "custom_two_title": cfttwo,
        "custom_three_title": cftthree
      }
    }
  });
};

const submitEditWriteup = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/reports/' + store.currentReportId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
}

const createWriteup = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.currentStudentId + '/sessions/' + store.currentSessionId + '/reports',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

const getChartData = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.currentStudentId + '/sessions/' + store.currentSessionId + '/observations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const getObservationTable = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.currentStudentId + '/sessions/' + store.currentSessionId + '/observations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const getWriteup = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.currentStudentId + '/sessions/' + store.currentSessionId + '/reports',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const getWriteupById = function(student, session) {
  return $.ajax({
    url: config.apiOrigin + '/students/' + student + '/sessions/' + session + '/reports',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};


const getStudentSummary = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + store.currentStudentId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

module.exports = {
  getChartData,
  getObservationTable,
  getStudentSummary,
  createWriteup,
  getWriteup,
  updateWriteup,
  submitEditWriteup,
  getWriteupById,
  createReportManually,
};
