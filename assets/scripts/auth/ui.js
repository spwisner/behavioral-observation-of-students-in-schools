'use strict';

const displayDashboard = require('../templates/dashboard/dashboard.handlebars');

const success = (data) => {
  console.log('success completed');
  console.log(data);
};

const failure = (error) => {
  console.error(error);
  console.log('error');
};

const signInSuccess = function() {

  $(".content").children().remove();
  // $(".student-record-table").remove();
  let dashboardHome = displayDashboard({});
  // $('.student-details-container').append(studentDetails);
  $('.content').append(dashboardHome);


  $("#sign-in").hide();
  $("#sign-out").show();
  console.log('sign-in success');
  // testing
  $("#testing-create-session").click();
  $("#create-student-btn").click();
};

module.exports = {
  success,
  failure,
  signInSuccess,
};
