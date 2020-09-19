const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

class GatherInfo {
  start() {
    // Go to manager inquire here

    this.currentEmployee = new Employee();

    this.askForName();
  }

  askForName() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "employeeName",
          message: "Employee name:",
        },
      ])
      .then((val) => {
        this.currentEmployee.name = val.employeeName;
        this.askForID();
      });
  }

  askForID() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "employeeID",
          message: "Employee ID:",
        },
      ])
      .then((val) => {
        this.currentEmployee.id = val.employeeID;
        this.askForEmail();
      });
  }

  askForEmail() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "employeeEmail",
          message: "Employee Email:",
        },
      ])
      .then((val) => {
        this.currentEmployee.email = val.employeeEmail;
        this.askForRole();
      });
  }

  // Prompts the user for a employee type
  askForRole() {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "employee",
          message: "Employee type:",
          choices: ["Manager", "Engineer", "Intern"],
        },
      ])
      .then((val) => {
        if (val.employee == "Engineer") {
          this.currentEmployee.role = "Engineer";
          this.askForGitHub();
        } else if (val.employee == "Intern") {
          this.currentEmployee.role = "Intern";
          this.askForSchool();
        } else {
          this.currentEmployee.role = "Manager";
          this.AskForNumber();
        }
        this.askIfMore();
      });
  }

  askForSchool() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "School",
          message: "School:",
        },
      ])
      .then((val) => {
        this.currentEmployee.school = val.School();
        this.askIfMore();
      });
  }

  askForGitHub() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "GitHub",
          message: "GitHub Username:",
        },
      ])
      .then((val) => {
        this.currentEmployee.github = val.GitHub();
        this.askIfMore();
      });
  }

  // ask user if there are more employees to add
  askIfMore() {
    console.log(this.currentEmployee.name);
    console.log(this.currentEmployee.id);
    console.log(this.currentEmployee.email);
    console.log(this.currentEmployee.role);

    return inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Are there any more employees?",
        },
      ])
      .then((val) => {
        if (val.choice) {
          this.askForName();
        } else {
          // render results here
          this.quit();
        }
      });
  }

  // Logs goodbye and exits the node app, then exits process within your terminal
  quit() {
    console.log("\nGoodbye!");
    process.exit(0);
  }
}

const gatherInfo = new GatherInfo();

gatherInfo.start();

module.exports = gatherInfo;
