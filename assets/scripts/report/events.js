'use strict';
const apiReport = require('./api');
const uiReport = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');

// OBSERVATION EVENTS

const onGetObservationData = function() {
  // event.preventDefault();
  apiReport.getObservationTable()
    .done(uiReport.onGetObservationTableSuccess)
    .fail(uiReport.onGetObservationTableFailure);
};

const onShowStudentSummary = function() {
  // event.preventDefault();
  apiReport.getStudentSummary()
    .done(uiReport.showStudentSummarySuccess)
    .fail(uiReport.showStudentSummaryFailure);
};

const onGenerateReport = function(event) {
  event.preventDefault();
  onShowStudentSummary();
  onGetObservationData();
};

const onCreateWriteup = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  apiReport.createWriteup(data)
    // .catch(uiReport.createWriteupFailure)
    .then((response) => {
      store.currentReportId = response.report.id;
      console.log("store.currentReportId");
      console.log(store.currentReportId);
      // onGetObservations(store.currentSessionId);
      // let submittedObsNum = response.observation.obs_num;
      // store.studentToObserve = submittedObsNum + 1;
    })
    .done(uiReport.createWriteupSuccess)
    .catch(uiReport.createWriteupFailure);
};

const onGetWriteup = function(event) {
  event.preventDefault();
  $(".report-writeup-table").remove();
  apiReport.getWriteup()
    .then((response) => {
      // onGetObservations(store.currentSessionId);
      store.getWriteupObject = response;
    })
    .done(uiReport.getWriteupSuccess)
    .catch(uiReport.getWriteupFailure);
};

const onTestTwo = function() {
  $("#create-session-btn").click();
};

const onTest = function() {
  $("#testing-sign").click();
};

const onEditWriteup = function(event) {
  event.preventDefault();
  $("#report-edit-writeup-form").remove();
  apiReport.getWriteup()
    .then((response) => {
      // onGetObservations(store.currentSessionId);
      store.editWriteupObject = response;
    })
    .done(uiReport.editWriteupSuccess)
    .catch(uiReport.editWriteupFailure);
};

const onSubmitEdit = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  apiReport.submitEditWriteup(data)
    // .then((response) => {
    // // onGetObservations(store.currentSessionId);
    //   let submittedObsNum = response.observation.obs_num;
    //   store.studentToObserve = submittedObsNum + 1;
    // })
    .done(uiReport.editWriteupSubmitSuccess)
    .catch(uiReport.editWriteupSubmitFailure);
}
// const onSubmitEdit = function() {
//   let finalArray = store.finalEditWriteupArray;
//   let textAreaInput = $(this).parent().children(".revised-textarea-writeup").val();
//   let textValue = store.currentWriteupEditText;
//
//   for (let i = 0; i < finalArray.length; i++) {
//     console.log(finalArray[i]);
//     if (textValue === finalArray[i]) {
//       finalArray[i] = textAreaInput;
//       alert();
//     }
//   }
//   apiReport.updateWriteup(finalArray[0], finalArray[1], finalArray[2], finalArray[3], finalArray[4], finalArray[5], finalArray[6], finalArray[7], finalArray[8], finalArray[9], finalArray[10], finalArray[11], finalArray[12], finalArray[13], finalArray[14], finalArray[15], finalArray[16], finalArray[17])
//     .then((response) => {
//       // onGetObservations(store.currentSessionId);
//       console.log(response);
//     })
//     .done(uiReport.editWriteupSuccess)
//     .catch(uiReport.edithWriteupFailure);
//   };
//
// const onEditWriteup = function(event) {
//   event.preventDefault();
//
//   store.currentWriteupEditText = $(this).parent().children(".write-up-section-text").text();
//   let id = $(this).attr("data-id");
//   let pi = $(this).attr("data-presenting-issue");
//   let cba = $(this).attr("data-class-behav-assess");
//   let ss = $(this).attr("data-r-setting");
//   let aet = $(this).attr("data-r-aet");
//   let pet = $(this).attr("data-r-pet");
//   let oftm = $(this).attr("data-r-oftm");
//   let oftv = $(this).attr("data-r-oftv");
//   let oftp = $(this).attr("data-r-oftp");
//   let find = $(this).attr("data-r-finding");
//   let cfone = $(this).attr("data-r-customone");
//   let cftwo = $(this).attr("data-r-customtwo");
//   let cfthree = $(this).attr("data-r-customthree");
//   let rec = $(this).attr("data-r-recommendation");
//   let cn = $(this).attr("data-counselor-name");
//   let cftone = $(this).attr("data-custom-one-title");
//   let cfttwo = $(this).attr("data-custom-two-title");
//   let cftthree = $(this).attr("data-custom-three-title");
//
//   let textAreaHtml = $('<textarea class="revised-textarea-writeup field-input comments-input" name="report[presenting_issue]" placeholder="Presenting Issue"></textarea>');
//   let submitEditBtnHtml = $('<input class="submit-edit-btn current" name="submit" type="submit" value="Submit Edit">');
//   $(this).parent().append(textAreaHtml);
//   $(this).parent().append(submitEditBtnHtml);

  // let textValue = $(this).parent().children(".write-up-section-text").text();
  // let textAreaHtml = $('<textarea class="revised-textarea-writeup field-input comments-input" name="report[presenting_issue]" placeholder="Presenting Issue"></textarea>');
  // let submitEditBtnHtml = $('<input class="submit-edit-btn current" name="submit" type="submit" value="Submit Edit">');
  //
  // let tempAttributeArray = [id, pi, cba, ss, aet, pet, oftm, oftv, oftp, find, cfone, cftwo, cfthree, rec, cn, cftone, cfttwo, cftthree];
  //
  // for (let i = 0; i < tempAttributeArray; i++) {
  //   if (textValue === tempAttributeArray[i]) {
  //     tempAttributeArray[i] = null;
  //     $(this).parent().append(textAreaHtml);
  //     $(this).parent().append(submitEditBtnHtml);
  //   }
  // }

  // store.finalEditWriteupArray = [id, pi, cba, ss, aet, pet, oftm, oftv, oftp, find, cfone, cftwo, cfthree, rec, cn, cftone, cfttwo, cftthree];
//   // console.log(store.finalEditWriteupArray);
// };


const addHandlers = () => {
  // $('#get-report-btn').on('click', onGetObservationData);
  $('.get-report-btn-container').on('click', '#get-report-btn', onGenerateReport);
  $('#report-writeup-form').on('submit', onCreateWriteup);
  $('.edit-report-writeup-container').on('submit', '#report-edit-writeup-form', onSubmitEdit);
  $("#testing-btn").on("click", onTest);
  $("#testing-btn-two").on("click", onTestTwo);
  $('.get-writeup-btn-container').on('click', '#get-writeup-report-btn', onGetWriteup);
  $('.edit-report-btn-container').on('click', '#edit-report-btn', onEditWriteup);

  // $('.report-writeup-container').on('click', '.writeup-btn', onEditWriteup);
  // $('.report-writeup-container').on('click', '.submit-edit-btn', onSubmitEdit);
};

module.exports = {
  addHandlers,
};
