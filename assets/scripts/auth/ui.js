'use strict';

const displayDashboard = require('../templates/dashboard/dashboard-home.handlebars');

const signInSuccess = function() {
  $(".notification-container").children().text("");
  $(".success-alert").text("You have successfully signed-in");
  $('#sign-in').hide();
  $('#sign-up').hide();
  $("#sign-out").css("visibility", "visible");
  $("#change-password").css("visibility", "visible");
  $(".content").children().remove();
  let dashboardHome = displayDashboard();
  $('.content').append(dashboardHome);
  $(".form-clear").val('');
};

const signInFailure = function() {
  $(".notification-container").children().text("");
  $('.signin-failure').text('Failed sign-in attempt. User email may not exist and/or passwords may not match').show(0).delay(4000).slideUp(500);
};

const signUpSuccess = function() {
  $(".signup-failure").text("");
  $(".notification-container").children().text("");
  let transferEmail = $("#sign-up .signup-email").val();
  $("#sign-in .signin-email").val(transferEmail);
  $("#sign-up").removeClass("open");
  $("#sign-in").addClass("open");
  $(".signin-success").slideDown(300).text("You have successfully signed-up.  Please sign-in to continue").delay(3500).slideUp(300);
};

const signUpFailure = function() {
  $(".notification-container").children().text("");
  $(".signup-failure").slideDown(300).text("Sign-up error. Please ensure that you are using a valid email and passwords match.");
};

const signOutSuccess = function() {
  $(".notification-container").children().text("");
  $(".success-alert").text("You have successfully signed-out.  Please sign-in to continue");
  $('.content').children().remove();
  $("#sign-up").show();
  $("#sign-in").show();
  $("#sign-out").css("visibility", "hidden");
  $("#change-password").css("visibility", "hidden");
  $(".form-clear").val('');
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
};
