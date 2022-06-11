// What sort of data does my application need to work?

// Storing all needed characters in variables

// store 4 types of characters in variables (arrays): numbers, special characters, upper case and lower case

// what sorts of actions does my code need to complete?

// storing all needed characters in variables

//numbers
// var numbers = "1,2,3,4,5,6,7,8,9,0".split

// Generate Password
//function generatepassword () {
//function generatePassword() {

//if( true ) {

  //return "";
//}

//  }
//}

//var variableA = false;

//var variableB = false;

//var variableC = false;

//var variableD = false;

//if( !variableA &&  !variableB) {
  //return "";


//}

//var myArray = [];

//var things = [1,2,4]var things2 = [1,2,3,5];

// if "special character" is true
// combine 

//myArray = myArray.concat(things)

// if "numbers" is true:

//myarray = myArray.concat(things);
//prompt the user for their passwordLength and store it in a variable 8 to 128 characters

// prompt the user if they want special characters and store it in a variable

// validate that at least one character choice is true

// DECLARE a new empty array to store the characters we want to use

///if() {
  //return "";
//}

// randomly select characters



// validate the password length 8 to 128 characters

// If "passwordLength" >= 8 and <= 128

// POPUP BOXES js PROMPTS, ALERTS, and CONFIRM


// see@ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

//do while loop after code finished  (optional)
// 

var generateBtn = document.querySelector("#generate.btn");
var special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];





function generatePassword() {
 var passwordLength = parseInt( prompt("Choose password length. Must be 8 to 128 characters"));
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Invalid entry. Please choose between 8 and 128 characters")
 return; 
} if (Number.isNaN(passwordLength)) {
  alert("Invalid entry. Please choose a number between 8 and 128")
  
return; }


var specialCharacter = confirm("Click OK to include special characters");

var numericCharacter = confirm("click ok to include numbers 0-9");

var lowerCharacter = confirm("click ok to include lower case letters");

var upperCharacter = confirm("Click ok to include capital letters");
// Assignment Code

var resultArray = [];

var userCharacter = [];

if (specialCharacter) {
  userCharacter = userCharacter.concat(special)
  resultArray.push(special[Math.floor(Math.random()*special.length)])
}

if (numericCharacter) {
  userCharacter = userCharacter.concat(numeric)
  resultArray.push(numeric[Math.floor(Math.random()*numeric.length)])
}

var remainingChracters = passwordLength - resultArray.length

for (var i = 0; i < remainingCharacters; i++){
resultArray.push(userCharacter[Math.floor(Math.random()*userCharacter.length)])
}


return resultArray.join("")




  }




// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


