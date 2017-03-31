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
  $(".current").attr("data-current-student-id", store.currentStudentId );
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

  $("#edit-report-writeup-btn").attr("data-current-student-id", store.currentStudentId );
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
  console.log('create writeup successful');
  let data = store.getWriteupObject;

  if (data !== null) {
    console.log(data);
    let showWriteup = displayWriteupReport({
      report: data.report
    });
    $('.display-written-report-container').append(showWriteup);

    $("#writeup-printer-friendly-btn").show();
    $("#generate-written-hide-btn").show();
    $("#generate-written-update-btn").show();
    $("#generate-written-create-btn").hide();

    $("#generate-written-update-btn").attr("data-current-report-id", store.currentReportId);
    $(".current").attr("data-current-report-id", store.currentReportId);
  } else {
    $("#writeup-printer-friendly-btn").hide();
    $("#generate-written-hide-btn").hide();
    $("#generate-written-update-btn").hide();
    $("#generate-written-create-btn").show();
  }

  $(".current").attr("data-current-student-id", store.currentStudentId);
  $(".current").attr("data-current-session-id", store.currentSessionId);
  // $('.report-writeup-table').remove();
  // let showWriteup = displayWriteupReport({
  //   report: data.report
  // });
  // $('.report-writeup-container').append(showWriteup);

};

const getWriteupFailure = (data) => {
  $(".notification-container").children().text("");
  console.log('create writeup successful');
  console.log(data);
};

const createWriteupSuccess = (data) => {
  $(".notification-container").children().text("");
  console.log('create writeup successful');
  console.log(data);
};

const createWriteupFailure = (data) => {
  $(".notification-container").children().text("");
  $("#create-report-error").text("Error: Report not created. Please ensure all required fields have values.")
  console.log('create writeup successful');
  console.log(data);
};
//


const onGetChartDataSuccess = (data) => {
  $(".notification-container").children().text("");
  console.log('get chart data success');
  console.log(data);
};

const onGetChartDataFailure = (data) => {
  $(".notification-container").children().text("");
  console.log('get chart data failure');
  console.log(data);
};

const onGetObservationTableSuccess = (data) => {
  $(".notification-container").children().text("");
  console.log("tabledata")
  console.log(data);
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

const onGetObservationTableFailure = (data) => {
  $(".notification-container").children().text("");
  console.log('get observation table failure');
  console.log(data);
};

const showStudentSummarySuccess = (data) => {
  $(".notification-container").children().text("");
  console.log('show student success');
  console.log(data);
  let showStudentSummary = displayReportStudent({
    student: data.student
  });
  $('.display-student-summary-container').append(showStudentSummary);
};

const showStudentSummaryFailure = (data) => {
  $(".notification-container").children().text("");
  console.log('show student failure');
  console.log(data);
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
