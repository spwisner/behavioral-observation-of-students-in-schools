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

/////////////
/////////////
/////////////

// const observationTimer = function() {
//   let x = parseInt(store.currentObsIntervalTime);
//   let max = parseInt(store.currentObsIntervalTime) + 1;
//   let y = document.getElementById("interval-timer");
//   // Display count down for 20 seconds
//   setInterval(function() {
    // if (x <= max && x >= 1) {
    //   x--;
    //   y.innerHTML = '' + x + '';
    //   if (x === 1) {
    //     x = max;
    //     $("#new-observation-form").submit();
    //   }
    // }
//   }, 1000);
// };


// const observationTimer = function() {
//   const max = store.currentObsIntervalTime + 1;
//   let timeRemaining = store.currentObsIntervalTime;
//   const intervalTimerDiv = document.getElementById("interval-timer");
//     setInterval(function() {
//       if (timeRemaining <= max && timeRemaining >= 1) {
//         timeRemaining--;
//         console.log("timeRemaining");
//         console.log(timeRemaining);
//         intervalTimerDiv.innerHTML = '' + timeRemaining + '';
//         if (timeRemaining === 1) {
//           timeRemaining = max;
//         }
//       }
//     }, 1000);
// };

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

module.exports = {
  withinObsInterval,
  studentToObserve,
  // observationTimer,
  //   observationTimer,
  //   submitForm,
  //   displayIntervalTime,
  //   runAutoSubmit,
  //   runAutoSubmit,
};
