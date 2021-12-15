// Assignment Code
var generateBtn = document.querySelector("#generate");

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // alphabet characters
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
