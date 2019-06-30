convertExcel = require("excel-as-json").processFile;
convertExcel("originalExcelFile.xlsx", "originalJSON.json");
var originalJSON = require("./originalJSON.json");
convertExcel("newList.xlsx", "newJSON.json");
var _ = require("lodash");

var formatedJSONresult = [];

for (var i = 0; i < originalJSON.length; i++) {
  var testProject = originalJSON[i];
  if (testProject["Report Title"] !== "") {
    // Lead Investigators
    var formatedTeamMembersArray = [];
    if (testProject["Lead Investigators"]) {
      var rawLeadInvestigatorsString = testProject["Lead Investigators"];
      var preFormattedLeadInvestigatorsArray = [];
      var postFormattedLeadInvestigatorsArray = [];

      rawLeadInvestigatorsString = rawLeadInvestigatorsString.split("\n");
      rawLeadInvestigatorsString.map(element => {
        if (element) {
          preFormattedLeadInvestigatorsArray.push(element);
        }
      });

      preFormattedLeadInvestigatorsArray.map(element => {
        var tempLeadInvestigatorString = element.match(/([^\(]+)/);
        postFormattedLeadInvestigatorsArray.push(tempLeadInvestigatorString[0]);
      });

      postFormattedLeadInvestigatorsArray.map(element => {
        var fullnameLeadInvestigator = element;
        if (fullnameLeadInvestigator) {
          var fullnameLeadInvestigatorArray = fullnameLeadInvestigator.split(
            " "
          );
          var fullFormattedLeadInvestigatorName =
            fullnameLeadInvestigatorArray[1] +
            ", " +
            fullnameLeadInvestigatorArray[0];
          formatedTeamMembersArray.push(fullFormattedLeadInvestigatorName);
        }
      });

      var thisProjectLeadInvestigtors = [];
      formatedTeamMembersArray.map(name => {
        var stuff = name.replace(",,", ",");
        thisProjectLeadInvestigtors.push(stuff);
      });
    }
    // console.log("thisProjectLeadInvestigtors", thisProjectLeadInvestigtors);

    // Supervisor of Record
    var formatedSupervisorArray = [];
    if (testProject["Supervisor of Record"]) {
      var rawSupervisorString = testProject["Supervisor of Record"];
      var preFormattedSupervisorArray = [];
      var postFormattedSupervisorArray = [];

      rawSupervisorString = rawSupervisorString.split("\n");
      rawSupervisorString.map(element => {
        if (element) {
          preFormattedSupervisorArray.push(element);
        }
      });

      preFormattedSupervisorArray.map(element => {
        var tempSupervisorString = element.match(/([^\(]+)/);
        postFormattedSupervisorArray.push(tempSupervisorString[0]);
      });

      postFormattedSupervisorArray.map(element => {
        var fullnameSupervisor = element;
        if (fullnameSupervisor) {
          var fullnameSupervisorArray = fullnameSupervisor.split(" ");
          var fullFormattedSupervisorName =
            fullnameSupervisorArray[1] + ", " + fullnameSupervisorArray[0];
          formatedSupervisorArray.push(fullFormattedSupervisorName);
        }
      });

      var thisProjectSupervisor = [];
      formatedSupervisorArray.map(name => {
        var stuff = name.replace(",,", ",");
        thisProjectSupervisor.push(stuff);
      });
    }
    // console.log("thisProjectSupervisor", thisProjectSupervisor);

    // NCATS Team Members
    var formatedTeamMembersArray = [];
    if (testProject["NCATS Team Members"]) {
      var rawTeamMembersString = testProject["NCATS Team Members"];
      var preFormattedTeamMembersArray = [];
      var postFormattedTeamMembersArray = [];

      rawTeamMembersString = rawTeamMembersString.split("\n");
      rawTeamMembersString.map(element => {
        if (element) {
          preFormattedTeamMembersArray.push(element);
        }
      });

      preFormattedTeamMembersArray.map(element => {
        var tempTeamMembersString = element.match(/([^\(]+)/);
        postFormattedTeamMembersArray.push(tempTeamMembersString[0]);
      });

      postFormattedTeamMembersArray.map(element => {
        var fullnameTeamMember = element;
        if (fullnameTeamMember) {
          var fullnameTeamMembersArray = fullnameTeamMember.split(" ");
          var fullFormattedTeamMembersName =
            fullnameTeamMembersArray[1] + ", " + fullnameTeamMembersArray[0];
          formatedTeamMembersArray.push(fullFormattedTeamMembersName);
        }
      });

      var thisProjectTeamMembers = [];
      formatedTeamMembersArray.map(name => {
        var stuff = name.replace(",,", ",");
        thisProjectTeamMembers.push(stuff);
      });
    }
    // console.log("thisProjectTeamMembers", thisProjectTeamMembers);

    // Intramural Collaborators (Affiliation)
    var formatedIntCollbsArray = [];
    if (testProject["Intramural Collaborators (Affiliation)"]) {
      var rawIntCollbsString =
        testProject["Intramural Collaborators (Affiliation)"];
      var preFormattedIntCollbsArray = [];
      var postFormattedIntCollbsArray = [];

      rawIntCollbsString = rawIntCollbsString.split("\n");
      rawIntCollbsString.map(element => {
        if (element) {
          preFormattedIntCollbsArray.push(element);
        }
      });

      preFormattedIntCollbsArray.map(element => {
        var tempIntCollbsString = element.match(/([^\(]+)/);
        postFormattedIntCollbsArray.push(tempIntCollbsString[0]);
      });

      postFormattedIntCollbsArray.map(element => {
        var fullnameIntCollbs = element;
        if (fullnameIntCollbs) {
          var fullnameIntCollbsArray = fullnameIntCollbs.split(" ");
          var fullFormattedIntCollbsName =
            fullnameIntCollbsArray[1] + ", " + fullnameIntCollbsArray[0];
          formatedIntCollbsArray.push(fullFormattedIntCollbsName);
        }
      });

      var thisProjectIntCollbs = [];
      formatedIntCollbsArray.map(name => {
        var stuff = name.replace(",,", ",");
        thisProjectIntCollbs.push(stuff);
      });
    }
    // console.log("thisProjectIntCollbs", thisProjectIntCollbs);

    // Extramural Collaborators (Affiliation)
    var thisProjectExtCollbs = testProject["Extramural Collaborators (Affiliation)"];
    // console.log("thisProjectExtCollbs -> ", thisProjectExtCollbs);

    // Report Title
    var thisProjectReportTitle = testProject["Report Title"];
    // console.log("thisProjectReportTitle -> ", thisProjectReportTitle);

    // NIH Project ID
    var thisProjectNIHProjectID = testProject["NIH Project ID"];
    // console.log("thisProjectNIHProjectID -> ", thisProjectNIHProjectID);

    // ZIA ID Number
    var thisProjectZIAidNumber = testProject["ZIA ID Number"];
    // console.log("thisProjectZIAidNumber -> ", thisProjectZIAidNumber);

    // NCATS Division
    var thisProjectNCATSdivision = testProject["NCATS Division"];
    // console.log("thisProjectNCATSdivision -> ", thisProjectNCATSdivision);

    // 2018 Project Status
    var thisProjects2018ProjectStatus = testProject["2018 Project Status "];
    // console.log(
    //   "thisProjects2018ProjectStatus -> ",
    //   thisProjects2018ProjectStatus
    // );

    // 2019 Project Status
    var thisProjects2019ProjectStatus = testProject["2019 Project Status "];
    // console.log(
    //   "thisProjects2019ProjectStatus -> ",
    //   thisProjects2019ProjectStatus
    // );

    // Does project use human cells, human subjects or human tissues?
    var thisProjectsHumanCells =
      testProject[
        "Does project use human cells, human subjects or human tissues?"
      ];
    // console.log("thisProjectsHumanCells -> ", thisProjectsHumanCells);

    // Keywords
    var thisProjectsKeywords = testProject["Keywords"];
    // console.log("thisProjectsKeywords -> ", thisProjectsKeywords);

    // Distinguishing Keyword
    var thisProjectsDistinguishingKeyword =
      testProject["Distinguishing Keyword"];
    // console.log(
    //   "thisProjectsDistinguishingKeyword -> ",
    //   thisProjectsDistinguishingKeyword
    // );

    // Goals and Objectives
    var thisProjectsGoalsAndObjectives = testProject["Goals and Objectives"];
    // console.log(
    //   "thisProjectsGoalsAndObjectives -> ",
    //   thisProjectsGoalsAndObjectives
    // );

    // Summary
    var thisProjectsSummary = testProject["Summary"];
    // console.log("thisProjectsSummary -> ", thisProjectsSummary);
  }
  var formatedProject = {
    "Report Title": thisProjectReportTitle,
    "NIH Project ID": thisProjectNIHProjectID,
    "ZIA ID Number": thisProjectZIAidNumber,
    "NCATS Division": thisProjectNCATSdivision,
    "2018 Project Status ": thisProjects2018ProjectStatus,
    "2019 Project Status ": thisProjects2019ProjectStatus,
    "Lead Investigators": thisProjectLeadInvestigtors,
    "Supervisor of Record": thisProjectSupervisor,
    "NCATS Team Members": thisProjectTeamMembers,
    "Intramural Collaborators (Affiliation)": thisProjectIntCollbs,
    "Extramural Collaborators (Affiliation)": thisProjectExtCollbs,
    "Does project use human cells, human subjects or human tissues?": thisProjectsHumanCells,
    "Keywords": thisProjectsKeywords,
    "Distinguishing Keyword": thisProjectsDistinguishingKeyword,
    "Goals and Objectives": thisProjectsGoalsAndObjectives,
    "Summary": thisProjectsSummary
  }
  // console.log('formatedProject -> ', formatedProject);
  formatedJSONresult.push(formatedProject);
}
console.log('formatedJSONresult -> ', formatedJSONresult);
var superString = JSON.stringify(formatedJSONresult);
var fs = require('fs');
// fs.writeFile("thing.json", superString);
fs.writeFile('thing.json', superString, function(err, result) {
  if(err) console.log('error', err);
});