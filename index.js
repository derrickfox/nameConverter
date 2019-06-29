convertExcel = require("excel-as-json").processFile;
convertExcel("originalExcelFile.xlsx", "originalJSON.json");
var originalJSON = require("./originalJSON.json");
convertExcel("newList.xlsx", "newJSON.json");
var newJSON = require("./newJSON.json");
var _ = require("lodash");

var testProject = {
  "Report Title":
    "Developing inhibitors for PIP4Kgamma for Huntington's disease",
  "NIH Project ID": "",
  "ZIA ID Number": "TR000207-04",
  "NCATS Division": "",
  "2018 Project Status ": "Active",
  "2019 Project Status ": "",
  "Lead Investigators":
    "Yu-Shan Cheng (DPCI, NCATS)\nXin Hu, PhD (DPCI, NCATS)\nRuili Huang (DPCI, NCATS)\nWenwei Huang (DPCI, NCATS)\nMikhail Itkin (DPCI, NCATS)\nCarleen Klumpp (DPCI, NCATS)\nMadhu A Lal (DPCI, NCATS)\nBilly Lu (DPCI, NCATS)\nSamuel Gamal Michael (DPCI, NCATS)\nKhalida Shamim (DPCI, NCATS)\nNadejda V Slepushkina (DPCI, NCATS)\nSteven Titus (DPCI, NCATS)\nJennifer Wichterman (DPCI, NCATS)\nMiao Xu, MD, PhD (DPCI, NCATS)\nShu Yang, PhD (DPCI, NCATS)\n",
  "Supervisor of Record": "Anton Simeonov (DPCI, NCATS)\n",
  "NCATS Team Members":
    "Bolormaa Baljinnyam (DPCI, NCATS)\nMark James Henderson, PhD (DPCI, NCATS)\nSamarjit Patnaik (DPCI, NCATS)\n",
  "Intramural Collaborators (Affiliation)": "none indicated",
  "Extramural Collaborators (Affiliation)":
    "Juan Botas Baylor College of Medicine\nLois Weisman University of Michigan\n",
  "Does project use human cells, human subjects or human tissues?":
    "Neither human cells nor tissues\n",
  Keywords: "Small molecule; HTS; Screening; HttpolQ",
  "Distinguishing Keyword": "",
  "Goals and Objectives":
    "Using a cell-based assay to search for compounds that lower pathogenic mutant huntingtin protein (mHtt) huntingtin expression, the project team has identified a class of compounds that protect cells via selective inhibition of a lipid kinase, PIP4K. The team is further developing assays in order to study the ability of these compounds to inhibit this lipid kinase and their impact on autophagy and huntingtin protein.",
  Summary:
    "During this period, the project team has further characterized the previously developed lead molecules of interest, and shown that inhibition of PIP4K by a small molecule inhibitor or silencing leads to change in the equilibrium of phosphatidyl ionosotides that increases autophagy and reduce mutant huntingtin protein in human patient fibroblasts and aggregates in neurons. In a Huntington Drosophila model silencing the gene for PIP4K leads to a recovery of motor performance and retinal degeneration, caused by the mutant huntingtin protein. This suggests that PIP4K is a novel pharmacological target for neurodegenerative diseases such as Huntington disease.",
  "Publications generated during the last reporting period":
    "1. Al-Ramahi I, Panapakkam Giridharan SS, Chen YC, Patnaik S, Safren N, Hasegawa J, de Haro M, Wagner Gee AK, Titus SA, Jeong H, Clarke J, Krainc D, Zheng W, Irvine RF, Barmada S, Ferrer M, Southall N, Weisman LS, Botas J, Marugan JJ (2017). Inhibition of PIP4Kγ ameliorates the pathological effects of mutant huntingtin protein. Elife 6. https://doi.org/10.7554/eLife.29123"
};

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
      var fullnameLeadInvestigatorArray = fullnameLeadInvestigator.split(" ");
      var fullFormattedLeadInvestigatorName = fullnameLeadInvestigatorArray[1] + ", " + fullnameLeadInvestigatorArray[0];
      formatedTeamMembersArray.push(fullFormattedLeadInvestigatorName);
    }
  });

  var thisProjectLeadInvestigtors = [];
  formatedTeamMembersArray.map(name => {
    var stuff = name.replace(',,', ',');
    thisProjectLeadInvestigtors.push(stuff);
  });
}
console.log("thisProjectLeadInvestigtors", thisProjectLeadInvestigtors);

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
      var fullFormattedSupervisorName = fullnameSupervisorArray[1] + ", " + fullnameSupervisorArray[0];
      formatedSupervisorArray.push(fullFormattedSupervisorName);
    }
  });

  var thisProjectSupervisor = [];
  formatedSupervisorArray.map(name => {
    var stuff = name.replace(',,', ',');
    thisProjectSupervisor.push(stuff);
  });
}
console.log("thisProjectSupervisor", thisProjectSupervisor);

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
      var fullFormattedTeamMembersName = fullnameTeamMembersArray[1] + ", " + fullnameTeamMembersArray[0];
      formatedTeamMembersArray.push(fullFormattedTeamMembersName);
    }
  });

  var thisProjectTeamMembers = [];
  formatedTeamMembersArray.map(name => {
    var stuff = name.replace(',,', ',');
    thisProjectTeamMembers.push(stuff);
  });
}
console.log("thisProjectTeamMembers", thisProjectTeamMembers);

// Intramural Collaborators (Affiliation)
var formatedIntCollbsArray = [];
if (testProject["Intramural Collaborators (Affiliation)"]) {
  var rawIntCollbsString = testProject["Intramural Collaborators (Affiliation)"];
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
      var fullFormattedIntCollbsName = fullnameIntCollbsArray[1] + ", " + fullnameIntCollbsArray[0];
      formatedIntCollbsArray.push(fullFormattedIntCollbsName);
    }
  });

  var thisProjectIntCollbs = [];
  formatedIntCollbsArray.map(name => {
    var stuff = name.replace(',,', ',');
    thisProjectIntCollbs.push(stuff);
  });
}
console.log("thisProjectIntCollbs", thisProjectIntCollbs);

// Report Title
var thisProjectReportTitle = testProject["Report Title"];
console.log('thisProjectReportTitle -> ', thisProjectReportTitle);

// NIH Project ID
var thisProjectNIHProjectID = testProject["NIH Project ID"];
console.log('thisProjectNIHProjectID -> ', thisProjectNIHProjectID);

// ZIA ID Number
var thisProjectZIAidNumber = testProject["ZIA ID Number"];
console.log('thisProjectZIAidNumber -> ', thisProjectZIAidNumber);

// NCATS Division
var thisProjectNCATSdivision = testProject["NCATS Division"];
console.log('thisProjectNCATSdivision -> ', thisProjectNCATSdivision);

// 2018 Project Status 
var thisProjects2018ProjectStatus = testProject["2018 Project Status "];
console.log('thisProjects2018ProjectStatus -> ', thisProjects2018ProjectStatus);

// 2019 Project Status 
var thisProjects2019ProjectStatus = testProject["2019 Project Status "];
console.log('thisProjects2019ProjectStatus -> ', thisProjects2019ProjectStatus);

// Does project use human cells, human subjects or human tissues?
var thisProjectsHumanCells = testProject["Does project use human cells, human subjects or human tissues?"];
console.log('thisProjectsHumanCells -> ', thisProjectsHumanCells);

// Keywords
var thisProjectsKeywords = testProject["Keywords"];
console.log('thisProjectsKeywords -> ', thisProjectsKeywords);

// Distinguishing Keyword
var thisProjectsDistinguishingKeyword = testProject["Distinguishing Keyword"];
console.log('thisProjectsDistinguishingKeyword -> ', thisProjectsDistinguishingKeyword);

// Goals and Objectives
var thisProjectsGoalsAndObjectives = testProject["Goals and Objectives"];
console.log('thisProjectsGoalsAndObjectives -> ', thisProjectsGoalsAndObjectives);

// Summary
var thisProjectsSummary = testProject["Summary"];
console.log('thisProjectsSummary -> ', thisProjectsSummary);