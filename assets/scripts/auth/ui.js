'use strict';

const displayDashboard = require('../templates/dashboard/dashboard-home.handlebars');

const success = (data) => {
  $(".notification-container").children().text("");
  console.log('success completed');
  console.log(data);
};

const failure = (error) => {
  $(".notification-container").children().text("");
  console.error(error);
  console.log('error');
};

const signInSuccess = function() {
  $(".notification-container").children().text("");
  $(".content").children().remove();
  // $(".student-record-table").remove();
  let dashboardHome = displayDashboard();
  // $('.student-details-container').append(studentDetails);
  $('.content').append(dashboardHome);


  $("#sign-in").hide();
  $("#sign-out").show();
  console.log('sign-in success');
  $(".signup-success").text("You have successfully signed-in");


  // testing
  // $("#testing-create-session").click();
  // $("#create-student-btn").click();
};

module.exports = {
  success,
  failure,
  signInSuccess,
};
