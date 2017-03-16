'use strict';

const store = require('../store');

const studentToObserve = function(obs_num) {
  if (obs_num % 5 === 0) {
    $("#student-observed").text("Random Peer");
    $("#student-observed").addClass("random-peer");
  } else {
    $("#student-observed").text("Target Student");
    $("#student-observed").addClass("target-student");
  }
};

module.exports = {
  studentToObserve,
};
