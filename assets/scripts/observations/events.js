'use strict';
const apiObservations = require('./api');
const uiObservations = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
const logicObservations = require('./logic');
const audio = require('./audio');

// OBSERVATION EVENTS

const onGetObservations = function() {
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

const onShowLastObservation = function(id) {
  apiObservations.showLastObservation(id)
    .done(uiObservations.showObservationSuccess)
    .fail(uiObservations.showObservationFailure);
};

const onCreateObservation = function(event) {
    event.preventDefault();
    let data = getFormFields(event.target);
    apiObservations.createObservation(data)
    .catch(uiObservations.createObservationFailure)
    .then((response) => {
      // onGetObservations(store.currentSessionId);
      let submittedObsNum = response.observation.obs_num;
      store.studentToObserve = submittedObsNum + 1;
      onShowLastObservation(response.observation.id);
    })
    .done(uiObservations.createObservationSuccess);
};

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
    .done(uiObservations.getLastObservationSuccess)
    .fail(uiObservations.getLastObservationFailure);
};

const onUpdateLastSubmission = function(event) {
  event.preventDefault();
  let table = $(this).parent().parent().parent();
  let id = $(this).attr("data-id");
  let comment = $(this).attr("data-obs-comment");
  let aetValue = table.children(".last-aet-tr").children(".last-submission-aet").children("input").prop('checked');
  let petValue = table.children(".last-pet-tr").children(".last-submission-pet").children("input").prop('checked');
  let oftmValue = table.children(".last-oft-m-tr").children("last-submission-oft-m").children("input").prop('checked');
  let oftvValue = table.children(".last-oft-v-tr").children("last-submission-oft-v").children("input").prop('checked');
  let oftpValue = table.children(".last-oft-p-tr").children(".last-submission-oft-p").children("input").prop('checked');
  apiObservations.updateLastObservation(id, aetValue, petValue, oftmValue, oftvValue, oftpValue, comment)
    .done(uiObservations.getLastObservationSuccess)
    .fail(uiObservations.getLastObservationFailure);
};

const startSession = function() {
  $("#new-student-form").show();
};

const endObservationTimer = function(runTimer) {
  clearInterval(runTimer);
  console.log("interval done");
};

const observationTimer = function() {


  // Countup stopwatch for gradients

  // Define Countup
  let countUp = 0;
  $("#new-observation-form").addClass("obs-stg-one");
  let totalIntervalLength = store.currentObsIntervalTime;
  // Define gradient intervals
  let stageOneTime = 0;
  let stageTwoTime = logicObservations.gradientLogic(1, totalIntervalLength) + stageOneTime;
  let stageThreeTime = logicObservations.gradientLogic(2, totalIntervalLength) + stageTwoTime;
  let stageFourTime = logicObservations.gradientLogic(3, totalIntervalLength) + stageThreeTime;
  let stageFiveTime = logicObservations.gradientLogic(4, totalIntervalLength) + stageFourTime;

  // Countdown Timer
  let x = parseInt(store.currentObsIntervalTime);
  let max = parseInt(store.currentObsIntervalTime);
  let y = document.getElementById("interval-timer");
  // Display count down for 20 seconds

  let intervalCount = 0;
  let intervalPrint = 1;
  const runTimer = setInterval(function() {
    let endInterval = parseInt(store.currentNumofIntervals);

    if (x <= max && x >= 0) {
      x--;
      countUp++;
      logicObservations.changeGradientClass(stageOneTime, stageTwoTime, stageThreeTime, stageFourTime, stageFiveTime, countUp);
      y.innerHTML = '' + x + '';

      if (x > 0 && x <= 3) {
        // audio.playAudio();
      }

      if (x === 0) {
        // audio.submitAudio();
        intervalCount = intervalCount + 1;
        intervalPrint = intervalPrint + 1;

        $(".interval-count").text(intervalPrint);
        x = max;
        if (intervalCount <= endInterval) {
          store.observationIdNum = store.observationIdNum + 1;

          $("#create-observation-number").val(store.observationIdNum);
          $("#new-observation-form").submit();
          countUp = 0;
          $("#new-observation-form").removeClass("obs-stg-five");
          $("#new-observation-form").addClass("obs-stg-one");
          if (intervalCount === endInterval) {
            $("#new-observation-form").removeClass("obs-stg-five");
            $("#new-observation-form").addClass("obs-stg-done");
            endObservationTimer(runTimer);
            $(".interval-count").text(endInterval);
            return;
          }
        }
      }
    }
  }, 1000);
  // if cancel button clicked
  $("#cancel-session-btn").click(function () {
    endObservationTimer(runTimer);
    $(".time-until-submission").hide();
    $(".interval-remaining").hide();
    $(".cancel-session-notification").show();
  });
};

// Test Button for Webpage Testing
// const testButton = function() {
//   $("#test-sign-in").click();
// };

const generateWithCheck = function(dataLocation, inputHtml) {
  let trimText = dataLocation.text().trim();
  $(dataLocation).empty().append(inputHtml);
  if ( trimText === "" ) {
    $(dataLocation).children("input").prop('checked', false);
  } else {
    $(dataLocation).children("input").prop('checked', true);
  }
};

const updateFormGenerator = function(event) {
  event.preventDefault();

  store.lastFormHtml = $(".last-submission-container").html();

  // let dataId = $(this).attr("data-id");
  // let dataObsNum = $(this).attr("data-obs-num");
  // let dataAet = $(this).attr("data-aet");
  // let dataPet = $(this).attr("data-pet");
  // let dataOftM = $(this).attr("data-oft_m");
  // let dataOftV = $(this).attr("data-oft_v");
  // let dataOftP = $(this).attr("data-oft-p");
  // let dataComment = $(this).attr("data-obs-comment");

  let dataAetEditHtml = $('<input class="edit-input-aet" name="observation[aet]" placeholder="aet" type="checkbox">');
  let dataPetEditHtml = $('<input class="edit-input-pet" name="observation[pet]" placeholder="pet" type="checkbox">');
  let dataOftmEditHtml = $('<input class="edit-input-oft-m" name="observation[oft_m]" placeholder="oftm" type="checkbox">');
  let dataOftvEditHtml = $('<input class="edit-input-oft-v" name="observation[oft_v]" placeholder="oftv" type="checkbox">');
  let dataOftpEditHtml = $('<input class="edit-input-oft-p" name="observation[oft_p]" placeholder="oftp" type="checkbox">');

  let table = $(this).parent().parent().parent();

  let aetDataLocation = table.children(".last-aet-tr").children(".last-submission-aet");
  let petDataLocation = table.children(".last-pet-tr").children(".last-submission-pet");
  let oftmDataLocation = table.children(".last-oft-m-tr").children(".last-submission-oft-m");
  let oftvDataLocation = table.children(".last-oft-v-tr").children(".last-submission-oft-v");
  let oftpDataLocation = table.children(".last-oft-p-tr").children(".last-submission-oft-p");

  generateWithCheck(aetDataLocation, dataAetEditHtml);
  generateWithCheck(petDataLocation, dataPetEditHtml);
  generateWithCheck(oftmDataLocation, dataOftmEditHtml);
  generateWithCheck(oftvDataLocation, dataOftvEditHtml);
  generateWithCheck(oftpDataLocation, dataOftpEditHtml);
};

const cancelUpdateLastSubmission = function(event) {
  event.preventDefault();
  $(".last-submission-container").empty().append(store.lastFormHtml);
};

const onGenerateObsTable = function(event) {
  event.preventDefault();
  uiObservations.generateObservationForm();
};

const addHandlers = () => {
  $('#get-observations-form').on('submit', onGetObservations);
  $('#show-observation-form').on('submit', onShowObservation);
  // $('#new-observation-form').on('submit', onCreateObservation);
  $('#delete-observation-form').on('submit', onDeleteObservation);
  $('#update-observation-form').on('submit', onUpdateObservation);
  $('#new-session-btn').on('click', startSession);
  $('.content').on('click', '#begin-session-btn', observationTimer);
  // $('#begin-session-btn').on('click', observationTimer);
  // $('#cancel-session-btn').on('click', cancelObservationTimer);
  // $('#test-button-submit').on('click', testButton);
  // $(".edit-last-submission").on('click', updateFormGenerator);
  $('.content').on('submit', '#new-observation-form', onCreateObservation);
  $('.last-submission-container').on('click', '.edit-last-submission', updateFormGenerator);
  $('.last-submission-container').on('click', '#submit-last-edit-btn', onUpdateLastSubmission);
  $('.last-submission-container').on('click', '.cancel-last-submission-edit', cancelUpdateLastSubmission);
  $('.content').on('click', '#obs-landing-begin-observation', onGenerateObsTable);
};

module.exports = {
  addHandlers,
  onGetObservations,
};
