'use strict';

// const store = require('../store');
const chart = require('./mychart');
const displayObservationsTemplate = require('../templates/get-obs.handlebars');
const displayReportStats = require('../templates/report-stats.handlebars');
const reportLogic = require('./logic');

// Report UI

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


module.exports = {
  onGetChartDataSuccess,
  onGetChartDataFailure,
  onGetObservationTableSuccess,
  onGetObservationTableFailure,
};
