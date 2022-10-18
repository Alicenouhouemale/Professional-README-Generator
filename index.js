// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      // Adding title
      type: "input",
      name: "title",
      message: "What is your project title?",
    },

    {
      type: "input",
      name: "description",
      message: "How do you describe your project functionalities?",
    },

    {
      type: "input",
      name: "installation",
      message: "What are the installation instruction for your project?",
    },

    {
      type: "input",
      name: "usage",
      message: "What is the usage information for your project?",
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
      name: "Questions",
      message: "What are your questions?",
    },
  ])

  .then((data) => {
    console.log(data);
    const {
      title,
      description,
      installation,
      usage,
      license,
      contribution,
      tests,
      questions,
    } = data;
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  // inquirer.prompt(questions).then((answers) => {
  //   writeToFile("README.md", generateMarkdown({ ...answers }));
  // });
}

// Function call to initialize app
init();
