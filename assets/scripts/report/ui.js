'use strict';

// const store = require('../store');
const chart = require('./mychart');
const store = require('../store');
const displayObservationsTemplate = require('../templates/observation/get-obs.handlebars');
const displayReportStats = require('../templates/report/report-stats.handlebars');
const displayReportStudent = require('../templates/report/report-student-summary.handlebars');
const displayWriteupReport = require('../templates/report/report-writeup.handlebars');
const displayEditWriteupReport = require('../templates/report/report-edit-writeup.handlebars');
const reportLogic = require('./logic');

// Report UI

const editWriteupSubmitSuccess = () => {
  $(".notification-container").children().text("");
  console.log('submit edit writeup successful');
  let generateBackToReportBtn = $('<button id="session-record-view-report" class="btn btn-success current" type="button" data-current-student-id="" data-current-session-id="" data-current-report-id="">Back To Report</button>');
  let generateSuccessMessage = $('<p>Your Report Has Been Successfully Updated</p>');
  $("#report-edit-writeup-form").remove();
  $(".successful-update-message-container").append(generateSuccessMessage);
  $(".successful-update-message-container").append(generateBackToReportBtn);
  $(".current").attr("data-current-student-id", store.currentStudentId);
  $(".current").attr("data-current-session-id", store.currentSessionId);
  $(".current").attr("data-current-report-id", store.currentReportId);
  // $('.report-writeup-table').remove();
};

const editWriteupSubmitFailure = () => {
  $(".notification-container").children().text("");
  console.log('submit edit writeup failure');
  $("#update-report-error").text("Error: Report not updated. Please ensure all required fields have values.");
};


const editWriteupSuccess = () => {
  $(".notification-container").children().text("");
  console.log('edit writeup successful');
  $('.content').children().remove();
  let data = store.editWriteupObject;

  // $('.report-writeup-table').remove();
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
  console.log('edit writeup failure');
};
//Writeup

const getWriteupSuccess = () => {
  $(".notification-container").children().text("");
  const writeupPrinterFriendlyBtn = $('<button id="writeup-printer-friendly-btn" class="btn btn-success btn-sm current" type="button" data-current-student-id="" data-current-session-id="" data-current-report-id="">Printer Frindely</button>');
  const generateWrittenUpdateBtn = $('<button id="generate-written-update-btn" class="btn btn-warning btn-sm current" type="button" data-current-student-id="" data-current-session-id="" data-current-report-id="">Click To Update</button>');
  const generateWrittenHideBtn = $('<button id="generate-written-hide-btn" class="btn btn-info btn-sm current" type="button" data-current-student-id="" data-current-session-id="" data-current-report-id="">Hide Report</button>');

  console.log('create writeup successful');
  let data = store.getWriteupObject;

  if (data !== null) {

    // let showWriteup = displayWriteupReport({
    //   report: data.report
    // });

    $("#generate-written-create-btn").remove();
    // $('.display-written-report-container').append(showWriteup);
    $('.report-summary-btn-container').append(generateWrittenUpdateBtn);
    $('.report-summary-btn-container').append(generateWrittenHideBtn);
    $('.report-summary-btn-container').append(writeupPrinterFriendlyBtn);

    $("#generate-written-update-btn").attr("data-current-report-id", store.currentReportId);
    $(".current").attr("data-current-report-id", store.currentReportId);
  }

  $("#generate-written-create-btn").attr("data-current-student-id", store.currentStudentId);
  $("#generate-written-create-btn").attr("data-current-session-id", store.currentSessionId);

  $(".current").attr("data-current-student-id", store.currentStudentId);
  $(".current").attr("data-current-session-id", store.currentSessionId);
  // $('.report-writeup-table').remove();
  // let showWriteup = displayWriteupReport({
  //   report: data.report
  // });
  // $('.report-writeup-container').append(showWriteup);

};

const getWriteupFailure = () => {
  $(".notification-container").children().text("");

};

const createWriteupSuccess = () => {
  $(".notification-container").children().text("");
};

const createWriteupFailure = () => {
  $(".notification-container").children().text("");
  $("#create-report-error").text("Error: Report not created. Please ensure all required fields have values.")
};
//


const onGetChartDataSuccess = () => {
  $(".notification-container").children().text("");
};

const onGetChartDataFailure = () => {
  $(".notification-container").children().text("");
};

const onGetObservationTableSuccess = (data) => {
  $(".notification-container").children().text("");
  // console.log('get observation table success');
  chart.getColumnSums(data);
  $(".obs-summary-table").remove();
  // console.log("getdata");
  // console.log(data);
  let showObservations = displayObservationsTemplate({
    observations: data.observations
  });
  let showStatistics = displayReportStats({
    observations: data.observations
  });
  $('.display-stats-table-container').append(showStatistics);
  $('.display-observation-container').append(showObservations);
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
};
