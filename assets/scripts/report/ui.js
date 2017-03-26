'use strict';

// const store = require('../store');
const chart = require('./mychart');
const displayObservationsTemplate = require('../templates/get-obs.handlebars');
// const displayLastSubmit = require('../templates/last-submission.handlebars');
// const store = require('../store');
// const apiObservations = require('./api');

// Session UI

const onGetChartDataSuccess = (data) => {
  console.log('get chart data success');
  console.log(data);
};

const onGetChartDataFailure = (data) => {
  console.log('get chart data failure');
  console.log(data);
};

const onGetObservationTableSuccess = (data) => {
  console.log('get observation table success');
  alert();
  console.log(data);
  // console.log('get observation success');
  chart.getColumnSums(data);
  // console.log(store.chartData);
  $(".obs-summary-table").remove();
  let showObservations = displayObservationsTemplate({
    observations: data.observations
  });
  $('.display-observation-container').append(showObservations);
  // onGetChartData();
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
