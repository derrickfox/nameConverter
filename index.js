convertExcel = require("excel-as-json").processFile;
convertExcel("originalExcelFile.xlsx", "originalJSON.json");
var originalJSON = require("./originalJSON.json");
convertExcel("newList.xlsx", "newJSON.json");
var newJSON = require("./newJSON.json");
var _ = require("lodash");

var matchedZiaArray = [];
var newZIAArrayIDs = [];
var testArr = [1, 1, 1, 2, 2, 2, 3, 4, 5];

// Match projects by their ZIA numbers
// for (var oldIndex = 0; oldIndex < originalJSON.length; oldIndex++) {
//   for (var newIndex = 0; newIndex < newJSON.length; newIndex++) {
//     if (originalJSON[oldIndex]["ZIA ID Number"] === newJSON[newIndex]["ZIA ID Number"]) {
//       // Add matched ZIA numbers to their arrays
//       // Check if the ZIA is already a part of the array
//       if(!_.includes(matchedZiaArray, (originalJSON[oldIndex]["ZIA ID Number"]))){
//         matchedZiaArray.push(originalJSON[oldIndex]["ZIA ID Number"]);
//       }

//       // newZIAArrayIDs.push(newJSON[newIndex]["ZIA ID Number"]);
//     }
//   }
// }

originalJSON.forEach(function(element, index) {
  if (element["ZIA ID Number"] && newJSON[index]) {
    doesLeaderMatch(element, newJSON[index]);
  }
});

function doTeamMembersMatch(firstProject, secondProject) {}

function doesLeaderMatch(firstProject, secondProject) {

}

function findNumberOfWordsInName(name) {}

function formatOneLine(singleLine) {}

function formatParagraph(paragraph) {}

function format2Names(name) {}

function format3Names(name) {}

function format4Names(name) {}

function format5Names(name) {}
