'use strict';

const config = require('../config');



const getStudents = function () {
  return $.ajax ({
    url: config.apiOrigin + '/students/',
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token,
    // },
  });
};

module.exports = {
  getStudents,
};
