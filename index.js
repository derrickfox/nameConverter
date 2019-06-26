convertExcel = require("excel-as-json").processFile;
convertExcel("originalExcelFile.xlsx", "originalJSON.json");
var originalJSON = require("./originalJSON.json");
convertExcel("newList.xlsx", "newJSON.json");
var newJSON = require("./newJSON.json");
var _ = require("lodash");

// Match projects by their ZIA numbers
for(var oldIndex = 0; oldIndex < originalJSON.length; oldIndex++){
  for(var newIndex = 0; newIndex < newJSON.length; newIndex++){
    if(originalJSON[oldIndex]['ZIA ID Number'] === newJSON[newIndex]['ZIA ID Number']){
      formatOneLine(newJSON[newIndex]);
    }
  }
}

function doTeamMembersMatch(firstProject, secondProject) {

}

function doesLeaderMatch(firstProject, secondProject) {

}

function formatOneLine(singleLine) {

}

function formatParagraph(paragraph) {

}

function format2Names(name) {

}

function format3Names(name) {
  
}

function format4Names(name) {
  
}

function format5Names(name) {
  
}
