// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    // Adding title
    type: "input",
    name: "title",
    message: "What is your project title?",
  },

  {
    type: "input",
    name: "description",
    message: "What is your project description?",
  },

  {
    type: "input",
    name: "installation",
    message: "What is your project installation?",
  },

  {
    type: "input",
    name: "usage",
    message: "What is your project usage?",
  },

  {
    type: "list",
    name: "license",
    message: "What is the license of your project?",
    choices: ["MIT", "ISC", "unlicense"],
  },

  {
    type: "input",
    name: "contribution",
    message: "What is your contribution?",
  },

  {
    type: "input",
    name: "test",
    message: "What are the test instruction for your project?",
  },

  {
    type: "input",
    name: "github",
    message: "What your github username?",
  },

  {
    type: "input",
    name: "email",
    message: "What your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README.md", generateMarkdown({ ...answers }));
    console.log("readme generated");
  });
}

// Function call to initialize app
init();
