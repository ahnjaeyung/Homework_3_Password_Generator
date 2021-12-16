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
    options = pwUpper.concat(pwLower, pwNum, pwSpec);
  } else if (pwUpper && pwLower && pwNum) {
    options = pwUpper.concat(pwLower, pwNum);
  } else if (pwUpper && pwLower && pwSpec) {
    options = pwUpper.concat(pwLower, pwSpec);
  } else if (pwUpper && pwNum && pwSpec) {
    options = pwUpper.concat(pwNum, pwSpec);
  } else if (pwLower && pwNum && pwSpec) {
    options = pwLower.concat(pwNum, pwSpec);
  } else if (pwUpper && pwLower) {
    options = pwUpper.concat(pwLower);
  } else if (pwUpper && pwNum) {
    options = pwUpper.concat(pwNum);
  } else if (pwUpper && pwSpec) {
    options = pwUpper.concat(pwSpec)
  } else if (pwLower && pwNum) {
    options = pwLower.concat(pwNum);
  } else if (pwLower && pwSpec) {
    options = pwLower.concat(pwSpec);
  } else if (pwNum && pwSpec) {
    options = pwNum.concat(pwSpec);
  } else if (pwUpper) {
    options = pwUpper;
  } else if (pwLower) {
    options = pwLower;
  } else if (pwNum) {
    options = pwNum;
  } else if (pwSpec) {
    options = pwSpec;
  }

  
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
