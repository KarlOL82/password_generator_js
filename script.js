

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
} 

if (Number.isNaN(passwordLength)) {
  alert("Invalid entry. Please choose a number between 8 and 128")
  
return; }


var specialCharacter = confirm("Click OK to include special characters");

var numericCharacter = confirm("Click ok to include numbers 0-9");

var lowerCharacter = confirm("Click ok to include lower case letters");

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

if (lowerCharacter) {
  userCharacter = userCharacter.concat(lower)
  resultArray.push(lower[Math.floor(Math.random()*lower.length)])
}

if (upperCharacter) {
  userCharacter = userCharacter.concat(upper)
  resultArray.push(upper[Math.floor(Math.random()*upper.length)])
}


var remainingCharacters = passwordLength - resultArray.length

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


