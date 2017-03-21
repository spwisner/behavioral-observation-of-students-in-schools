'use strict';

const etChart = document.getElementById("et-chart").getContext('2d');
const oftChart = document.getElementById("oft-chart").getContext('2d');

const createChart = function() {
  let myChart = new Chart(etChart, {
    type: 'bar',
    data: {
      labels: ["Oft-V", "Oft-M", "Oft-P"],
      datasets: [{
        label: 'Target',
        data: [12, 19, 3],
        backgroundColor: "rgba(153,255,51,1)"
      }, {
        label: 'Random',
        data: [30, 29, 5],
        backgroundColor: "rgba(255,153,0,1)"
      }]
    }
  });
}

createChart();
