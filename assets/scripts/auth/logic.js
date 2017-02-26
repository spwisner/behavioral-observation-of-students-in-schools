'use strict';

const store = require('../store');

const withinObsInterval = function() {
  if (store.currentObsNum <= store.currentNumofIntervals) {
      return true;
  } else {
      return false;
  }
};

const studentToObserve = function(obs_num) {
  console.log("obs_num");
  console.log(obs_num);
  console.log("obs_num%5");
  console.log(obs_num);
  if (obs_num % 5 === 0) {
    $("#student-observed").text("Random Peer");
    $("#student-observed").addClass("random-peer");
  } else {
    $("#student-observed").text("Target Student");
    $("#student-observed").addClass("target-student");
  }
};

//
// const observationTimer = function(minutes) {
//   let seconds = 60;
//   let mins = minutes;
//
//   function tick() {
//     let counter = document.getElementById("observation-timer");
//     let current_minutes = mins - 1;
//     seconds--;
//     counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
//     if (seconds > 0) {
//       setTimeout(tick, 1000);
//     } else {
//
//       if (mins > 1) {
//
//         observationTimer(mins - 1);
//
//       }
//     }
//   }
//   tick();
// };
//
//
// const displayIntervalTime = function() {
//   let count = 0;
//   let x = 12;
//   let y = document.getElementById("interval-timer");
//   let z = document.getElementById("interval-count");
//   // Display count down for 20 seconds
//   setInterval(function() {
//     if (x <= 13 && x >= 1) {
//       x--;
//       y.innerHTML = '' + x + '';
//       z.innerHTML = '' + count + '';
//       if (x === 1) {
//         x = 13;
//         count++;
//       }
//     }
//   }, 1000);
// };
//
//
//
//
// const runAutoSubmit = function(minutes) {
//   let totalIntervals = (minutes * 5);
//   let count = 0;
//   while (count <= totalIntervals) {
//
//   }
// };
// //
//
// const submitFormInterval = function(minutes) {
//   let totalIntervals = (minutes * 1);
//   let count = 0;
//   setInterval(function() {
//     document.getElementById("new-observation-form").submit();
//     count += 1;
//   }, 12000);
//   if (count > totalIntervals) {
//     return;
//   }
// };
//
//
//
// $('#begin-session-btn').on('click', displayIntervalTime);
module.exports = {
  withinObsInterval,
  studentToObserve,
//   observationTimer,
//   submitForm,
//   displayIntervalTime,
//   runAutoSubmit,
//   runAutoSubmit,
};
