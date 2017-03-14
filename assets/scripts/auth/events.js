'use strict';
const apiAuth = require('./api');
const uiAuth = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
// const logic = require('./logic');

// LOGIN EVENTS

const onSignIn = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  apiAuth.signIn(data)
    .then((response) => {
      store.user = response.user;
      return store.user;
    })
    .done(uiAuth.signInSuccess)
    .catch(uiAuth.onSignInFailure);
};

const onSignUp = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  apiAuth.signUp(data)
    .done(uiAuth.success)
    .catch(uiAuth.failure);
};

const onSignOut = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  apiAuth.signOut(data)
    .done(uiAuth.success)
    .fail(uiAuth.failure);
};

const onChangePassword = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  apiAuth.changePassword(data)
    .done(uiAuth.success)
    .fail(uiAuth.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};
