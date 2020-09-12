const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// array of questions for user
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "Please give a description of your project.",
  },
  {
    name: "installation",
    type: "input",
    message: "Please add any installation instructions for your projects.",
  },
  {
    name: "usage",
    type: "input",
    message: "What will your projects be used for?",
  },
  {
    name: "license",
    type: "list",
    message: "Please select a license",
    choices: ["Apache", "ISC", "MIT", "GNU GPLv3"],
  },
  {
    name: "contribution",
    type: "input",
    message: "Who is contributing to this project?",
  },
  {
    name: "test",
    type: "input",
    message: "How can someone test your project?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address?",
  },
  {
    name: "username",
    type: "input",
    message: "What is your GitHub username?",
  },
];

inquirer.prompt(questions).then((answers) => {
  fs.writeFile(
    "./Assets/README.md",
    JSON.stringify(answers, null, "  "),
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    }
  );
});
