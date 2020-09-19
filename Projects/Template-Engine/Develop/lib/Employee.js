// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
const { askForName, askIfMore } = require("../app");

// TODO: Write code to define and export the Employee class
/* 

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'
*/

class Employee {
  constructor(employee) {
    this.name = "Bob";
    this.id = 1;
    this.email = "a@b.com";
  }
  getName() {}
  getID() {}
  getEmail() {}
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
