'use strict';

// const PlaySound = function(soundObj) {
//   const sound = document.getElementById(soundObj);
//   if (sound) {
//     if (sound.object)
//       //IE needs this
//       sound.object.Play();
//     else
//       sound.Play();
//   }
// }
// }




  let x = document.getElementById("timer-warning-audio");

  const playAudio = function () {
    x.play();
  };

  const pauseAudio = function () {
    x.pause();
  };


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
    $("#new-observation-form").removeClass("obs-stg-done");
    $("#new-observation-form").addClass("obs-stg-one");
  } else if (stageTwoTime === countUp) {
    $("#new-observation-form").removeClass("obs-stg-one");
    $("#new-observation-form").addClass("obs-stg-two");
  } else if (stageThreeTime === countUp) {
    $("#new-observation-form").removeClass("obs-stg-two");
    $("#new-observation-form").addClass("obs-stg-three");
  } else if (stageFourTime === countUp) {
    $("#new-observation-form").removeClass("obs-stg-three");
    $("#new-observation-form").addClass("obs-stg-four");
  } else if (stageFiveTime === countUp) {
    $("#new-observation-form").removeClass("obs-stg-four");
    $("#new-observation-form").addClass("obs-stg-five");
  }
};

module.exports = {
  studentToObserve,
  gradientLogic,
  changeGradientClass,
  playAudio,
  pauseAudio,
};
