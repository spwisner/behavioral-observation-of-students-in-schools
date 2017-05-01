'use strict';


const convertToDataArray = function(aet, pet, oftm, oftv, oftp) {
  return [aet, pet, oftm, oftv, oftp];
};

const percentageValue = function(count, total) {
  let decimal = count/total;
  let percentage = decimal * 100;
  return Math.round(percentage * 100) / 100;
};

const calculateTablePercentage = function(arr, intervals) {
  let percentageArr = [0, 0, 0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    percentageArr[i] = percentageValue(arr[i], intervals);
  }
  return percentageArr;
};

const appendTablejQuery = function(divClass, completeArr) {
  for ( let i = 0; i < completeArr.length; i++ ) {
    divClass.children('td').eq(i+1).text(completeArr[i]);
  }
};

const isANumberArr = function(arr) {
  console.log(arr);
  let revisedArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNum = parseInt(arr[i]);
    if (currentNum >= 0) {
      revisedArr.push(currentNum);
    } else {
      revisedArr.push(0);
    }
  }
  console.log(revisedArr);

  return revisedArr;
};

const generateStatsTable = function(countArrTS, percentageArrTS, countArrRP, percentageArrRP, totalTSIntervals, totalRPIntervals) {

  percentageArrTS = isANumberArr(percentageArrTS);
  percentageArrRP = isANumberArr(percentageArrRP);


  let aetCompleteArr = [countArrTS[0], percentageArrTS[0], countArrRP[0], percentageArrRP[0]];
  let petCompleteArr = [countArrTS[1], percentageArrTS[1], countArrRP[1], percentageArrRP[1]];
  let oftmCompleteArr = [countArrTS[2], percentageArrTS[2], countArrRP[2], percentageArrRP[2]];
  let oftvCompleteArr = [countArrTS[3], percentageArrTS[3], countArrRP[3], percentageArrRP[3]];
  let oftpCompleteArr = [countArrTS[4], percentageArrTS[4], countArrRP[4], percentageArrRP[4]];

  let aetTr = $(".report-stats-aet-tr");
  let petTr = $(".report-stats-pet-tr");
  let oftmTr = $(".report-stats-oft-m-tr");
  let oftvTr = $(".report-stats-oft-v-tr");
  let oftpTr = $(".report-stats-oft-p-tr");

  appendTablejQuery(aetTr, aetCompleteArr);
  appendTablejQuery(petTr, petCompleteArr);
  appendTablejQuery(oftmTr, oftmCompleteArr);
  appendTablejQuery(oftvTr, oftvCompleteArr);
  appendTablejQuery(oftpTr, oftpCompleteArr);


  $("#report-target-interval-count").text(totalTSIntervals);
  $("#report-random-interval-count").text(totalRPIntervals);

};

const statsTableCountPercent = function(data) {
  // console.log("generateStatsTableData");
  // console.log(data);

  let dataObject = data.observations;

  let numOfIntervals = 0;

  let randomPeerCount = [0, 0, 0, 0, 0];
  let targetStudentCount = [0, 0, 0, 0, 0];

  let aetRPCount = 0;
  let petRPCount = 0;
  let oftmRPCount = 0;
  let oftvRPCount = 0;
  let oftpRPCount = 0;

  let aetTSCount = 0;
  let petTSCount = 0;
  let oftmTSCount = 0;
  let oftvTSCount = 0;
  let oftpTSCount = 0;

  for (let key in dataObject) {

    let obsNumVal = dataObject[key].obs_num;

    if (numOfIntervals <= obsNumVal ) {
      numOfIntervals = obsNumVal;
    }

    let isRandomPeerInt = (obsNumVal % 5 === 0);

    let aetVal = dataObject[key].aet;
    let petVal = dataObject[key].pet;
    let oftmVal = dataObject[key].oft_m;
    let oftvVal = dataObject[key].oft_v;
    let oftpVal = dataObject[key].oft_p;

    if ( aetVal ) {
      if ( isRandomPeerInt ) {
        aetRPCount += 1;
      } else {
        aetTSCount += 1;
      }
    }

    if ( petVal ) {
      if ( isRandomPeerInt ) {
        petRPCount += 1;
      } else {
        petTSCount += 1;
      }
    }

    if ( oftmVal ) {
      if ( isRandomPeerInt ) {
        oftmRPCount += 1;
      } else {
        oftmTSCount += 1;
      }
    }

    if ( oftvVal ) {
      if ( isRandomPeerInt ) {
        oftvRPCount += 1;
      } else {
        oftvTSCount += 1;
      }
    }

    if ( oftpVal ) {
      if ( isRandomPeerInt ) {
        oftpRPCount += 1;
      } else {
        oftpTSCount += 1;
      }
    }
  }

  let finalRPCountArr = convertToDataArray(aetRPCount, petRPCount, oftmRPCount, oftvRPCount, oftpRPCount);
  let finalTSCountArr = convertToDataArray(aetTSCount, petTSCount, oftmTSCount, oftvTSCount, oftpTSCount);

  let totalRPIntervals = Math.floor(numOfIntervals/5);
  let totalTSIntervals = numOfIntervals - totalRPIntervals;

  let finalRPPercentArr = calculateTablePercentage(finalRPCountArr, totalRPIntervals);
  let finalTSPercentArr = calculateTablePercentage(finalTSCountArr, totalTSIntervals);

  generateStatsTable(finalTSCountArr, finalTSPercentArr, finalRPCountArr, finalRPPercentArr, totalTSIntervals, totalRPIntervals);
};

module.exports = {
  statsTableCountPercent,
};
