convertExcel = require("excel-as-json").processFile;
convertExcel("originalExcelFile.xlsx", "originalJSON.json");
var originalJSON = require("./originalJSON.json");
convertExcel("newList.xlsx", "newJSON.json");
var newJSON = require("./newJSON.json");
var _ = require("lodash");

var ziaIDsOfLeaderErrors = [];
var ziaIDsOfNCATSteamErrors = [];

originalJSON.forEach(function(element, index) {
  if (element["ZIA ID Number"] && newJSON[index]) {
    doLeadersMatch(element, newJSON[index]);
  }
});

function doLeadersMatch(firstProject, secondProject) {
  var firstProjectLeadsString = firstProject['Lead Investigators'];
  var secondProjectLeadsString = secondProject['Lead Investigators'];
  if(firstProjectLeadsString && secondProjectLeadsString) {
    var firstLeadsArray = stringToArray(firstProjectLeadsString);
    var secondLeadsArray = stringToArray(secondProjectLeadsString);
    createNCATSteamArray(firstLeadsArray);
  }
}

function getLeader(project) {}

function createNCATSteamArray(unfilteredStrings) {
  var tempArray = [];
  unfilteredStrings.forEach(function(element, index){
    if(index === 0){
      tempArray.push(element);
    }
    if(index === 1){
      tempArray.push(element);
    }
    if(index === 2){
      tempArray.push(element);
    }
  });
  console.log(tempArray);
}

function stringToArray(string) {
  var nameArray = string.split("(");
  return nameArray;
}

function getNCATSteamMembers(project) {}

function findNumberofLeaders(projectLeadersArray) {
}

function findNumberOfWordsInName(name) {}

function doTeamMembersMatch(firstProject, secondProject) {}

function formatOneLine(singleLine) {}

function formatParagraph(paragraph) {}

function format2Names(name) {}

function format3Names(name) {}

function format4Names(name) {}

function format5Names(name) {}
