'use strict';

const success = (data) => {
  console.log('success completed');
  console.log(data);
};

const failure = (error) => {
  console.error(error);
  console.log('error');
};

const signInSuccess = function() {
  $("#sign-in").hide();
  $("#sign-out").show();
  console.log('sign-in success');
  $("#testing-create-session").click();
};

module.exports = {
  success,
  failure,
  signInSuccess,
};
