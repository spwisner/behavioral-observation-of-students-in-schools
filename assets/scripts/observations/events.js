'use strict';
const apiObservations = require('./api');
const uiObservations = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
// const logic = require('./logic');

// OBSERVATION EVENTS

const onGetObservations = function(event) {
  event.preventDefault();
  apiObservations.getObservations()
    .done(uiObservations.getObservationSuccess)
    .fail(uiObservations.getObservationFailure);
};

const onShowObservation = function(event) {
  event.preventDefault();
  apiObservations.showObservation()
    .done(uiObservations.showObservationSuccess)
    .fail(uiObservations.showObservationFailure);
};

const onCreateObservation = function(event) {
    event.preventDefault();
    let data = getFormFields(event.target);
    apiObservations.createObservation(data)
      .done(uiObservations.createObservationSuccess)
      .fail(uiObservations.createObservationFailure);
    //
    // apiObservations.getObservations()
    //   // .then((response) => {
    //   //   store.currentObsNum = response.observations.length + 1;
    //   //   console.log('important - store.currentObsNum');
    //   //   console.log(store.currentObsNum);
    //   //   let obsListLenth = store.currentObsNum;
    //   //   if ( obsListLenth === 0 ) {
    //   //     store.currentObsNum = 1;
    //   //     return store.currentObsNum;
    //   //   } else {
    //   //     store.currentObsNum = response.observations.length + 1;
    //   //     return store.currentObsNum;
    //   //   }
    //   // })
    //   .done(uiObservations.createObservationSuccess)
    //   .fail(uiObservations.createObservationFailure);
};

// const onCreateObservation = function(event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   apiObservations.getObservationsCreate()
//   .done(uiObservations.createObservationSuccess)
//   .fail(uiObservations.createObservationFailure);
//
//   // Archive
//   // console.log('running onCreateObs in Events.js');
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   apiObservations.getObservationsCreate()
//     .then((response) => {
//       store.currentObsNum = response.observations.length + 1;
//       console.log('important - store.currentObsNum');
//       console.log(store.currentObsNum);
//     })
//     .done(uiObservations.getPastObsNumSuccess)
//     .fail(uiObservations.getPastObsNumFailure);
//   apiObservations.createObservation(data)
//     .then((response) => {
//       store.currentObsNum = store.currentObsNum + 1;
//       let obsListLenth = store.currentObsNum;
//       if ( obsListLenth === 0 ) {
//         store.currentObsNum = 1;
//         return store.currentObsNum;
//       } else {
//         store.currentObsNum = response.observations.length + 1;
//         return store.currentObsNum;
//       }
//     })
//     .then((response) => {
//       store.currentObsNum = response.observations.length + 1;
//     })
//     .done(uiObservations.createObservationSuccess)
//     .fail(uiObservations.createObservationFailure);
// };

// const onGetPastObsNum = function(event) {
//   event.preventDefault();
//   apiObservations.getObservationsCreate()
//     .then((response) => {
//       store.currentObsNum = parseInt(response.observations.length) + 1;
//       return store.currentObsNum;
//     })
//     .then(() => {
//       onCreateObservation();
//     })
//     .done(uiObservations.getPastObsNumSuccess)
//     .fail(uiObservations.getPastObsNumFailure);
//   };

// const onCreateObservationNums = function() {
//   apiObservations.getObservationsCreate()
//     .then((response) => {
//       store.currentObsNum = response.observations.length + 1;
//       return store.currentObsNum;
//     })
//     .done(uiObservations.onCreateObservationNumsSuccess)
//     .fail(uiObservations.onCreateObservationNumsFailure);
// };

// const onCreateObservation = function(event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   apiObservations.createObservation(data)
//     .then(() => {
//       // store.currentObsNum = response.observation.obs_num;
//       onCreateObservationNums();
//       // return store.currentSession;
//     })
//     .done(uiObservations.createObservationSuccess)
//     .fail(uiObservations.createObservationFailure);
// };

const onDeleteObservation = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  apiObservations.deleteObservation(data)
    .done(uiObservations.deleteObservationSuccess)
    .fail(uiObservations.deleteObservationFailure);
};

const onUpdateObservation = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  apiObservations.updateObservation(data)
    .done(uiObservations.updateObservationSuccess)
    .fail(uiObservations.updateObservationFailure);
};

const startSession = function() {
  $("#new-student-form").show();
};

//////////////////
//////////////////

// const defineTimerInterval = function() {
//   console.log('running');
//   debugger;
//   const convertTimeToJquery = parseInt(store.currentObsIntervalTime) * 1000;
//   setInterval(logic.observationTimer, convertTimeToJquery);
// };

const endObservationTimer = function(runTimer) {
  clearInterval(runTimer);
  console.log("interval done");
};

const observationTimer = function() {
  let x = parseInt(store.currentObsIntervalTime);
  let max = parseInt(store.currentObsIntervalTime) + 1;
  let y = document.getElementById("interval-timer");
  // Display count down for 20 seconds

  let intervalCount = 0;
  const runTimer = setInterval(function() {
    let endInterval = parseInt(store.currentNumofIntervals);
    // if (store.currentObsNum === undefined) {
    //   intervalCount = 1;
    // }

    if (x <= max && x >= 1) {
      x--;
      y.innerHTML = '' + x + '';
      if (x === 1) {
        intervalCount = intervalCount + 1;
        x = max;
        // alert(intervalCount);
        // console.log("CURRENT OBSERVATION NUM");
        // console.log(currentObsNum);
        // console.log("relationship store.currentObsNum <= store.currentNumofIntervals");
        // console.log(currentObsNum <= store.currentNumofIntervals);
        // console.log("***(intervalCount <= endInterval)");
        // console.log((intervalCount <= endInterval));
        if (intervalCount < endInterval) {
          // console.log('intervalcount');
          // console.log(intervalCount);
          $("#new-observation-form").submit();
          $("#interval-count").text(intervalCount);
        } else {
          $("#interval-count").text(intervalCount);
          // console.log('intervalcount - else');
          // console.log(intervalCount);
          // console.log('endObservationTimer(runTimer)');
          endObservationTimer(runTimer);
          return;
        }
      }
    }
  }, 1000);
};

// Test Button for Webpage Testing
const testButton = function() {
  $("#test-sign-in").click();
};


const addHandlers = () => {
  $('#get-observations-form').on('submit', onGetObservations);
  $('#show-observation-form').on('submit', onShowObservation);
  $('#new-observation-form').on('submit', onCreateObservation);
  $('#delete-observation-form').on('submit', onDeleteObservation);
  $('#update-observation-form').on('submit', onUpdateObservation);
  $('#new-session-btn').on('click', startSession);
  $('#begin-session-btn').on('click', observationTimer);

  $('#test-button-submit').on('click', testButton);
};

module.exports = {
  addHandlers,
};
