'use strict';

let etData = [12, 7];

let oftData = [5, 7, 12];

let etChart = document.getElementById("et-chart");
let oftChart = document.getElementById("oft-chart");

const createChart = function(labeltype, results, element, bgc, brd) {
  let myChart = new Chart(element, {
    type: 'bar',
    data: {
      labels: labeltype,
      datasets: [{
        label: 'Number Observed',
        data: results,
        backgroundColor: bgc,
        borderColor: brd,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  return myChart;
};

const chartGenerator = function(etData, oftData) {

  let etLabelType = ["Target", "Comparison"];
  let oftLabeltype = ["Oft V", "Oft P", "Oft M"];

  let bgColorEt = [
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)'
  ];

  let brdColorEt = [
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)'
  ];

  let bgColorOft = [
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)'
  ];

  let brdColorOft = [
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)'
  ];

  createChart(etLabelType, etData, etChart, bgColorEt, brdColorEt);
  createChart(oftLabeltype, oftData, oftChart, bgColorOft, brdColorOft);

};

chartGenerator(etData, oftData);
