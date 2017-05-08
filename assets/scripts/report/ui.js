'use strict';

// const store = require('../store');
const chart = require('./mychart');
const store = require('../store');
const displayObservationsTemplate = require('../templates/observation/get-obs.handlebars');
const displayReportStats = require('../templates/report/report-stats.handlebars');
const displayReportStudent = require('../templates/report/report-student-summary.handlebars');
const displayEditWriteupReport = require('../templates/report/report-edit-writeup.handlebars');
const reportLogic = require('./logic');
const observationLogic = require('../observations/logic');
const sessionsApi = require('../sessions/api');
const sessionsUi = require('../sessions/ui');

// Report UI

const success = () => {
  $(".notification-container").children().text("");
};

const fail = () => {
  $(".notification-container").children().text("");
};

const editWriteupSubmitSuccess = () => {
  $(".notification-container").children().text("");
  let generateBackToReportBtn = $('<button id="session-record-view-report" class="btn btn-success current" type="button" data-current-student-id="" data-current-session-id="" data-current-report-id="">Back To Report</button>');
  let generateSuccessMessage = $('<p>Your Report Has Been Successfully Updated</p>');
  $("#report-edit-writeup-form").remove();
  $(".successful-update-message-container").append(generateSuccessMessage);
  $(".successful-update-message-container").append(generateBackToReportBtn);
  $(".current").attr("data-current-student-id", store.currentStudentId);
  $(".current").attr("data-current-session-id", store.currentSessionId);
  $(".current").attr("data-current-report-id", store.currentReportId);
};

const editWriteupSubmitFailure = () => {
  $(".notification-container").children().text("");
  $("#update-report-error").text("Error: Report not updated. Please ensure all required fields have values.");
};


const editWriteupSuccess = () => {
  $(".notification-container").children().text("");
  $('.content').children().remove();
  let data = store.editWriteupObject;

  let editWriteup = displayEditWriteupReport({
    report: data.report
  });
  $('.content').append(editWriteup);

  $("#edit-report-writeup-btn").attr("data-current-student-id", store.currentStudentId);
  $("#edit-report-writeup-btn").attr("data-current-session-id", store.currentSessionId);
  $("#edit-report-writeup-btn").attr("data-current-report-id", store.currentReportId);
};

const editWriteupFailure = () => {
  $(".notification-container").children().text("");
};

//Writeup

const getWriteupSuccess = () => {
  $(".notification-container").children().text("");
  const writeupPrinterFriendlyBtn = $('<button id="writeup-printer-friendly-btn" class="btn btn-success btn-sm current" type="button" data-current-student-id="" data-current-session-id="" data-current-report-id="">Printer Frindely</button>');
  const generateWrittenUpdateBtn = $('<button id="generate-written-update-btn" class="btn btn-warning btn-sm current" type="button" data-current-student-id="" data-current-session-id="" data-current-report-id="">Click To Update</button>');
  const generateWrittenHideBtn = $('<button id="generate-written-hide-btn" class="btn btn-info btn-sm current" type="button" data-current-student-id="" data-current-session-id="" data-current-report-id="">Hide Report</button>');
  let data = store.getWriteupObject;

  if (data !== null) {

    $('.report-summary-btn-container').append(generateWrittenUpdateBtn);
    $('.report-summary-btn-container').append(generateWrittenHideBtn);
    $('.report-summary-btn-container').append(writeupPrinterFriendlyBtn);

    $("#generate-written-update-btn").attr("data-current-report-id", store.currentReportId);
    $(".current").attr("data-current-report-id", store.currentReportId);
  }

  $(".current").attr("data-current-student-id", store.currentStudentId);
  $(".current").attr("data-current-session-id", store.currentSessionId);
};

const getWriteupFailure = () => {
  $(".notification-container").children().text("");

};

const createWriteupSuccess = () => {
  $(".notification-container").children().text("");
  $('.content').children().remove();

  sessionsApi.showSession()
    .done(sessionsUi.showSessionSuccess)
    .fail(sessionsUi.showSessionFailure);
};

const createWriteupFailure = () => {
  $(".notification-container").children().text("");
  $("#create-report-error").text("Error: Report not created. Please ensure all required fields have values.");
};

const onGetChartDataSuccess = () => {
  $(".notification-container").children().text("");
};

const onGetChartDataFailure = () => {
  $(".notification-container").children().text("");
};

const onGetObservationTableSuccess = (data) => {
  $(".notification-container").children().text("");
  chart.getColumnSums(data);
  $(".obs-summary-table").remove();
  let showObservations = displayObservationsTemplate({
    observations: data.observations
  });
  let showStatistics = displayReportStats({
    observations: data.observations
  });
  $('.display-stats-table-container').append(showStatistics);
  $('.display-observation-container').append(showObservations);
  observationLogic.sortTable();
  reportLogic.statsTableCountPercent(data);
};

const onGetObservationTableFailure = () => {
  $(".notification-container").children().text("");
};

const showStudentSummarySuccess = (data) => {
  $(".notification-container").children().text("");
  let showStudentSummary = displayReportStudent({
    student: data.student
  });
  $('.display-student-summary-container').append(showStudentSummary);
};

const showStudentSummaryFailure = () => {
  $(".notification-container").children().text("");
};


module.exports = {
  onGetChartDataSuccess,
  onGetChartDataFailure,
  onGetObservationTableSuccess,
  onGetObservationTableFailure,
  showStudentSummarySuccess,
  showStudentSummaryFailure,
  createWriteupSuccess,
  createWriteupFailure,
  getWriteupSuccess,
  getWriteupFailure,
  editWriteupSuccess,
  editWriteupFailure,
  editWriteupSubmitSuccess,
  editWriteupSubmitFailure,
  success,
  fail,
};
