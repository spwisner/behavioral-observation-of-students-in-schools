// 'use strict';
//
// // const observationTimer = function(minutes) {
// //   let seconds = 60;
// //   let mins = minutes;
// //
// //   function tick() {
// //     let counter = document.getElementById("observation-timer");
// //     let current_minutes = mins - 1;
// //     seconds--;
// //     counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
// //     if (seconds > 0) {
// //       setTimeout(tick, 1000);
// //     } else {
// //
// //       if (mins > 1) {
// //
// //         observationTimer(mins - 1);
// //
// //       }
// //     }
// //   }
// //   tick();
// // };
// //
// const displayIntervalTime = function() {
//   let x = 12;
//   let y = document.getElementById("interval-timer");
//   // Display count down for 20 seconds
//   setInterval(function() {
//     if (x <= 13 && x >= 1) {
//       x--;
//       y.innerHTML = '' + x + '';
//       if (x === 1) {
//         x = 13;
//       }
//     }
//   }, 1000);
// };
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
// module.exports = {
// //   observationTimer,
// //   submitForm,
//   displayIntervalTime,
//   runAutoSubmit,
// //   runAutoSubmit,
// };
