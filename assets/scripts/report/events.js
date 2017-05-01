'use strict';
const apiReport = require('./api');
const uiReport = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
const displayStatsReportHtml = require('../templates/report/stats-report.handlebars');
const displayWriteupCreateForm = require('../templates/report/report-create-form.handlebars');
const displayWriteupReport = require('../templates/report/report-writeup.handlebars');

// OBSERVATION EVENTS

const toggleHideShowReport = function(event) {
  event.preventDefault();
  let currentStatus = $(".display-written-report-container").css("display");

  if ( currentStatus === "none" ) {
    $(".display-written-report-container").show();
    $("#generate-written-hide-btn").text("Show Report");
  } else {
    $(".display-written-report-container").hide();
    $("#generate-written-hide-btn").text("Hide Report");
  }
};

const onPrinterFriendly = function(event) {
  event.preventDefault();
  $(".dashboard-container").hide();
  $(".report-summary-btn-container").hide();
  $("#change-password").hide();
  $("#sign-out").hide();
};

const onShowStudentSummary = function() {
  // event.preventDefault();
  apiReport.getStudentSummary()
    .done(uiReport.showStudentSummarySuccess)
    .fail(uiReport.showStudentSummaryFailure);
};

const onGetObservationData = function() {
  // event.preventDefault();
  apiReport.getObservationTable()
    .done(uiReport.onGetObservationTableSuccess)
    .fail(uiReport.onGetObservationTableFailure);
};

// const onSuccessfulUpdate = function() {
//   store.currentStudentId = $(this).attr("data-current-student-id");
//   store.currentSessionId = $(this).attr("data-current-session-id");
//   store.currentReportId = $(this).attr("data-current-report-id");
//   //See if previous submission of writeup
//   apiReport.getWriteup()
//     .then((response) => {
//       // onGetObservations(store.currentSessionId);
//       store.getWriteupObject = response;
//       console.log("writeupdata");
//       store.currentReportId = response.report.id;
//     })
//     .done(uiReport.getWriteupSuccess)
//     .catch(uiReport.getWriteupFailure);
//
//   //
//   store.currentStudentId = $(this).attr("data-current-student-id");
//   store.currentSessionId = $(this).attr("data-current-session-id");
//   $(".content").children().remove();
//   let showStatsReportHtml = displayStatsReportHtml();
//   $('.content').append(showStatsReportHtml);
//   onShowStudentSummary();
//   onGetObservationData();
// };

// const onGenerateWriteupForm = function(event) {
//   event.preventDefault();
//   store.currentStudentId = $("#generate-written-create-btn").attr("data-current-student-id");
//   store.currentSessionId = $("#generate-written-create-btn").attr("data-current-session-id");
//   $('.content').children().remove();
//   apiReport.getWriteup()
//     // .catch(uiReport.createWriteupFailure)
//     .then((response) => {
//       console.log('geerate response');
//       store.doesReportExist = false;
//       store.currentReportLength = response.reports.length;
//       if (store.currentReportLength >0 ) {
//         store.currentReportId = response.reports[0].id;
//         store.doesReportExist = true;
//       }
//       // store.currentReportId = response.report.id;
//     })
//     .done(uiReport.success)
//     .catch(uiReport.fail);
// };

// const onGenerateWriteupForm = function(event) {
//   event.preventDefault();
//
//   apiReport.getWriteup()
//     // .catch(uiReport.createWriteupFailure)
//     .then((response) => {
//       store.doesReportExist = false;
//       store.currentReportLength = response.reports.length;
//
//       if (store.currentReportLength > 0 ) {
//         store.currentReportId = response.reports[0].id;
//         store.doesReportExist = true;
//
//         let showReport = displayWriteupReport({
//           report: response.report
//         });
//
//         $('.display-written-report-container').append(showReport);
//       } else {
//         $('.content').children().remove();
//         let createWriteupForm = displayWriteupCreateForm();
//         $(".content").append(createWriteupForm);
//         $("#create-report-writeup-btn").attr("data-current-student-id", store.currentStudentId);
//         $("#create-report-writeup-btn").attr("data-current-session-id", store.currentSessionId);
//         $('.current').attr("data-current-session-id", store.currentSessionId);
//       }
//     });


  // store.currentStudentId = $(this).attr("data-current-student-id");
  // store.currentSessionId = $(this).attr("data-current-session-id");
  // $('.content').children().remove();
  // let createWriteupForm = displayWriteupCreateForm();
  // $(".content").append(createWriteupForm);
  // $("#create-report-writeup-btn").attr("data-current-student-id", store.currentStudentId);
  // $("#create-report-writeup-btn").attr("data-current-session-id", store.currentSessionId);
// };

const onCreateStatsReport = function(event) {
  event.preventDefault();
  store.currentStudentId = $(this).attr("data-current-student-id");
  store.currentSessionId = $(this).attr("data-current-session-id");
  //See if previous submission of writeup
  // apiReport.getWriteupById(store.currentStudentId, store.currentSessionId)
  // .done(uiReport.getWriteupSuccess)
  // .catch(uiReport.getWriteupFailure);

  // apiReport.getWriteup()
  //   .then((response) => {
  //     store.getWriteupObjectLength = response.report.length;
  //     console.log(response);
  //     // onGetObservations(store.currentSessionId);
  //     store.getWriteupObject = response;
  //     store.currentReportId = response.report.id;
  //   })
  //   .done(uiReport.getWriteupSuccess)
  //   .catch(uiReport.getWriteupFailure);

  $(".content").children().remove();
  let showStatsReportHtml = displayStatsReportHtml();
  $('.content').append(showStatsReportHtml);

  let windowHeight = window.innerHeight;
  let scaledHeight = windowHeight * 0.75;
  $("#et-chart").css("max-height", scaledHeight);
  $("#et-chart").css("max-width", scaledHeight);
  $("#oft-chart").css("max-height", scaledHeight);
  $("#oft-chart").css("max-width", scaledHeight);
  $("#oft-chart").css("margin", "0 auto");
  $("#et-chart").css("margin", "0 auto");

  onShowStudentSummary();
  onGetObservationData();

  $(".current").attr("data-current-student-id", store.currentStudentId);
  $(".current").attr("data-current-session-id", store.currentSessionId);
  // $("#generate-written-create-btn").attr("data-current-student-id", store.currentStudentId);
  // $("#generate-written-create-btn").attr("data-current-session-id", store.currentSessionId);

};

const getFormVals = function(event) {
  event.preventDefault();
  let pi = $('.pi-input').val();
  let cba = $('.cba-input').val();
  let ss = $('.ss-input').val();
  let aet = $('.aet-input').val();
  let pet = $('.pet-input').val();
  let oftm = $('.oftm-input').val();
  let oftv = $('.oftv-input').val();
  let oftp = $('.oftp-input').val();
  let find = $('.find-input').val();
  let cftone = $('.cftone-input').val();
  let cfttwo = $('.cfttwo-input').val();
  let cftthree = $('.cftthree-input').val();
  let cfone = $('.cfone-input').val();
  let cftwo = $('.cftwo-input').val();
  let cfthree = $('.cfthree-input').val();
  let rec = $('.rec-input').val();
  let cn = $('.cn-input').val();
  apiReport.createReportManually(pi, cba, ss, aet, pet, oftm, oftv, oftp, find, cfone, cftwo, cfthree, rec, cn, cftone, cfttwo, cftthree)
    .done(uiReport.createWriteupSuccess)
    .catch(uiReport.createWriteupFailure);
};

const onCreateWriteup = function(event) {
  event.preventDefault();
  store.currentStudentId = $(this).attr("data-current-student-id");
  store.currentSessionId = $(this).attr("data-current-session-id");
  let data = getFormFields(event.target);
  apiReport.createWriteup(data)
    // .catch(uiReport.createWriteupFailure)
    .then((response) => {
      store.currentReportId = response.report.id;
    })
    .done(uiReport.createWriteupSuccess)
    .catch(uiReport.createWriteupFailure);
};

const onGetWriteup = function(event) {
  event.preventDefault();
  apiReport.getWriteup()
    .then((response) => {
      store.getWriteupObject = response;
    })
    .done(uiReport.getWriteupSuccess)
    .catch(uiReport.getWriteupFailure);
};

const onEditWriteup = function(event) {
  event.preventDefault();
  store.currentStudentId = $(this).attr("data-current-student-id");
  store.currentSessionId = $(this).attr("data-current-session-id");
  store.currentReportId = $(this).attr("data-current-report-id");
  apiReport.getWriteup()
    .then((response) => {
      store.editWriteupObject = response;
    })
    .done(uiReport.editWriteupSuccess)
    .catch(uiReport.editWriteupFailure);
};

const onSubmitEdit = function(event) {
  event.preventDefault();
  store.currentStudentId = $("#edit-report-writeup-btn").attr("data-current-student-id");
  store.currentSessionId = $("#edit-report-writeup-btn").attr("data-current-session-id");
  store.currentReportId = $("#edit-report-writeup-btn").attr("data-current-report-id");
  let data = getFormFields(event.target);
  apiReport.submitEditWriteup(data)
    .done(uiReport.editWriteupSubmitSuccess)
    .catch(uiReport.editWriteupSubmitFailure);
};

const addHandlers = () => {
  $('.content').on('submit', '#report-writeup-form', onCreateWriteup);
  $('.get-writeup-btn-container').on('click', '#get-writeup-report-btn', onGetWriteup);
  $('.edit-report-btn-container').on('click', '#edit-report-btn', onEditWriteup);
  $('.content').on('click', '#session-record-view-report', onCreateStatsReport);
  // $('.content').on('click', '#generate-written-create-btn', onGenerateWriteupForm);
  $('.content').on('click', '#generate-written-update-btn', onEditWriteup);
  $('.content').on('submit', '#report-edit-writeup-form', onSubmitEdit);
  $('.content').on('click', '#generate-written-hide-btn', toggleHideShowReport);
  $('.content').on('click', '#writeup-printer-friendly-btn', onPrinterFriendly);
  $('.content').on('click', '#create-report-writeup-btn', getFormVals);
  $('.content').on('click', '#end-session-generate-report', onCreateStatsReport)
};

module.exports = {
  addHandlers,
};
