const inquirer= require("inquirer");
const fs = require("fs");
//generated README needs to include one badge specific to the README
// array of questions for user
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your README?",
        name: "title"
    },
    {
        type: "input",
        message: "What would you like to put into the description of your README?",
        name: "description"
      },
      {
          //when clicked they need to take user to that section of the README
        type: "checkbox",
        message: "what would you like to include in the table of contents?",
        name: "contents",
        choices: ["[description](#description)", "[how to contribute](#how to contribute)", "[insitillation](#instillation)", "[how to use](#how to use)", "[testing](#testing)"]
      },
      {
        type: "input",
        message: "What are the steps required for installation?",
        name: "installation"
      },
      {
        type: "input",
        message: "What are the instructions on how to use this?",
        name: "usage"
      },
      {
          //needs to generate a badge for that liscense as well as a brief description of it 
        type: "list",
        message: "What liscence is this under?",
        name: "liscence",
        choices: [
            `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
             "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
              "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
               "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"]
      },
      {
        type: "input",
        message: "how can people contribute?",
        name: "contribution"
      },
      {
        type: "input",
        message: "What tests have you written for this README?",
        name: "tests"
      },
      {
        type: "input",
        message: "Where can people go to ask questions?",
        name: "questions"
      },
      {
          //adds github username to the "questions" section with link to Github profile 
        type: "input",
        message: "What is your github username?",
        name: "github"
      },
      {
        //adds email to the "questions" section 
      type: "input",
      message: "What is your email?",
      name: "email"
    },

]).then(function(response) {
    const title = response.title;
    const description = response.description;
    const contents = response.contents;
    const installation = response.installation;
    const usage = response.usage;
    const liscence = response.liscence;
    const contribution = response.contribution;
    const test = response.tests;
    const questions = response.questions;
    const github = response.github;
    const email = response.email;
    const markDown = 
   `## ${title}
==========
    
  ${liscence}
    
  ## table of contents 
===================
    
  ${contents} 
  

  ## description: 
==============
  ${description} 
    
    
  ## how to contribute:
====================
  ${contribution} 
    
  ## questions?
============
  Please check out: ${questions}
  Or you can reach to me on Github here: ${github}
  Im also available via email here: ${email} 
    
    
  ## installation 
==============
    
  ${installation} 
    
  ## how to use 
============
    
  ${usage}
    
  ## testing 
========
    
  ${test}`; 


// function to write README file
fs.writeFile("README.MD", markDown, function(err) {
        
    if (err) {
      return console.log(err);
    }
})

})

// function to initialize program
function init() {

}

// function call to initialize program
init();
