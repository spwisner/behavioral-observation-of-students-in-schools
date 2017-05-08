'use strict';

const displayDashboard = require('../templates/dashboard/dashboard-home.handlebars');
const store = require('../store');
const apiAuth = require('./api');
const displayTutorial = require('../templates/tutorial/tutorial.handlebars');

const blinkNotify = function(div, status) {
  let blinkHtml = '<div id="processing">Processing...</div>';
  $(div).append(blinkHtml);

  const blinkAnimation = function() {
    $("#processing").fadeIn(300);
    $("#processing").fadeOut(500);
  };

  if (status === "start") {
    setInterval(blinkAnimation, 0);
  } else {
    clearInterval(blinkAnimation);
  }
};

const signInSuccess = function() {
  $("#processing").remove();
  $(".notification-container").children().text("");
  $(".success-alert").text("You have successfully signed-in");
  $('#sign-in').hide();
  $('#sign-up').hide();
  $("#sign-out").show();
  $("#change-password").show();
  $(".content").children().remove();
  let dashboardHome = displayDashboard();
  $('.content').append(dashboardHome);
  $(".form-clear").val('');
  $(".homepage-desc").hide();
  $(".tutorial-btn-container").show();
  $('.content').show();
};

const signUpSignInSuccess = function() {
  $("#processing").remove();
  $(".notification-container").children().text("");
  $(".success-alert").text("You have successfully signed-up and signed-in");
  $('#sign-in').hide();
  $('#sign-up').hide();
  $("#sign-out").show();
  $("#change-password").show();
  $(".content").children().remove();
  let dashboardHome = displayDashboard();
  $('.content').append(dashboardHome);
  $(".form-clear").val('');
  $(".homepage-desc").hide();
  $(".tutorial-btn-container").show();
  $("#tutorial-btn").removeClass("btn-success");
  $("#tutorial-btn").addClass("btn-warning");
  $("#tutorial-btn").text("Close Tutorial");
  $('.content').hide();
  let showTutorial = displayTutorial();
  $('.tutorial-index-container').append(showTutorial);
  $(".sign-up-welcome").show();
};


const signInFailure = function() {
  $(".notification-container").children().text("");
  $(".disable-btn").prop("disabled",false);
  $("#processing").remove();
  $('.signin-failure').text('Failed sign-in attempt. User email may not exist and/or passwords may not match').show(0).delay(4000).slideUp(500);
};

const signUpSuccess = function() {
  $(".signup-failure").text("");
  $(".notification-container").children().text("");

  let data = store.signUpData;

  apiAuth.signIn(data)
    .then((response) => {
      store.user = response.user;
      return store.user;
    })
    .done(signUpSignInSuccess)
    .catch(signInFailure);


  // let transferEmail = $("#sign-up .signup-email").val();
  // $("#sign-in .signin-email").val(transferEmail);
  // $("#sign-up").removeClass("open");
  // $("#sign-in").addClass("open");
  // $(".signin-success").slideDown(300).text("You have successfully signed-up.  Please sign-in to continue").delay(3500).slideUp(300);
};

const signUpFailure = function() {
  $(".notification-container").children().text("");
  $("#processing").remove();
  $(".disable-btn").prop("disabled",false);
  $(".signup-failure").slideDown(300).text("Sign-up error. This account may already exist. Otherwise, please ensure that you are using a valid email and that passwords match.");
};

const signOutSuccess = function() {
  $(".notification-container").children().text("");
  $(".success-alert").text("You have successfully signed-out.  Please sign-in to continue");
  $('.content').children().remove();
  $("#sign-out").hide();
  $("#change-password").hide();
  $("#sign-in").show();
  $("#sign-up").show();
  $(".form-clear").val('');
  $(".homepage-desc").show();
  $(".tutorial-index-container").children().remove();
  $("#tutorial-btn").removeClass("btn-warning");
  $("#tutorial-btn").addClass("btn-success");
  $("#tutorial-btn").text("Show Tutorial");
  $(".tutorial-btn-container").hide();
};

const signOutFailure = function() {
  $(".notification-container").children().text("");
  $(".failure-alert").text("Error: You have not successfully signed-out.  Please close your browser");
  $('.content').children().remove();
};

const cpSuccess = function() {
  $(".notification-container").children().text("");
  $("#change-password").removeClass("open");
  $(".success-alert").text("Your password has been successfully changed");
};

const cpFailure = function() {
  $('.changepw-failure').text('Change password attempt failed. Make sure you correctly entered your original password.').show(0).delay(5000).slideUp(500);
};

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signOutFailure,
  cpSuccess,
  cpFailure,
  blinkNotify,
};
