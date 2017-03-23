'use strict';

const store = require('../store');
const Chart = require('chart.js');

// let chartDataObject = store.chartData;




const createChart = function(targetFinalArr, randomFinalArr) {
  const etChart = document.getElementById("et-chart").getContext('2d');
  const oftChart = document.getElementById("oft-chart").getContext('2d');

  const buildChart = function() {
    let targetEtArr = [targetFinalArr[0], targetFinalArr[1]];
    let targetOftArr = [targetFinalArr[2], targetFinalArr[3], targetFinalArr[4]];
    let randomEtArr = [randomFinalArr[0], randomFinalArr[1]];
    let randomOftArr = [randomFinalArr[2], randomFinalArr[3], randomFinalArr[4]];
    let etLabels = ["AET", "PET"];
    let oftLabels = ["Oft-V", "Oft-M", "Oft-P"];

    let etChartDisplay = new Chart(etChart, {
      type: 'bar',
      data: {
        labels: etLabels,
        datasets: [{
          label: 'Target',
          data: targetEtArr,
          backgroundColor: "rgba(153,255,51,1)"
        }, {
          label: 'Random',
          data: randomEtArr,
          backgroundColor: "rgba(255,153,0,1)"
        }]
      }
    });

    let oftChartDisplay = new Chart(oftChart, {
      type: 'bar',
      data: {
        labels: oftLabels,
        datasets: [{
          label: 'Target',
          data: targetOftArr,
          backgroundColor: "rgba(153,255,51,1)"
        }, {
          label: 'Random',
          data: randomOftArr,
          backgroundColor: "rgba(255,153,0,1)"
        }]
      }
    });

  };
  buildChart();
};

const getColumnSums = function(data) {
  // target array and count vars
  let targetFinalArr = [];
  let targetAetDataCount = 0;
  let targetPetDataCount = 0;
  let targetOftVDataCount = 0;
  let targetOftMDataCount = 0;
  let targetOftPDataCount = 0;

  // target array and count vars
  let randomFinalArr = [];
  let randomAetDataCount = 0;
  let randomPetDataCount = 0;
  let randomOftVDataCount = 0;
  let randomOftMDataCount = 0;
  let randomOftPDataCount = 0;

  let dataArr = data.observations;

  for (let i = 0; i < dataArr.length; i++) {

    let aetData = dataArr[i].aet;
    if (aetData === true) {
      if ( (i+1) % 5 === 0 ) {
        randomAetDataCount += 1;
      } else {
        targetAetDataCount += 1;
      }
    }

    let petData = dataArr[i].pet;
    if (petData === true) {
      if ( (i+1) % 5 === 0 ) {
        randomPetDataCount += 1;
      } else {
        targetPetDataCount += 1;
      }
    }


    let oftVData = dataArr[i].oft_v;
    if (oftVData === true) {
      if ( (i+1) % 5 === 0 ) {
        randomOftVDataCount += 1;
      } else {
        targetOftVDataCount += 1;
      }
    }


    let oftMData = dataArr[i].oft_m;
    if (oftMData === true) {
      if ( (i+1) % 5 === 0 ) {
        randomOftMDataCount += 1;
      } else {
        targetOftMDataCount += 1;
      }
    }

    let oftPData = dataArr[i].oft_p;
    if (oftPData === true) {
      if ( (i+1) % 5 === 0 ) {
        randomOftPDataCount += 1;
      } else {
        targetOftPDataCount += 1;
      }
    }
  }

  targetFinalArr.push(targetAetDataCount);
  targetFinalArr.push(targetPetDataCount);
  targetFinalArr.push(targetOftVDataCount);
  targetFinalArr.push(targetOftMDataCount);
  targetFinalArr.push(targetOftPDataCount);

  randomFinalArr.push(randomAetDataCount);
  randomFinalArr.push(randomPetDataCount);
  randomFinalArr.push(randomOftVDataCount);
  randomFinalArr.push(randomOftMDataCount);
  randomFinalArr.push(randomOftPDataCount);

  createChart(targetFinalArr, randomFinalArr);
};


module.exports = {
  getColumnSums,
  createChart,
};
