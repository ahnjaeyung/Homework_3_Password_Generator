// Assignment Code
var generateBtn = document.querySelector("#generate");

lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // lowercase alphabet characters
upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] // uppercase alphabet characters
num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // numerical characters
spec = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ":", ";", "'", '"', ",", "<", ".", ">", "/", "?"]; // special characters

var pwLength; // desired password length
var pwUpper; // desire uppercase letters?
var pwLower; // desire lowercase letters?
var pwNum; // desire numbers?
var pwSpec; // desire special characters?
var options; // user's password criteria
var pass = [];

// Write password to the #password input
// function getOptions ()
function writePassword() {
  //console.log("testing"); 
  var password = generatePassword(); //write generatePassword function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  var pwLength = prompt("Please enter your desired character length for password.");
  if (!(pwLength >=8 && pwLength <= 128)) {
    alert("Please enter a valid character length");
  } else {
    pwUpper = confirm("Include uppercase letters?");
    pwLower = confirm("Include lowercase letters?");
    pwNum = confirm("Include numbers?");
    pwSpec = confirm("Include special characters?");
  };

  if (!pwUpper && !pwLower && !pwNum && !pwSpec) {
    options = alert ("Please pick atleast one password criteria.")
  } else if (pwUpper && pwLower && pwNum && pwSpec) {
    options = upperAlpha.concat(lowerAlpha, num, spec);
  } else if (pwUpper && pwLower && pwNum) {
    options = upperAlpha.concat(lower, num);
  } else if (pwUpper && pwLower && pwSpec) {
    options = upperAlpha.concat(lowerAlpha, spec);
  } else if (pwUpper && pwNum && pwSpec) {
    options = upperAlpha.concat(num, spec);
  } else if (pwLower && pwNum && pwSpec) {
    options = lowerAlpha.concat(num, spec);
  } else if (pwUpper && pwLower) {
    options = upperAlpha.concat(lowerAlpha);
  } else if (pwUpper && pwNum) {
    options = upperAlpha.concat(num);
  } else if (pwUpper && pwSpec) {
    options = upperAlpha.concat(spec)
  } else if (pwLower && pwNum) {
    options = lowerAlpha.concat(num);
  } else if (pwLower && pwSpec) {
    options = lowerAlpha.concat(spec);
  } else if (pwNum && pwSpec) {
    options = num.concat(spec);
  } else if (pwUpper) {
    options = upperAlpha;
  } else if (pwLower) {
    options = lowerAlpha;
  } else if (pwNum) {
    options = num;
  } else if (pwSpec) {
    options = spec;
  }

  for (var i = 0; i < pwLength; i++) {
    var chooseChar = options[Math.floor(Math.random() * options.length)];
    pass.push(chooseChar);
  }

  var passwordText = pass.join("");
  return passwordText;

  
  //add prompt for userInput for num of char in password
    // 8<=num<=128
  //userInput confirmation for numeric, lowercase, uppercase, special (separately)
    //save those confirmations in separate variable
  //store all the values in form of arrays
    //var numeric = [0,1,2,3...]
  //based on user confirmation, pick the correct arrays and concatenate them and store that concat array in new variable
  //loop num times
    //generate random num for concat array and grab the item
    //push that item in new password array 
  //return new password;
  // return "hello"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
