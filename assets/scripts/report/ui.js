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
  console.log('submit edit writeup successful');
  let generateBackToReportBtn = $('<input id="session-record-view-report" class="current" type="button" value="View Reports" data-current-student-id="" data-current-session-id="" data-current-report-id="">');
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
  console.log('submit edit writeup failure');
};


const editWriteupSuccess = () => {
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
  console.log('edit writeup failure');
};
//Writeup

const getWriteupSuccess = () => {
  console.log('create writeup successful');
  let data = store.getWriteupObject;

  if (data !== null) {
    console.log(data);
    let showWriteup = displayWriteupReport({
      report: data.report
    });
    $('.display-written-report-container').append(showWriteup);
    let generateWrittenHideBtn = $('<input id="generate-written-hide-empty-btn" class="current" type="button" value="Hide Written Report" data-current-student-id="" data-current-session-id="" data-current-report-id="">');
    let generateWrittenUpdateBtn = $('<input id="generate-written-update-btn" class="current" type="button" value="Click To Update" data-current-student-id="" data-current-session-id="" data-current-report-id="">');
    $(".create-written-report-btn").append(generateWrittenUpdateBtn);
    $(".create-written-report-btn").append(generateWrittenHideBtn);



    $("#generate-written-update-btn").attr("data-current-report-id", store.currentReportId);
    $(".current").attr("data-current-report-id", store.currentReportId);
  } else {
    let generateWrittenFormBtn = $('<input id="generate-written-create-btn" class="current" type="button" value="Click To Create" data-current-student-id="" data-current-session-id="">');
    $(".create-written-report-btn").append(generateWrittenFormBtn);
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
  console.log('create writeup successful');
  console.log(data);
};

const createWriteupSuccess = (data) => {
  console.log('create writeup successful');
  console.log(data);
};

const createWriteupFailure = (data) => {
  console.log('create writeup successful');
  console.log(data);
};
//


const onGetChartDataSuccess = (data) => {
  console.log('get chart data success');
  console.log(data);
};

const onGetChartDataFailure = (data) => {
  console.log('get chart data failure');
  console.log(data);
};

const onGetObservationTableSuccess = (data) => {
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
  console.log('get observation table failure');
  console.log(data);
};

const showStudentSummarySuccess = (data) => {
  console.log('show student success');
  console.log(data);
  let showStudentSummary = displayReportStudent({
    student: data.student
  });
  $('.display-student-summary-container').append(showStudentSummary);
};

const showStudentSummaryFailure = (data) => {
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
