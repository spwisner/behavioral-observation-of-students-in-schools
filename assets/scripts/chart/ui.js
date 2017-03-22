'use strict';

const store = require('../store');

// Session UI

const onGetChartDataSuccess = (data) => {
  console.log('get chart data success');
  console.log(data);
};

const onGetChartDataFailure = (data) => {
  console.log('get chart data failure');
  console.log(data);
};

module.exports = {
  onGetChartDataSuccess,
  onGetChartDataFailure,
};
