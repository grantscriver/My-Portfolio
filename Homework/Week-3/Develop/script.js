// Assignment Code
// This section is where I declare variables and arrays for my code
var generateBtn = document.querySelector("#generate");
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialCharacters = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// This sections prompts the user with how many characters they want for their password and which character types to include
var firstPrompt = prompt(
  "How many characters would you like your password to contain?"
);
if (firstPrompt < 8 || firstPrompt > 128) {
  alert("Password doesnt meet criteria, Please try again");
} else {
  var firstConfirm = confirm("Click ok to confirm including special charcters");
  var secondConfirm = confirm(
    "Click ok to confirm including numeric characters"
  );
  var thirdConfirm = confirm(
    "Click ok to confirm including lowercase charcters"
  );
  var fourthConfirm = confirm(
    "Click ok to confirm including uppercase charcters"
  );
}

// This seciton takes the information from the prompts and confirms then pushes that into the variable mixedCharacters

var mixedCharacters = [];
if (firstConfirm) {
  mixedCharacters.push(specialCharacters);
}
if (secondConfirm) {
  mixedCharacters.push(numbers);
}
if (thirdConfirm) {
  mixedCharacters.push(lowercase);
}
if (fourthConfirm) {
  mixedCharacters.push(uppercase);
}

writePassword();

//  This is the main function to get and print the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Get random type of character from the set of chosen types by the user
function randomtype() {
  var randomIndex = Math.floor(Math.random() * mixedCharacters.length);
  //var randomPw = randomIndex * firstPrompt;
  var randomPw = randomIndex;
  return randomPw;
}
// This function has a for loop that takes the information that has been collected from the user and generates a random character based on a random type and random element within that type.
// It will generate as many characters as the user chose in the beginning.
function generatePassword() {
  var passwordchars = "";
  var currenttype = 0;
  var lengthofcurrenttype = 0;
  var randomelement = 0;
  for (i = 1; i <= firstPrompt; i++) {
    currenttype = randomtype();
    lengthofcurrenttype = mixedCharacters[currenttype].length;
    randomelement = Math.floor(Math.random() * lengthofcurrenttype);
    passwordchars = passwordchars.concat(
      mixedCharacters[currenttype][randomelement]
    );
  }
  // This return element takes our final password and sends it back to the writepassword function
  return passwordchars;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
