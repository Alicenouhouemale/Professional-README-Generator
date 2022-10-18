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
      message: "what is your project title?",
    },

    {
      type: "input",
      name: "description",
      message: "how do you describe your project functionalities?",
    },
    {
      // Adding title
      type: "input",
      name: "table of contents",
      message: "what are your table contents?",
    },

    {
      type: "input",
      name: "installation",
      message: "what is your installation?",
    },

    {
      type: "input",
      name: "usage",
      message: "what is your usage?",
    },

    {
      type: "list",
      name: "license",
      message: "what license would you like?",
      choices: ["MIT", "ISC", "unlicense"],
    },

    {
      type: "input",
      name: "contribution",
      message: "what is your contribution?",
    },

    {
      type: "input",
      name: "test",
      message: "What command line would like to use to run the test?",
    },

    {
      type: "input",
      name: "Questions",
      message: "what are your questions?",
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
