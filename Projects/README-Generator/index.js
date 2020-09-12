const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { type } = require("os");
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
    name: "GitHub",
    type: "input",
    message: "What is your GitHub username?",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
