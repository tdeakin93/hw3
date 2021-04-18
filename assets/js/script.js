//all variables go at top of js
// Array of special characters to be included in password
var specialChars = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCaseChars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCaseChars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
//onclick btn to generate pw
var generateBtn = document.querySelector("#generate");

// This is the main function of the code
function generatePassword() {
  let characterList = []
// enforces length perameters
  let passwordLength = prompt('How many characters would you like in your password? (Input a number between 8 - 128)');
  while (passwordLength < 8 || passwordLength > 128 ) {
    passwordLength = prompt(
      "💥💥 Try again 💥💥- Value must be between 8 and 128 characters"
    );
  }
// lets user define criteria 
  let lowerCase = confirm("Would you like Lowercase Characters in your Password?");
  let upperCase = confirm("Would you like Uppercase Characters in your Password?");
  let numeric = confirm("Would you like Numeric Characters in your Password?");
  let special = confirm("Would you like Special Characters in your Password?");
  let userArray = []
    //adds contents of individual arrays to the userArray
  if (lowerCase === true) {
    userArray.push(getRandom(lowerCaseChars));
    characterList = characterList.concat(lowerCaseChars);
  }
  if (upperCase === true) {
    userArray.push(getRandom(upperCaseChars));
    characterList = characterList.concat(upperCaseChars);
  }
  if (numeric === true) {
    userArray.push(getRandom(numericChars));
    characterList = characterList.concat(numericChars);
  }
  if (special === true) {
    userArray.push(getRandom(specialChars));
    characterList = characterList.concat(upperCaseChars);
  }
//for loop to individually add each item into the userArray
  let remainingPasswordLength = passwordLength - userArray.length;
    for (let i = 0; i <remainingPasswordLength; i++) {
      userArray.push(getRandom(characterList));
  }  
  return userArray.join("");
}
// this function randomizes the output
function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);