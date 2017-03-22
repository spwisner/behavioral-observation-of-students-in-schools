'use strict';

const store = require('../store');

let chartDataObject = store.chartData;

const etChart = document.getElementById("et-chart").getContext('2d');
const oftChart = document.getElementById("oft-chart").getContext('2d');

const createChart = function(data) {
  console.log(data);
  let temparr = [];
  temparr.push(data[2]);
  temparr.push(data[3]);
  temparr.push(data[4]);
  let myChart = new Chart(etChart, {
    type: 'bar',
    data: {
      labels: ["Oft-V", "Oft-M", "Oft-P"],
      datasets: [{
        label: 'Target',
        data: temparr,
        backgroundColor: "rgba(153,255,51,1)"
      }, {
        label: 'Random',
        data: temparr,
        backgroundColor: "rgba(255,153,0,1)"
      }]
    }
  });
};

const getColumnSums = function(data) {
  let finalArr = [];
  let aetDataCount = 0;
  let petDataCount = 0;
  let oftVDataCount = 0;
  let oftMDataCount = 0;
  let oftPDataCount = 0;

  let dataArr = data.observations;

  for (let i = 0; i < dataArr.length; i++) {
    let aetData = dataArr[i].aet;
    if (aetData === true) {
      aetDataCount += 1;
    }

    let petData = dataArr[i].pet;
    if (petData === true) {
      petDataCount += 1;
    }

    let oftVData = dataArr[i].oft_v;
    if (oftVData === true) {
      oftVDataCount += 1;
    }

    let oftMData = dataArr[i].oft_m;
    if (oftMData === true) {
      oftMDataCount += 1;
    }

    let oftPData = dataArr[i].oft_p;
    if (oftPData === true) {
      oftPDataCount += 1;
    }
  }

  finalArr.push(aetDataCount);
  finalArr.push(petDataCount);
  finalArr.push(oftVDataCount);
  finalArr.push(oftMDataCount);
  finalArr.push(oftPDataCount);

  createChart(finalArr);
};


module.exports = {
  getColumnSums,
  createChart,
};
