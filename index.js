const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
// const writeFileAsync =
// array of questions for user
const questions = [
  {
    type: "Input",
    message: "What's the title of your project?",
    name: "Title",
  },
  {
    type: "Input",
    message: "What's the description of your project?",
    name: "Description",
  },
  {
    type: "Input",
    message: "What's in the table of contents??",
    name: "ToC",
  },
  {
    type: "Input",
    message: "What do you need to install?",
    name: "Install",
  },
  {
    type: "Input",
    message: "What's the usage of your project?",
    name: "Usage",
  },
  {
    type: "Input",
    message: "What's the licensing of your project?",
    name: "License",
  },
  {
    type: "Input",
    message: "Who's contributing to your project?",
    name: "Contribute",
  },
  {
    type: "Input",
    message: "What's your project testing?",
    name: "Test",
  },
  {
    type: "Input",
    message: "What questions are your project asking?",
    name: "Question",
  },
  {
    type: "Input",
    message: "What's your github username?",
    name: "Username",
  },
  {
    type: "Input",
    message: "What's your Email?",
    name: "Email",
  },
  //  Contributing, Tests, questions
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("readme.txt", data);
    console.log("works");
  });
}

// function call to initialize program
init();
