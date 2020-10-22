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
    type: "input",
    name: "Repository",
    message: "Enter the name of your repository on GitHub.",
  },
  {
    type: "Input",
    message: "What's your Email?",
    name: "Email",
  },
  {
    type: "list",
    name: "License",
    message: "Choose your license for your project.",
    // https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository
    choices: [
      "afl-3.0",
      "apache-2.0",
      "artistic-2.0",
      "bsl-1.0",
      "bsd-2-clause",
      "bsd-3-clause",
      "bsd-3-clause-clear",
      "cc",
      "cc0-1.0",
      "cc-by-4.0",
      "cc-by-sa-4.0",
      "wtfpl",
      "ecl-2.0",
      "epl-1.0",
      "epl-2.0",
      "eupl-1.1",
      "agpl-3.0",
      "gpl",
      "gpl-2.0",
      "gpl-3.0",
      "lgpl",
      "lgpl-2.1",
      "lgpl-3.0",
      "isc",
      "lppl-1.3c",
      "ms-pl",
      "mit",
      "mpl-2.0",
      "osl-3.0",
      "postgresql",
      "ofl-1.1",
      "ncsa",
      "unlicense",
      "zlib",
    ],
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
    console.log(userInfo);
    const markdown = generateMarkdown(userResponses, userInfo);

    await writeFileAsync("TEST.md", markdown);
  } catch (error) {
    console.log(error);
  }
}

// function call to initialize program
init();
