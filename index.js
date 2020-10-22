const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(writeToFile);
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
    message: "Who's contributing to your project?",
    name: "Credit",
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
  {
    type: "checkbox",
    message: "What license are you using?",
    name: "License",
    choices: ["MIT", " GPLv3", " The Unlicense"],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log("error");
    }
    return console.log("FILE BEING WRITTEN");
  });
}

// function to initialize program
async function init() {
  try {
    const userResponses = await inquirer.prompt(questions);
    // Referencing API.js
    const userInfo = await api.getUser(userResponses);

    const markdown = generateMarkdown(userResponses, userInfo);

    await writeFileAsync("TEST.md", markdown);
  } catch (error) {
    console.log(error);
  }
}

// function call to initialize program
init();
