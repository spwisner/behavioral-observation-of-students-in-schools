'use strict';

const studentToObserve = function(obs_num) {
  if (obs_num % 5 === 0) {
    $("#student-observed").text("Random Peer");
    $("#student-observed").addClass("random-peer");
  } else {
    $("#student-observed").text("Target Student");
    $("#student-observed").addClass("target-student");
  }
};

const gradientLogic = function(stage, totalIntervalLength) {
  let divisionRemainder = totalIntervalLength % 5;

  const forceEvenDivide = function(num) {
    let remainder = num % 5;
    let dividedEvenly = num - remainder;
    return dividedEvenly / 5;
  };

  let evenDividedNum = forceEvenDivide(totalIntervalLength);

  if (divisionRemainder === 0) {
    return evenDividedNum;
  } else if (divisionRemainder === 1) {
    if (stage === 1) {
      return evenDividedNum + 1;
    } else {
      return evenDividedNum;
    }
  } else if (divisionRemainder === 2) {
    if (stage === 1 || stage === 2) {
      return evenDividedNum + 1;
    } else {
      return evenDividedNum;
    }
  } else if (divisionRemainder === 3) {
    if (stage === 1 || stage === 2 || stage === 3) {
      return evenDividedNum + 1;
    } else {
      return evenDividedNum;
    }
  } else if (divisionRemainder === 4) {
    if (stage === 1 || stage === 2 || stage === 3 || stage === 4) {
      return evenDividedNum + 1;
    } else {
      return evenDividedNum;
    }
  }
};

// Tests whether a new interval begins and applies classes based on outcome
const changeGradientClass = function(stageOneTime, stageTwoTime, stageThreeTime, stageFourTime, stageFiveTime, countUp) {
  if (stageOneTime === countUp) {
    $(".legend-gradient").removeClass("obs-stg-done");
    $(".legend-gradient").addClass("obs-stg-one");
  } else if (stageTwoTime === countUp) {
    $(".legend-gradient").removeClass("obs-stg-one");
    $(".legend-gradient").addClass("obs-stg-two");
  } else if (stageThreeTime === countUp) {
    $(".legend-gradient").removeClass("obs-stg-two");
    $(".legend-gradient").addClass("obs-stg-three");
  } else if (stageFourTime === countUp) {
    $(".legend-gradient").removeClass("obs-stg-three");
    $(".legend-gradient").addClass("obs-stg-four");
  } else if (stageFiveTime === countUp) {
    $(".legend-gradient").removeClass("obs-stg-four");
    $(".legend-gradient").addClass("obs-stg-five");
  }
};

module.exports = {
  studentToObserve,
  gradientLogic,
  changeGradientClass,
};
