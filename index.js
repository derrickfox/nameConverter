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
  "Keywords": "Small molecule; HTS; Screening; HttpolQ",
  "Distinguishing Keyword": "",
  "Goals and Objectives":
    "Using a cell-based assay to search for compounds that lower pathogenic mutant huntingtin protein (mHtt) huntingtin expression, the project team has identified a class of compounds that protect cells via selective inhibition of a lipid kinase, PIP4K. The team is further developing assays in order to study the ability of these compounds to inhibit this lipid kinase and their impact on autophagy and huntingtin protein.",
  "Summary":
    "During this period, the project team has further characterized the previously developed lead molecules of interest, and shown that inhibition of PIP4K by a small molecule inhibitor or silencing leads to change in the equilibrium of phosphatidyl ionosotides that increases autophagy and reduce mutant huntingtin protein in human patient fibroblasts and aggregates in neurons. In a Huntington Drosophila model silencing the gene for PIP4K leads to a recovery of motor performance and retinal degeneration, caused by the mutant huntingtin protein. This suggests that PIP4K is a novel pharmacological target for neurodegenerative diseases such as Huntington disease.",
  "Publications generated during the last reporting period":
    "1. Al-Ramahi I, Panapakkam Giridharan SS, Chen YC, Patnaik S, Safren N, Hasegawa J, de Haro M, Wagner Gee AK, Titus SA, Jeong H, Clarke J, Krainc D, Zheng W, Irvine RF, Barmada S, Ferrer M, Southall N, Weisman LS, Botas J, Marugan JJ (2017). Inhibition of PIP4Kγ ameliorates the pathological effects of mutant huntingtin protein. Elife 6. https://doi.org/10.7554/eLife.29123"
};

var formatedNamesArray = [];

if (testProject["Lead Investigators"]) {
  var rawString = testProject["Lead Investigators"];
  var preFormattedArray = [];
  var postFormattedArray = [];

  rawString = rawString.split("\n");
  for (var i = 0; i < rawString.length; i++) {
    if (rawString[i]) {
      preFormattedArray.push(rawString[i]);
    }
  }

  for (var i = 0; i < preFormattedArray.length; i++) {
    var tempString = preFormattedArray[i].match(/([^\(]+)/);
    postFormattedArray.push(tempString[0]);
  }

  for (var i = 0; i < postFormattedArray.length; i++) {
    var fullname = postFormattedArray[i];
    if (fullname) {
      var fullNameArray = fullname.split(" ");
      var fullFormattedName = fullNameArray[1] + ", " + fullNameArray[0];
      formatedNamesArray.push(fullFormattedName);
    }
  }
  var finalArray = [];
  for (var word = 0; word < formatedNamesArray.length; word++) {
    for (var letter = 0; letter < formatedNamesArray[word].length; letter++) {
      if (formatedNamesArray[word][letter] === ",") {
        if (formatedNamesArray[word][letter + 1] === ",") {
          var tempArr = formatedNamesArray[word].split(",");
          var tempName = tempArr[2] + ', ' + tempArr[0];
          if(!_.includes(finalArray, tempName)){
            finalArray.push(tempName);
          }
        }
      }else if(formatedNamesArray[word][letter + 1] !== ",") {
        if(!_.includes(finalArray, formatedNamesArray[word])){
          finalArray.push(formatedNamesArray[word]);
        }
      }
    }
  }
}

console.log("finalArray", finalArray);
