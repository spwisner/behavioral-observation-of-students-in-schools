'use strict';

// const store = require('../store');
const chart = require('./mychart');
const store = require('../store');
const displayObservationsTemplate = require('../templates/get-obs.handlebars');
const displayReportStats = require('../templates/report-stats.handlebars');
const displayReportStudent = require('../templates/report-student-summary.handlebars');
const displayWriteupReport = require('../templates/report-writeup.handlebars');
const reportLogic = require('./logic');

// Report UI

//Writeup

const editWriteupSuccess = () => {
  console.log('edit writeup successful');
};

const editWriteupFailure = () => {
  console.log('edit writeup failure');
};

const getWriteupSuccess = () => {
  console.log('create writeup successful');
  let data = store.getWriteupObject;
  console.log(data);

  // $('.report-writeup-table').remove();
  let showWriteup = displayWriteupReport({
    report: data.report
  });
  $('.report-writeup-container').append(showWriteup);

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
  // console.log('get observation table success');
  chart.getColumnSums(data);
  $(".obs-summary-table").remove();
  console.log("getdata");
  console.log(data);
  let showObservations = displayObservationsTemplate({
    observations: data.observations
  });
  let showStatistics = displayReportStats({
    observations: data.observations
  });
  $('.display-observation-container').append(showObservations);
  $('.display-stats-table-container').append(showStatistics);
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
};
